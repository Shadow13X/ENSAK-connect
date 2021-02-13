<template>
  <div class="ensak-landing-page-container">
    <!-- Style Object Binding    -->
    <LandingBanner :template-data="event" :style="{ backgroundImage: bannerUrl }"/>
  </div>
</template>

<script>
import LandingBanner from "@/components/landing/LandingBanner";
export default {
  name: "LandingPage",
  components: {
    LandingBanner
  },
  data(){
    return {
      event: {},
      bannerUrl: ''
    }
  },
  //Todo: Create an EndPoint that returns the current event
  created() {
    this.axios.get('/events/497f6eca-6276-4993-bfeb-53cbbbba6f08/template')
        .then(response => {
          this.event = response.data.content.data;
          this.bannerUrl = "url('" + this.event.banner + "')";
          console.log(response.data);
        })
        .catch(e => {
          // this.errors.push(e)
          console.log(e);
        })
  }
}
</script>

<style lang="scss">

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.ensak-landing-page-container {

}
</style>
