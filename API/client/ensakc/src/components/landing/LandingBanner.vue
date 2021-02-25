<template>
  <div class="ensak-landing-banner-container">
    <LandingNav @clicked-login="showModal"/>
    <div>
      <LandingCallForAction/>
      <LandingBannerTimer :target-date="targetDate"/>
    </div>
  </div>
</template>

<script>
import LandingNav from "./LandingNav.vue";
import LandingCallForAction from "./LandingCallForAction.vue";
import LandingBannerTimer from "@/components/landing/LandingBannerTimer";

export default {
  name: "LandingBanner",
  components: {
    LandingNav,
    LandingCallForAction,
    LandingBannerTimer,
  },
  props: {
    targetDate: {
      type: Object,
      required: true
    }
  },
  methods:{
    showModal(a){
      this.$emit('show-modal',a);
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
