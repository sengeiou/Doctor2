webpackJsonp([44],{"7UJm":function(e,t,n){var a=n("hVVO");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("ec119a9a",a,!0,{})},"9i06":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAYAAADNX8xBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QTFFNTZBMTdCNzAxMUU5OTkwRkFGOThGMzRFNUY2NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1QTFFNTZBMjdCNzAxMUU5OTkwRkFGOThGMzRFNUY2NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVBMUU1NjlGN0I3MDExRTk5OTBGQUY5OEYzNEU1RjY1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVBMUU1NkEwN0I3MDExRTk5OTBGQUY5OEYzNEU1RjY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VBjKAgAAAh9JREFUeNqM1EtIFXEUx/F7xysRuehtEEQvwtDaCEbhIshNRk8SH4sKH1O4aNEmWlWLApFatCjvVcgKgl6WFLapW0SFtTAQEZFaRSBIQQtFyqzvkd/Inz9zu/fAh9E7/zlz5pz/TDKdTie8CHAYDdiBNUhiAu/wCI8xa4vDMFy4yI1KfMJDHMUS/T+ERajHfQyjyr97FAfwFtvxFDuxSlWZUh2toq1ae9BPVKk7FeG4kg5izrnRX3xUpfV6tAeZTKYqSpTCLZXeituJ/GE3PYZi9JIslVJ55XocP8kGHMJivMQH55z18S6acCRQqRaXvSR1GMNVXNKjXvHWdOg4n6gaP/T8UazATUyjGfsxijOocdbZ9L5ajkD75IvX2N0afYcSPsMpndvrVWXXlkbNTnon/+hY7PxW5J1zJz/fbCtto36IqnqFnziLKXzHeZ174iXaZDkCTWO5t1MtSaP2jjW4F+txDu+ddbZ51yJrFfXhhPbQoLPouSqt1fizGPeqadGxL8lLa1WNYAvK8DlRWKzTWlMR9eWCmtkV0/hccV3DuMgXYC5wtryNeA9OF5DkJPZhgCT3/Le/DZPo1D7KFbtwTZMM4z4jE87rYgPYFpPEetiv62ztt7hEFm80iWWakptsM15gpSb82r0wFXPXOyhRM7Ma/4ySrEa7PjuJfIksbuA30tqw9vdS9aQ77oLgP03t0e7+pR3emCuJxT8BBgB6uXxuCsdYZwAAAABJRU5ErkJggg=="},MsqK:function(e,t,n){"use strict";function a(e){n("7UJm")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("pKZN"),s=(i.a,{components:{back:i.a},data:function(){return{items:[],act:1001011,children:[],province:null,isHot:0,AreaName:""}},created:function(){this.pull(0,"")},mounted:function(){var e=this;this.$bridge.callhandler("pullArea","",function(t){e.AreaName=t||"",responseCallback("接收到方法")})},methods:{AreaNameClick:function(){this.$store.dispatch("pushinspctArea",{AreaName:this.AreaName,AreaId:0}),this.$router.back()},choose:function(e,t){var n=this;this.act=t,1008611===t?this.pullHot():1001011===t?(this.$store.dispatch("pushinspctArea",{AreaName:"",AreaId:-1}),this.$router.back()):this.$post("PlatFormAPI/Area/QueryMallGoodsAreaList",{AreaId:e.AreaId,AreaName:e.AreaName}).then(function(e){n.children=e})},pullHot:function(){var e=this;this.$get("PlatFormAPI/Area/QueryHostArea").then(function(t){e.children=t})},pull:function(e,t){var n=this;this.$post("PlatFormAPI/Area/QueryMallGoodsAreaList",{AreaId:0,AreaName:""}).then(function(e){n.items=e})},toAll:function(){1001011==this.act&&(this.province={AreaName:"",AreaId:0}),this.$store.dispatch("pushinspctArea",this.province),this.$store.dispatch("pushgoodList",null),this.$store.dispatch("pushpreId",0),this.$router.back()},goList:function(e){this.$store.dispatch("pushinspctArea",e),this.$store.dispatch("pushgoodList",null),this.$store.dispatch("pushpreId",0),this.$router.back()}}}),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdt pbn"},[n("div",{staticClass:"title"},[n("back"),e._v(" "),n("span",{staticClass:"name"},[e._v("选择地区")]),e._v(" "),n("a")],1),e._v(" "),n("div",{staticClass:"area-d"},[n("p",{on:{click:function(t){e.AreaNameClick()}}},[n("span",[n("b",[n("em"),e._v(e._s(e.AreaName?e.AreaName:"全部地区"))])])])]),e._v(" "),n("div",{staticClass:"items"},[n("div",{staticClass:"first"},[n("p",{class:{on:1001011===e.act},on:{click:function(t){e.choose(null,1001011)}}},[e._v("全部")]),e._v(" "),n("p",{class:{on:1008611===e.act},on:{click:function(t){e.choose(null,1008611)}}},[e._v("热门地区")]),e._v(" "),e._l(e.items,function(t,a){return n("p",{key:a,class:{on:a===e.act},on:{click:function(n){e.choose(t,a)}}},[e._v("\n                    "+e._s(t.AreaName)+"\n                ")])})],2),e._v(" "),n("div",{staticClass:"second"},[1001011==e.act?n("p",{on:{click:function(t){e.toAll()}}},[e._v("不限"),n("i")]):e._e(),e._v(" "),e._l(e.children,function(t,a){return n("p",{key:a,on:{click:function(n){e.goList(t)}}},[e._v("\n                    "+e._s(t.AreaName)+"\n                    "),n("i")])})],2)])])},o=[],r={render:c,staticRenderFns:o},d=r,l=n("VU/8"),p=a,h=l(s,d,!1,p,"data-v-5c5d21ea",null);t.default=h.exports},hVVO:function(e,t,n){var a=n("kxFB");t=e.exports=n("FZ+f")(!1),t.push([e.i,"\n.area-d[data-v-5c5d21ea] {\n  background-color: #fff;\n}\n.area-d p[data-v-5c5d21ea] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    line-height: 1.2rem;\n    border-top: 1px #eee solid;\n    padding: 0 0.4rem;\n}\n.area-d p span[data-v-5c5d21ea] {\n      color: #999999;\n      font-size: 14px;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: left;\n      -webkit-justify-content: left;\n              justify-content: left;\n}\n.area-d p span b[data-v-5c5d21ea] {\n        color: #333333;\n        font-size: 17px;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-box-pack: left;\n        -webkit-justify-content: left;\n                justify-content: left;\n        margin-right: 0.53333rem;\n}\n.area-d p span b em[data-v-5c5d21ea] {\n          display: block;\n          min-width: 0.29333rem;\n          min-height: 0.37333rem;\n          background: url("+a(n("9i06"))+") no-repeat center;\n          background-size: contain;\n          margin-right: 0.13333rem;\n}\n.area-d p i[data-v-5c5d21ea] {\n      display: block;\n      width: 0.4rem;\n      height: 0.4rem;\n      background: url("+a(n("qhWM"))+") no-repeat center;\n      background-size: contain;\n}\n.pbn[data-v-5c5d21ea] {\n  padding-bottom: 0;\n}\n.items[data-v-5c5d21ea] {\n  background: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  border-top: 6px solid #ececec;\n}\n.items .first[data-v-5c5d21ea] {\n    width: 40%;\n    height: 86vh;\n    overflow: scroll;\n    background: #f3f3f3;\n}\n.items .first p[data-v-5c5d21ea] {\n      border-bottom: 1px solid #ececec;\n}\n.items .first .on[data-v-5c5d21ea] {\n      background: #fff;\n}\n.items .second[data-v-5c5d21ea] {\n    width: 60%;\n    height: 86vh;\n    overflow: scroll;\n}\n.items .second p[data-v-5c5d21ea] {\n      border-bottom: 1px solid #f5f5f5;\n      margin-right: 0.26667rem;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n              justify-content: space-between;\n}\n.items .second i[data-v-5c5d21ea] {\n      display: block;\n      width: 0.4rem;\n      height: 0.4rem;\n      background: url("+a(n("qhWM"))+") no-repeat center;\n      background-size: contain;\n}\n.items p[data-v-5c5d21ea] {\n    height: 1.2rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    padding: 0 0.4rem;\n}\n",""])}});