<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul id="birds" >
      <li><img class="card" :alt="birdName1" :src="birdImage1">{{birdName1}}</li>
      <li><img class="card" :alt="birdName2" :src="birdImage2">{{birdName2}}</li>
      <li><img class="card" :alt="birdName3" :src="birdImage3">{{birdName3}}</li>
      <li><img class="card" :alt="birdName4" :src="birdImage4">{{birdName4}}</li>
    </ul>
    <button v-on:click="test">test</button>
    <button v-on:click="getData">prime</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SoundsOfImpact',
  data () {
    return {
      msg: '', 
      birdName1: '', 
      birdImage1: '', 
      birdSound1: '',
      birdName2: '', 
      birdImage2: '', 
      birdSound2: '', 
      birdName3: '', 
      birdImage3: '', 
      birdSound3: '', 
      birdName4: '', 
      birdImage4: '', 
      birdSound4: '',  
    }
  },
created: function () {
    //this.function()
    },
  methods: {
     test: function () {
     this.birdImage1 = 'https://www.scitecheuropa.eu/wp-content/uploads/2019/09/Colour-bird-e1568033112774.jpg';
     this.msg = 'Sounds of Human Impact'
     },
     getData: function () {
     var self = this; 
       axios.get("https://raw.githubusercontent.com/soundsofhumanimpact/data/master/birdData.json")
       .then(function (response) {
       console.log(response.data.raptors.red_tailed_hawk.common)
       
          self.birdName1 = response.data.raptors.red_tailed_hawk.common
          self.birdImage1 = response.data.raptors.red_tailed_hawk.image
          self.birdSound1 = response.data.raptors.red_tailed_hawk.sound1
          var audio1 = new Audio(self.birdSound1);
          audio1.play();
          
          self.birdName2 = response.data.raptors.coopers_hawk.common
          self.birdImage2 = response.data.raptors.coopers_hawk.image
          self.birdSound2 = response.data.raptors.coopers_hawk.sound1
          var audio2 = new Audio(self.birdSound2);
          audio2.play();
          
          self.birdName3 = response.data.finches.american_goldfinch.common
          self.birdImage3 = response.data.finches.american_goldfinch.image
          self.birdSound3 = response.data.finches.american_goldfinch.sound1
          var audio3 = new Audio(self.birdSound3);
          audio3.play();
          
          self.birdName4 = response.data.finches.evening_grosbeak.common
          self.birdImage4 = response.data.finches.evening_grosbeak.image
          self.birdSound4 = response.data.finches.evening_grosbeak.sound1
          var audio4 = new Audio(self.birdSound4);
          audio4.play();
          
       })
       .catch((error) => {
       console.log(error)
       })
    }
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
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
