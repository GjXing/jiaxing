(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35ebd0c6"],{"21dc":function(t,e,n){"use strict";var o=n("f520"),i=n.n(o);i.a},"64f8":function(t,e,n){"use strict";var o=n("c412"),i=n.n(o);i.a},a651:function(t,e,n){"use strict";var o=n("dcb6"),i=n.n(o);i.a},c412:function(t,e,n){},d99e:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demoblock"},[n("p",{staticClass:"labelt"},[t._v(t._s(t.title))]),n("div",[t._t("default")],2)])},i=[],a={name:"demoBlock",props:{title:{type:String}}},c=a,s=(n("64f8"),n("048f")),l=Object(s["a"])(c,o,i,!1,null,"ce135a58",null);l.options.__file="demoBlock.vue";e["a"]=l.exports},dcb6:function(t,e,n){},e7ba:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("x-nav-bar",{attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[n("x-icon",{staticClass:"ricon",attrs:{slot:"right",name:"likeempty"},slot:"right"})],1),n("div",{staticClass:"demoContent"},[t._t("default")],2)],1)},i=[],a={name:"demoSection",data:function(){return{title:this.$route.meta.title}},methods:{onClickLeft:function(){this.$router.push("/demo");var t=window.parent.location.hash;t.indexOf("#/demo")<0&&(window.parent.location.href="#/docs")},onClickRight:function(){this.$toast("呵呵")}}},c=a,s=(n("a651"),n("048f")),l=Object(s["a"])(c,o,i,!1,null,"5a2affe6",null);l.options.__file="demoSection.vue";e["a"]=l.exports},f520:function(t,e,n){},ff79:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",{attrs:{title:"基础用法"}},[n("div",{staticClass:"demo"},[n("x-uploader",{attrs:{"after-read":t.onRead}},[n("x-icon",{attrs:{name:"photograph"}})],1)],1)]),n("demo-block",{attrs:{title:"设置input属性"}},[n("div",{staticClass:"demo"},[n("x-uploader",{attrs:{"after-read":t.onRead,accept:"image/gif, image/jpeg",multiple:""}},[n("x-icon",{attrs:{name:"photograph"}})],1)],1)])],1)},i=[],a=n("e7ba"),c=n("d99e"),s={name:"index",components:{demoSection:a["a"],demoBlock:c["a"]},methods:{onRead:function(t){console.log(t)}}},l=s,r=(n("21dc"),n("048f")),d=Object(r["a"])(l,o,i,!1,null,"7edcc8f8",null);d.options.__file="index.vue";e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-35ebd0c6.947af2be.js.map