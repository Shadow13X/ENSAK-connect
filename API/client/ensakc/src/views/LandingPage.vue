<template>
  <div class="ensak-landing-page-container">
    <!-- Style Object Binding    -->
<<<<<<< HEAD
    <LandingBanner :style="{ backgroundImage: bannerUrl }"/>
    <LandingSpeakers :speakers="SpeakersData"/>
=======
    <LandingBanner :template-data="event" :style="{ backgroundImage: bannerUrl }"/>
    <LandingBannerTimer :target-date="targetDate"/>
>>>>>>> 00f9cd44d59092a4391fe5262858b266eb39226c
  </div>
</template>

<script>
<<<<<<< HEAD
import LandingBanner from "@/components/landing/LandingBanner";
import LandingSpeakers from "@/components/landing/LandingSpeakers";
=======
import { parseDate }      from "@/utils/utils";
import LandingBanner      from "@/components/landing/LandingBanner";
import LandingBannerTimer from "@/components/landing/LandingBannerTimer";


>>>>>>> 00f9cd44d59092a4391fe5262858b266eb39226c
export default {
  name: "LandingPage",
  components: {
    LandingBanner,
<<<<<<< HEAD
    LandingSpeakers
=======
    LandingBannerTimer
>>>>>>> 00f9cd44d59092a4391fe5262858b266eb39226c
  },
  data()
  {
    return {
      event: {},
      bannerUrl: '',
      SpeakersData:[]
    }
  },
  //Todo: Create an EndPoint that returns the current event
  created()
  {
    this.axios.get('/events/497f6eca-6276-4993-bfeb-53cbbbba6f08/template')
        .then(response => {
          this.event = response.data.content.data;
          this.bannerUrl = "url('" + this.event.banner + "')";
          this.SpeakersData = this.event.performers;
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
  font-family: 'Barlow', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.ensak-landing-page-container {
  overflow-x: hidden;
}
</style>
