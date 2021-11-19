"use strict";self.webpackHotUpdateextensions(179,{5761:(r,t,o)=>{o.d(t,{Z:()=>s});var a=o(5586),e=o(4912),n=o(6218),i=o(418),u=o(9027),d=o(4559).default;const s={components:{Groups:n.Z,Chat:u.Z,FormGroups:i.Z,Error:a.Z,Spinner:e.Z},data:function(){return{apiURL:globals.apiURL,error:!1,loading:!1,route:"groups",groups:!1,group:!1,form:{msg:""},groupForm:!1}},created:function(){this.loadGroups()},mounted:function(){},methods:{handlerSubmitFormGroup:function(r){if(!r.title)return!1;var t=new FormData;t.append("title",r.title),t.append("group_id",r.id),this.loading=!0;var o=this;d.post(this.apiURL+"/setGroup/"+r.id,t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(r){r.data?0==r.data.error?(o.loadGroups(),this.route="groups"):o.error=""+r.data.msg:o.error="Fehler beim Laden. 01"})).catch((function(){o.error="Fehler beim Laden. 02"})).finally((function(){o.loading=!1}))},handlerShowFormGroup:function(r){this.groupForm=r,this.route="form"},handlerLoadGroup:function(r){if(!r.id)return!1;this.loading=!0;var t=this;d.get(this.apiURL+"/getGroup/"+r.id).then((function(r){r.data?r.data.error?t.error=""+r.data.msg:(t.group=r.data,t.route="chat"):t.error="Fehler beim Laden. 01"})).catch((function(){t.error="Fehler beim Laden. 02"})).finally((function(){t.loading=!1}))},loadGroups:function(){this.loading=!0;var r=this;d.get(this.apiURL+"/getGroups").then((function(t){t.data?t.data.error?r.error=""+t.data.msg:(r.groups=t.data,r.route="groups"):r.error="Fehler beim Laden. 01"})).catch((function(){r.error="Fehler beim Laden. 02"})).finally((function(){r.loading=!1}))},handlerChatSubmit:function(r){if(!this.group.id||!r.msg)return!1;var t=new FormData;t.append("group_id",this.group.id),t.append("msg",r.msg),this.loading=!0;var o=this;d.post(this.apiURL+"/setMsg",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(r){r.data?0==r.data.error?r.data.msgObj&&(o.form={msg:""},o.group.chat.push(r.data.msgObj)):o.error=""+r.data.msg:o.error="Fehler beim Laden. 01"})).catch((function(){o.error="Fehler beim Laden. 02"})).finally((function(){o.loading=!1}))},handlerChatClose:function(){this.route="groups",this.group=!1}}}}},(function(r){r.h=()=>"977be0c16dc4fab84e3a"}));