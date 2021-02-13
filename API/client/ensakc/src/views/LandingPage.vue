<template>
  <div class="ensak-landing-page-container">
    <!-- Style Object Binding    -->
    <LandingBanner :template-data="event" :style="{ backgroundImage: bannerUrl }"/>
    <LandingBannerTimer :target-date="targetDate"/>
  </div>
</template>

<script>
import { parseDate }      from "@/utils/utils";
import LandingBanner      from "@/components/landing/LandingBanner";
import LandingBannerTimer from "@/components/landing/LandingBannerTimer";


export default {
  name: "LandingPage",
  components: {
    LandingBanner,
    LandingBannerTimer
  },
  data()
  {
    return {
      event: {},
      bannerUrl: ''
    }
  },
  //Todo: Create an EndPoint that returns the current event
  created()
  {
    this.axios.get('/events/497f6eca-6276-4993-bfeb-53cbbbba6f08/template')
        .then(response => {
          this.event = response.data.content.data;
          this.bannerUrl = "url('" + this.event.banner + "')";
          console.log(response.data);
          console.log(parseDate(this.event.startDate));
        })
        .catch(e => {
          // this.errors.push(e)
          console.log(e);
        })
  },
  computed:
  {
    targetDate(){
      return parseDate(this.event.startDate);
    }
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
