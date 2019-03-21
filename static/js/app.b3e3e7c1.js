(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.docz/app/db.json":function(e){e.exports={config:{title:"Replay",description:"A React video player with adaptive streaming support",menu:["Replay",{name:"Using the Replay player",menu:["Inserting Replay","Setting startup options","Controlling playback programmatically","Replay component API"]},{name:"Advanced playback",menu:["Adaptive streaming","DRM","Subtitles and audio tracks","Bitrates and adaptive quality selection"]},"Customising Replay",{name:"Architecture and patterns",menu:["Overview","Video streamers","Player controller","Connected controls","Background"]},{name:"Building a custom player",menu:["Overview","How to add new controls or overlays","How to change graphics or texts"]},{name:"Reference",menu:["Stream state properties","Settable properties","Replay component reference"]},"Controls reference","Containers/helpers reference","Generic controls reference"],ordering:"descending",version:"1.9.1",repository:"https://github.com/vimond/replay",native:!1,codeSandbox:!0,themeConfig:{showPlaygroundEditor:!0,codemirrorTheme:"dracula"},src:"./src/replay",dest:"./docs",public:"/public",base:"/replay/",hashRouter:!0,plugins:[{}],htmlContext:{head:{links:[{rel:"stylesheet",href:"https://codemirror.net/theme/dracula.css"}]}},debug:!1},entries:{"index.mdx":{name:"Replay",route:"/",order:1,id:"b866baffbcebd46120eb479e036aa9e3",filepath:"index.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/index.mdx",slug:"index",menu:null,headings:[{depth:1,slug:"replay",value:"Replay"},{depth:2,slug:"what-is-replay",value:"What is Replay?"},{depth:2,slug:"what-does-replay-aim-to-be",value:"What does Replay aim to be?"},{depth:2,slug:"features-list",value:"Features list"},{depth:3,slug:"functionality",value:"Functionality"},{depth:4,slug:"controlling-the-playback",value:"Controlling the playback"},{depth:4,slug:"exposure-of-the-playback-state-including",value:"Exposure of the playback state, including:"},{depth:4,slug:"player-ux",value:"Player UX"},{depth:4,slug:"streaming-setup",value:"Streaming setup"},{depth:3,slug:"components-library",value:"Components library"},{depth:4,slug:"buttons",value:"Buttons:"},{depth:4,slug:"sliders",value:"Sliders:"},{depth:4,slug:"selectors",value:"Selectors:"},{depth:4,slug:"other-overlays-and-widgets",value:"Other overlays and widgets:"},{depth:4,slug:"helpercontainment-components",value:"Helper/containment components:"},{depth:4,slug:"development-and-debugging-convenience-components",value:"Development and debugging convenience components"},{depth:2,slug:"streaming-technology-support",value:"Streaming technology support"},{depth:3,slug:"mpeg-dash",value:"MPEG-DASH"},{depth:3,slug:"hls",value:"HLS"},{depth:3,slug:"mp4-webm",value:"MP4, WebM"},{depth:2,slug:"what-is-replay-not",value:"What is Replay not?"}]},"docs/advanced-playback/adaptive-streaming.mdx":{name:"Adaptive streaming",route:"/advanced-playback/adaptive-streaming",menu:"Advanced playback",id:"06e53c5a06008d4a785d6538a5687eb9",filepath:"docs/advanced-playback/adaptive-streaming.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/advanced-playback/adaptive-streaming.mdx",slug:"docs-advanced-playback-adaptive-streaming",order:0,headings:[{depth:1,slug:"playing-adaptive-streams",value:"Playing adaptive streams"},{depth:2,slug:"enabling-playback-for-a-single-adaptive-streaming-technology",value:"Enabling playback for a single adaptive streaming technology"},{depth:3,slug:"hls-with-hlsjs",value:"HLS with HLS.js"},{depth:3,slug:"mpeg-dash-with-shaka-player",value:"MPEG-DASH with Shaka Player"},{depth:2,slug:"enabling-playback-for-multiple-streaming-technologies-based-on-stream-technology-resolution",value:"Enabling playback for multiple streaming technologies based on stream technology resolution"}]},"docs/advanced-playback/bitrates.mdx":{name:"Bitrates and adaptive quality selection",route:"/advanced-playback/bitrates",menu:"Advanced playback",id:"c365af933f5e69f70da7465f48b99a4e",filepath:"docs/advanced-playback/bitrates.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/advanced-playback/bitrates.mdx",slug:"docs-advanced-playback-bitrates",order:0,headings:[{depth:1,slug:"bitrates-and-adaptive-quality-selection",value:"Bitrates and adaptive quality selection"}]},"docs/advanced-playback/drm.mdx":{name:"DRM",route:"/advanced-playback/drm",menu:"Advanced playback",id:"b814e386bfe35f496316cf611aa2e468",filepath:"docs/advanced-playback/drm.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/advanced-playback/drm.mdx",slug:"docs-advanced-playback-drm",order:0,headings:[{depth:1,slug:"drm",value:"DRM"},{depth:2,slug:"video-streamer-selection-with-drm-encrypted-streams",value:"Video streamer selection with DRM encrypted streams"},{depth:2,slug:"specifying-further-license-acquisition-or-drm-details",value:"Specifying further license acquisition or DRM details"},{depth:3,slug:"headers",value:"Headers"},{depth:3,slug:"certificates",value:"Certificates"},{depth:3,slug:"fairplay-request-formats-and-content-ids",value:"FairPlay request formats and content IDs"}]},"docs/advanced-playback/text-audio-tracks.mdx":{name:"Subtitles and audio tracks",route:"/advanced-playback/audio-text-tracks",menu:"Advanced playback",id:"cfbc5babbf42e8618f26d89bf99b20ae",filepath:"docs/advanced-playback/text-audio-tracks.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/advanced-playback/text-audio-tracks.mdx",slug:"docs-advanced-playback-text-audio-tracks",order:0,headings:[{depth:2,slug:"subtitles-and-audio-tracks",value:"Subtitles and audio tracks"}]},"docs/architecture/background.mdx":{name:"Background",route:"/architecture/background",menu:"Architecture and patterns",id:"25dcf49b47885f9665cf26c55beba136",filepath:"docs/architecture/background.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/architecture/background.mdx",slug:"docs-architecture-background",order:0,headings:[{depth:1,slug:"background-the-challenges-and-requirements",value:"Background: The challenges and requirements"},{depth:2,slug:"defining-the-video-player",value:"Defining the video player"},{depth:2,slug:"goals-of-this-player-project",value:"Goals of this player project"},{depth:2,slug:"the-task-of-the-video-player-ui-consuming-and-controlling-the-video-playback-state",value:"The task of the video player UI: Consuming and controlling the video playback state"},{depth:4,slug:"examples-of-1",value:"Examples of 1):"},{depth:4,slug:"examples-of-2",value:"Examples of 2):"},{depth:4,slug:"example-of-3-operations-leading-to-state-changes",value:"Example of 3), operations leading to state changes:"},{depth:2,slug:"the-multi-faceted-and-complex-task-of-rendering-and-playing-a-video-stream",value:"The multi-faceted and complex task of rendering and playing a video stream"},{depth:1,slug:"the-main-pattern-and-principles-for-replay",value:"The main pattern and principles for Replay"},{depth:2,slug:"consistently-exposing-and-dealing-with-the-state",value:"Consistently exposing and dealing with the state"},{depth:2,slug:"discarded-implementation-alternatives",value:"Discarded implementation alternatives"},{depth:3,slug:"the-familiar-react-pattern",value:"The familiar React pattern"},{depth:3,slug:"just-passing-props-and-callbacks",value:"Just passing props and callbacks?"},{depth:2,slug:"the-player-controller-and-its-nice-react-fit",value:"The player controller and its nice React fit"}]},"docs/architecture/connected-controls.mdx":{name:"Connected controls",route:"/architecture/connected-controls",menu:"Architecture and patterns",id:"73024da5587d5b2ebf57b999fef9c997",filepath:"docs/architecture/connected-controls.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/architecture/connected-controls.mdx",slug:"docs-architecture-connected-controls",order:0,headings:[{depth:1,slug:"connected-player-controls",value:"Connected player controls"},{depth:2,slug:"generic-components-and-specialised-player-controls",value:"Generic components and specialised player controls"},{depth:2,slug:"containers-and-helpers",value:"Containers and helpers"},{depth:2,slug:"a-common-control-api-pattern",value:"A common control API pattern"},{depth:2,slug:"connecting-the-controls",value:"Connecting the controls"},{depth:3,slug:"example-toggling-pause-state-with-the-playpausebutton",value:"Example: Toggling pause state with the PlayPauseButton"}]},"docs/architecture/overview.mdx":{name:"Overview",route:"/architecture/overview",menu:"Architecture and patterns",id:"bff1c21d9b4ea846828a4b8ea7522b92",filepath:"docs/architecture/overview.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/architecture/overview.mdx",slug:"docs-architecture-overview",order:0,headings:[{depth:1,slug:"overview",value:"Overview"},{depth:2,slug:"the-holy-trinity",value:"The holy trinity"},{depth:2,slug:"data-property-flow",value:"Data (property) flow"},{depth:3,slug:"from-the-playing-stream-to-player-controls",value:"From the playing stream to player controls"},{depth:3,slug:"from-player-controls-to-the-playing-stream",value:"From player controls to the playing stream"},{depth:2,slug:"some-arrows-and-boxes",value:"Some arrows and boxes"},{depth:2,slug:"cardinality-of-components",value:"Cardinality of components"},{depth:4,slug:"video-streamer",value:"Video streamer"},{depth:4,slug:"player-controller",value:"Player controller"},{depth:4,slug:"connected-controls",value:"Connected controls"},{depth:2,slug:"technologies-and-tools-used-in-this-project",value:"Technologies and tools used in this project"},{depth:4,slug:"for-npm-package-consumers",value:"For npm package consumers"},{depth:4,slug:"for-project-contributors",value:"For project contributors"},{depth:4,slug:"some-design-principles-on-top-of-this",value:"Some design principles on top of this:"}]},"docs/architecture/player-controller.mdx":{name:"Player controller",route:"/architecture/player-controller",menu:"Architecture and patterns",id:"19813a7dc09c172dab374b12b60024a5",filepath:"docs/architecture/player-controller.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/architecture/player-controller.mdx",slug:"docs-architecture-player-controller",order:0,headings:[{depth:1,slug:"player-controller",value:"Player controller"}]},"docs/architecture/project.mdx":{name:"Project details",route:"/architecture/project",menu:"Architecture and patterns",id:"c9eaecddf65736ec2ad8260d64922f61",filepath:"docs/architecture/project.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/architecture/project.mdx",slug:"docs-architecture-project",order:0,headings:[{depth:1,slug:"project-details",value:"Project details"},{depth:2,slug:"packagejsonyarn-commands",value:"package.json/yarn commands"},{depth:4,slug:"start-dev-server-with-demo-app-for-development",value:"Start dev server with demo app for development"},{depth:4,slug:"run-flow-type-checks",value:"Run Flow type checks"},{depth:4,slug:"run-tests",value:"Run tests"},{depth:4,slug:"build-component-library-with-docs-prepared-for-productionnpm-publish",value:"Build component library with docs, prepared for production/npm publish"},{depth:4,slug:"start-x0-docs-server-for-writing-or-displaying-live-component-code-examples",value:"Start x0 docs server for writing or displaying live component code examples"},{depth:4,slug:"library-build-subtasks",value:"Library build subtasks"},{depth:4,slug:"create-react-app-legacy-commands",value:"Create-React-App legacy commands"},{depth:2,slug:"using-flow-types",value:"Using Flow types"},{depth:2,slug:"before-commit",value:"Before commit"}]},"docs/architecture/video-streamers.mdx":{name:"Video streamers",route:"/architecture/video-streamers",menu:"Architecture and patterns",id:"6c84593b05676f97d4a5b68aa905fb9b",filepath:"docs/architecture/video-streamers.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/architecture/video-streamers.mdx",slug:"docs-architecture-video-streamers",order:0,headings:[{depth:1,slug:"video-streamers",value:"Video streamers"},{depth:2,slug:"summary",value:"Summary"},{depth:3,slug:"basicvideostreamer",value:"<BasicVideoStreamer/>"},{depth:3,slug:"shakavideostreamer",value:"<ShakaVideoStreamer/>"},{depth:3,slug:"hlsjsvideostreamer",value:"<HlsjsVideoStreamer/>"},{depth:3,slug:"htmlvideostreamer",value:"<HtmlVideoStreamer/>"},{depth:3,slug:"mockvideostreamer",value:"<MockVideoStreamer/>"},{depth:2,slug:"the-video-streamer-api",value:"The video streamer API"}]},"docs/custom-player/add-controls-components.mdx":{name:"How to add new controls or overlays",route:"/custom-player/add-controls-components",menu:"Building a custom player",id:"e6c7afaeb40863b0b0fd0ce794f49976",filepath:"docs/custom-player/add-controls-components.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/custom-player/add-controls-components.mdx",slug:"docs-custom-player-add-controls-components",order:0,headings:[{depth:1,slug:"how-to-add-new-controls-or-overlays",value:"How to add new controls or overlays"},{depth:2,slug:"the-player-composer",value:"The player composer"},{depth:2,slug:"adding-a-title-overlay---step-by-step",value:"Adding a title overlay - step by step"},{depth:3,slug:"the-overlay-component",value:"The overlay component"},{depth:3,slug:"adding-it-to-the-rendered-player-ui",value:"Adding it to the rendered player UI"},{depth:3,slug:"passing-data-through-custom-props",value:"Passing data through custom props"},{depth:3,slug:"showinghiding-controls-based-on-user-activity",value:"Showing/hiding controls based on user activity"},{depth:3,slug:"connecting-the-control",value:"Connecting the control"},{depth:3,slug:"the-full-renderplayerui-method",value:"The full renderPlayerUI method"},{depth:3,slug:"composing-the-custom-player-component",value:"Composing the custom player component"},{depth:2,slug:"the-result",value:"The result"}]},"docs/custom-player/custom-strings-graphics.mdx":{name:"How to change graphics or texts",route:"/custom-player/custom-strings-graphics",menu:"Building a custom player",id:"9e589cb7048bbeaa84277fa3afa434c3",filepath:"docs/custom-player/custom-strings-graphics.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/custom-player/custom-strings-graphics.mdx",slug:"docs-custom-player-custom-strings-graphics",order:0,headings:[{depth:1,slug:"how-to-change-graphics-or-texts",value:"How to change graphics or texts"},{depth:2,slug:"the-player-composer",value:"The player composer"},{depth:2,slug:"how-are-texts-and-graphics-defined",value:"How are texts and graphics defined?"},{depth:2,slug:"replacing-the-strings-or-graphics-sets",value:"Replacing the strings or graphics sets"},{depth:2,slug:"combining-new-texts-andor-graphics-with-a-custom-ui",value:"Combining new texts and/or graphics with a custom UI"}]},"docs/custom-player/overview.mdx":{name:"Overview",route:"/custom-player/overview",menu:"Building a custom player",id:"5d6b905da46390d7af74a3fcce9b1f1e",filepath:"docs/custom-player/overview.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/custom-player/overview.mdx",slug:"docs-custom-player-overview",order:0,headings:[{depth:1,slug:"overview",value:"Overview"},{depth:2,slug:"strategies-for-customisation",value:"Strategies for customisation"},{depth:3,slug:"adding-custom-features-in-container-components-wrapping-replay",value:"Adding custom features in container components wrapping Replay"},{depth:3,slug:"replacing-text-graphics-controlsplayer-ui-through-the-player-composer",value:"Replacing text, graphics, controls/player UI through the player composer"},{depth:3,slug:"build-a-separate-player-picking-components-and-modules-independently",value:"Build a separate player picking components and modules independently"},{depth:3,slug:"forking-the-github-repo-and-modify-the-default-player",value:"Forking the GitHub repo and modify the default player"},{depth:2,slug:"the-anatomy-of-replay",value:"The anatomy of Replay"},{depth:2,slug:"custom-video-streamers",value:"Custom video streamers"}]},"docs/custom-replay/configuration.mdx":{name:"Configuration",route:"/custom-replay/configuration",menu:"Customising Replay",id:"9e576db699777b812bdb949fafd65570",filepath:"docs/custom-replay/configuration.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/custom-replay/configuration.mdx",slug:"docs-custom-replay-configuration",order:0,headings:[{depth:1,slug:"configuration",value:"Configuration"},{depth:2,slug:"configuration-system",value:"Configuration system"},{depth:2,slug:"the-base-configuration-structure",value:"The base configuration structure"},{depth:2,slug:"examples-of-overriding-the-base-configuration",value:"Examples of overriding the base configuration"},{depth:2,slug:"changing-the-class-name-prefix",value:"Changing the class name prefix"},{depth:2,slug:"includingexcluding-player-controls",value:"Including/excluding player controls"},{depth:2,slug:"video-streamer-and-third-party-player-library-configurations",value:"Video streamer and third party player library configurations"}]},"docs/custom-replay/skins-styles.mdx":{name:"Custom skins and styles",route:"/custom-replay/skins-styles",menu:"Customising Replay",id:"21cf47b5da6c990170263e52b9f5915a",filepath:"docs/custom-replay/skins-styles.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/custom-replay/skins-styles.mdx",slug:"docs-custom-replay-skins-styles",order:0,headings:[{depth:1,slug:"custom-skins-and-styles",value:"Custom skins and styles"},{depth:2,slug:"how-to-override-or-replace-the-default-replay-stylesheet",value:"How to override or replace the default Replay stylesheet"},{depth:3,slug:"overrides",value:"Overrides"},{depth:4,slug:"content-of-my-skincss",value:"Content of  my-skin.css"},{depth:3,slug:"building-a-new-stylesheet",value:"Building a new stylesheet"},{depth:2,slug:"worth-to-know-when-reading-the-domclass-names-table-in-the-controls-reference",value:"Worth to know when reading the DOM/class names table in the Controls reference"},{depth:2,slug:"skin-toggling-and-css-scoping-with-prefixed-class-names",value:"Skin toggling and CSS scoping with prefixed class names"},{depth:2,slug:"not-bem-but-rather",value:"Not  BEM , but rather..."},{depth:2,slug:"dry-and-common-rule-oriented-stylesheets",value:"DRY and common-rule oriented stylesheets"},{depth:2,slug:"css-module-organisation",value:"CSS module organisation"}]},"docs/reference/observable-stream-state.mdx":{name:"Stream state properties",route:"/reference/observable-stream-state",menu:"Reference",id:"685969f372f4f35be264989f8fa703b3",filepath:"docs/reference/observable-stream-state.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/reference/observable-stream-state.mdx",slug:"docs-reference-observable-stream-state",order:0,headings:[{depth:1,slug:"stream-state-properties-reference",value:"Stream state properties reference"}]},"docs/reference/replay-component.mdx":{name:"Replay component reference",route:"/reference/replay-component",menu:"Reference",id:"1d274380710cec9a05b306aefcf82164",filepath:"docs/reference/replay-component.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/reference/replay-component.mdx",slug:"docs-reference-replay-component",order:0,headings:[{depth:1,slug:"replay-component-reference",value:"Replay component reference"}]},"docs/reference/settable-properties.mdx":{name:"Settable properties",route:"/reference/settable-properties",menu:"Reference",id:"e8556728f53cbcae7e6fc1e3a08fc4ee",filepath:"docs/reference/settable-properties.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/reference/settable-properties.mdx",slug:"docs-reference-settable-properties",order:0,headings:[{depth:1,slug:"settable-properties-reference",value:"Settable properties reference"}]},"docs/using-replay/controlling-playback.mdx":{name:"Controlling playback programmatically",route:"/replay/controlling-playback",menu:"Using the Replay player",id:"f7b4a8845ea5c7499ac35fc0a82b9365",filepath:"docs/using-replay/controlling-playback.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/using-replay/controlling-playback.mdx",slug:"docs-using-replay-controlling-playback",order:0,headings:[{depth:1,slug:"controlling-the-playback-programmatically",value:"Controlling the playback programmatically"},{depth:2,slug:"prerequisites",value:"Prerequisites"},{depth:2,slug:"api-design",value:"API design"},{depth:3,slug:"property-updates-in-favour-of-eventsdistinct-callbacks",value:"Property updates in favour of events/distinct callbacks"},{depth:3,slug:"settable-properties-or-callable-methods",value:"Settable properties or callable methods"},{depth:2,slug:"how-to-perform-operations-on-the-playback",value:"How to perform operations on the playback"},{depth:2,slug:"how-to-observe-the-stream-playback-state",value:"How to observe the stream playback state"},{depth:2,slug:"full-example-showing-operations-on-playback-and-observations-of-the-playback-state",value:"Full example showing operations on playback, and observations of the playback state"}]},"docs/using-replay/insert.mdx":{name:"Inserting Replay",route:"/replay/insert",menu:"Using the Replay player",id:"0eaa4b30ea60268d5e167099e0061cbc",filepath:"docs/using-replay/insert.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/using-replay/insert.mdx",slug:"docs-using-replay-insert",order:0,headings:[{depth:1,slug:"inserting-replay-into-your-react-app",value:"Inserting Replay into your React app"},{depth:2,slug:"prerequisites",value:"Prerequisites"},{depth:3,slug:"requirements",value:"Requirements"},{depth:3,slug:"installing-the-replay-npm-package",value:"Installing the Replay npm package"},{depth:3,slug:"importing-dependencies",value:"Importing dependencies"},{depth:3,slug:"videostream-technology-support",value:"Video/stream technology support"},{depth:2,slug:"inserting-the-player-with-a-progressive-video-source",value:"Inserting the player with a progressive video source"}]},"docs/using-replay/replay-api.mdx":{name:"Replay component API",route:"/replay/api",menu:"Using the Replay player",id:"d8f964be97f99c7a5d266b3b5776d823",filepath:"docs/using-replay/replay-api.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/using-replay/replay-api.mdx",slug:"docs-using-replay-replay-api",order:0,headings:[{depth:1,slug:"api-reference-for-replay",value:"API reference for  <Replay/>"},{depth:2,slug:"component-props",value:"Component props"},{depth:3,slug:"source-playbacksource--null",value:"source: PlaybackSource | null"},{depth:3,slug:"texttracks-arraysourcetrack",value:"textTracks: Array<SourceTrack>"},{depth:3,slug:"options-playerconfiguration",value:"options: PlayerConfiguration"},{depth:3,slug:"initialplaybackprops-initialplaybackprops",value:"initialPlaybackProps: InitialPlaybackProps"},{depth:3,slug:"children",value:"Children"},{depth:2,slug:"callback-props",value:"Callback props"},{depth:3,slug:"onexit---void",value:"onExit: () => void"},{depth:3,slug:"onerror-any--void",value:"onError?: any => void"},{depth:3,slug:"onplaybackactionsready-playbackactions--void",value:"onPlaybackActionsReady?: PlaybackActions => void"},{depth:3,slug:"onstreamstatechange-videostreamstate--void",value:"onStreamStateChange?: VideoStreamState => void"},{depth:2,slug:"video-stream-state-properties-reported-through-onstreamstatechange",value:"Video stream state properties, reported through  onStreamStateChange"},{depth:2,slug:"playback-operation-methods-available-through-onplaybackactionsready",value:"Playback operation methods, available through  onPlaybackActionsReady"},{depth:3,slug:"inspect---videostreamstate",value:"inspect: () => VideoStreamState"},{depth:3,slug:"setproperties-playbackprops--void",value:"setProperties: PlaybackProps => void"},{depth:3,slug:"play---void",value:"play: () => void"},{depth:3,slug:"pause---void",value:"pause: () => void"},{depth:3,slug:"setposition-number--void",value:"setPosition: number => void"},{depth:3,slug:"gotolive---void",value:"gotoLive: () => void"},{depth:3,slug:"setvolume-number--void",value:"setVolume: number => void"},{depth:3,slug:"setismuted-boolean--void",value:"setIsMuted: boolean => void"},{depth:3,slug:"mute---void",value:"mute: () => void"},{depth:3,slug:"unmute---void",value:"unmute: () => void"},{depth:3,slug:"requestpictureinpicture--void",value:"requestPictureInPicture() => void"},{depth:3,slug:"exitpictureinpicture--void",value:"exitPictureInPicture() => void"},{depth:3,slug:"showairplaytargetpicker--void",value:"showAirPlayTargetPicker() => void"},{depth:3,slug:"setselectedaudiotrack-availabletrack--void",value:"setSelectedAudioTrack: AvailableTrack => void"},{depth:3,slug:"setselectedtexttrack-availabletrack--null--void",value:"setSelectedTextTrack: (AvailableTrack | null) => void"},{depth:3,slug:"capbitrate-number--void",value:"capBitrate: number => void"},{depth:3,slug:"fixbitrate-number--max--min--void",value:"fixBitrate: (number | 'max' | 'min') => void"}]},"docs/using-replay/startup-options.mdx":{name:"Setting startup options",route:"/replay/startup-options",menu:"Using the Replay player",id:"0dab71c5ea5d97e84ffca4d87e37ab08",filepath:"docs/using-replay/startup-options.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/docs/using-replay/startup-options.mdx",slug:"docs-using-replay-startup-options",order:0,headings:[{depth:1,slug:"setting-some-startup-options-for-the-player",value:"Setting some startup options for the player"},{depth:2,slug:"prerequisites",value:"Prerequisites"},{depth:2,slug:"starting-playback-from-a-different-position-than-the-beginning",value:"Starting playback from a different position than the beginning"},{depth:2,slug:"setting-volume-and-mute-state-for-startup",value:"Setting volume and mute state for startup"},{depth:2,slug:"specifying-text-tracks-along-with-the-video-source",value:"Specifying text tracks along with the video source"},{depth:3,slug:"setting-new-text-tracks-after-starting-playback-of-video-source",value:"Setting (new) text tracks after starting playback of video source"}]},"components/controls/AirPlayButton/AirPlayButton.mdx":{name:"AirPlay button",route:"/controls/airplay-button",menu:"Controls reference",id:"4d63bd622503049c2496a171170c4cfc",filepath:"components/controls/AirPlayButton/AirPlayButton.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/AirPlayButton/AirPlayButton.mdx",slug:"components-controls-air-play-button-air-play-button",order:0,headings:[{depth:1,slug:"airplaybutton",value:"AirPlayButton"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"}]},"components/controls/AudioSelector/AudioSelector.mdx":{name:"Audio selector",route:"/controls/audio-selector",menu:"Controls reference",id:"161cf4afc057334b775dcf1b394dec1f",filepath:"components/controls/AudioSelector/AudioSelector.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/AudioSelector/AudioSelector.mdx",slug:"components-controls-audio-selector-audio-selector",order:0,headings:[{depth:1,slug:"audioselector-control",value:"AudioSelector control"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"}]},"components/controls/BufferingIndicator/BufferingIndicator.mdx":{name:"Buffering indicator",route:"/controls/buffering-indicator",menu:"Controls reference",id:"bf2fd1787fd6498ac623a2af404b68bf",filepath:"components/controls/BufferingIndicator/BufferingIndicator.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/BufferingIndicator/BufferingIndicator.mdx",slug:"components-controls-buffering-indicator-buffering-indicator",order:0,headings:[{depth:1,slug:"bufferingindicator-component",value:"BufferingIndicator component"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"}]},"components/controls/ControlsBar/ControlsBar.mdx":{name:"Controls bar",route:"/controls/controls-bar",menu:"Controls reference",id:"3e7ad790b93a9a0304d5be0ff2c28486",filepath:"components/controls/ControlsBar/ControlsBar.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/ControlsBar/ControlsBar.mdx",slug:"components-controls-controls-bar-controls-bar",order:0,headings:[{depth:1,slug:"controlsbar-component",value:"ControlsBar component"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"}]},"components/controls/ExitButton/ExitButton.mdx":{name:"Exit button",route:"/controls/exit-button",menu:"Controls reference",id:"b877c605ecfa9adab79e7c7d1c580a73",filepath:"components/controls/ExitButton/ExitButton.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/ExitButton/ExitButton.mdx",slug:"components-controls-exit-button-exit-button",order:0,headings:[{depth:1,slug:"exitbutton",value:"ExitButton"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"}]},"components/controls/FullscreenButton/FullscreenButton.mdx":{name:"Fullscreen toggle button",route:"/controls/fullscreen-button",menu:"Controls reference",id:"e316fc61ec331fa31fea59e0733c2cc2",filepath:"components/controls/FullscreenButton/FullscreenButton.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/FullscreenButton/FullscreenButton.mdx",slug:"components-controls-fullscreen-button-fullscreen-button",order:0,headings:[{depth:1,slug:"fullscreenbutton",value:"FullscreenButton"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"}]},"components/controls/GotoLiveButton/GotoLiveButton.mdx":{name:"Go to live button",route:"/controls/goto-live-button",menu:"Controls reference",id:"e6416a60d9c85f029f7550f5e5af3fb2",filepath:"components/controls/GotoLiveButton/GotoLiveButton.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/GotoLiveButton/GotoLiveButton.mdx",slug:"components-controls-goto-live-button-goto-live-button",order:0,headings:[{depth:1,slug:"gotolivebutton",value:"GotoLiveButton"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"}]},"components/controls/PipButton/PipButton.mdx":{name:"Picture-in-picture button",route:"/controls/pip-button",menu:"Controls reference",id:"6984b00196565e59098d4a26bf919112",filepath:"components/controls/PipButton/PipButton.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/PipButton/PipButton.mdx",slug:"components-controls-pip-button-pip-button",order:0,headings:[{depth:1,slug:"pipbutton",value:"PipButton"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"}]},"components/controls/PlayPauseButton/PlayPauseButton.mdx":{name:"Play/pause button",route:"/controls/play-pause-button",menu:"Controls reference",id:"ae9a4e474ea4181beddb12cf35d55843",filepath:"components/controls/PlayPauseButton/PlayPauseButton.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/PlayPauseButton/PlayPauseButton.mdx",slug:"components-controls-play-pause-button-play-pause-button",order:0,headings:[{depth:1,slug:"playpausebutton",value:"PlayPauseButton"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"}]},"components/controls/PlaybackMonitor/PlaybackMonitor.mdx":{name:"Playback monitor",route:"/controls/playback-monitor",menu:"Controls reference",id:"5e134e145fa8d08a5f48ca875a5811c3",filepath:"components/controls/PlaybackMonitor/PlaybackMonitor.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/PlaybackMonitor/PlaybackMonitor.mdx",slug:"components-controls-playback-monitor-playback-monitor",order:0,headings:[{depth:1,slug:"playbackmonitor-component",value:"PlaybackMonitor component"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"class-names-for-dom-and-states",value:"Class names for DOM and states"}]},"components/controls/QualitySelector/QualitySelector.mdx":{name:"Quality selector",route:"/controls/quality-selector",menu:"Controls reference",id:"04699e4eb68bff0a624b8934a8ffe024",filepath:"components/controls/QualitySelector/QualitySelector.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/QualitySelector/QualitySelector.mdx",slug:"components-controls-quality-selector-quality-selector",order:0,headings:[{depth:1,slug:"qualityselector",value:"QualitySelector"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"}]},"components/controls/SkipButton/SkipButton.mdx":{name:"Skip backward/forward button",route:"/controls/skip-button",menu:"Controls reference",id:"008f5b8a0cf59e920b43d828f5b74b9a",filepath:"components/controls/SkipButton/SkipButton.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/SkipButton/SkipButton.mdx",slug:"components-controls-skip-button-skip-button",order:0,headings:[{depth:1,slug:"skipbutton",value:"SkipButton"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"}]},"components/controls/SubtitlesSelector/SubtitlesSelector.mdx":{name:"Subtitles selector",route:"/controls/subtitles-selector",menu:"Controls reference",id:"0b5464f11e2596340a345ec826bc0ee8",filepath:"components/controls/SubtitlesSelector/SubtitlesSelector.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/SubtitlesSelector/SubtitlesSelector.mdx",slug:"components-controls-subtitles-selector-subtitles-selector",order:0,headings:[{depth:1,slug:"subtitlesselector",value:"SubtitlesSelector"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"}]},"components/controls/TimeDisplay/TimeDisplay.mdx":{name:"Time and duration display",route:"/controls/time-display",menu:"Controls reference",id:"b48ddaee5338a90713e977d4045b57c6",filepath:"components/controls/TimeDisplay/TimeDisplay.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/TimeDisplay/TimeDisplay.mdx",slug:"components-controls-time-display-time-display",order:0,headings:[{depth:1,slug:"timedisplay-component",value:"TimeDisplay component"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"}]},"components/controls/Timeline/Timeline.mdx":{name:"Timeline",route:"/controls/timeline",menu:"Controls reference",id:"db4b0aba00596eabec323af208dee38c",filepath:"components/controls/Timeline/Timeline.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/Timeline/Timeline.mdx",slug:"components-controls-timeline-timeline",order:0,headings:[{depth:1,slug:"timeline-control",value:"Timeline control"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"},{depth:2,slug:"styling-requirements",value:"Styling requirements"}]},"components/controls/TimelineInformation/TimelineInformation.mdx":{name:"Timeline position tooltip",route:"/controls/timeline-information",menu:"Controls reference",id:"f04d6e83d89e05de9260be180dc1a024",filepath:"components/controls/TimelineInformation/TimelineInformation.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/TimelineInformation/TimelineInformation.mdx",slug:"components-controls-timeline-information-timeline-information",order:0,headings:[{depth:1,slug:"timelineinformation-component",value:"TimelineInformation component"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"}]},"components/controls/Volume/Volume.mdx":{name:"Volume and mute controls",route:"/controls/volume",menu:"Controls reference",id:"c4271c5047a2effb543c69bf9c00d187",filepath:"components/controls/Volume/Volume.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/controls/Volume/Volume.mdx",slug:"components-controls-volume-volume",order:0,headings:[{depth:1,slug:"volume-control",value:"Volume control"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"props",value:"Props"},{depth:2,slug:"component-dom-with-class-names",value:"Component DOM with class names"},{depth:2,slug:"styling-requirements",value:"Styling requirements"}]},"components/generic/Selector/Selector.mdx":{name:"Selector",route:"/generic-components/Selector",menu:"Generic controls reference",id:"0809b682d25437668d6b2aa7dbd11988",filepath:"components/generic/Selector/Selector.mdx",link:"https://github.com/vimond/replay/edit/master/src/replay/components/generic/Selector/Selector.mdx",slug:"components-generic-selector-selector",order:0,headings:[{depth:1,slug:"selector",value:"Selector"},{depth:2,slug:"summary",value:"Summary"},{depth:2,slug:"props",value:"Props"}]}}}},"./.docz/app/index.jsx":function(e,t,o){"use strict";o.r(t);var a=o("./node_modules/react/index.js"),s=o.n(a),l=o("./node_modules/react-dom/index.js"),r=o.n(l),n=o("./.docz/app/root.jsx"),i=[],p=[],d=function(){return p.forEach(function(e){return e&&e()})},u=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.a;i.forEach(function(e){return e&&e()}),r.a.render(s.a.createElement(e,null),u,d)}(n.a)},"./.docz/app/root.jsx":function(e,t,o){"use strict";(function(e){var a=o("./node_modules/react/index.js"),s=o.n(a),l=o("./node_modules/react-hot-loader/index.js"),r=o("./node_modules/docz-theme-default/dist/index.js"),n=o.n(r),i=function(){return s.a.createElement(n.a,null)};t.a=Object(l.hot)(e)(i),i.__docgenInfo={description:"",methods:[],displayName:"Root"}}).call(this,o("./node_modules/webpack/buildin/harmony-module.js")(e))},0:function(e,t,o){o("./node_modules/react-dev-utils/webpackHotDevClient.js"),o("./node_modules/docz/node_modules/@babel/polyfill/lib/index.js"),e.exports=o("./.docz/app/index.jsx")}},[[0,46,0]]]);
//# sourceMappingURL=app.912fc1973fd901984c48.js.map