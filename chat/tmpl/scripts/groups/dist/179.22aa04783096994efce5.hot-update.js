"use strict";self.webpackHotUpdateextensions(179,{9259:(t,o,s)=>{s.d(o,{Z:()=>r});var e=s(1398);s(4559).default;const r={components:{User:e.Z},data:function(){return{}},props:{group:Array,form:Object},created:function(){},updated:function(){var t=this;this.$nextTick((function(){return t.scrollToEnd()}))},methods:{scrollToEnd:function(){var t=this.$refs.messagesContainer;t.scrollTop=t.scrollHeight,alert("scroll height is "+t.scrollHeight+" scroll Top is "+t.scrollTop)},handlerBack:function(){this.$emit("close")},handlerFormSubmit:function(){if(!this.form.msg)return!1;this.$emit("submit",this.form)}}}}},(function(t){t.h=()=>"00c8eaa1483da1559fea"}));