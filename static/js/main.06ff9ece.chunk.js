(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),s=a.n(r),i=(a(9),a(3)),o=(a(10),a(0)),u=function(e){var t=e.setQuery,a=e.search;return Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return t(e.target.value)},onKeyPress:a})})},d=function(e){var t=e.weather;return Object(o.jsxs)("div",{className:"weather-box",children:[Object(o.jsxs)("div",{className:"temp",children:[Math.round(t.main.temp),"\xb0C"]}),Object(o.jsx)("div",{className:"weather",children:t.weather[0].main})]})},h=function(e){var t=e.weather;return Object(o.jsxs)("div",{className:"location-box",children:[Object(o.jsxs)("div",{className:"location",children:[t.name,", ",t.sys.country]}),Object(o.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n," ").concat(c)}(new Date)})]})},j=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({}),s=Object(i.a)(r,2),j=s[0],b=s[1],l={key:"6aa97061883a821d7282ba18b3549de7",base:"https://api.openweathermap.org/data/2.5/"},m="undefined"!=typeof j.main&&j.main.temp>16?"App warm":"App";return Object(o.jsx)("div",{className:m,children:Object(o.jsxs)("main",{children:[Object(o.jsx)(u,{search:function(e){"Enter"===e.key&&fetch("".concat(l.base,"weather?q=").concat(a,"&units=metric&APPID=").concat(l.key)).then((function(e){return e.json()})).then((function(e){b(e),c("")}))},setQuery:c}),"undefined"!=typeof j.main?Object(o.jsxs)("div",{children:[Object(o.jsx)(h,{weather:j}),Object(o.jsx)(d,{weather:j})]}):""]})})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.06ff9ece.chunk.js.map