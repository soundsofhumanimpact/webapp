(function(e){function r(r){for(var t,d,o=r[0],u=r[1],s=r[2],b=0,l=[];b<o.length;b++)d=o[b],Object.prototype.hasOwnProperty.call(i,d)&&i[d]&&l.push(i[d][0]),i[d]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);c&&c(r);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,r=0;r<a.length;r++){for(var n=a[r],t=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(t=!1)}t&&(a.splice(r--,1),e=d(d.s=n[0]))}return e}var t={},i={app:0},a=[];function d(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=e,d.c=t,d.d=function(e,r,n){d.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,r){if(1&r&&(e=d(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)d.d(n,t,function(r){return e[r]}.bind(null,t));return n},d.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(r,"a",r),r},d.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},d.p="/webapp/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=r,o=o.slice();for(var s=0;s<o.length;s++)r(o[s]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,r,n){e.exports=n("56d7")},"034f":function(e,r,n){"use strict";var t=n("85ec"),i=n.n(t);i.a},"56d7":function(e,r,n){"use strict";n.r(r);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("2b0e"),i=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{attrs:{id:"app"}},[n("SoundsOfImpact",{attrs:{msg:"Sounds of Human Impact"}})],1)},a=[],d=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",[n("h1",[e._v(e._s(e.msg))]),n("h2",[e._v(e._s(e.msg2))]),n("ul",{attrs:{id:"birds"}},[n("li",{directives:[{name:"show",rawName:"v-show",value:e.card1,expression:"card1"}]},[n("img",{staticClass:"card",attrs:{alt:e.birdName1,src:e.birdImage1}}),e._v(e._s(e.birdName1))]),n("li",{directives:[{name:"show",rawName:"v-show",value:e.card2,expression:"card2"}]},[n("img",{staticClass:"card",attrs:{alt:e.birdName2,src:e.birdImage2}}),e._v(e._s(e.birdName2))]),n("li",{directives:[{name:"show",rawName:"v-show",value:e.card3,expression:"card3"}]},[n("img",{staticClass:"card",attrs:{alt:e.birdName3,src:e.birdImage3}}),e._v(e._s(e.birdName3))]),n("li",{directives:[{name:"show",rawName:"v-show",value:e.card4,expression:"card4"}]},[n("img",{staticClass:"card",attrs:{alt:e.birdName4,src:e.birdImage4}}),e._v(e._s(e.birdName4))])]),e.isHidden?e._e():n("button",{on:{click:function(r){e.isHidden=!0,e.generateSoundscape()}}},[e._v("Generate Soundscape")]),e.isHidden?n("button",{on:{click:e.nineteenSeventy}},[e._v("1970")]):e._e(),e.isHidden?n("button",{on:{click:e.twentyTwenty}},[e._v("2020")]):e._e(),e.isHidden?n("button",{on:{click:function(r){e.isHidden=!1,e.reset}}},[e._v("reset")]):e._e()])},o=[],u=(n("cb29"),n("bc3a")),s=n.n(u),c=n("7c02"),b=n.n(c),l=n("37d0"),m={name:"SoundsOfImpact",data:function(){return{msg:"",msg2:"",birdName1:"",birdImage1:"",birdNumber1:"",birdSound1:"",birdSound1Pan:"",birdAudio1:"",birdName2:"",birdImage2:"",birdNumber2:"",birdSound2:"",birdSound2Pan:"",birdAudio2:"",birdName3:"",birdImage3:"",birdSound3:"",birdSound3Pan:"",birdAudio3:"",birdName4:"",birdImage4:"",birdSound4:"",birdSound4Pan:"",birdAudio4:"",isHidden:!1,card1:!1,card2:!1,card3:!1,card4:!1,twenty:!1,seventy:!1}},created:function(){},methods:{generateSoundscape:function(){var e=this;b.a.context.resume(),s.a.get("https://raw.githubusercontent.com/soundsofhumanimpact/data/master/birdData.json").then((function(r){e.birdName1=r.data.raptors[1][0],e.birdImage1=r.data.raptors[1][2],e.birdNumber1=r.data.raptors[1][Math.floor(4*Math.random()+3)],e.birdSound1=new b.a.Sound(e.birdNumber1,(function(){e.birdSound1Pan=new b.a.Effects.StereoPanner({pan:2*Math.random()-1}),e.birdSound1.addEffect(e.birdSound1Pan),e.birdSound1.volume=Math.random(),e.birdAudio1=e.birdSound1.clone()})),e.birdName2=r.data.raptors[3][0],e.birdImage2=r.data.raptors[3][2],e.birdNumber2=r.data.raptors[1][Math.floor(4*Math.random()+3)],e.birdSound2=new b.a.Sound(e.birdNumber2,(function(){e.birdSound2Pan=new b.a.Effects.StereoPanner({pan:2*Math.random()-1}),e.birdSound2.volume=Math.random(),e.birdSound2.addEffect(e.birdSound2Pan),e.birdAudio2=e.birdSound2.clone()})),e.birdName3=r.data.finches[1][0],e.birdImage3=r.data.finches[1][2],e.birdSound3=new b.a.Sound(r.data.finches[1][Math.floor(4*Math.random()+3)],(function(){e.birdSound3Pan=new b.a.Effects.StereoPanner({pan:2*Math.random()-1}),e.birdSound3.volume=Math.random(),e.birdSound3.addEffect(e.birdSound3Pan),e.birdAudio3=e.birdSound3.clone()})),e.birdName4=r.data.finches[3][0],e.birdImage4=r.data.finches[3][2],e.birdSound4=new b.a.Sound(r.data.finches[3][Math.floor(4*Math.random()+3)],(function(){e.birdSound4Pan=new b.a.Effects.StereoPanner({pan:2*Math.random()-1}),e.birdSound4.volume=Math.random(),e.birdSound4.addEffect(e.birdSound4Pan),e.birdAudio4=e.birdSound4.clone()})),e.msg="Soundscape Variables Generated",e.msg2="Select a Time Period to Listen"})).catch((function(e){console.log(e)}))},nineteenSeventy:function(){this.card2=!0,this.card3=!0,this.card4=!0,this.birdAudio2.play(),this.birdAudio3.play(),this.birdAudio4.play(),this.visualize()},twentyTwenty:function(){this.card1=!0,this.card2=!0,this.card3=!0,this.card4=!0,this.birdAudio1.play(),this.birdAudio2.play(),this.birdAudio3.play(),this.birdAudio4.play()},reset:function(){this.card1=!1,this.card2=!1,this.card3=!1,this.card4=!1,this.birdAudio1.pause(),this.birdAudio1.currentTime=0,this.birdAudio2.pause(),this.birdAudio2.currentTime=0,this.birdAudio3.pause(),this.birdAudio3.currentTime=0,this.birdAudio4.pause(),this.birdAudio4.currentTime=0},visualize:function(){var e=new window.AudioContext,r=document.createElement("canvas");r.width=window.innerWidth,r.height=window.innerHeight,document.body.appendChild(r);var n=document.createElement("audio");n.crossOrigin="anonymous",n.autoplay=!0,n.src=this.birdNumber1,console.log("this.birdnumber "+this.birdNumber1),document.body.appendChild(n);var t=e.createMediaElementSource(n),i=new l["a"](t);t.connect(e.destination);var a=r.getContext("2d");function d(){a.clearRect(0,0,r.width,r.height);var e=r.width/2,n=r.height/2;a.beginPath(),a.arc(e,n,100,0,2*Math.PI,!1),a.fillStyle="yellow",a.fill(),a.strokeStyle="lime",i.draw(a,0,0,e,n),a.strokeStyle="cyan",i.draw(a,e,0,e,n),a.strokeStyle="red",i.draw(a,0,n,void 0,n),window.requestAnimationFrame(d)}a.lineWidth=3,a.shadowBlur=4,a.shadowColor="white",d()}}},h=m,f=(n("7ba3"),n("2877")),p=Object(f["a"])(h,d,o,!1,null,"28a65776",null),v=p.exports,S={name:"App",components:{SoundsOfImpact:v}},w=S,g=(n("034f"),Object(f["a"])(w,i,a,!1,null,null,null)),y=g.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(y)}}).$mount("#app")},"5dfb":function(e,r,n){},"7ba3":function(e,r,n){"use strict";var t=n("5dfb"),i=n.n(t);i.a},"85ec":function(e,r,n){}});
//# sourceMappingURL=app.214aebde.js.map