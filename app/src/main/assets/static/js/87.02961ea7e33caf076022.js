webpackJsonp([87],{EtFS:function(t,e,a){"use strict";function n(t){a("hJDU")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),s=a.n(i),d=a("pKZN"),c=a("8pLc"),l=(d.a,c.a,{components:{back:d.a,noData:c.a},data:function(){return{imgs:[a("uUbC"),a("uUbC")],id:this.$route.query.id,datas:{}}},created:function(){this.getMedicalRecord()},watch:{$route:{handler:function(t,e){this.getMedicalRecord()},deep:!0}},methods:{getMedicalRecord:function(){var t=this;this.$get("SecondDiagnosisAPI/MedicalRecord/GetMedicalRecordById",{MedicalRecordId:this.id}).then(function(e){console.log(e),t.datas=e})},toGetOrder:function(){this.$bridge.callhandler("SecondTreatDetail",this.id)},toCreateReport:function(){this.$bridge.callhandler("SecondTreatReport",this.id)},toViewReport:function(){if(this.datas.MedicalReportPath){var t={title:"报告详情",linkUrl:this.datas.MedicalReportPath};this.$bridge.callhandler("showPdfReport",s()(t))}},toDetail:function(){this.$bridge.callhandler("SecondTreatCancelDetail",this.id)}}}),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pdt"},[n("div",{staticClass:"title"},[n("back"),t._v(" "),n("span",{staticClass:"name"},[t._v("订单详情")]),t._v(" "),n("a")],1),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"l"},[n("img",{staticClass:"img",attrs:{src:a("90qH"),alt:""}}),t._v(" "),n("div",{staticClass:"t"},[n("div",{staticClass:"p"},[t._v("就诊人")]),t._v(" "),n("div",{staticClass:"base"},[n("div",{staticClass:"name"},[t._v(t._s(t.datas.PatientName))]),t._v(" "),n("div",{staticClass:"sex"},[t._v(t._s(t._f("toSex")(t.datas.PatientSex)))]),t._v(" "),n("div",{staticClass:"age"},[t._v(t._s(t.datas.Age))])])])]),t._v(" "),n("div",{staticClass:"r"},[1==t.datas.MedicalStatus?n("div",{staticClass:"c"},[n("img",{attrs:{src:a("hada"),alt:""}}),t._v(" "),n("div",[t._v("待问诊")])]):t._e(),t._v(" "),2==t.datas.MedicalStatus?n("div",{staticClass:"c"},[n("img",{attrs:{src:a("4tvp"),alt:""}}),t._v(" "),n("div",[t._v("问诊中")])]):t._e(),t._v(" "),5==t.datas.MedicalStatus?n("div",{staticClass:"c"},[n("img",{attrs:{src:a("VjZy"),alt:""}}),t._v(" "),n("div",[t._v("已取消")])]):t._e(),t._v(" "),4==t.datas.MedicalStatus?n("div",{staticClass:"c"},[n("img",{attrs:{src:a("sKrP"),alt:""}}),t._v(" "),n("div",[t._v("已完成")])]):t._e()])]),t._v(" "),n("div",{staticClass:"question"},[n("div",{staticClass:"l"},[t._v("问诊类型：第二诊疗意见")]),t._v(" "),n("div",{staticClass:"l s"},[n("div",[t._v("病情描述：")]),t._v(" "),n("div",[t._v(t._s(t.datas.Description))])]),t._v(" "),n("div",{staticClass:"l"},[t._v("订单金额："+t._s(t.datas.PayAmount)+"元")]),t._v(" "),5==t.datas.MedicalStatus?n("div",{staticClass:"l s"},[n("div",[t._v("退款原因：")]),t._v(" "),n("div",[t._v(" "+t._s(t.datas.Cancellation))])]):t._e()]),t._v(" "),1==t.datas.MedicalStatus?n("div",{staticClass:"contact",on:{click:t.toGetOrder}},[t._v("\n            去接单\n        ")]):t._e(),t._v(" "),2==t.datas.MedicalStatus?n("div",{staticClass:"contact",on:{click:t.toCreateReport}},[t._v("\n            生成报告\n        ")]):t._e(),t._v(" "),4==t.datas.MedicalStatus?n("div",{staticClass:"contact",on:{click:t.toViewReport}},[t._v("\n            查看报告\n        ")]):t._e(),t._v(" "),5==t.datas.MedicalStatus?n("div",{staticClass:"contact",on:{click:t.toDetail}},[t._v("\n            查看详情\n        ")]):n("div",{staticClass:"contacts"}),t._v(" "),n("div",{staticClass:"time"},[t.datas.PayTime?n("div",{staticClass:"t"},[t._v("下单时间："+t._s(t._f("timeCut")(t.datas.PayTime)))]):t._e(),t._v(" "),t.datas.PayOrderNo?n("div",{staticClass:"t"},[t._v("订单编号："+t._s(t.datas.PayOrderNo))]):t._e(),t._v(" "),t.datas.PayNo?n("div",{staticClass:"t"},[t._v("交易流水号："+t._s(t.datas.PayNo))]):t._e()])])},o=[],v={render:r,staticRenderFns:o},b=v,f=a("VU/8"),m=n,_=f(l,b,!1,m,"data-v-8349b9ce",null);e.default=_.exports},MWOp:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.pdt[data-v-8349b9ce] {\n  background: #fff;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n}\n.info[data-v-8349b9ce] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  padding: 0.42667rem 0.4rem 0.53333rem;\n  border-top: #DDDDDD solid 0.02667rem;\n}\n.info .l[data-v-8349b9ce] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n}\n.info .l .img[data-v-8349b9ce] {\n      width: 1.12rem;\n      height: 1.12rem;\n      border-radius: 50%;\n}\n.info .l .t[data-v-8349b9ce] {\n      margin-left: 0.21333rem;\n}\n.info .l .t .p[data-v-8349b9ce] {\n        color: #333333;\n        font-size: 16px;\n        font-weight: 600;\n        line-height: 0.66667rem;\n}\n.info .l .t .base[data-v-8349b9ce] {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n                align-items: center;\n        line-height: 0.45333rem;\n}\n.info .l .t .base .name[data-v-8349b9ce] {\n          color: #333333;\n          font-size: 13px;\n}\n.info .l .t .base .sex[data-v-8349b9ce] {\n          color: #999999;\n          font-size: 13px;\n          margin: 0 0.21333rem;\n}\n.info .l .t .base .age[data-v-8349b9ce] {\n          color: #999999;\n          font-size: 13px;\n}\n.info .r[data-v-8349b9ce] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n}\n.info .r .c[data-v-8349b9ce] {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: start;\n      -webkit-justify-content: flex-start;\n              justify-content: flex-start;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n              align-items: center;\n      height: 0.37333rem;\n}\n.info .r .c img[data-v-8349b9ce] {\n        width: 0.4rem;\n        height: 0.37333rem;\n}\n.info .r .c div[data-v-8349b9ce] {\n        font-size: 15px;\n        color: #3A66FF;\n        margin-left: 0.08rem;\n}\n.question[data-v-8349b9ce] {\n  margin: 0 0.4rem;\n  padding: 0.26667rem 0.26667rem 0.08rem;\n  background: #F3F7FF;\n}\n.question .l[data-v-8349b9ce] {\n    line-height: 0.58667rem;\n    margin-bottom: 0.21333rem;\n    color: #333333;\n    font-size: 16px;\n}\n.question .s[data-v-8349b9ce] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n}\n.question .s div[data-v-8349b9ce]:nth-child(1) {\n      -webkit-flex-shrink: 0;\n              flex-shrink: 0;\n}\n.contact[data-v-8349b9ce] {\n  width: 2.61333rem;\n  height: 1.06667rem;\n  margin: 0.8rem auto 0.8rem;\n  color: #3A66FF;\n  border: 0.02667rem solid #3179ff;\n  text-align: center;\n  line-height: 1.01333rem;\n  border-radius: 0.10667rem;\n}\n.contacts[data-v-8349b9ce] {\n  width: 2.61333rem;\n  height: 1.06667rem;\n  margin: 0.8rem auto 0.8rem;\n  text-align: center;\n  line-height: 1.01333rem;\n  border-radius: 0.10667rem;\n}\n.time[data-v-8349b9ce] {\n  padding: 0 0.4rem 0;\n}\n.time .t[data-v-8349b9ce] {\n    font-size: 13px;\n    color: #666666;\n    line-height: 0.48rem;\n    margin-bottom: 0.10667rem;\n}\n",""])},hJDU:function(t,e,a){var n=a("MWOp");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("55eb3a79",n,!0,{})}});