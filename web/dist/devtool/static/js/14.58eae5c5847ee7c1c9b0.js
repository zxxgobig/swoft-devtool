webpackJsonp([14],{"+jm0":function(e,t){},JDt0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("4YfN"),i=n.n(s),v=n("jwle"),a=n.n(v),r=n("KatZ"),c=n("ZXMi"),l={name:"AppEvents",components:i()({VChip:a.a},r),data:function(){return{selected:"(please select a event)",events:[],eventListeners:[],allListeners:{}}},created:function(){this.fetchList()},mounted:function(){},computed:{},methods:{fetchList:function(){var e=this;Object(c.e)().then(function(t){var n=t.data;e.events=n})},fetchListeners:function(e){var t=this;this.selected=e,this.allListeners.hasOwnProperty(e)?this.eventListeners=this.allListeners[e]:Object(c.e)(e).then(function(n){var s=n.data;t.allListeners[e]=s,t.eventListeners=s})}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-subheader",[n("h1",[e._v(e._s(this.$route.name))])]),e._v(" "),n("v-layout",[n("v-flex",{attrs:{"d-flex":"",xs12:"",sm5:""}},[n("v-card",[n("v-card-title",{staticClass:"title grey lighten-3"},[e._v("\n          Listened Events (total: "),n("code",[e._v(e._s(e.events.length))]),e._v(")\n        ")]),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",{staticClass:"pa-2"},e._l(e.events,function(t){return n("v-chip",{key:t,attrs:{label:"",outline:""},on:{click:function(n){e.fetchListeners(t)}}},[e._v("\n            "+e._s(t)+"\n          ")])}))],1)],1),e._v(" "),n("v-flex",{attrs:{"d-flex":"",xs12:"",sm7:""}},[n("v-card",[n("v-card-title",{staticClass:"title green lighten-5"},[e._v("\n          Listeners of the event: "),n("code",[e._v(e._s(e.selected))]),e._v(" (total: "),n("code",[e._v(e._s(e.eventListeners.length))]),e._v(")\n        ")]),e._v(" "),n("v-divider"),e._v(" "),n("v-list",{staticClass:"pa-2",attrs:{dense:""}},e._l(e.eventListeners,function(t){return n("v-list-tile",{key:t},[n("v-list-tile-content",[n("code",[e._v(e._s(t))])])],1)}))],1)],1)],1)],1)},staticRenderFns:[]};var o=n("Z0/y")(l,d,!1,function(e){n("+jm0")},"data-v-58d7c735",null);t.default=o.exports}});
//# sourceMappingURL=14.58eae5c5847ee7c1c9b0.js.map