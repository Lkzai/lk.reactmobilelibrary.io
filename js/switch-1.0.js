!function(e){function t(t){for(var a,c,i=t[0],l=t[1],u=t[2],d=0,f=[];d<i.length;d++)c=i[d],r[c]&&f.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(h&&h(t);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={10:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var h=l;o.push([169,0]),n()}({169:function(e,t,n){"use strict";var a=c(n(0)),r=n(4),o=c(n(170));function c(e){return e&&e.__esModule?e:{default:e}}n(6),n(171),(0,r.render)(a.default.createElement(o.default,null),document.getElementById("root"))},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),c=(a=o)&&a.__esModule?a:{default:a},i=(n(5),n(1));var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={checked1:!1,checked2:!1,checked3:!0,checked4:!1,checked5:!1,disabled:!0},n.onChange1=n.onChange1.bind(n),n.onChange2=n.onChange2.bind(n),n.onChange3=n.onChange3.bind(n),n.onChange4=n.onChange4.bind(n),n.onChange5=n.onChange5.bind(n),n.onChange6=n.onChange6.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"onChange1",value:function(){this.setState({checked1:!this.state.checked1})}},{key:"onChange2",value:function(){this.setState({checked2:!this.state.checked2})}},{key:"onChange3",value:function(){this.setState({checked3:!this.state.checked3})}},{key:"onChange4",value:function(){this.setState({checked4:!this.state.checked4})}},{key:"onChange5",value:function(){this.setState({disabled:!this.state.disabled})}},{key:"onChange6",value:function(){this.setState({checked5:!this.state.checked5})}},{key:"render",value:function(){var e=this.state,t=e.checked1,n=e.checked2,a=e.checked3,r=e.checked4,o=e.checked5,l=e.disabled;return c.default.createElement(c.default.Fragment,null,c.default.createElement(i.NavBar,{leftContent:c.default.createElement("a",{href:"index.html",style:{lineHeight:"0"}},c.default.createElement(i.Icon,{type:"left"}))},"Switch"),c.default.createElement(i.List,{headerText:"Normal"},c.default.createElement(i.List.Item,{extra:c.default.createElement(i.Switch,{checked:t,onChange:this.onChange1})},"Option: "+(t?"On":"Off"))),c.default.createElement(i.List,{headerText:"DefaultChecked"},c.default.createElement(i.List.Item,{extra:c.default.createElement(i.Switch,{checked:n,onChange:this.onChange2})},"Option: "+(n?"On":"Off")),c.default.createElement(i.List.Item,{extra:c.default.createElement(i.Switch,{checked:a,onChange:this.onChange3})},"Option: "+(a?"On":"Off"))),c.default.createElement(i.List,{headerText:"Color"},c.default.createElement(i.List.Item,{extra:c.default.createElement(i.Switch,{checked:r,onChange:this.onChange4,color:"#D4A95B"})},"Option: "+(r?"On":"Off"))),c.default.createElement(i.List,{headerText:"Disabled"},c.default.createElement(i.List.Item,{extra:c.default.createElement(i.Switch,{checked:l,onChange:this.onChange5})},"Disabled: "+l),c.default.createElement(i.List.Item,{extra:c.default.createElement(i.Switch,{checked:o,onChange:this.onChange6,disabled:l})},"Option: "+(o?"On":"Off"))))}}]),t}();t.default=l},171:function(e,t){e.exports='<!doctype html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport"\r\n          content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover">\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n    <title>Document</title>\r\n</head>\r\n<body>\r\n<div id="root"></div>\r\n</body>\r\n</html>'}});
//# sourceMappingURL=switch-1.0.js.map