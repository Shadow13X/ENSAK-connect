<template>
  <div class="ensak-landing-banner-container">
   <LandingNav/>
    <h1 class="ensak-landing-banner-container-theme">AR/VR Evolution</h1>

  </div>
</template>

<script>
import LandingNav from "./LandingNav.vue";

export default {
  name: "LandingBanner",
  components: {
    LandingNav
  },
  props: {
    templateData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">

  $whitespace-fix: -10px;


  .ensak-landing-banner-container {

    margin-top: $whitespace-fix;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: contain;

    //border: 2px red dotted;
  }

  .ensak-landing-banner-container-theme {
    font-family: sans-serif ;
    color: white;
    font-size: 30px;
  }
</style>
