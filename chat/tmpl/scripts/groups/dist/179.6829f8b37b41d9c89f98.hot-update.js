"use strict";self.webpackHotUpdateextensions(179,{245:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(4559).default;const s={components:{},data:function(){return{loading:!1,error:!1,state:!1,searchString:"",users:!1,selected:[]}},props:{},created:function(){},methods:{handlerSubmit:function(){this.$emit("submit",this.selected),this.handlerCloseForm()},handlerSelectUser:function(e){this.selected.push(e)},handlerChange:function(){this.loading=!0;var e=this;r.get("rest.php/getUser/"+this.searchString).then((function(t){t.data?t.data.error?e.error=""+t.data.msg:e.users=t.data:e.error="Fehler beim Laden. 01"})).catch((function(){e.error="Fehler beim Laden. 02"})).finally((function(){e.loading=!1}))},handlerCloseForm:function(){this.state=!1},handlerOpenForm:function(){this.state="form"}}}}},(function(e){e.h=()=>"0995cfb2f0f17f6ee607"}));