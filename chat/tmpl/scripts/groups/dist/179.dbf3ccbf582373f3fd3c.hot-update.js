"use strict";self.webpackHotUpdateextensions(179,{7345:(s,t,a)=>{a.r(t),a.d(t,{render:()=>e,staticRenderFns:()=>i});var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"page-chat"},[a("div",{staticClass:"header"},[a("button",{staticClass:"si-btn si-btn-light",on:{click:s.handlerBack}},[s._v("Zurück")]),s._v(" "),a("div",{staticClass:"title"},[s._v(s._s(s.group.title))]),s._v(" "),a("button",{staticClass:"si-btn si-btn-light",on:{click:s.handlerSettings}},[s._v("Settings")])]),s._v(" "),a("ul",{ref:"messagesContainer",staticClass:"list"},s._l(s.group.chat,(function(t,e){return a("li",{key:e},[t.from.name?a("div",{staticClass:"user"},[a("img",{staticClass:"img",attrs:{src:"cssjs/images/userimages/default.png"}}),s._v(" "),a("div",{staticClass:"vorname"},[s._v(s._s(t.from.vorname))]),s._v(" "),a("div",{staticClass:"nachname"},[s._v(s._s(t.from.nachname))])]):s._e(),s._v(" "),a("div",{staticClass:"item",class:{from:1!=t.from,self:1==t.from}},[a("div",{staticClass:"text",domProps:{innerHTML:s._s(t.msg)}}),s._v(" "),a("div",{staticClass:"timeCreate"},[s._v(s._s(t.timeCreate))])])])})),0),s._v(" "),a("div",{staticClass:"footer"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:s.form.msg,expression:"form.msg"}],domProps:{value:s.form.msg},on:{input:function(t){t.target.composing||s.$set(s.form,"msg",t.target.value)}}}),s._v(" "),a("button",{staticClass:"si-btn",on:{click:s.handlerFormSubmit}},[a("i",{staticClass:"fas fa-paper-plane"})])])])},i=[];e._withStripped=!0}},(function(s){s.h=()=>"422d613d1cf0dad18bd8"}));