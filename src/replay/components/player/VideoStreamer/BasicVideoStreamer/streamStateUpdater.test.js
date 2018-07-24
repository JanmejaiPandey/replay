import getStreamStateUpdater from './streamStateUpdater';
import type { PlaybackSource } from '../types';
import { PlaybackError } from '../types';

const getPropertyUpdates = (mockFn, key) =>  mockFn.mock.calls.filter(call => key in call[0]).map(call => call[0]);

const addProperties = (obj, properties) => {
  Object.entries(properties).forEach(([key, value]) => {
    obj[key] = value;
  });
};

function setup() {
  const videoElement = {};
  const onStreamStateChange = jest.fn();
  const streamerElement = {
    videoRef: {
      current: videoElement
    },
    props: {
      onStreamStateChange
    }
  };

  const streamStateUpdater = getStreamStateUpdater(streamerElement);
  streamStateUpdater.startPlaybackSession();
  addProperties(videoElement, streamStateUpdater.eventHandlers);
  
  return {
    streamStateUpdater,
    streamerElement,
    videoElement,
    onStreamStateChange,
    setProps: function(newProps) {
      addProperties(streamerElement.props, newProps)
    }
  };
}

const runStartToLoadedSequence = videoElement => {
  videoElement.onLoadStart();
  videoElement.onWaiting();
  videoElement.onLoadedMetadata();
  videoElement.onDurationChange();
};

const runStartAsPausedSequence = videoElement => {
  runStartToLoadedSequence(videoElement);
  videoElement.onCanPlay();
};

const runStartAsPlayingSequence = videoElement => {
  runStartAsPausedSequence(videoElement);
  videoElement.onPlaying();
};

const runStartAsPausedAtStartPositionSequence = videoElement => {
  runStartToLoadedSequence(videoElement);
  videoElement.onSeeking();
  videoElement.onTimeUpdate();
  videoElement.onSeeked();
  videoElement.onSeeked();
  videoElement.onCanPlay();
};

const runStartAsPlayingAtStartPositionSequence = videoElement => {
  runStartAsPausedAtStartPositionSequence(videoElement);
  videoElement.onPlaying();
};

const runBufferingWhilePlayingSequence = videoElement => {
  videoElement.onWaiting();
  videoElement.onCanPlay();
  videoElement.onPlaying();
};

const runBufferingWhilePausedSequence = videoElement => {
  videoElement.onWaiting();
  videoElement.onCanPlay();
};

const runSeekingWhilePausedSequence = videoElement => {
  videoElement.onSeeking();
  videoElement.onSeeked();
  videoElement.onCanPlay();
};

const runSeekingWhilePlayingSequence = videoElement => {
  // The video element is always paused before seeking starts.
  videoElement.paused = true;
  videoElement.onPause();
  videoElement.onSeeking();
  videoElement.onSeeked();
  videoElement.onCanPlay();
  videoElement.onPlaying();
};

const runEndSequence = videoElement => {
  videoElement.onPause();
  videoElement.onEnded();
};
  
const runChangeToPauseSequence = videoElement => {
  videoElement.paused = true;
  videoElement.onPause();
};

const runChangeToPlayingSequence = videoElement => {
  videoElement.paused = false;
  videoElement.onPlaying();
};

const runCommonPlaybackSequences = videoElement => {
  runBufferingWhilePlayingSequence(videoElement);
  runChangeToPauseSequence(videoElement);
  runBufferingWhilePausedSequence(videoElement);
  runSeekingWhilePausedSequence(videoElement);
  runChangeToPlayingSequence(videoElement);
  runSeekingWhilePlayingSequence(videoElement);
  runEndSequence(videoElement);
};

