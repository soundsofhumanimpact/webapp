(function(e){function t(t){for(var a,r,d=t[0],s=t[1],u=t[2],l=0,b=[];l<d.length;l++)r=d[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&b.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);c&&c(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,d=1;d<n.length;d++){var s=n[d];0!==i[s]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/webapp/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"22d7":function(e,t,n){"use strict";var a=n("be87"),i=n.n(a);i.a},3972:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("SoundsOfImpact")],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"background"}},[n("h1",{staticClass:"messageOne"},[e._v(e._s(e.msg))]),n("h3",{staticClass:"messageTwo"},[e._v(e._s(e.msg2))]),n("ul",{attrs:{id:"birds"}},[n("li",{directives:[{name:"show",rawName:"v-show",value:e.card1,expression:"card1"}],staticClass:"card",style:{color:e.birdColor1}},[e._v(e._s(e.birdName1))]),n("li",{directives:[{name:"show",rawName:"v-show",value:e.card2,expression:"card2"}],staticClass:"card",style:{color:e.birdColor2}},[e._v(e._s(e.birdName2))]),n("li",{directives:[{name:"show",rawName:"v-show",value:e.card3,expression:"card3"}],staticClass:"card",style:{color:e.birdColor3}},[e._v(e._s(e.birdName3))]),n("li",{directives:[{name:"show",rawName:"v-show",value:e.card4,expression:"card4"}],staticClass:"card",style:{color:e.birdColor4}},[e._v(e._s(e.birdName4))])]),e.aboutHidden?e._e():n("button",{attrs:{id:"aboutButton"},on:{click:function(t){e.isModalVisible=!0}}},[e._v("About")]),n("Modal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],on:{close:function(t){e.isModalVisible=!1}}}),e.isHidden?e._e():n("button",{attrs:{id:"generateButton"},on:{click:function(t){e.aboutHidden=!0,e.isHidden=!0,e.generateSoundscape()}}},[e._v("Generate Soundscape")]),e.isHidden?n("button",{attrs:{id:"nineteenSeventyButton"},on:{click:e.nineteenSeventy}},[e._v("1970")]):e._e(),e.isHidden?n("button",{attrs:{id:"twentyTwentyButton"},on:{click:e.twentyTwenty}},[e._v("2020")]):e._e(),n("p",[e.isHidden?n("button",{attrs:{id:"resetButton"},on:{click:function(t){e.aboutHidden=!1,e.isHidden=!1,e.reset()}}},[e._v("Reset")]):e._e()]),e._m(0)],1)},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("canvas")])}],s=(n("d3b7"),n("bc3a")),u=n.n(s),c=n("7c02"),l=n.n(c),b=n("37d0"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal-fade"}},[n("div",{staticClass:"modal-backdrop"},[n("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[n("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[e._v(" About ")]),n("div",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[e._v(" Byrd Bot expresses differences in bird populations between 1970 and 2020 as unique soundscapes, composed computationally using known bird population data and the Audubon Society's database of bird songs. "),n("p",[e._v("The application is born out of the Sounds of Human Impact project, a collaborative effort between communication studies and environmental science scholars interested to explore the role of sound as a means to expressing the impacts of the Anthroprocene. ")]),n("p",[e._v("When the user clicks "),n("button",{attrs:{id:"generate"}},[e._v("Generate Soundscape")]),e._v(" the software will generate a new soundscape, based on probabilities in which birds might be heard in "),n("button",{attrs:{id:"nineteenSeventy"}},[e._v("1970")]),e._v(". Then, the system generates a soundscape of those very same bird sounds, using probabilities for "),n("button",{attrs:{id:"twentyTwenty"}},[e._v("2020")]),e._v(". ")]),n("p",[e._v(" The listener is invited to listen deeply for the differences in ecology between these two time periods. ")])]),n("footer",{staticClass:"modal-footer"},[n("button",{on:{click:e.close}},[e._v("Close ")])])])])])},m=[],p={name:"Modal",methods:{close:function(){this.$emit("close")}}},f=p,v=(n("22d7"),n("2877")),w=Object(v["a"])(f,h,m,!1,null,null,null),g=w.exports,S={name:"SoundsOfImpact",components:{Modal:g},data:function(){return{msg:"",msg2:"",birdName1:"",birdImage1:"",birdNumber1:"",birdSound1:"",birdSound1Pan:"",birdName2:"",birdImage2:"",birdNumber2:"",birdSound2:"",birdSound2Pan:"",birdName3:"",birdImage3:"",birdNumber3:"",birdSound3:"",birdSound3Pan:"",birdName4:"",birdImage4:"",birdNumber4:"",birdSound4:"",birdSound4Pan:"",group1:[],group2:[],isHidden:!1,aboutHidden:!1,card1:!1,card2:!1,card3:!1,card4:!1,twenty:!1,placeHolder:[],birdColor1:"salmon",birdColor2:"turquoise",birdColor3:"violet",birdColor4:"orange",isModalVisible:!1}},created:function(){this.msg="BYRD BOT",this.msg2=""},methods:{generateSoundscape:function(){var e=this;l.a.context.resume(),u.a.get("https://raw.githubusercontent.com/soundsofhumanimpact/data/master/birdData.json").then((function(t){e.msg="Soundscape Variables Generated",e.msg2="Select a Time Period to Listen",e.birdName1=t.data.raptors[1][0],e.birdImage1=t.data.raptors[1][2],e.birdNumber1=t.data.raptors[1][Math.floor(4*Math.random()+3)],e.birdSound1=new l.a.Sound(e.birdNumber1,(function(){e.birdSound1Pan=new l.a.Effects.StereoPanner({pan:2*Math.random()-1}),e.birdSound1.volume=Math.random(),e.birdSound1.addEffect(e.birdSound1Pan),e.birdAudio1=e.birdSound1.clone()})),e.birdName2=t.data.raptors[3][0],e.birdImage2=t.data.raptors[3][2],e.birdNumber2=t.data.raptors[1][Math.floor(4*Math.random()+3)],e.birdSound2=new l.a.Sound(e.birdNumber2,(function(){e.birdSound2Pan=new l.a.Effects.StereoPanner({pan:2*Math.random()-1}),e.birdSound2.volume=Math.random(),e.birdSound2.addEffect(e.birdSound2Pan),e.birdAudio2=e.birdSound2.clone()})),e.birdName3=t.data.finches[1][0],e.birdImage3=t.data.finches[1][2],e.birdNumber3=t.data.finches[1][Math.floor(4*Math.random()+3)],e.birdSound3=new l.a.Sound(e.birdNumber3,(function(){e.birdSound3Pan=new l.a.Effects.StereoPanner({pan:2*Math.random()-1}),e.birdSound3.volume=Math.random(),e.birdSound3.addEffect(e.birdSound3Pan),e.birdAudio3=e.birdSound3.clone()})),e.birdName4=t.data.finches[3][0],e.birdImage4=t.data.finches[3][2],e.birdNumber4=t.data.finches[3][Math.floor(4*Math.random()+3)],e.birdSound4=new l.a.Sound(e.birdNumber4,(function(){e.birdSound4Pan=new l.a.Effects.StereoPanner({pan:2*Math.random()-1}),e.birdSound4.volume=Math.random(),e.birdSound4.addEffect(e.birdSound4Pan),e.birdAudio4=e.birdSound4.clone()})),e.group1=new l.a.Group([e.birdSound1,e.birdSound2,e.birdSound3,e.birdSound4])})).catch((function(e){console.log(e)}))},sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))},nineteenSeventy:function(){var e=this,t=document.getElementsByTagName("canvas")[0];t.width=0,t.height=0,this.group1.stop(),this.msg="1970",this.msg2="",this.group1.removeSound(this.birdSound1),this.group1.removeSound(this.birdSound2),this.placeHolder=this.group1,this.card1=!1,this.card2=!1,this.card3=!0,this.card4=!0,this.sleep(500).then((function(){e.visualizeNineteenSeventy()}))},twentyTwenty:function(){var e=this,t=document.getElementsByTagName("canvas")[0];t.width=0,t.height=0,this.group1.stop(),this.msg="2020",this.msg2="",this.group1.addSound(this.birdSound1),this.group1.addSound(this.birdSound2),this.placeHolder=this.group1,this.card1=!0,this.card2=!0,this.card3=!0,this.card4=!0,this.sleep(500).then((function(){e.visualizeTwentyTwenty()}))},reset:function(){this.msg="BYRD BOT",this.msg2="",this.card1=!1,this.card2=!1,this.card3=!1,this.card4=!1,this.placeHolder.stop();var e=document.getElementsByTagName("canvas")[0];e.width=0,e.height=0},visualizeNineteenSeventy:function(){this.placeHolder.play();var e=l.a.context,t=document.getElementsByTagName("canvas")[0];t.width=window.innerWidth,t.height=window.innerHeight;var n=l.a.context.createAnalyser();this.placeHolder.connect(n);var a=new b["a"](n);n.connect(e.destination);var i=t.getContext("2d");function o(){i.clearRect(0,0,t.width,t.height);var e=t.height/3;i.strokeStyle="mediumturquoise",a.draw(i,0,e,void 0,e),window.requestAnimationFrame(o)}i.lineWidth=3,i.shadowBlur=4,i.shadowColor="white",o()},visualizeTwentyTwenty:function(){var e=l.a.context;this.placeHolder.play();var t=document.getElementsByTagName("canvas")[0];t.width=window.innerWidth,t.height=window.innerHeight;var n=l.a.context.createAnalyser();this.placeHolder.connect(n);var a=new b["a"](n);n.connect(e.destination);var i=t.getContext("2d");function o(){i.clearRect(0,0,t.width,t.height);var e=t.height/3;i.strokeStyle="salmon",a.draw(i,0,e,void 0,e),window.requestAnimationFrame(o)}i.lineWidth=3,i.shadowBlur=4,i.shadowColor="white",o()}},closeModal:function(){this.isModalVisible=!1}},y=S,_=(n("d5f4"),Object(v["a"])(y,r,d,!1,null,"140b8935",null)),N=_.exports,M={name:"App",components:{SoundsOfImpact:N}},T=M,P=(n("034f"),Object(v["a"])(T,i,o,!1,null,null,null)),x=P.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(x)}}).$mount("#app")},"85ec":function(e,t,n){},be87:function(e,t,n){},d5f4:function(e,t,n){"use strict";var a=n("3972"),i=n.n(a);i.a}});
//# sourceMappingURL=app.92094eb8.js.map