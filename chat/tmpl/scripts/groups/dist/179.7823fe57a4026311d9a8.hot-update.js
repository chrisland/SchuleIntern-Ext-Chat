"use strict";self.webpackHotUpdateextensions(179,{9259:(o,t,s)=>{s.d(t,{Z:()=>c});var n=s(1398);s(4559).default;const c={components:{User:n.Z},data:function(){return{}},props:{group:Array,form:Object},created:function(){},updated:function(){var o=this;this.$nextTick((function(){return o.scrollToEnd()}))},watch:{group:function(o){console.log(o),this.scrollToEnd()}},methods:{scrollToEnd:function(){var o=this.$refs.messagesContainer;o.scrollTop=o.scrollHeight,console.log("scroll height is "+o.scrollHeight+" scroll Top is "+o.scrollTop)},handlerBack:function(){this.$emit("close")},handlerFormSubmit:function(){if(!this.form.msg)return!1;this.$emit("submit",this.form)}}}}},(function(o){o.h=()=>"cd574d1cfcb343b4661c"}));