<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul id="birds" >
      <li><img class="card" :alt="birdName1" :src="birdImage1">{{birdName1}}</li>
      <li><img class="card" :alt="birdName2" :src="birdImage2">{{birdName2}}</li>
      <li><img class="card" :alt="birdName3" :src="birdImage3">{{birdName3}}</li>
      <li><img class="card" :alt="birdName4" :src="birdImage4">{{birdName4}}</li>
    </ul>
    <button v-if="!isHidden" v-on:click="isHidden=true; generateSoundscape()">Generate Soundscape</button>
    <button v-if="isHidden">1970</button>
    <button v-if="isHidden">2020</button>
    <button v-if="isHidden" v-on:click="isHidden=false; reset">reset</button>
  </div>
</template>

<script>
import axios from 'axios'
import Pizzicato from 'pizzicato'
export default {
  name: 'SoundsOfImpact',
  data () {
    return {
      msg: '', 
      birdName1: '', 
      birdImage1: '', 
      birdSound1: '',
      birdSound1Pan: '',
      birdName2: '', 
      birdImage2: '', 
      birdSound2: '',
      birdSound2Pan: '', 
      birdName3: '', 
      birdImage3: '', 
      birdSound3: '',
      birdSound3Pan: '', 
      birdName4: '', 
      birdImage4: '', 
      birdSound4: '',
      birdSound4Pan: '',
      context: true,
      isHidden: false   
    }
  },
created: function () {
    },
  methods: {
    reset: function () {
     },
     generateSoundscape: function () {
     const self = this; 
     Pizzicato.context.resume();
       axios.get("https://raw.githubusercontent.com/soundsofhumanimpact/data/master/birdData.json")
       .then(function (response) { 
       
          self.birdName1 = response.data.raptors[1][0]
          self.birdImage1 = response.data.raptors[1][2]
          self.birdSound1Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound1 = new Pizzicato.Sound(response.data.raptors[1][Math.floor(Math.random()*4+3)], function() {
          self.birdSound1.addEffect(self.birdSound1Pan);
          self.birdSound1.volume = Math.random(); 
          self.birdSound1.play();});
          
          self.birdName2 =  response.data.raptors[3][0]
          self.birdImage2 = response.data.raptors[3][2]
          self.birdSound2Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound2 = new Pizzicato.Sound(response.data.raptors[3][Math.floor(Math.random()*4+3)], function() {
          self.birdSound2.volume = Math.random(); 
          self.birdSound2.addEffect(self.birdSound2Pan);
          self.birdSound2.play();});
          
          self.birdName3 =  response.data.finches[1][0]
          self.birdImage3 = response.data.finches[1][2]
          self.birdSound3Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound3 = new Pizzicato.Sound(response.data.finches[1][Math.floor(Math.random()*4+3)], function() {
          self.birdSound3.volume = Math.random(); 
          self.birdSound3.addEffect(self.birdSound3Pan);
          self.birdSound3.play();});
          
          self.birdName4 =  response.data.finches[3][0]
          self.birdImage4 = response.data.finches[3][2]
          self.birdSound4Pan = new Pizzicato.Effects.StereoPanner({pan: Math.random()*2 - 1});
          self.birdSound4 = new Pizzicato.Sound(response.data.finches[3][Math.floor(Math.random()*4+3)], function() {
          self.birdSound4.volume = Math.random(); 
          self.birdSound4.addEffect(self.birdSound4Pan);
          self.birdSound4.play();});
          self.primeScape()
       })
       .catch(function (error) {
       console.log(error);
       })
    }, 
    primeScape: function (){
      if (this.context == true){
        alert(this.birdName1)
      } 
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