test('streamStateUpdater reports an initial state of properties.', () => {
  const { onStreamStateChange } = setup();
  expect(onStreamStateChange).toHaveBeenCalledWith({ duration: 0 });
  expect(onStreamStateChange).toHaveBeenCalledWith({ position: 0 });
  expect(onStreamStateChange).toHaveBeenCalledWith({ playMode: 'ondemand' });
  expect(onStreamStateChange).toHaveBeenCalledWith({ playState: 'inactive' });
  expect(onStreamStateChange).toHaveBeenCalledWith({ isBuffering: false });
  expect(onStreamStateChange).toHaveBeenCalledWith({ isSeeking: false });
  expect(onStreamStateChange).toHaveBeenCalledWith({ isPaused: false });
});

test('streamStateUpdater reports playMode "ondemand" and a duration when a video file source is loaded.', () => {
  const { videoElement, onStreamStateChange } = setup();
  
  videoElement.duration = 313;
  videoElement.onLoadedMetadata();
  videoElement.onDurationChange();

  const durationUpdates = getPropertyUpdates(onStreamStateChange, 'duration');
  expect(durationUpdates).toHaveLength(2);
  expect(durationUpdates[0]).toEqual({ duration: 0 });
  expect(durationUpdates[1]).toEqual({ duration: 313 });

  const playModeUpdates = getPropertyUpdates(onStreamStateChange, 'playMode');
  expect(playModeUpdates).toHaveLength(1);
  expect(playModeUpdates[0]).toEqual({ playMode: 'ondemand' });
});

test.skip('streamStateUpdater reports positions accordingly during playback.', () => {
  const { videoElement, onStreamStateChange } = setup();

  videoElement.currentTime = 121;
  videoElement.onTimeUpdate();
  videoElement.currentTime = 123;
  videoElement.onTimeUpdate();

  const positionUpdates = getPropertyUpdates(onStreamStateChange, 'position');
  expect(positionUpdates).toHaveLength(3);
});
test('streamStateUpdater reports playState for all different phases of a common playback.', () => {
  const { videoElement, onStreamStateChange } = setup();
  
  // 'inactive' | 'starting' | 'playing' | 'paused' | 'seeking' | 'buffering' | 'inactive'

  runStartAsPlayingSequence(videoElement);
  runCommonPlaybackSequences(videoElement);
  
  let updateNumber = 0;
  const playStateUpdates = getPropertyUpdates(onStreamStateChange, 'playState');
  
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'inactive' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'starting' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'playing' });
  
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'buffering' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'playing' });
  
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'paused' });
  
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'buffering' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'paused' });
  
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'seeking' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'paused' });
  
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'playing' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'paused' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'seeking' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'paused' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'playing' });

  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'paused' });
  expect(playStateUpdates[updateNumber]).toEqual({ playState: 'inactive' });
});

test('streamStateUpdater reports correct playState sequence for a playback started as paused.', () => {
  const { videoElement, onStreamStateChange, setProps } = setup();
  
  setProps({ isPaused: true });
  videoElement.paused = true;
    
  runStartAsPausedSequence(videoElement);

  // Simulating the user resuming playing.
  videoElement.paused = false;
  videoElement.onPlaying();

  let updateNumber = 0;
  const playStateUpdates = getPropertyUpdates(onStreamStateChange, 'playState');

  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'inactive' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'starting' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'paused' });

  expect(playStateUpdates[updateNumber]).toEqual({ playState: 'playing' });
  
});

test('streamStateUpdater reports correct playState sequence for a playback started on a position > 0.', () => {
  const { videoElement, onStreamStateChange, setProps } = setup();

  setProps({ source: { startPosition: 5 }});

  runStartAsPlayingAtStartPositionSequence(videoElement);

  let updateNumber = 0;
  const playStateUpdates = getPropertyUpdates(onStreamStateChange, 'playState');

  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'inactive' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'starting' });
  expect(playStateUpdates[updateNumber]).toEqual({ playState: 'playing' });
});

test('streamStateUpdater reports correct playState sequence for a playback started as paused on a position > 0.', () => {
  const { videoElement, onStreamStateChange, setProps } = setup();

  setProps({ isPaused: true, source: { startPosition: 5 }});
  videoElement.paused = true;

  runStartAsPausedAtStartPositionSequence(videoElement);

  let updateNumber = 0;
  const playStateUpdates = getPropertyUpdates(onStreamStateChange, 'playState');

  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'inactive' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'starting' });
  expect(playStateUpdates[updateNumber]).toEqual({ playState: 'paused' });
});

