(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),l=a.n(r),c=a(1),s=a(4),u=a(5),i=a(7),m=a(6),d=a(8),p=function(e){var t=e.func,a=e.name;return o.a.createElement("button",{type:"button",onClick:t},a)},g=function(e){var t=e.items;return o.a.createElement("ul",null,t.map(function(e){return o.a.createElement("li",{key:e},e)}))},f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={goods:[],isLoaded:!1,selectedValue:1},a.loadData=function(){a.setState({goods:f,isLoaded:!0})},a.reverse=function(){a.setState(function(e){return{goods:Object(c.a)(e.goods).reverse()}})},a.sortAZ=function(){a.setState(function(e){return{goods:Object(c.a)(e.goods).sort(function(e,t){return e.localeCompare(t)})}})},a.sortByLength=function(){a.setState(function(e){return{goods:Object(c.a)(e.goods).sort(function(e,t){return e.replace(/\s/g,"").length-t.replace(/\s/g,"").length})}})},a.selectValue=function(e){a.setState({selectedValue:e.target.value,goods:f.filter(function(t){return t.length>=e.target.value})})},a.reset=function(){a.setState({goods:f,selectedValue:1})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.goods,n=e.selectedValue;return o.a.createElement("div",{className:"App"},t?o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{func:this.reverse,name:"Reverse"}),o.a.createElement(p,{func:this.sortAZ,name:"Sort alphabetically"}),o.a.createElement(p,{func:this.sortByLength,name:"Sort by length"}),o.a.createElement(p,{func:this.reset,name:"Reset"}),o.a.createElement("select",{id:"list_length",value:n,onChange:this.selectValue},o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10")),o.a.createElement(g,{items:a})):o.a.createElement(p,{func:this.loadData,name:"Start"}))}}]),t}(n.Component);l.a.render(o.a.createElement(v,{test:123}),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.18e7ea9b.chunk.js.map