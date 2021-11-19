"use strict";self.webpackHotUpdateextensions(179,{5761:(r,o,t)=>{t.d(o,{Z:()=>l});var e=t(5586),a=t(4912),n=t(6218),i=t(9027),s=t(5476),u=t.n(s),d=t(4559).default;const l={components:{Groups:n.Z,Chat:i.Z,Error:e.Z,Spinner:a.Z},data:function(){return{apiURL:globals.apiURL,error:!1,loading:!1,route:"groups",groups:!1,group:!1,form:{msg:""}}},created:function(){this.loadGroups()},mounted:function(){},methods:{handlerLoadGroup:function(r){if(!r.id)return!1;this.loading=!0;var o=this;d.get(this.apiURL+"/getGroup/"+r.id).then((function(r){if(r.data)if(r.data.error)o.error=""+r.data.msg;else{o.group=r.data,o.route="chat";var t=document.querySelector(".main-footer");console.log(t),console.log(u());var e=u().scrollTo(t,0);console.log(e)}else o.error="Fehler beim Laden. 01"})).catch((function(){o.error="Fehler beim Laden. 02"})).finally((function(){o.loading=!1}))},loadGroups:function(){this.loading=!0;var r=this;d.get(this.apiURL+"/getGroups").then((function(o){o.data?o.data.error?r.error=""+o.data.msg:(r.groups=o.data,r.route="groups"):r.error="Fehler beim Laden. 01"})).catch((function(){r.error="Fehler beim Laden. 02"})).finally((function(){r.loading=!1}))},handlerChatSubmit:function(r){if(!this.group.id||!r.msg)return!1;var o=new FormData;o.append("group_id",this.group.id),o.append("msg",r.msg),this.loading=!0;var t=this;d.post(this.apiURL+"/setMsg",o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(r){r.data?0==r.data.error?r.data.msgObj&&(t.form={msg:""},t.group.chat.push(r.data.msgObj)):t.error=""+r.data.msg:t.error="Fehler beim Laden. 01"})).catch((function(){t.error="Fehler beim Laden. 02"})).finally((function(){t.loading=!1}))},handlerChatClose:function(){this.route="groups",this.group=!1}}}}},(function(r){r.h=()=>"c99c8435063e658f343a"}));