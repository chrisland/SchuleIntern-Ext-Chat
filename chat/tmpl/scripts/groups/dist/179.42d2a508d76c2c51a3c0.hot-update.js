"use strict";self.webpackHotUpdateextensions(179,{5761:(r,t,a)=>{a.d(t,{Z:()=>d});var o=a(5586),e=a(4912),n=a(6218),i=a(9027),u=a(4559).default;const d={components:{Groups:n.Z,Chat:i.Z,Error:o.Z,Spinner:e.Z},data:function(){return{apiURL:globals.apiURL,error:!1,loading:!1,route:"groups",groups:!1,group:!1,form:{msg:""}}},created:function(){this.loadGroups()},mounted:function(){},methods:{handlerFormGroup:function(r){console.log(r),that.route="form"},handlerLoadGroup:function(r){if(!r.id)return!1;this.loading=!0;var t=this;u.get(this.apiURL+"/getGroup/"+r.id).then((function(r){r.data?r.data.error?t.error=""+r.data.msg:(t.group=r.data,t.route="chat"):t.error="Fehler beim Laden. 01"})).catch((function(){t.error="Fehler beim Laden. 02"})).finally((function(){t.loading=!1}))},loadGroups:function(){this.loading=!0;var r=this;u.get(this.apiURL+"/getGroups").then((function(t){t.data?t.data.error?r.error=""+t.data.msg:(r.groups=t.data,r.route="groups"):r.error="Fehler beim Laden. 01"})).catch((function(){r.error="Fehler beim Laden. 02"})).finally((function(){r.loading=!1}))},handlerChatSubmit:function(r){if(!this.group.id||!r.msg)return!1;var t=new FormData;t.append("group_id",this.group.id),t.append("msg",r.msg),this.loading=!0;var a=this;u.post(this.apiURL+"/setMsg",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(r){r.data?0==r.data.error?r.data.msgObj&&(a.form={msg:""},a.group.chat.push(r.data.msgObj)):a.error=""+r.data.msg:a.error="Fehler beim Laden. 01"})).catch((function(){a.error="Fehler beim Laden. 02"})).finally((function(){a.loading=!1}))},handlerChatClose:function(){this.route="groups",this.group=!1}}}}},(function(r){r.h=()=>"faa07ff75e6ef814696a"}));