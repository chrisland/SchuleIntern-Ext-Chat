"use strict";self.webpackHotUpdateextensions(179,{9259:(t,r,e)=>{e.d(r,{Z:()=>i});var n=e(1398),o=e(4559).default;const i={components:{User:n.Z},data:function(){return{apiURL:globals.apiURL,error:!1,interval:!1}},props:{group:Array,form:Object,loading:Boolean},created:function(){var t=this;this.interval=setInterval((function(){t.group.id&&o.get(t.apiURL+"/getChat/"+t.group.id).then((function(r){r.data?r.data.error?t.error=""+r.data.msg:t.group.chat=r.data:t.error="Fehler beim Laden. 01"})).catch((function(){t.error="Fehler beim Laden. 02"})).finally((function(){}))}),3e3)},updated:function(){var t=this;this.$nextTick((function(){return t.scrollToEnd()}))},watch:{loading:{immediate:!0,handler:function(t,r){this.scrollToEnd()}}},methods:{scrollToEnd:function(){var t=this.$refs.messagesContainer;t&&(t.scrollTop=t.scrollHeight)},handlerBack:function(){this.$emit("close")},handlerFormSubmit:function(){if(!this.form.msg)return!1;this.$emit("submit",this.form)}}}}},(function(t){t.h=()=>"0b5dfa8d6789b71b0429"}));