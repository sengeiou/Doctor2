webpackJsonp([119],{"4VJv":function(e,t,i){"use strict";function c(e){i("dH8E")}Object.defineProperty(t,"__esModule",{value:!0});var a=i("pKZN"),n=(a.a,{components:{back:a.a},data:function(){return{info:null,list:[[]],orderInfo:this.$store.state.pInfo,user:this.$store.state.userInfo,item:[],show:!1,ServiceItemName:"",Price:"",NumValue:"",Description:null,ServiceItemId:this.$route.query.ServiceItemId,customSevice:this.$store.state.customSevice,addArr:[]}},created:function(){var e=this;void 0!=this.$route.query.ServiceItemId&&this.customSevice.forEach(function(t,i){t.ServiceItemId==e.ServiceItemId&&(e.ServiceItemName=t.ServiceItemName,e.Price=Number(t.Price),e.NumValue=t.NumValue,e.Description=t.Description,e.item[0]=t.DoctorServiceWayName)}),this.pull(!1),console.log(this.customSevice)},mounted:function(){},beforeDestroy:function(){window.onscroll=null},methods:{changeNumber:function(){if(-1!=this.NumValue.indexOf("."))return this.$toast("服务次数需是整数")},pull:function(e){var t=this;this.$post("PlatFormAPI/ServicePackItem/QueryDoctorServiceWays",this.$pick({DrId:this.user.Data.User.DoctorId,DrType:this.user.Data.User.DrType})).then(function(e){t.info=e,e.forEach(function(e){t.list[0].push(e.DoctorServiceWayName)})})},send:function(e){var t=this;if(!this.ServiceItemName)return this.$toast("请输入服务名称");if(!this.Price)return this.$toast("请输入服务单价");if(!this.NumValue)return this.$toast("请输入服务次数");var i=Number(this.NumValue).toString();if(Number(this.NumValue)<1)return this.$toast("服务次数需是整数且大于1");if(-1!=i.indexOf("."))return this.$toast("服务次数需是整数且大于1");if(!this.item[0])return this.$toast("请输入服务方式");if(null!=this.Description&&this.Description.length>200)return this.$toast("服务简介不能超过200字");var c=[];if(this.info.forEach(function(e){e.DoctorServiceWayName==t.item[0]&&(c=e)}),c.GoodsSource=4,c.ServiceItemName=this.ServiceItemName,c.Price=this.Price,c.NumValue=Number(this.NumValue),c.Description=this.Description,c.NumTypeName="次",c.isChecked=1,void 0!=this.$route.query.ServiceItemId&&this.$store.dispatch("pushobjservice",c),this.addArr.splice(0,1,c),this.customSevice.length>0){var a=0;this.customSevice.forEach(function(e,i){e.ServiceItemId==t.ServiceItemId&&e.ServiceItemName==t.ServiceItemName&&(a=1,t.customSevice.splice(i,1,c))}),0==a&&this.customSevice.push(c)}console.log(c),console.log(this.addArr),this.$store.dispatch("pushcustomSevice",this.customSevice.length>0?this.customSevice:this.addArr),void 0!=this.$route.query.ServiceItemId?this.$router.push("/create-sevice?ServiceItemId="+this.ServiceItemId+"&ServiceItemName="+this.$route.query.ServiceItemName):this.$router.back()},goback:function(){this.$router.back()}}}),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"el"},[i("div",{staticClass:"title"},[i("back"),e._v(" "),i("span",{staticClass:"name"},[e._v("添加服务项")]),e._v(" "),i("a",{on:{click:function(t){e.goback()}}},[e._v("取消")])],1),e._v(" "),i("div",{staticClass:"customSevice"},[i("div",{staticClass:"customTab"},[i("span",[e._v("服务项名称")]),e._v(" "),i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.ServiceItemName,expression:"ServiceItemName"}],attrs:{type:"text",placeholder:"请输入服务项名称"},domProps:{value:e.ServiceItemName},on:{input:function(t){t.target.composing||(e.ServiceItemName=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"customTab"},[i("span",[e._v("服务单价")]),e._v(" "),i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.Price,expression:"Price"}],attrs:{type:"number",placeholder:"请输入服务金额"},domProps:{value:e.Price},on:{input:function(t){t.target.composing||(e.Price=t.target.value)}}}),e._v("元\n\t\t\t\t")])]),e._v(" "),i("div",{staticClass:"customTab"},[i("span",[e._v("服务次数")]),e._v(" "),i("span",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.NumValue,expression:"NumValue"}],attrs:{type:"number",placeholder:"请输入服务次数"},domProps:{value:e.NumValue},on:{input:[function(t){t.target.composing||(e.NumValue=t.target.value)},e.changeNumber]}}),e._v("次\n\t\t\t\t")])]),e._v(" "),i("div",{staticClass:"customTab",on:{click:function(t){e.show=!0}}},[i("span",[e._v("服务方式：")]),e._v(" "),i("span",[e._v("\n\t\t\t\t\t"+e._s(e.item[0]?e.item[0]:"选择项目")),i("em")]),e._v(" "),i("popup-picker",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{show:e.show,data:e.list},on:{"on-hide":function(t){e.show=!1}},model:{value:e.item,callback:function(t){e.item=t},expression:"item"}})],1),e._v(" "),i("p",[e._v("若服务方式选择其他，则患者消费该服务项的方式由医生自行解释，平台不予处理。")]),e._v(" "),i("div",{staticClass:"customTab customTabLine"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Description,expression:"Description"}],attrs:{placeholder:"请输入您的服务简介，清晰描述服务项服务内容，以免因为无法为购买患者提供服务而造成损失。200个字符以内"},domProps:{value:e.Description},on:{input:function(t){t.target.composing||(e.Description=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"custombtn",on:{click:function(t){e.send()}}},[e._v("\n\t\t\t\t添加\n\t\t\t")])])])},o=[],r={render:s,staticRenderFns:o},u=r,m=i("VU/8"),v=c,l=m(n,u,!1,v,"data-v-507c48ca",null);t.default=l.exports},dH8E:function(e,t,i){var c=i("tf51");"string"==typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);i("rjj0")("c5455994",c,!0,{})},tf51:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,"\n.customSevice[data-v-507c48ca] {\n  padding-top: 1.22667rem;\n  background-color: #fff;\n  height: 100vh;\n}\n.customSevice .customTab.customTabLine[data-v-507c48ca] {\n    border-bottom: none;\n}\n.customSevice .customTab[data-v-507c48ca] {\n    padding: 0.4rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    border-bottom: 1px #F1F1F1 solid;\n}\n.customSevice .customTab input[data-v-507c48ca] {\n      width: 4rem;\n      text-align: right;\n      margin-right: 0.13333rem;\n}\n.customSevice .customTab input[data-v-507c48ca]::-webkit-input-placeholder {\n      color: #cccccc;\n}\n.customSevice .customTab textarea[data-v-507c48ca] {\n      display: block;\n      width: 100%;\n      height: 2rem;\n      border: 1px #eeeeee solid;\n      color: #555555;\n}\n.customSevice .customTab input[data-v-507c48ca]::-webkit-input-placeholder, .customSevice .customTab textarea[data-v-507c48ca]::-webkit-input-placeholder {\n      color: #b3b3b3;\n      font-size: 13px;\n}\n.customSevice .customTab textarea[data-v-507c48ca], .customSevice .customTab input[data-v-507c48ca], .customSevice .customTab select[data-v-507c48ca]:focus {\n      outline: 0;\n}\n.customSevice p[data-v-507c48ca] {\n    background-color: #F3F7FF;\n    padding: 0.4rem;\n    font-size: 14px;\n    color: #999999;\n}\n.customSevice .custombtn[data-v-507c48ca] {\n    display: block;\n    width: 80%;\n    height: 0.8rem;\n    background-image: -webkit-linear-gradient(left, #148FFE 0%, #2C66D3 100%);\n    background-image: linear-gradient(90deg, #148FFE 0%, #2C66D3 100%);\n    color: #fff;\n    text-align: center;\n    line-height: 0.8rem;\n    border-radius: 0.4rem;\n    font-size: 13px;\n    font-style: normal;\n    margin: 3.33333rem auto 0rem;\n}\n",""])}});