test('streamStateUpdater reports correct playState sequence for a playback failing after started', () => {
  const { videoElement, onStreamStateChange, setProps } = setup();

  const onPlaybackError = jest.fn();
  setProps({ onPlaybackError });
  
  runStartAsPlayingSequence(videoElement);
  
  videoElement.error = new Error('It failed.');
  videoElement.onError();

  let updateNumber = 0;
  const playStateUpdates = getPropertyUpdates(onStreamStateChange, 'playState');

  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'inactive' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'starting' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'playing' });
  expect(playStateUpdates[updateNumber]).toEqual({ playState: 'inactive' });
  
  expect(onPlaybackError.mock.calls[0][0]).toBeInstanceOf(PlaybackError);
  expect(onPlaybackError.mock.calls.length).toBe(1);
});

test('streamStateUpdater reports correct playState sequence for a playback failing on startup', () => {
  const { videoElement, onStreamStateChange, setProps } = setup();
  
  const onPlaybackError = jest.fn();
  setProps({ onPlaybackError });
  

  // Start as playing.
  runStartToLoadedSequence(videoElement);
  videoElement.error = new Error('It failed.');
  videoElement.onError();

  let updateNumber = 0;
  const playStateUpdates = getPropertyUpdates(onStreamStateChange, 'playState');

  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'inactive' });
  expect(playStateUpdates[updateNumber++]).toEqual({ playState: 'starting' });
  expect(playStateUpdates[updateNumber]).toEqual({ playState: 'inactive' });
});

test('streamStateUpdater reports true for isSeeking, isBuffering, and isPaused for the different phases of a playback.', () => {
  const { videoElement, onStreamStateChange } = setup();

  runStartAsPlayingSequence(videoElement);

  const bufferingUpdates = getPropertyUpdates(onStreamStateChange, 'isBuffering');
  let seekingUpdates = getPropertyUpdates(onStreamStateChange, 'isSeeking');
  let pausedUpdates = getPropertyUpdates(onStreamStateChange, 'isPaused');

  expect(bufferingUpdates).toHaveLength(3);
  expect(seekingUpdates).toHaveLength(1);
  expect(pausedUpdates).toHaveLength(1);
  
  expect(bufferingUpdates[0]).toEqual({ isBuffering: false });
  expect(bufferingUpdates[1]).toEqual({ isBuffering: true });
  expect(bufferingUpdates[2]).toEqual({ isBuffering: false });
  
  onStreamStateChange.mockClear();
  
  runChangeToPauseSequence(videoElement);
  runChangeToPlayingSequence(videoElement);
  
  pausedUpdates = getPropertyUpdates(onStreamStateChange, 'isPaused');
  expect(pausedUpdates).toHaveLength(2);

  expect(pausedUpdates[0]).toEqual({ isPaused: true });
  expect(pausedUpdates[1]).toEqual({ isPaused: false });

  onStreamStateChange.mockClear();

  runSeekingWhilePlayingSequence(videoElement);

  // We should expect pausing states while seeking, according to real-life behaviour in browsers.
  seekingUpdates = getPropertyUpdates(onStreamStateChange, 'isSeeking');
  pausedUpdates = getPropertyUpdates(onStreamStateChange, 'isPaused');
  expect(seekingUpdates).toHaveLength(2);
  expect(pausedUpdates).toHaveLength(2);

  expect(seekingUpdates[0]).toEqual({ isSeeking: true });
  expect(seekingUpdates[1]).toEqual({ isSeeking: false });
  
  expect(pausedUpdates[0]).toEqual({ isPaused: true });
  expect(pausedUpdates[1]).toEqual({ isPaused: false });
});

test('streamStateUpdater reports volume and mute changes.', () => {

});
test('streamStateUpdater reports bufferedAhead.', () => {

});
test('streamStateUpdater doesn\'t report bitrate property updates.', () => {

});