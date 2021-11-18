"use strict";self.webpackHotUpdateextensions(179,{5761:(r,t,e)=>{e.d(t,{Z:()=>u});var n=e(1398),o=e(5586),a=e(4912),i=e(3721),s=e(4559).default;const u={components:{Error:o.Z,Spinner:a.Z,User:n.Z,Modal:i.Z},data:function(){return{apiURL:globals.apiURL,error:!1,loading:!1,groups:!1,group:!1,form:{msg:""}}},created:function(){this.loadGroups()},mounted:function(){},methods:{handlerGroupOpen:function(r){if(!r.id)return!1;this.group=!1,this.group=r,this.loadGroup(r)},loadGroup:function(r){if(!r.id)return!1;this.loading=!0;var t=this;s.get(this.apiURL+"/getGroup/"+r.id).then((function(r){r.data?r.data.error?t.error=""+r.data.msg:t.group=r.data:t.error="Fehler beim Laden. 01"})).catch((function(){t.error="Fehler beim Laden. 02"})).finally((function(){t.loading=!1}))},loadGroups:function(){this.loading=!0;var r=this;s.get(this.apiURL+"/getGroups").then((function(t){t.data?t.data.error?r.error=""+t.data.msg:r.groups=t.data:r.error="Fehler beim Laden. 01"})).catch((function(){r.error="Fehler beim Laden. 02"})).finally((function(){r.loading=!1}))}}}},8062:(r,t,e)=>{e.r(t),e.d(t,{render:()=>n,staticRenderFns:()=>o});var n=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",[e("Error",{attrs:{error:r.error}}),r._v(" "),e("Spinner",{attrs:{loading:r.loading}}),r._v(" "),e("ul",r._l(r.groups,(function(t,n){return e("li",{key:n},[e("a",{on:{click:function(e){return r.handlerGroupOpen(t)}}},[r._v(r._s(t.title))])])})),0),r._v(" "),r.group?e("div",[e("h2",[r._v(r._s(r.group.title))]),r._v("\n\n    "+r._s(r.group.members)+"\n\n    "),e("ul",r._l(r.group.members,(function(r,t){return e("li",{key:t},[e("User",{attrs:{data:r}})],1)})),0),r._v(" "),e("br"),r._v("\n\n    "+r._s(r.group.chat)+"\n    "),e("ul",r._l(r.group.chat,(function(t,n){return e("li",{key:n},[e("div",{},[r._v(r._s(t.msg))]),r._v(" "),e("div",{},[r._v(r._s(t.time))])])})),0),r._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:r.form.msg,expression:"form.msg"}],attrs:{type:"text"},domProps:{value:r.form.msg},on:{input:function(t){t.target.composing||r.$set(r.form,"msg",t.target.value)}}}),r._v(" "),e("button",{staticClass:"si-btn"},[r._v("Send")])]):r._e()],1)},o=[];n._withStripped=!0}},(function(r){r.h=()=>"10f5e2aaf09e7ab8c020"}));