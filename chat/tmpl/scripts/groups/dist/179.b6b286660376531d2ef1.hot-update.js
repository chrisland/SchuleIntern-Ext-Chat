"use strict";self.webpackHotUpdateextensions(179,{5761:(r,o,t)=>{t.d(o,{Z:()=>s});var e=t(5586),a=t(4912),n=t(6218),i=t(418),u=t(9027),d=t(4559).default;const s={components:{Groups:n.Z,Chat:u.Z,FormGroups:i.Z,Error:e.Z,Spinner:a.Z},data:function(){return{apiURL:globals.apiURL,error:!1,loading:!1,route:"groups",groups:!1,group:!1,form:{msg:""},groupForm:!1}},created:function(){this.loadGroups()},mounted:function(){},methods:{handlerSubmitFormGroup:function(r){if(console.log(r),!r.title)return!1;var o=new FormData;o.append("title",r.title),o.append("group_id",r.id);var t=[];r.members.foreach((function(r,o){t.push({id:r.id})})),o.append("members",t),this.loading=!0;var e=this;d.post(this.apiURL+"/setGroup/"+r.id,o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(r){r.data?0==r.data.error?(console.log("submit done"),e.handlerLoadGroup(e.group)):e.error=""+r.data.msg:e.error="Fehler beim Laden. 01"})).catch((function(){e.error="Fehler beim Laden. 02"})).finally((function(){e.loading=!1}))},handlerShowFormGroup:function(r){this.groupForm=r,this.route="form"},handlerLoadGroup:function(r){if(!r.id)return!1;this.loading=!0;var o=this;d.get(this.apiURL+"/getGroup/"+r.id).then((function(r){r.data?r.data.error?o.error=""+r.data.msg:(o.group=r.data,o.route="chat",console.log("---chat")):o.error="Fehler beim Laden. 01"})).catch((function(){o.error="Fehler beim Laden. 02"})).finally((function(){o.loading=!1}))},loadGroups:function(){var r=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loading=!0;var o=this;d.get(this.apiURL+"/getGroups").then((function(t){t.data?t.data.error?o.error=""+t.data.msg:(o.groups=t.data,r&&(o.route="groups")):o.error="Fehler beim Laden. 01"})).catch((function(){o.error="Fehler beim Laden. 02"})).finally((function(){o.loading=!1}))},handlerChatSubmit:function(r){if(!this.group.id||!r.msg)return!1;var o=new FormData;o.append("group_id",this.group.id),o.append("msg",r.msg),this.loading=!0;var t=this;d.post(this.apiURL+"/setMsg",o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(r){r.data?0==r.data.error?r.data.msgObj&&(t.form={msg:""},t.group.chat.push(r.data.msgObj)):t.error=""+r.data.msg:t.error="Fehler beim Laden. 01"})).catch((function(){t.error="Fehler beim Laden. 02"})).finally((function(){t.loading=!1}))},handlerChatClose:function(){this.route="groups",this.group=!1},handlerFormClose:function(){this.group?this.handlerLoadGroup(this.group):this.route="groups"}}}}},(function(r){r.h=()=>"4cb69be98b88081e68a7"}));