webpackJsonp([13],{HZXw:function(e,a){},KdnL:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("form",[t("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:10",expression:"'required|max:10'"}],attrs:{label:"Name",counter:10,"error-messages":e.errors.collect("name"),"data-vv-name":"name",required:""},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}}),e._v(" "),t("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{label:"E-mail","error-messages":e.errors.collect("email"),"data-vv-name":"email",required:""},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),e._v(" "),t("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{items:e.items,label:"Select","error-messages":e.errors.collect("select"),"data-vv-name":"select",required:""},model:{value:e.select,callback:function(a){e.select=a},expression:"select"}}),e._v(" "),t("v-checkbox",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{value:"1",label:"Option","error-messages":e.errors.collect("checkbox"),"data-vv-name":"checkbox",type:"checkbox",required:""},model:{value:e.checkbox,callback:function(a){e.checkbox=a},expression:"checkbox"}}),e._v(" "),t("v-btn",{on:{click:e.submit}},[e._v("submit")]),e._v(" "),t("v-btn",{on:{click:e.clear}},[e._v("clear")])],1)},staticRenderFns:[]};var i=t("VU/8")({name:"GenView",$_veeValidate:{validator:"new"},data:function(){return{name:"",email:"",select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:null,dictionary:{attributes:{email:"E-mail Address"},custom:{name:{required:function(){return"Name can not be empty"},max:"The name field may not be greater than 10 characters"},select:{required:"Select field is required"}}}}},mounted:function(){this.$validator.localize("en",this.dictionary)},methods:{submit:function(){this.$validator.validateAll()},clear:function(){this.name="",this.email="",this.select=null,this.checkbox=null,this.$validator.reset()}}},r,!1,function(e){t("HZXw")},"data-v-120e1513",null);a.default=i.exports}});
//# sourceMappingURL=13.2a38a27bbf732ed76473.js.map