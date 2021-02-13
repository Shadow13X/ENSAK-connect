<template>
  <div class="ensak-landing-banner-container">
   <LandingNav/>
   <LandingCallForAction/>
  </div>
</template>

<script>
import LandingNav from "./LandingNav.vue";
import LandingCallForAction from "./LandingCallForAction.vue";

export default {
  name: "LandingBanner",
  components: {
    LandingNav,
    LandingCallForAction
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
  .ensak-landing-banner-container {
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    //border: 2px red dotted;
  }

  .ensak-landing-banner-container-theme {
    font-family: sans-serif ;
    color: white;
    font-size: 30px;
  }
</style>
