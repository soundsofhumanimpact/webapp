<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ msg2 }}</h2>
    <ul id="birds" >
      <li v-show="card1"><img class="card" :alt="birdName1" :src="birdImage1">{{birdName1}}</li>
      <li v-show="card2"><img class="card" :alt="birdName2" :src="birdImage2">{{birdName2}}</li>
      <li v-show="card3"><img class="card" :alt="birdName3" :src="birdImage3">{{birdName3}}</li>
      <li v-show="card4"><img class="card" :alt="birdName4" :src="birdImage4">{{birdName4}}</li>
    </ul>
    <button v-if="!isHidden" v-on:click="isHidden=true; generateSoundscape()">Generate Soundscape</button>
    <button v-if="isHidden" v-on:click="nineteenSeventy">1970</button>
    <button v-if="isHidden" v-on:click="twentyTwenty">2020</button>
    <button v-if="isHidden" v-on:click="isHidden=false; reset">reset</button>
  </div>
</template>

<script>
import axios from 'axios'
import Pizzicato from 'pizzicato'
import Oscilloscope from 'oscilloscope'
export default {
  name: 'SoundsOfImpact',
  data () {
    return {
      msg: '',
      msg2: '',  
      birdName1: '', 
      birdImage1: '',
      birdNumber1: '', 
      birdSound1: '',
      birdSound1Pan: '',
      birdAudio1: '',
      birdName2: '', 
      birdImage2: '',
      birdNumber2: '',  
      birdSound2: '',
      birdSound2Pan: '',
      birdAudio2: '', 
      birdName3: '', 
      birdImage3: '', 
      birdSound3: '',
      birdSound3Pan: '',
      birdAudio3: '', 
      birdName4: '', 
      birdImage4: '', 
      birdSound4: '',
      birdSound4Pan: '',
      birdAudio4: '',
      isHidden: false, 
      card1: false, 
      card2: false, 
      card3: false, 
      card4: false, 
      twenty: false, 
      seventy: false   
    }
  },
created: function () {
    },
  methods: {
     generateSoundscape: function () {
     var self = this; 
     Pizzicato.context.resume();
       axios.get("https://raw.githubusercontent.com/soundsofhumanimpact/data/master/birdData.json")
       .then(function (response) { 
       
          self.birdName1 = response.data.raptors[1][0]
          self.birdImage1 = response.data.raptors[1][2]
          self.birdNumber1 = response.data.raptors[1][Math.floor(Math.random()*4+3)]
          self.birdSound1 = new Pizzicato.Sound(self.birdNumber1, function() {
          self.birdSound1Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound1.addEffect(self.birdSound1Pan);
          self.birdSound1.volume = Math.random(); 
          self.birdAudio1 = self.birdSound1.clone();
          });
          
          self.birdName2 =  response.data.raptors[3][0]
          self.birdImage2 = response.data.raptors[3][2]
          self.birdNumber2 = response.data.raptors[1][Math.floor(Math.random()*4+3)]
          self.birdSound2 = new Pizzicato.Sound(self.birdNumber2, function() {
          self.birdSound2Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound2.volume = Math.random(); 
          self.birdSound2.addEffect(self.birdSound2Pan);
          self.birdAudio2 = self.birdSound2.clone();
          });
          
          self.birdName3 =  response.data.finches[1][0]
          self.birdImage3 = response.data.finches[1][2]
          self.birdSound3 = new Pizzicato.Sound(response.data.finches[1][Math.floor(Math.random()*4+3)], function() {
          self.birdSound3Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound3.volume = Math.random(); 
          self.birdSound3.addEffect(self.birdSound3Pan);
          self.birdAudio3 = self.birdSound3.clone();
          });
          
          self.birdName4 =  response.data.finches[3][0]
          self.birdImage4 = response.data.finches[3][2]
          self.birdSound4 = new Pizzicato.Sound(response.data.finches[3][Math.floor(Math.random()*4+3)], function() {
          self.birdSound4Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound4.volume = Math.random(); 
          self.birdSound4.addEffect(self.birdSound4Pan);
          self.birdAudio4 = self.birdSound4.clone();
          });
        self.msg = "Soundscape Variables Generated"
        self.msg2 = "Select a Time Period to Listen"
        self.visualize()
       })
       .catch(function (error) {
       console.log(error);
       })
    }, 
    nineteenSeventy: function (){
         this.card2 = true; 
         this.card3 = true; 
         this.card4 = true;
         this.birdAudio2.play();
         this.birdAudio3.play(); 
         this.birdAudio4.play(); 

    },
    twentyTwenty: function (){
        this.card1 = true; 
        this.card2 = true; 
        this.card3 = true; 
        this.card4 = true;
        this.birdAudio1.play();
        this.birdAudio2.play();
        this.birdAudio3.play(); 
        this.birdAudio4.play(); 
    },
    reset: function () {
       this.card1 = false; 
       this.card2 = false; 
       this.card3 = false;
       this.card4 = false; 
       this.birdAudio1.pause();
       this.birdAudio1.currentTime = 0;
       this.birdAudio2.pause();
       this.birdAudio2.currentTime = 0;
       this.birdAudio3.pause();
       this.birdAudio3.currentTime = 0;
       this.birdAudio4.pause();
       this.birdAudio4.currentTime = 0;
     }, 
     visualize: function (){
 
var audioContext = new window.AudioContext() 

  // setup canvas
  var canvas = document.createElement('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  document.body.appendChild(canvas)

  // setup audio element
  var audioElement = document.createElement('audio')
  audioElement.autoplay = true
  audioElement.src = this.birdNumber2
  document.body.appendChild(audioElement)

  // create source from html5 audio element
  var source = audioContext.createMediaElementSource(audioElement)

  // attach oscilloscope
  var scope = new Oscilloscope(source)

  // reconnect audio output to speakers
  source.connect(audioContext.destination)

  var ctx = canvas.getContext('2d')
  ctx.lineWidth = 3
  ctx.shadowBlur = 4
  ctx.shadowColor = 'white'

  // custom animation loop
  function drawLoop () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    var centerX = canvas.width / 2
    var centerY = canvas.height / 2

    // draw circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, 100, 0, 2 * Math.PI, false)
    ctx.fillStyle = 'yellow'
    ctx.fill()

    // draw three oscilloscopes in different positions and colors
    ctx.strokeStyle = 'lime'
    scope.draw(ctx, 0, 0, centerX, centerY)

    ctx.strokeStyle = 'cyan'
    scope.draw(ctx, centerX, 0, centerX, centerY)

    ctx.strokeStyle = 'red'
    scope.draw(ctx, 0, centerY, undefined, centerY)

    window.requestAnimationFrame(drawLoop)
  }

  drawLoop()
     }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to self component only -->
<style scoped>
.card {
height: 200px; 
color: black; 
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
