<template>
  <div class="ensak-landing-find-us-container">
      <H1 class="ensak-landing-find-us-title" @click="addr()">FIND<span style="font-weight: 600;color:#28DFFE">US</span></H1>
      <div class="ensak-landing-find-us-wrapper">
          <div class="ensak-landing-find-us-address" >
              <span>{{address()}}</span>
          </div>
          <div class="ensak-landing-find-us-map" >
              <iframe class='ensak-landing-find-us-map-iframe' ref="mapEl" :src="mapAddress()"></iframe>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "LandingFindUs",
  components: {
  },
  props: {
    location: {
      type: Object,
      required: true
    }
  },
  methods: {
    mapAddress() {
        return "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13245.975282709229!2d"+this.location.longitude+"!3d"+this.location.latitude+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1613697529091!5m2!1sen!2sma"
    },
    address(){
        return this.location.streetNumber+", "+this.location.street+", "+this.location.zipCode+", "+this.location.formattedLocation
    }
  }
}
</script>

<style lang="scss">
  .ensak-landing-find-us-container {
    background: #040812;
    height: 90vh;
    display: flex;
    flex-flow: column;
    //border: 2px red dotted;
  }
  .ensak-landing-find-us-title{
    display: block;
    padding-left:30px;
    margin:0;
    text-align: left;
    width:100%;
    font-weight: 200;
    font-size: 42px;
    color:white;
    flex: 0 1 auto;
  }
  .ensak-landing-find-us-wrapper{
    padding: 10px;
    width:100%;
    flex: 1 1 auto;
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .ensak-landing-find-us-map{
    width:100%;
    flex:1 1 auto;
  }
  .ensak-landing-find-us-map-iframe{
    width:100%;
    height:100%
  }
  .ensak-landing-find-us-address{
    padding:0 20px 20px 20px;
    width:100%;
    text-align:center;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 1px;
    color:white;
    flex: 0 1 auto;
  }

</style>
