webpackJsonp([81],{W2xS:function(t,s,e){var i=e("nVQa");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("8879f100",i,!0,{})},lgXj:function(t,s,e){"use strict";function i(t){e("W2xS")}Object.defineProperty(s,"__esModule",{value:!0});var n=e("pKZN"),a=(n.a,{components:{back:n.a},data:function(){return{id:this.$route.query.id,ListDetails:[],Diagnoses:null,user:this.$store.state.userInfo,showConfirm:!1,popIdx:null,timer:null}},created:function(){var t=this;this.timer=setInterval(function(){t.$bridge.registerhandler("confirmBack",function(s,e){e("cantBack"),t.$refs.back.back()})},50);var s=this.$store.state.pullFlag;if(this.id&&!s)this.$post("Prescription/Prescription/GetPrescriptionOftenUsed",{Id:this.id}).then(function(s){t.$store.dispatch("pushpullFlag",1),t.Diagnoses=s.Diagnoses,t.ListDetails=s.ListDetails});else{var e=this.$store.state,i=e.upList,n=e.Diagnoses;e.saveFlag;this.ListDetails=i,this.Diagnoses=n}console.log(this.$store.state.upList)},beforeDestroy:function(){clearInterval(this.timer),this.$store.dispatch("pushupList",this.ListDetails),this.$store.dispatch("pushDiagnoses",this.Diagnoses)},methods:{pop:function(t){this.showConfirm=!0,this.popIdx=t},modify:function(t){this.$store.dispatch("pushcMed",this.ListDetails[t]),this.$router.push("/modifyCon?idx="+t+"&&back=-1")},toUm:function(){this.$store.dispatch("pushisUp",0),this.$store.dispatch("pushisShowXC",!0),this.$router.push("/pharmacy?from=up")},save:function(){var t=this;if(this.$store.dispatch("pushpullFlag",0),!this.ListDetails.length)return this.$toast("请添加药品");if(!this.Diagnoses)return this.$toast("请填写临床诊断");if(!this.ListDetails)return this.$toast("请选择药品");var s=[];this.ListDetails.forEach(function(t){var e={};e.MedicationId=t.Id,e.UsageTimeId=t.UsageTimeId,e.UsageTime=t.UsageTime,e.UsageMethodId=t.UsageMethodId,e.UsageMethod=t.UsageMethod,e.PackageUnitId=t.PackageUnitId,e.PackageUnit=t.PackageUnit,e.DayDosageId=t.DayDosageId,e.DayDosage=t.DayDosage,e.Dosage=t.Dosage,e.DosageUnitId=t.DosageUnitId,e.DosageUnit=t.DosageUnit,e.Quantity=t.Quantity,e.Remark=t.Remark,e.DosageDaysId=t.DosageDaysId,e.DosageDays=t.DosageDays,s.push(e)}),this.$post("Prescription/Prescription/SavePrescriptionOftenUsed",this.$pick({id:this.$route.query.id,DoctorId:this.user.Data.User.DoctorId,OrgId:this.user.Data.User.OrgId,Diagnoses:this.Diagnoses,ListDetails:s})).then(function(s){t.ListDetails=null,t.Diagnoses="",t.$store.dispatch("pushisShowXC",!1),t.$store.dispatch("pushisUp",1),t.$store.dispatch("pushpullTemp",0),t.$router.push("/pharmacy?back=2")})},confirm:function(){this.ListDetails.splice(this.popIdx,1)}}}),o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pdt"},[e("div",{staticClass:"title"},[e("back",{ref:"back",attrs:{tip:!0}}),t._v(" "),e("span",{staticClass:"name"},[t._v("常用处方详情")]),t._v(" "),e("span",{staticClass:"save",on:{click:t.save}},[t._v("保存")])],1),t._v(" "),e("div",{staticClass:"diagnosis"},[e("p",[t._v("临床诊断")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.Diagnoses,expression:"Diagnoses"}],attrs:{type:"text",placeholder:"请输入临床诊断"},domProps:{value:t.Diagnoses},on:{input:function(s){s.target.composing||(t.Diagnoses=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"prescription"},[e("h2",[t._v("RP")]),t._v(" "),t._l(t.ListDetails,function(s,i){return e("div",{key:i,staticClass:"med"},[e("p",[e("span",[t._v(t._s(s.Name)+" "+t._s(s.Specification))]),t._v(" "),e("span",[t._v("x"+t._s(s.Quantity))])]),t._v(" "),e("p",{staticClass:"gray"},[t._v("\n                    用法："+t._s(s.DayDosage)+"，\n                    一次"+t._s(0==s.Dosage?"":s.Dosage)+t._s(s.DosageUnit)+"，\n                    "+t._s(s.UsageTime)+t._s(s.UsageMethod)+"\n                     "),s.DosageDays?e("span",[t._v("用药"+t._s(s.DosageDays))]):t._e(),t._v("\n                    "+t._s(s.Remark)+"\n                ")]),t._v(" "),e("p",{staticClass:"gray"},[t._v("\n\t\t\t\t    "+t._s(s.MedicationCompanyName)+"提供\n\t\t\t\t")]),t._v(" "),e("div",{staticClass:"operate"},[e("span",{on:{click:function(s){t.modify(i)}}},[t._v("修改用量")]),t._v(" "),e("span",{on:{click:function(s){t.pop(i)}}},[t._v("删除")])])])}),t._v(" "),t.ListDetails.length<5?e("div",{staticClass:"btn",on:{click:t.toUm}},[t._v("添加药品")]):t._e()],2),t._v(" "),e("confirm",{on:{"on-cancel":function(s){t.showConfirm=!1},"on-confirm":t.confirm},model:{value:t.showConfirm,callback:function(s){t.showConfirm=s},expression:"showConfirm"}},[t._v("确定删除该药品吗？")])],1)},r=[],c={render:o,staticRenderFns:r},d=c,p=e("VU/8"),l=i,f=p(a,d,!1,l,"data-v-8f61f17a",null);s.default=f.exports},nVQa:function(t,s,e){var i=e("kxFB");s=t.exports=e("FZ+f")(!1),s.push([t.i,"\n.title[data-v-8f61f17a] {\n  background: #fff;\n  height: 1.2rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.title i[data-v-8f61f17a] {\n    display: block;\n    height: 0.46667rem;\n    width: 0.26667rem;\n    background: url("+i(e("P9/e"))+") no-repeat center;\n    background-size: cover;\n}\n.title .name[data-v-8f61f17a] {\n    font-size: 17px;\n}\n.diagnosis[data-v-8f61f17a] {\n  background: #fff;\n  padding: 0.4rem;\n  margin: 0.26667rem 0;\n}\n.diagnosis p[data-v-8f61f17a] {\n    height: 0.66667rem;\n    line-height: 0.66667rem;\n    font-size: 15px;\n    color: #656565;\n    text-align: center;\n}\n.diagnosis input[data-v-8f61f17a] {\n    height: 0.8rem;\n    background: #f4f4f4;\n    width: 100%;\n    border-radius: 20px;\n    padding: 0 0.4rem;\n    margin: 0.26667rem 0;\n}\n.diagnosis .main[data-v-8f61f17a] {\n    border: 1px solid red;\n}\n.prescription[data-v-8f61f17a] {\n  background: #fff;\n  padding: 0.4rem;\n}\n.prescription h2[data-v-8f61f17a] {\n    font-weight: bold;\n}\n.prescription .med[data-v-8f61f17a] {\n    padding: 0.26667rem 0;\n}\n.prescription .med p[data-v-8f61f17a] {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n              justify-content: space-between;\n      padding: 0.13333rem 0;\n}\n.prescription .operate[data-v-8f61f17a] {\n    padding: 0.26667rem 0 0;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n}\n.prescription .operate span[data-v-8f61f17a] {\n      display: block;\n      width: 2.13333rem;\n      height: 0.86667rem;\n      line-height: 0.86667rem;\n      border: 1px solid #2a6dc9;\n      color: #2a6dc9;\n      text-align: center;\n      border-radius: 20px;\n      margin-right: 0.26667rem;\n}\n.prescription .gray[data-v-8f61f17a] {\n    color: #626262;\n}\n.prescription .btn[data-v-8f61f17a] {\n    width: 90%;\n    height: 1.2rem;\n    line-height: 1.2rem;\n    text-align: center;\n    color: #fff;\n    background: #2a6dc9;\n    margin: auto;\n    border-radius: 30px;\n    margin-top: 0.93333rem;\n}\n",""])}});