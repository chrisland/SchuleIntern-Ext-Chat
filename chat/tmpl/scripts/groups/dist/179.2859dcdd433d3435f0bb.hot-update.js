"use strict";self.webpackHotUpdateextensions(179,{897:(t,e,i)=>{i.r(e),i.d(e,{render:()=>s,staticRenderFns:()=>a});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"si-form"},[i("div",{staticClass:"header"},[i("button",{staticClass:"si-btn si-btn-light",on:{click:t.handlerBack}},[t._v("Zurück")]),t._v(" "),i("div",{staticClass:"title"},[t._v("Gruppe")])]),t._v(" "),i("div",{},[i("ul",[i("li",[i("label",[t._v("Name")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],attrs:{type:"text"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),t._v(" "),i("li",[i("label",[t._v("Mitglieder")]),t._v(" "),i("ul",[t._l(t.form.members,(function(e,s){return i("li",{key:s},[e?i("User",{attrs:{data:e}}):t._e()],1)})),t._v(" "),i("li",[i("button",{staticClass:"si-btn",on:{click:t.handlerAddMember}},[i("i",{staticClass:"fas fa-plus"}),t._v(" Benutzer hinzufügen")])])],2)]),t._v(" "),i("li",[i("button",{staticClass:"si-btn",on:{click:t.handlerSubmit}},[t._v("Speichern")])])]),t._v("\n\n    "+t._s(t.form)+"\n\n  ")])])},a=[];s._withStripped=!0}},(function(t){t.h=()=>"5a74b259d7242878df29"}));