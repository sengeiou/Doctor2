webpackJsonp([122],{"7yGB":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"\n.search[data-v-4aa9f3dc] {\n  height: 1.33333rem;\n  background: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  position: relative;\n  border: 1px solid #ececec;\n  border-bottom: none;\n}\n.search input[data-v-4aa9f3dc] {\n    height: 60%;\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    margin: 0 0.4rem;\n    background: #fff;\n    border-radius: 30px;\n    padding: 0 0.4rem;\n    border: 1px solid #ececec;\n}\n.search .sBtn[data-v-4aa9f3dc] {\n    min-width: 1.6rem;\n    height: 0.8rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    background: #306bce;\n    color: #fff;\n    border-radius: 10px;\n    margin: 0 0.26667rem;\n}\n.referral-record[data-v-4aa9f3dc] {\n  background-color: #fff;\n}\n.referral-record .list[data-v-4aa9f3dc] {\n    padding: 0.53333rem 0.26667rem;\n    border-top: 0.01333rem #eee solid;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n}\n.referral-record .list .img[data-v-4aa9f3dc] {\n      width: 1.2rem;\n      height: 1.2rem;\n      position: relative;\n}\n.referral-record .list .img img[data-v-4aa9f3dc] {\n        display: block;\n        width: 1.2rem;\n        height: 1.2rem;\n        display: block;\n        border-radius: 50%;\n        box-flex: 1;\n        -webkit-box-flex: 1;\n        -webkit-flex: 1;\n                flex: 1;\n}\n.referral-record .list .img i[data-v-4aa9f3dc] {\n        width: 0.26667rem;\n        height: 0.26667rem;\n        background-color: red;\n        border-radius: 50%;\n        display: block;\n        position: absolute;\n        right: 0rem;\n        top: 0rem;\n}\n.referral-record .list .r-middle[data-v-4aa9f3dc] {\n      box-flex: 1;\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n              flex: 1;\n      margin-left: 0.2rem;\n}\n.referral-record .list .r-middle span[data-v-4aa9f3dc] {\n        font-size: 16px;\n        color: #333333;\n}\n.referral-record .list .r-middle span i[data-v-4aa9f3dc] {\n          font-size: 13px;\n          color: #999999;\n          font-style: normal;\n}\n.referral-record .list .r-middle p[data-v-4aa9f3dc] {\n        font-size: 13px;\n        color: #555555;\n        margin-top: 0.26667rem;\n}\n.referral-record .list .r-right[data-v-4aa9f3dc] {\n      text-align: right;\n}\n.referral-record .list .r-right p[data-v-4aa9f3dc] {\n        font-size: 14px;\n        color: #2e69cd;\n        margin-top: 0.26667rem;\n        width: 2.13333rem;\n        text-align: center;\n        line-height: 0.8rem;\n        border: 1px #2e69cd solid;\n        border-radius: 0.13333rem;\n        font-style: normal;\n}\n",""])},gqJv:function(e,t,n){"use strict";function r(e){n("hcaq")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("8pLc"),i=n("pKZN"),o=(a.a,i.a,{components:{noData:a.a,back:i.a},data:function(){return{list:[],DrId:null==this.$store.state.userInfo?18:this.$store.state.userInfo.Data.User.DoctorId,pageShow:!1,page:1,haveMore:!0,totalNum:0,search:"",defaultImg:'this.src="'+n("tyKI")+'"'}},created:function(){this.getReferralRecord(!1)},mounted:function(){this.getMore()},beforeDestroy:function(){window.onscroll=null},methods:{getReferralRecord:function(e){var t=this;this.haveMore&&this.$post("/PlatFormAPI/DoctorPatient/QueryDoctorPatientPage",{DrId:this.DrId,DrName:"",PatientId:-1,PatientName:this.search,RelationStatus:1,IsDrKey:-1,IsPatientMain:-1,PageIndex:this.page,PageSize:this.size}).then(function(n){t.pageShow=!0,!n.ReturnData||n.ReturnData.length<10?t.haveMore=!1:t.haveMore=!0,e?n.ReturnData.forEach(function(e){t.list.push(e)}):t.list=n.ReturnData,t.totalNum=n.Total})},getMore:function(){var e=this,t=this.$refs.el,n=null;window.onscroll=function(){clearTimeout(n),n=setTimeout(function(){var n=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;t.scrollHeight-n-window.innerHeight<100&&e.haveMore&&(e.page+=1,e.getReferralRecord(!0))},100)}},searchFor:function(){this.inputFlag||(this.haveMore=!0,this.page=1,this.getReferralRecord(!1))},keepInfo:function(e){this.$store.dispatch("pushpatient",e),this.$router.push("/archives")},choosePatient:function(e){this.$router.push({path:"/chooseDr",query:{PatientId:e.PatientId,PatientName:e.PatientName,SpecialistHosGroupId:this.$route.query.SpecialistHosGroupId,HosGroupName:this.$route.query.HosGroupName}})}}}),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"el",staticClass:"pdt"},[r("div",{staticClass:"title"},[r("back"),e._v(" "),r("span",{staticClass:"name"},[e._v("选择患者("+e._s(e.totalNum)+")")]),e._v(" "),r("a")],1),e._v(" "),r("div",{staticClass:"search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"search",placeholder:"输入患者姓名"},domProps:{value:e.search},on:{compositionend:function(t){e.inputFlag=!1},compositionstart:function(t){e.inputFlag=!0},input:[function(t){t.target.composing||(e.search=t.target.value)},e.searchFor],keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.searchFor(t):null}}}),e._v(" "),r("span",{staticClass:"sBtn",on:{click:e.searchFor}},[e._v("搜索")])]),e._v(" "),!e.list.length&&e.pageShow?r("no-data",{attrs:{txt:"无转诊患者数据"}}):e._e(),e._v(" "),r("div",{staticClass:"referral-record"},e._l(e.list,function(t,a){return e.list?r("div",{key:a,staticClass:"list clearfix",on:{click:function(n){e.keepInfo(t)}}},[r("div",{staticClass:"img"},[t.PaPicturePath?r("img",{attrs:{onerror:e.defaultImg,src:t.PaPicturePath}}):r("img",{attrs:{src:n("tyKI")}})]),e._v(" "),r("div",{staticClass:"r-middle"},[r("span",[e._v(e._s(t.PatientName)+" "),r("i",[e._v(e._s(1==t.PatientSex?"男":2==t.PatientSex?"女":"未知")+" "+e._s(t.Age))])]),e._v(" "),r("p",[e._v(e._s(t.Disease))])]),e._v(" "),r("div",{staticClass:"r-right"},[r("p",{on:{click:function(n){n.stopPropagation(),e.choosePatient(t)}}},[e._v("转诊")])])]):e._e()}))],1)},c=[],l={render:s,staticRenderFns:c},d=l,f=n("VU/8"),u=r,p=f(o,d,!1,u,"data-v-4aa9f3dc",null);t.default=p.exports},hcaq:function(e,t,n){var r=n("7yGB");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("3228309c",r,!0,{})}});