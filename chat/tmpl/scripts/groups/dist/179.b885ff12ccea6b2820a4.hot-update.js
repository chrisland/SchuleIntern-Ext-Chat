self.webpackHotUpdateextensions(179,{367:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>i});var r=e(7705),a=e.n(r)()((function(t){return t[1]}));a.push([t.id,"\n.groups .list[data-v-95b8a430] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-top: 3rem;\n}\n.groups .list li[data-v-95b8a430] {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  padding-left: 3rem;\n  padding-right: 3rem;\n  font-size: 120%;\n  display: flex;\n  cursor: pointer;\n}\n.groups .list li:hover .title[data-v-95b8a430] {\n  color: #367fa9;\n}\n.groups .list li[data-v-95b8a430]:nth-child(even){\n  background-color: #f9f9f9;\n}\n.groups .list li .img[data-v-95b8a430] {\n  min-width: 5vw;\n  max-width: 5vw;\n  height: 5vw;\n  border-radius: 100%;\n  margin-right: 3rem;\n}\n.groups .list li .item[data-v-95b8a430] {\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.groups .list li .item .title[data-v-95b8a430] {\n  flex: 1;\n  flex-basis: 100%;\n  font-size: 120%;\n  font-weight: 300;\n  line-height: 100%;\n  letter-spacing: 0.75pt;\n  padding-top: 1.5rem;\n}\n.groups .list li .item .msgText[data-v-95b8a430] {\n  flex: 4;\n}\n.groups .list li .item .msgTime[data-v-95b8a430] {\n  flex: 1;\n  text-align: center;\n  color: #424242;\n}\n\n",""]);const i=a},418:(t,n,e)=>{"use strict";var r=e(897),a=e(941),i=(e(174),(0,e(1900).Z)(a.Z,r.render,r.staticRenderFns,!1,null,"95b8a430",null)),s=e(2016);s.install(e(1931)),s.compatible&&(t.hot.accept(),s.isRecorded("95b8a430")?s.reload("95b8a430",i.options):s.createRecord("95b8a430",i.options),t.hot.accept(897,(t=>{r=e(897),s.rerender("95b8a430",{render:r.render,staticRenderFns:r.staticRenderFns})}))),i.options.__file="src/components/FormGroups.vue",i.exports},5761:(t,n,e)=>{"use strict";e.d(n,{Z:()=>d});var r=e(5586),a=e(4912),i=e(6218),s=(e(418),e(9027)),o=e(4559).default;const d={components:{Groups:i.Z,Chat:s.Z,Error:r.Z,Spinner:a.Z},data:function(){return{apiURL:globals.apiURL,error:!1,loading:!1,route:"groups",groups:!1,group:!1,form:{msg:""}}},created:function(){this.loadGroups()},mounted:function(){},methods:{handlerFormGroup:function(t){console.log(t),this.route="form"},handlerLoadGroup:function(t){if(!t.id)return!1;this.loading=!0;var n=this;o.get(this.apiURL+"/getGroup/"+t.id).then((function(t){t.data?t.data.error?n.error=""+t.data.msg:(n.group=t.data,n.route="chat"):n.error="Fehler beim Laden. 01"})).catch((function(){n.error="Fehler beim Laden. 02"})).finally((function(){n.loading=!1}))},loadGroups:function(){this.loading=!0;var t=this;o.get(this.apiURL+"/getGroups").then((function(n){n.data?n.data.error?t.error=""+n.data.msg:(t.groups=n.data,t.route="groups"):t.error="Fehler beim Laden. 01"})).catch((function(){t.error="Fehler beim Laden. 02"})).finally((function(){t.loading=!1}))},handlerChatSubmit:function(t){if(!this.group.id||!t.msg)return!1;var n=new FormData;n.append("group_id",this.group.id),n.append("msg",t.msg),this.loading=!0;var e=this;o.post(this.apiURL+"/setMsg",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){t.data?0==t.data.error?t.data.msgObj&&(e.form={msg:""},e.group.chat.push(t.data.msgObj)):e.error=""+t.data.msg:e.error="Fehler beim Laden. 01"})).catch((function(){e.error="Fehler beim Laden. 02"})).finally((function(){e.loading=!1}))},handlerChatClose:function(){this.route="groups",this.group=!1}}}},941:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r}),e(4559).default;const r={components:{},data:function(){return{}},props:{groups:Array},created:function(){},methods:{handlerGroupOpen:function(t){if(!t.id)return!1;this.group=!1,this.group=t,this.$emit("loadGroup",t)}}}},897:(t,n,e)=>{"use strict";e.r(n),e.d(n,{render:()=>r,staticRenderFns:()=>a});var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"groups"},[t._m(0),t._v(" "),e("ul",{staticClass:"list"},t._l(t.groups,(function(n,r){return e("li",{key:r,on:{click:function(e){return t.handlerGroupOpen(n)}}},[e("img",{staticClass:"img",attrs:{src:"cssjs/images/userimages/default.png"}}),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"title"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"msgText"},[t._v("Text....")]),t._v(" "),e("div",{staticClass:"msgTime"},[t._v("17:34")])])])})),0)])},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"header"},[e("button",{staticClass:"si-btn"},[t._v("Neu")])])}];r._withStripped=!0},174:(t,n,e)=>{"use strict";e(652)},652:(t,n,e)=>{var r=e(367);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);var a=(0,e(4023).Z)("652e5f5e",r,!1,{});r.locals||t.hot.accept(367,(function(){var n=e(367);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),a(n)})),t.hot.dispose((function(){a()}))}},(function(t){t.h=()=>"e4c44f493848d09119d0"}));