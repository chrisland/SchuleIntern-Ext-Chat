"use strict";self.webpackHotUpdateextensions(179,{5761:(e,o,r)=>{r.d(o,{Z:()=>c});var t=r(5586),n=r(4912),a=r(6218),i=r(9027),s=r(5476),u=r.n(s),d=r(4559).default,l={container:"#container",easing:"ease-in",lazy:!1,offset:-60,force:!0,cancelable:!0,onStart:function(e){},onDone:function(e){},onCancel:function(){},x:!1,y:!0};const c={components:{Groups:a.Z,Chat:i.Z,Error:t.Z,Spinner:n.Z},data:function(){return{apiURL:globals.apiURL,error:!1,loading:!1,route:"groups",groups:!1,group:!1,form:{msg:""}}},created:function(){this.loadGroups()},mounted:function(){},methods:{handlerLoadGroup:function(e){if(!e.id)return!1;this.loading=!0;var o=this;d.get(this.apiURL+"/getGroup/"+e.id).then((function(e){if(e.data)if(e.data.error)o.error=""+e.data.msg;else{o.group=e.data,o.route="chat";var r=document.querySelector(".list li:last-child");console.log(r),console.log(u());var t=u().scrollTo(r,0,l);console.log(t)}else o.error="Fehler beim Laden. 01"})).catch((function(){o.error="Fehler beim Laden. 02"})).finally((function(){o.loading=!1}))},loadGroups:function(){this.loading=!0;var e=this;d.get(this.apiURL+"/getGroups").then((function(o){o.data?o.data.error?e.error=""+o.data.msg:(e.groups=o.data,e.route="groups"):e.error="Fehler beim Laden. 01"})).catch((function(){e.error="Fehler beim Laden. 02"})).finally((function(){e.loading=!1}))},handlerChatSubmit:function(e){if(!this.group.id||!e.msg)return!1;var o=new FormData;o.append("group_id",this.group.id),o.append("msg",e.msg),this.loading=!0;var r=this;d.post(this.apiURL+"/setMsg",o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){e.data?0==e.data.error?e.data.msgObj&&(r.form={msg:""},r.group.chat.push(e.data.msgObj)):r.error=""+e.data.msg:r.error="Fehler beim Laden. 01"})).catch((function(){r.error="Fehler beim Laden. 02"})).finally((function(){r.loading=!1}))},handlerChatClose:function(){this.route="groups",this.group=!1}}}}},(function(e){e.h=()=>"d10b2bee96e05a176beb"}));