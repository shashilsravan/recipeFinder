(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),i=a.n(r),l=(a(11),a(1)),o=a.n(l),s=a(5),m=a(2);a(13);function u(e){return c.a.createElement("div",{className:"card m-4 h-100"},c.a.createElement("img",{src:e.recipe.recipe.image,class:"img-thumbnail rounded-circle mx-auto d-block my-4",style:{height:200,width:200},alt:"Recipe Image"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title"},e.recipe.recipe.label),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm"},"Total weight: ",e.recipe.recipe.totalWeight),c.a.createElement("div",{className:"col-sm"},"Calories: ",e.recipe.recipe.calories),c.a.createElement("div",{className:"col-sm"},"Jump into the ",c.a.createElement("a",{href:e.recipe.recipe.url,target:"_blank"},"tutorial")," page")),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h4",null," Ingredients required "),c.a.createElement("div",null,e.recipe.recipe.ingredientLines.map((function(e,t){return c.a.createElement("p",{key:t}," ",e," | ")})))))}var p=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)("chicken"),l=Object(m.a)(i,2),p=l[0],d=l[1];Object(n.useEffect)((function(){h()}),[]);var h=function(){var e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(p,"&app_id=").concat("d491d5ca","&app_key=").concat("376e6f9fd4b388ea23286abbe142cd73"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(a),c.a.createElement("div",{className:"App mx-4 my-5"},c.a.createElement("h1",null,"Recipe Finder"),c.a.createElement("form",{className:"form-group mx-sm-5 d-flex search-form",onSubmit:function(e){e.preventDefault(),h()}},c.a.createElement("input",{className:"form-control search-bar",placeholder:"Chicken ...",type:"text",onChange:function(e){return d(e.target.value)}}),c.a.createElement("button",{className:"btn ml-2 btn-primary search-btn",type:"submit"},"Search")),c.a.createElement("br",null),c.a.createElement("div",{className:"container"},a.map((function(e,t){return c.a.createElement(u,{key:t,recipe:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.75e9edc2.chunk.js.map