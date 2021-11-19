"use strict";self.webpackHotUpdateextensions(179,{5761:(r,t,e)=>{e.d(t,{Z:()=>d});var a=e(5586),o=e(4912),n=e(6218),i=e(9027),s=e(4559).default;const d={components:{Groups:n.Z,Chat:i.Z,Error:a.Z,Spinner:o.Z},data:function(){return{apiURL:globals.apiURL,error:!1,loading:!1,route:"groups",groups:!1,group:!1,form:{msg:""}}},created:function(){this.loadGroups(),new WebSocket("ws://<<<IP_OF_YOUR_SERVER>>>:12345/websockets.php").onmessage=function(r){document.getElementById("root").innerHTML=r.data}},mounted:function(){},methods:{handlerLoadGroup:function(r){if(!r.id)return!1;this.loading=!0;var t=this;s.get(this.apiURL+"/getGroup/"+r.id).then((function(r){r.data?r.data.error?t.error=""+r.data.msg:(t.group=r.data,t.route="chat"):t.error="Fehler beim Laden. 01"})).catch((function(){t.error="Fehler beim Laden. 02"})).finally((function(){t.loading=!1}))},loadGroups:function(){this.loading=!0;var r=this;s.get(this.apiURL+"/getGroups").then((function(t){t.data?t.data.error?r.error=""+t.data.msg:(r.groups=t.data,r.route="groups"):r.error="Fehler beim Laden. 01"})).catch((function(){r.error="Fehler beim Laden. 02"})).finally((function(){r.loading=!1}))},handlerChatSubmit:function(r){if(!this.group.id||!r.msg)return!1;var t=new FormData;t.append("group_id",this.group.id),t.append("msg",r.msg),this.loading=!0;var e=this;s.post(this.apiURL+"/setMsg",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(r){r.data?0==r.data.error?r.data.msgObj&&(e.form={msg:""},e.group.chat.push(r.data.msgObj)):e.error=""+r.data.msg:e.error="Fehler beim Laden. 01"})).catch((function(){e.error="Fehler beim Laden. 02"})).finally((function(){e.loading=!1}))},handlerChatClose:function(){this.route="groups",this.group=!1}}}}},(function(r){r.h=()=>"a428def6c2aa311f7b0f"}));