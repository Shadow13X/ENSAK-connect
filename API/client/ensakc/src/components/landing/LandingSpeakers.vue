<template>
  <div class="ensak-landing-speakers-container">
      <H1 class="ensak-landing-speakers-title">OUR<span style="font-weight: 600;color:#28DFFE">SPEAKERS</span></H1>
      <!-- Keys are mainly used as a hint to the rendering algorithms if the list get updated, 
      while recommended it's not necessary, and if used it should be a primitive data type (not Object,Array...) -->
      <div v-for="speaker in speakers" :key='speaker.image' class="ensak-landing-speakers-speaker">
        <img class='ensak-landing-speakers-speaker-image' :src='speaker.image' :alt='"image of " +speaker.name'/>
        <div class='ensak-landing-speakers-speaker-name'>{{speaker.name}}</div>
        <div class='ensak-landing-speakers-speaker-about'>{{speaker.about}}</div>
      </div>

  </div>
</template>

<script>

export default {
  name: "LandingSpeakers",
  components: {
  },
  props: {
    speakers : {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .ensak-landing-speakers-container {
    background: #040812;
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    padding:10px 0 20px 0;
    //border: 2px red dotted;
  }
  .ensak-landing-speakers-speaker{
    width:30%;
    padding: 0 5%;
  }
  .ensak-landing-speakers-speaker-image{
    width:70%;
    border-radius:50%;
    padding:10px;
  }
  .ensak-landing-speakers-speaker-name{
    color:white;
    font-weight: 600;
    font-size: 22px;
  }
  .ensak-landing-speakers-speaker-about{
    font-weight: 200;
    font-size: 13px;
    color:white;
  }
  .ensak-landing-speakers-title{
    display: block;
    padding-left:30px;
    margin:0;
    text-align: left;
    width:100%;
    font-weight: 200;
    font-size: 42px;
    color:white;
  }

</style>
