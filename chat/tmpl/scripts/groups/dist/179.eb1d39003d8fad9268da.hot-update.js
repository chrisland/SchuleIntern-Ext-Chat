"use strict";self.webpackHotUpdateextensions(179,{5939:(e,n,t)=>{var o=t(1931),d=t(7828);window.EventBus=new o.default,o.default.config.productionTip=!1,new o.default({el:"#app",render:function(e){return e(d.Z)}}),new WebSocket("ws://schuleintern2:12345/websockets.php").onmessage=function(e){document.getElementById("root").innerHTML=e.data}}},(function(e){e.h=()=>"7720977fd56e4b725d04"}));