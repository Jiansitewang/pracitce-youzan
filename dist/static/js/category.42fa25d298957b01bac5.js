webpackJsonp([6],{0:function(t,e,a){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subLists:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]=" https://easy-mock.com/mock/5c3c4d35e477ea245d360113/youzan"+n[s]);e.a=n},106:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(14),s=(a.n(n),a(76)),r=(a.n(s),a(1)),i=a(4),o=a.n(i),c=a(0),d=a(7);new r.default({el:"#app",data:{topLists:null,topIndex:0,subData:null,rankData:null},created:function(){this.getTopLists(),this.getSubList(0,0),this.getRank()},methods:{getTopLists:function(){var t=this;o.a.get(c.a.topList).then(function(e){t.topLists=e.data.lists})},getSubList:function(t,e){var a=this;this.topIndex=t,0===t?this.getRank():o.a.get(c.a.subLists,{id:e}).then(function(t){a.subData=t.data.data})},getRank:function(){var t=this;o.a.get(c.a.rank).then(function(e){t.rankData=e.data.data})},toSearch:function(t){location.href="search.html?keyword="+t.name+"&id="+t.id}},mixins:[d.a]})},11:function(t,e){},12:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,n){return a("li",{class:{active:n===t.curIndex},on:{click:function(a){t.changeNav(e,n)}}},[a("a",[a("i",{class:e.icon}),t._v(" "),a("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]}},14:function(t,e){},7:function(t,e,a){"use strict";var n=a(8),s=a.n(n),r={filters:{currency:function(t){var e=""+t;if(e.indexOf(".")>-1){var a=e.split(".");return a[0]+"."+(a[1]+"0").substr(0,2)}return e+".00"}},components:{Foot:s.a}};e.a=r},76:function(t,e){},8:function(t,e,a){function n(t){a(11)}var s=a(6)(a(9),a(12),n,"data-v-3cc1a509",null);t.exports=s.exports},9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(13),s=a.n(n),r=s.a.parse(location.search.substr(1)),i=r.index,o=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];e.default={name:"Foot",data:function(){return{navConfig:o,curIndex:parseInt(i)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}}}},[106]);
//# sourceMappingURL=category.42fa25d298957b01bac5.js.map