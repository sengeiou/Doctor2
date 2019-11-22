webpackJsonp([66],{"1U4n":function(n,e,t){"use strict";function a(n){t("BUtw")}Object.defineProperty(e,"__esModule",{value:!0});var i=t("pKZN"),s=t("8pLc"),r=(s.a,i.a,{components:{noData:s.a,back:i.a},data:function(){return{list:[],page:1,Patient:this.$store.state.patient,user:this.$store.state.userInfo.Data,haveMore:!0}},created:function(){this.pull(!1)},mounted:function(){this.getMore()},beforeDestroy:function(){window.onscroll=null},methods:{pull:function(n){var e=this;this.haveMore&&this.$post("Prescription/Prescription/GetPrescriptionListByDoctorId",{PatientId:this.Patient.PatientId,DoctorId:this.user.User.DoctorId,PageIndex:this.page,PageSize:15}).then(function(t){!t.ReturnData||t.ReturnData.length<15?e.haveMore=!1:e.haveMore=!0,n?t.ReturnData.forEach(function(n){e.list.push(n)}):e.list=t.ReturnData})},toPre:function(n){var e=this;this.$post("Prescription/Pharmacy/SetMyMedicationCompany",{MedicationCompanyId:n.MedicationCompanyId,DoctorId:this.user.User.DoctorId}).then(function(t){e.$store.dispatch("pushpreNo",null),e.$store.dispatch("pushpullFlag",0),e.$store.dispatch("pushDiagnoses2",n.Diagnoses),e.$store.dispatch("pushupList",n.ListDetails),e.$router.push("/prescription?rejectId="+n.Id)})},getMore:function(){var n=this,e=this.$refs.el,t=null;window.onscroll=function(){clearTimeout(t),t=setTimeout(function(){var t=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;e.scrollHeight-t-window.innerHeight<100&&n.haveMore&&(n.page+=1,n.pull(!0))},100)}}}}),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"el",staticClass:"container pdt"},[t("div",{staticClass:"title tran"},[t("back"),n._v(" "),t("span",{staticClass:"name"},[n._v("历史处方")]),n._v(" "),t("a")],1),n._v(" "),t("div",{staticClass:"parent"},[n._l(n.list,function(e,a){return t("div",{key:a,staticClass:"card"},[t("div",{staticClass:"user"},[t("p",[t("span",[t("span",{staticClass:"gray"},[n._v("姓名：")]),n._v("\n                            "+n._s(e.PatientName)+"\n                        ")]),n._v(" "),t("span",[t("span",{staticClass:"gray"},[n._v("性别：")]),n._v("\n                            "+n._s(n._f("toSex")(e.PatientSex))+"\n                        ")]),n._v(" "),t("span",[t("span",{staticClass:"gray"},[n._v("年龄：")]),n._v("\n                            "+n._s(e.Age)+"\n                        ")])]),n._v(" "),t("p",[t("span",{staticClass:"gray of"},[n._v("临床诊断："+n._s(e.Diagnoses))])]),n._v(" "),t("p",[t("span",[t("span",{staticClass:"gray"},[n._v("时间：")]),n._v("\n                            "+n._s(e.PrescribeTime)+"\n                        ")])])]),n._v(" "),n._l(e.ListDetails,function(e,a){return t("div",{key:a,staticClass:"medicine"},[t("p",[t("span",[n._v(n._s(e.Name)+"  "),e.Brand?t("span",[n._v("("+n._s(e.Brand)+")")]):n._e()]),n._v(" "),t("span",[n._v("x"+n._s(e.Quantity))])]),n._v(" "),t("span",{staticClass:"specifications"},[n._v("规格："+n._s(e.Specification))]),n._v(" "),t("span",{staticClass:"specifications"},[n._v("\n                        用法："+n._s(e.UsageTime)+n._s(e.UsageMethod)+"，每次"+n._s(0==e.Dosage?"":e.Dosage)+n._s(e.DosageUnit)+"，"+n._s(e.DayDosage)+" "),e.DosageDays?t("span",[n._v("用药"+n._s(e.DosageDays))]):n._e(),n._v(" "+n._s(e.Remark)+"\n                    ")])])}),n._v(" "),t("p",{staticClass:"btnLine"},[t("i",[n._v(n._s(0==e.Status?"待审核":1==e.Status?"审核通过":2==e.Status?"审核不通过":3==e.Status?"已撤回":""))]),n._v(" "),t("span",{staticClass:"btn",on:{click:function(t){n.toPre(e)}}},[n._v("续方")])])],2)}),n._v(" "),n.list.length?n._e():t("no-data",{attrs:{txt:"暂无用药记录"}})],2)])},c=[],d={render:o,staticRenderFns:c},l=d,p=t("VU/8"),b=a,f=p(r,l,!1,b,"data-v-e1b4b51c",null);e.default=f.exports},BUtw:function(n,e,t){var a=t("IRxd");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("61d43e25",a,!0,{})},IRxd:function(n,e,t){e=n.exports=t("FZ+f")(!1),e.push([n.i,"\n.container[data-v-e1b4b51c] {\n  font-size: 14px;\n}\n.limit[data-v-e1b4b51c] {\n  background: #fff;\n  padding: 1.33333rem 0;\n}\n.limit p[data-v-e1b4b51c] {\n    text-align: center;\n}\n.patient[data-v-e1b4b51c] {\n  height: 1.06667rem;\n  background: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  padding: 0 0.4rem;\n  margin: 0.05333rem 0 0.26667rem;\n}\n.patient span[data-v-e1b4b51c] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n}\n.parent[data-v-e1b4b51c] {\n  background: #fff;\n  padding: 0 0.4rem 0.4rem;\n}\n.parent .cardTitle[data-v-e1b4b51c] {\n    padding: 0.4rem 0.13333rem;\n}\n.parent .choice[data-v-e1b4b51c] {\n    text-align: center;\n    color: #666;\n}\n.parent .goPre[data-v-e1b4b51c] {\n    display: block;\n    width: 2.66667rem;\n    height: 0.8rem;\n    line-height: 0.8rem;\n    background: #3069cf;\n    color: #fff;\n    border-radius: 0.53333rem;\n    text-align: center;\n    margin: 0.26667rem auto;\n}\n.parent .card[data-v-e1b4b51c] {\n    background: #fff;\n    border-radius: 10px;\n    border: 1px solid #ececec;\n    padding: 0 0.4rem;\n    margin-bottom: 0.4rem;\n}\n.parent .card .user[data-v-e1b4b51c] {\n      min-height: 2.46667rem;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n              flex-direction: column;\n      -webkit-justify-content: space-around;\n              justify-content: space-around;\n      padding: 0.4rem 0;\n      border-bottom: 1px solid #ececec;\n}\n.parent .card p[data-v-e1b4b51c] {\n      min-height: 0.66667rem;\n      padding: 0 0.13333rem;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n              justify-content: space-between;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n              align-items: center;\n}\n.parent .card span[data-v-e1b4b51c] {\n      min-width: 35%;\n}\n.parent .card .of[data-v-e1b4b51c] {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical;\n}\n.parent .card h2[data-v-e1b4b51c] {\n      padding: 0.13333rem 0 0;\n      font-weight: bold;\n}\n.parent .card .btnLine[data-v-e1b4b51c] {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n              justify-content: space-between;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n              align-items: center;\n      border-top: 1px solid #ececec;\n      padding-top: 0;\n      padding-bottom: 0.26667rem;\n      margin-top: 0.4rem;\n}\n.parent .card .btnLine i[data-v-e1b4b51c] {\n        font-style: normal;\n        color: red;\n}\n.parent .card .btn[data-v-e1b4b51c] {\n      display: block;\n      width: 2.66667rem;\n      height: 0.8rem;\n      line-height: 0.8rem;\n      background: #3069cf;\n      color: #fff;\n      border-radius: 0.53333rem;\n      text-align: center;\n      margin: 0.26667rem 0.4rem 0 0;\n}\n.parent .card .medicine[data-v-e1b4b51c] {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n              flex-direction: column;\n      padding: 0.26667rem 0;\n}\n.parent .card .medicine span[data-v-e1b4b51c] {\n        min-width: 0;\n}\n.parent .card .medicine .specifications[data-v-e1b4b51c] {\n        font-size: 12px;\n        color: #626262;\n        padding: 0 0.13333rem;\n}\n.appeal[data-v-e1b4b51c] {\n  background: #fff;\n  padding: 0 0.4rem 0.26667rem;\n  border-top: 1px solid #ececec;\n  margin-top: 0.13333rem;\n}\n.appeal textarea[data-v-e1b4b51c] {\n    width: 90%;\n    display: block;\n    margin: 0.26667rem auto;\n    height: 1.86667rem;\n    border-radius: 10px;\n    resize: none;\n    padding: 0.4rem;\n}\n.cont[data-v-e1b4b51c] {\n  font-size: 14px;\n}\n.cont button[data-v-e1b4b51c] {\n    width: 80%;\n    display: block;\n    margin: 0.66667rem auto;\n    height: 1.06667rem;\n    color: #3069cf;\n    border: 1px solid #3069cf;\n    background: transparent;\n    border-radius: 20px;\n}\n.cont .tip[data-v-e1b4b51c] {\n    color: #999;\n    font-size: 12px;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n            justify-content: flex-end;\n    padding: 0.13333rem 0 0;\n}\n.cont .tit[data-v-e1b4b51c] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    padding: 0.26667rem 0;\n    border-bottom: 1px solid #ececec;\n    margin-bottom: 0.26667rem;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    font-size: 16px;\n    color: #666;\n}\n.cont .accept[data-v-e1b4b51c] {\n    background: #fff;\n    padding: 0.26667rem 0.4rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n}\n.cont .accept .blue[data-v-e1b4b51c] {\n      color: #3069cf;\n}\n.cont textarea[data-v-e1b4b51c] {\n    font-size: 0.37333rem;\n}\n",""])}});