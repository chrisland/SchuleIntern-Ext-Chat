"use strict";self.webpackHotUpdateextensions(179,{724:(t,e,s)=>{s.r(e),s.d(e,{render:()=>a,staticRenderFns:()=>i});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"si-userselect"},[t.state?t._e():s("div",[s("button",{staticClass:"si-btn",on:{click:t.handlerOpenForm}},[s("i",{staticClass:"fas fa-plus"}),t._v(" Benutzer hinzufügen")])]),t._v(" "),"form"==t.state?s("div",[s("div",{staticClass:"si-userselect-modal",on:{click:function(e){return e.target!==e.currentTarget?null:t.handlerCloseForm.apply(null,arguments)}}},[s("div",{staticClass:"si-userselect-modal-box"},[s("div",{staticClass:"si-userselect-modal-content"},[s("ul",{staticClass:"list"},t._l(t.users,(function(e,a){return s("li",{key:a},[t._v("\n              "+t._s(e.label)+"\n            ")])})),0),t._v(" "),s("div",{staticClass:"si-form"},[s("ul",[s("li",[s("label",[t._v("Suche")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchString,expression:"searchString"}],attrs:{type:"text"},domProps:{value:t.searchString},on:{keyup:t.handlerChange,input:function(e){e.target.composing||(t.searchString=e.target.value)}}})]),t._v(" "),s("li",[t._v("\n                List:\n              ")]),t._v(" "),t._m(0)])])])])])]):t._e()])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("button",{staticClass:"si-btn"},[s("i",{staticClass:"fas fa-plus"}),t._v(" Benutzer hinzufügen")])])}];a._withStripped=!0}},(function(t){t.h=()=>"c62d2373071010cf00ff"}));