"use strict";self.webpackHotUpdateextensions(179,{9259:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(1398),i=r(4559).default;const a={components:{User:n.Z},data:function(){return{apiURL:globals.apiURL,error:!1,interval:!1}},props:{group:Array,form:Object,loading:Boolean},created:function(){var t=this;this.interval=setInterval((function(){t.group.id&&i.get(t.apiURL+"/getChat/"+t.group.id).then((function(e){e.data?e.data.error?t.error=""+e.data.msg:t.group.chat=e.data:t.error="Fehler beim Laden. 01"})).catch((function(){t.error="Fehler beim Laden. 02"})).finally((function(){}))}),3e3)},updated:function(){var t=this;this.$nextTick((function(){return t.scrollToEnd()}))},watch:{loading:{immediate:!0,handler:function(t,e){this.scrollToEnd()}}},methods:{handlerSettings:function(){clearInterval(this.interval),this.$emit("form",this.group)},scrollToEnd:function(){var t=this.$refs.messagesContainer;t&&(t.scrollTop=t.scrollHeight)},handlerBack:function(){clearInterval(this.interval),this.$emit("close")},handlerFormSubmit:function(){if(!this.form.msg)return!1;this.$emit("submit",this.form)}}}},941:(t,e,r)=>{r.d(e,{Z:()=>n}),r(4559).default;const n={components:{},data:function(){return{}},props:{form:Object},created:function(){},methods:{handlerSubmit:function(){this.$emit("formSubmitGroup",this.form)}}}},897:(t,e,r)=>{r.r(e),r.d(e,{render:()=>n,staticRenderFns:()=>i});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"si-form"},[t._m(0),t._v(" "),r("div",{},[r("ul",[r("li",[r("label",[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],attrs:{type:"text"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),t._v(" "),t._m(1),t._v(" "),r("li",[r("button",{staticClass:"si-btn",on:{click:t.handlerSubmit}},[t._v("Speichern")])])]),t._v("\n\n    "+t._s(t.form)+"\n\n  ")])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("div",{staticClass:"title"},[t._v("Gruppe")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("label",[t._v("Mitglieder")]),t._v("\n        <\n      ")])}];n._withStripped=!0}},(function(t){t.h=()=>"27fc1fddeba805812491"}));