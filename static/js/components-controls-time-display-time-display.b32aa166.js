(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./src/replay/components/common.js":function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return o}),n.d(t,"k",function(){return a}),n.d(t,"g",function(){return s}),n.d(t,"d",function(){return l}),n.d(t,"f",function(){return c}),n.d(t,"h",function(){return p}),n.d(t,"i",function(){return m}),n.d(t,"j",function(){return f}),n.d(t,"c",function(){return b}),n.d(t,"b",function(){return h}),n.d(t,"e",function(){return v});var o="replay-";function a(e){for(var t=null==e?"":e,n=[],r=0;r<(arguments.length<=1?0:arguments.length-1);r++)(r+1<1||arguments.length<=r+1?void 0:arguments[r+1])&&n.push(t+(r+1<1||arguments.length<=r+1?void 0:arguments[r+1]));return n.join(" ")}var i=function(e){return e};function s(e){var t=e.classes,n=e.selectClasses,o=e.classNames,s=e.classNamePrefix;if(t&&n){var l=n(t);return Array.isArray(l)?l.filter(i).join(" "):l}if(o)return a.apply(void 0,[s].concat(r(o)))}function l(e,t){var n,r=(t||e.currentTarget).getBoundingClientRect();return n=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(n.pageX-r.left,r.width)),y:Math.max(0,Math.min(n.pageY-r.top,r.height)),width:r.width,height:r.height}}function c(e){return function(t){e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}var p=function(e,t){return e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t)))},u=function(e){return null!=e&&e.constructor==={}.constructor},m=function(e,t){if(e===t)return!0;if(u(e)&&u(t)){var n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&(!(n.filter(function(n){return p(e[n],t[n])}).length>0)&&0===r.filter(function(n){return p(t[n],e[n])}).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(var o=e.length;o--;)if(e[o]!==t[o])return!1;return!0}return!1};function d(e){if(null==e)return{};var t={},n=e;return Object.keys(e).forEach(function(e){u(n[e])?t[e]=d(n[e]):t[e]=n[e]}),t}function f(e,t){var n=d(e);if(t){var r=t;Object.getOwnPropertyNames(r).forEach(function(e){u(r[e])?u(n[e])?n[e]=f(n[e],r[e]):n[e]=d(r[e]):n[e]=r[e]})}return n}var y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return n&&0===e?"":e<10&&r?"0".concat(e).concat(t):"".concat(e).concat(t)},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=Math.round(e),r="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,r=t);var o=Math.floor(n/86400),a=86400*o,i=Math.floor((n-a)/3600),s=a+3600*i,l=Math.floor((n-s)/60),c=n-s-60*l;return r+y(o,".",!0,!1)+y(i,":",0===o)+y(l,":",!1)+y(c)},h=function(e){var t=e instanceof Date&&!isNaN(e.getTime()),n=0,r=0,o=0;return t&&null!=e&&(n=t?e.getHours():0,r=t?e.getMinutes():0,o=t?e.getSeconds():0),y(n,":",!1)+y(r,":",!1)+y(o)},v=function(e,t){var n=null;return{start:function(){n||(n=setInterval(e,1e3*t))},stop:function(){n&&(clearInterval(n),n=null)}}}},"./src/replay/components/controls/TimeDisplay/TimeDisplay.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n("./src/replay/components/common.js"),a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(o.c)(null==e?0:Math[n?"min":"max"](0,e),t)},i=function(e){var t,n=e.position,i=e.duration,s=e.absolutePosition,l=e.playMode,c=e.liveDisplayMode,p=void 0===c?"clock-time":c,u=e.negativeMark,m=e.label,d=e.positionLabel,f=e.durationLabel,y=(e.clockTimeLabel,e.classNamePrefix),b=void 0===y?o.a:y;return"ondemand"===l?r.createElement("div",{className:Object(o.k)(b,"time-display"),title:m},r.createElement("span",{className:Object(o.k)(b,"time-display-position"),title:d},a(n,u)),r.createElement("span",{className:Object(o.k)(b,"time-display-duration"),title:f},a(i,u))):("live-offset"!==p||"livedvr"!==l)&&((t=s)instanceof Date&&!isNaN(t.getTime())&&t.getTime()>15147612e5)?r.createElement("div",{className:Object(o.k)(b,"time-display","time-display-no-duration"),title:m},r.createElement("span",{className:Object(o.k)(b,"time-display-clock-time"),title:d},Object(o.b)(s))):r.createElement("div",{className:Object(o.k)(b,"time-display"),title:m},r.createElement("span",{className:Object(o.k)(b,"time-display-position"),title:d},a((n||i||0)-(i||0),u,!0)),"livedvr"===l&&r.createElement("span",{className:Object(o.k)(b,"time-display-duration"),title:f},a(i,u)))};i.streamStateKeysForObservation=["position","duration","absolutePosition","playMode"],i.displayName="TimeDisplay",t.a=i,i.__docgenInfo={description:"",methods:[],displayName:"TimeDisplay",props:{liveDisplayMode:{defaultValue:{value:"'clock-time'",computed:!1},required:!1,flowType:{name:"union",raw:"'clock-time' | 'live-offset'",elements:[{name:"literal",value:"'clock-time'"},{name:"literal",value:"'live-offset'"}]},description:"When set to 'live-offset', DVR times will be displayed as offsets from the live edge. Default is 'clock-time'."},classNamePrefix:{defaultValue:{value:"defaultClassNamePrefix",computed:!0},required:!1},position:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The relative playback position, used for on demand position and timeshift offset display."},duration:{required:!1,flowType:{name:"number"},description:"\u21d8\ufe0e The duration of the stream, used for on demand position and timeshift offset display."},absolutePosition:{required:!1,flowType:{name:"Date",nullable:!0},description:"\u21d8\ufe0e The clock time, used for live streams and DVR streams when liveDisplayMode is set to 'live-offset'."},playMode:{required:!1,flowType:{name:"PlayMode"},description:"\u21d8\ufe0e Play mode is used to decide what times to display."},negativeMark:{required:!1,flowType:{name:"string"},description:""},positionLabel:{required:!1,flowType:{name:"string"},description:""},durationLabel:{required:!1,flowType:{name:"string"},description:""},clockTimeLabel:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/components/controls/TimeDisplay/TimeDisplay.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),s=n("./src/replay/components/controls/TimeDisplay/TimeDisplay.js"),l=n("./src/replay/docs/mdx-helpers/ShowCase.js"),c=n("./src/replay/docs/mdx-helpers/SimpleTable.js"),p=n("./src/replay/docs/props-footnote.md");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,y(t).call(this,e))).layout=null,n}var n,r,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=m(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"timedisplay-component"}},"TimeDisplay component"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Presents the current position of a playback, and the duration of a stream. For live streams, displays clock time or timeshift offset."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),o.a.createElement(a.MDXTag,{name:"p",components:t},"The display switches mode based on the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"playMode")," property. When this has a value of ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'ondemand'"),", both ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"duration")," and ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"position")," props are formatted and displayed. If it has a value of ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'livedvr'"),", it can either display only time-of-day clock time based on the prop ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"absolutePosition"),", or 00:00 when playing at the live edge, or negative times when timeshifted. By setting the value ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"'live-offset'")," on the prop ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"liveDisplayMode"),", the latter option with 00:00 and negative times is selected. When displaying time-of-day clock times, duration is not displayed."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),o.a.createElement(i.Playground,{__codesandbox:"undefined",__position:0,__code:'<ShowCase\n  render={({ setProperties, position }) => (\n    <>\n      <TimeDisplay playMode="ondemand" position={123.4} duration={234.5} />\n      <TimeDisplay\n        playMode="livedvr"\n        liveDisplayMode="live-offset"\n        position={123}\n        duration={234}\n      />\n      <TimeDisplay\n        playMode="livedvr"\n        liveDisplayMode="live-offset"\n        position={234}\n        duration={234}\n      />\n      <TimeDisplay\n        playMode="livedvr"\n        absolutePosition={new Date(\'2018-11-07T05:14:13Z\')}\n        position={234}\n        duration={234}\n      />\n    </>\n  )}\n/>',__scope:{props:this?this.props:n,TimeDisplay:s.a,ShowCase:l.a,SimpleTable:c.a,Footnote:p.a}},o.a.createElement(l.a,{render:function(e){e.setProperties,e.position;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{playMode:"ondemand",position:123.4,duration:234.5}),o.a.createElement(s.a,{playMode:"livedvr",liveDisplayMode:"live-offset",position:123,duration:234}),o.a.createElement(s.a,{playMode:"livedvr",liveDisplayMode:"live-offset",position:234,duration:234}),o.a.createElement(s.a,{playMode:"livedvr",absolutePosition:new Date("2018-11-07T05:14:13Z"),position:234,duration:234}))}})),o.a.createElement(a.MDXTag,{name:"p",components:t},"This example shows four different display modes."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),o.a.createElement(i.PropsTable,{of:s.a}),o.a.createElement(p.a,null),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"component-dom-with-class-names"}},"Component DOM with class names"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Please read the ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/custom-replay/skins-styles"}},"general principles")," for Replay class names and styling."),o.a.createElement(c.a,{rows:[{Element:"div","Class name":"time-display","Generic class name":"",States:"time-display-no-duration",Parent:""},{Element:"span","Class name":"time-display-position","Generic class name":"",States:"",Parent:".time-display"},{Element:"span","Class name":"time-display-duration","Generic class name":"",States:"",Parent:".time-display"},{Element:"span","Class name":"time-display-clock-time","Generic class name":"",States:"",Parent:".time-display"}]}))}}])&&d(n.prototype,r),u&&d(n,u),t}();h.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/docs/mdx-helpers/ShowCase.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");n("./src/replay/replay-default.css");function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){var t={};return Object.keys(e).forEach(function(n){var r=e[n];switch(n){case"selectedAudioTrack":t.currentAudioTrack=r;break;case"selectedTextTrack":t.currentTextTrack=r;break;default:t[n]=r}}),t},u=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=i(t).call(this,e),n=!a||"object"!==o(a)&&"function"!==typeof a?l(r):a,c(l(l(n)),"setProperties",function(e){return n.setState(p(e))}),n.state={},n}var n,u,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["Component"]),n=t,(u=[{key:"render",value:function(){var e=this.setProperties,t=this.state,n=this.props,o=n.render,a=n.height,i=a?{width:"100%",height:a}:{width:"100%"};return r.createElement("div",null,r.createElement("div",{style:i}),r.createElement("div",{className:"replay-controls-bar",style:{justifyContent:"center"}},o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}({},t,{setProperties:e}))))}}])&&a(n.prototype,u),m&&a(n,m),t}();t.a=u,u.__docgenInfo={description:"",methods:[{name:"setProperties",docblock:null,modifiers:[],params:[{name:"props",type:{name:"PlaybackProps",alias:"PlaybackProps"}}],returns:null}],displayName:"ShowCase",props:{render:{required:!0,flowType:{name:"signature",type:"function",raw:"(VideoStreamState & { setProperties: PlaybackProps => void }) => React.Node",signature:{arguments:[{name:"",type:{name:"intersection",raw:"VideoStreamState & { setProperties: PlaybackProps => void }",elements:[{name:"VideoStreamState"},{name:"signature",type:"object",raw:"{ setProperties: PlaybackProps => void }",signature:{properties:[{key:"setProperties",value:{name:"signature",type:"function",raw:"PlaybackProps => void",signature:{arguments:[{name:"",type:{name:"PlaybackProps"}}],return:{name:"void"}},required:!0}}]}}]}}],return:{name:"ReactNode",raw:"React.Node"}}},description:""},height:{required:!1,flowType:{name:"string"},description:""}}}},"./src/replay/docs/mdx-helpers/SimpleTable.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={padding:0,tableLayout:"auto",boxShadow:"0 0 0 1px #CED4DE",borderSpacing:0,borderColor:"gray",borderCollapse:"collapse",borderStyle:"hidden",borderRadius:"4px",overflowY:"hidden",fontSize:"14px",color:"#13161F",width:"100%",display:"table"},s={color:"#7D899C",background:"#EEF1F5",textAlign:"left",fontSize:"14px",borderSpacing:0,borderCollapse:"collapse"},l={orderSpacing:0,borderCollapse:"collapse"},c={padding:"20px",verticalAlign:"top"},p=o({},c,{fontStyle:"italic",opacity:.5}),u=o({},c,{fontFamily:'"Source Code Pro",monospace',whiteSpace:"nowrap"}),m=function(e){var t=e.rows,n=t?t.map(function(e){return Object.values(e).join("-")}).join("-"):"";if(t&&t.length){var o=Object.keys(t[0]);return r.createElement("table",{style:i},r.createElement("thead",{style:s},r.createElement("tr",{style:l},o.map(function(e){return r.createElement("th",{key:"header-"+e,style:c},e)}))),r.createElement("tbody",null,t.map(function(e,t){return r.createElement("tr",{key:n+"-row-"+t,style:l},Object.values(e).map(function(e,o){return r.createElement("td",{key:n+"-cell-"+t+"-"+o,style:(a=e,""===a?p:u)},function(e){return""===e?"none":e}(e));var a}))})))}};t.a=m,m.__docgenInfo={description:"",methods:[],displayName:"SimpleTable",props:{rows:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ [string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}}],raw:"Array<{ [string]: string }>"},description:""}}}},"./src/replay/docs/props-footnote.md":function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,p(t).call(this,e))).layout=null,n}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components;s(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"p",components:t},"Props marked with \u21d8 are updated with the video streamer's ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/reference/observable-stream-state"}},"state property")," having the same name, when connected by the ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/connected-controls#connecting-the-controls"}},o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"connectControl()")," HOC"),". The \ufe0e",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," callback prop is marked with \ufe0e\u21d7 because it is connected for changing the playback state. More info in the architecture description of ",o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/overview#arrows-and-boxes"}},"two-way data flow"),"."))}}])&&l(n.prototype,r),i&&l(n,i),t}();m.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/replay-default.css":function(e,t,n){}}]);
//# sourceMappingURL=components-controls-time-display-time-display.54c7df495077c5d9daea.js.map