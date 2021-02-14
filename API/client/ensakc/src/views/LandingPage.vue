<template>
  <div class="ensak-landing-page-container">
    <!-- Style Object Binding    -->
    <LandingBanner :target-date="targetDate" :style="{ backgroundImage: bannerUrl }"/>
    <LandingSpeakers :speakers="SpeakersData"/>
  </div>
</template>

<script>
import LandingBanner from "@/components/landing/LandingBanner";
import LandingSpeakers from "@/components/landing/LandingSpeakers";
import { parseDate }      from "@/utils/utils";
export default {
  name: "LandingPage",
  components: {
    LandingBanner,
    LandingSpeakers,
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
