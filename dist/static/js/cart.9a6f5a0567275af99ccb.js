webpackJsonp([4],{0:function(e,t,i){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subLists:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var o in n)n.hasOwnProperty(o)&&(n[o]=" https://easy-mock.com/mock/5c3c4d35e477ea245d360113/youzan"+n[o]);t.a=n},105:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(74),o=(i.n(n),i(75)),s=(i.n(o),i(73)),r=(i.n(s),i(1)),c=i(7),a=i(4),d=i.n(a),u=i(0);i(69);new r.default({el:".container",data:{lists:null,total:0,editingShop:null,editingShopIndex:-1,removePopup:!1,removeData:null,removeMsg:""},created:function(){this.getList()},computed:{allSelected:{get:function(){return!(!this.lists||!this.lists.length)&&this.lists.every(function(e){return e.checked})},set:function(e){this.lists.forEach(function(t){t.checked=e,t.goodsList.forEach(function(t){t.checked=e})})}},allRemoveSelected:{get:function(){return!!this.editingShop&&this.editingShop.removeChecked},set:function(e){this.editingShop&&(this.editingShop.removeChecked=e,this.editingShop.goodsList.forEach(function(t){t.removeChecked=e}))}},selectLists:function(){if(this.lists&&this.lists.length){var e=[],t=0;return this.lists.forEach(function(i){i.goodsList.forEach(function(i){i.checked&&(e.push(i),t+=i.price*i.number)})}),this.total=t,e}return[]},removeLists:function(){if(this.editingShop){var e=[];return this.editingShop.goodsList.forEach(function(t){t.removeChecked&&e.push(t)}),e}return[]}},methods:{getList:function(){var e=this;d.a.get(u.a.cartLists).then(function(t){var i=t.data.cartList;i.forEach(function(e){e.checked=!0,e.removeChecked=!1,e.editing=!1,e.editingMsg="编辑",e.goodsList.forEach(function(e){e.checked=!0,e.removeChecked=!1})}),e.lists=i})},selectGood:function(e,t){var i=this.editingShop?"removeChecked":"checked";t[i]=!t[i],e[i]=e.goodsList.every(function(e){return e[i]})},selectShop:function(e){var t=this.editingShop?"removeChecked":"checked";e[t]=!e[t],e.goodsList.forEach(function(i){i[t]=e[t]})},selectAll:function(){var e=this.editingShop?"allRemoveSelected":"allSelected";this[e]=!this[e]},edit:function(e,t){e.editing=!e.editing,e.editingMsg=e.editing?"完成":"编辑",this.lists.forEach(function(i,n){t!==n&&(i.editing=!1,i.editingMsg=e.editing?"":"编辑")}),this.editingShop=e.editing?e:null,this.editingShopIndex=e.editing?t:-1},reduce:function(e){1!==e.number&&d.a.post(u.a.cartReduce,{id:e.id,number:1}).then(function(t){e.number--})},add:function(e){d.a.post(u.a.cartAdd,{id:e.id,number:1}).then(function(t){e.number++})},remove:function(e,t,i,n){this.removePopup=!0,this.removeData={shop:e,shopIndex:t,good:i,goodIndex:n},this.removeMsg="确定要删除该商品吗？"},removeList:function(){this.removePopup=!0,this.removeMsg="确定将所选 "+this.removeLists.length+" 个商品删除？"},removeConfirm:function(){var e=this;if("确定要删除该商品吗？"===this.removeMsg){var t=this.removeData,i=t.shop,n=t.shopIndex,o=t.good,s=t.goodIndex;d.a.post(u.a.cartRemove,{id:o.id}).then(function(t){i.goodsList.splice(s,1),i.goodsList.length||(e.lists.splice(n,1),e.quitEdit()),e.removePopup=!1})}else{var r=[];this.removeLists.forEach(function(e){r.push(e.id)}),d.a.post(u.a.cartMremove,{ids:r}).then(function(t){var i=[];e.editingShop.goodsList.forEach(function(t){-1===e.removeLists.findIndex(function(e){return e.id==t.id})&&i.push(t)}),i.length?e.editingShop.goodsList=i:(e.lists.splice(e.editingShopIndex,1),e.quitEdit()),e.removePopup=!1})}},quitEdit:function(){this.editingShop=null,this.editingShopIndex=-1,this.lists.forEach(function(e){e.editing=!1,e.editingMsg="编辑"})}},mixins:[c.a]})},11:function(e,t){},12:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bottom-nav"},[i("ul",e._l(e.navConfig,function(t,n){return i("li",{class:{active:n===e.curIndex},on:{click:function(i){e.changeNav(t,n)}}},[i("a",[i("i",{class:t.icon}),e._v(" "),i("div",[e._v(e._s(t.name))])])])}))])},staticRenderFns:[]}},29:function(e,t,i){"use strict";function n(e,t){return new s.a(function(i,n){c.a.post(e,t).then(function(e){var t=e.data.status;200===t&&i(e),300===t&&(location.href="login.html",i(e)),n(e)}).catch(function(e){n(e)})})}var o=i(48),s=i.n(o),r=i(4),c=i.n(r);t.a=n},69:function(e,t,i){"use strict";var n=i(49),o=i.n(n),s=i(50),r=i.n(s),c=i(29),a=i(0);!function(){function e(){o()(this,e)}r()(e,null,[{key:"add",value:function(e){return i.i(c.a)(a.a.cartAdd,{id:e,number:1})}},{key:"reduce",value:function(e){return i.i(c.a)(a.a.cartReduce,{id:e,number:1})}}])}()},7:function(e,t,i){"use strict";var n=i(8),o=i.n(n),s={filters:{currency:function(e){var t=""+e;if(t.indexOf(".")>-1){var i=t.split(".");return i[0]+"."+(i[1]+"0").substr(0,2)}return t+".00"}},components:{Foot:o.a}};t.a=s},73:function(e,t){},74:function(e,t){},75:function(e,t){},8:function(e,t,i){function n(e){i(11)}var o=i(6)(i(9),i(12),n,"data-v-3cc1a509",null);e.exports=o.exports},9:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(13),o=i.n(n),s=o.a.parse(location.search.substr(1)),r=s.index,c=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];t.default={name:"Foot",data:function(){return{navConfig:c,curIndex:parseInt(r)||0}},methods:{changeNav:function(e,t){location.href=e.href+"?index="+t}}}}},[105]);
//# sourceMappingURL=cart.9a6f5a0567275af99ccb.js.map