(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56147418"],{"0173":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("demo-section",[i("demo-block",{attrs:{title:"基础用法"}},[i("x-swipe",{staticClass:"demo-swipe",attrs:{autoplay:3e3}},[i("x-swipe-item",[e._v("1")]),i("x-swipe-item",[e._v("2")]),i("x-swipe-item",[e._v("3")]),i("x-swipe-item",[e._v("4")])],1)],1),i("demo-block",{attrs:{title:"监听Change事件"}},[i("x-swipe",{staticClass:"demo-swipe",on:{change:e.onChange}},[i("x-swipe-item",[e._v("1")]),i("x-swipe-item",[e._v("2")]),i("x-swipe-item",[e._v("3")]),i("x-swipe-item",[e._v("4")])],1)],1),i("demo-block",{attrs:{title:"控制大小"}},[i("x-swipe",{staticClass:"demo-swipe",attrs:{autoplay:3e3,width:300}},[i("x-swipe-item",[e._v("1")]),i("x-swipe-item",[e._v("2")]),i("x-swipe-item",[e._v("3")]),i("x-swipe-item",[e._v("4")])],1)],1),i("demo-block",{staticClass:"demo-swipe",attrs:{title:"lazy-load"}},[i("x-swipe",{attrs:{autoplay:3e3}},e._l(e.imageList,function(e){return i("x-swipe-item",[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"img"}],staticClass:"pice"})])}))],1),i("demo-block",{attrs:{title:"自定义指示器"}},[i("x-swipe",{staticClass:"demo-swipe",on:{change:e.onChange1}},[i("x-swipe-item",[e._v("1")]),i("x-swipe-item",[e._v("2")]),i("x-swipe-item",[e._v("3")]),i("x-swipe-item",[e._v("4")]),i("div",{staticClass:"custom-indicator",attrs:{slot:"indicator"},slot:"indicator"},[e._v("\r          "+e._s(e.current+1)+"/4\r        ")])],1)],1)],1)},a=[],n=i("e7ba"),o=i("d99e"),p=i("329b"),c=i("3a0d");p["a"].use(c["b"]);var r={name:"index",components:{demoSection:n["a"],demoBlock:o["a"]},data:function(){return{imageList:["https://raw.githubusercontent.com/healen/xui/gh-pages/a/1.jpeg","https://raw.githubusercontent.com/healen/xui/gh-pages/a/2.jpeg","https://raw.githubusercontent.com/healen/xui/gh-pages/a/3.jpeg","https://raw.githubusercontent.com/healen/xui/gh-pages/a/4.jpeg","https://raw.githubusercontent.com/healen/xui/gh-pages/a/5.jpeg"],current:0}},methods:{onChange:function(e){this.$toast("当前 Swipe 索引："+e)},onChange1:function(e){this.current=e}}},m=r,u=(i("bca8"),i("048f")),l=Object(u["a"])(m,s,a,!1,null,"21928672",null);l.options.__file="index.vue";t["default"]=l.exports},"4a90":function(e,t,i){},bca8:function(e,t,i){"use strict";var s=i("4a90"),a=i.n(s);a.a}}]);
//# sourceMappingURL=chunk-56147418.87bf65cb.js.map