<template>
  <div class="ensak-landing-page-container">
    <a-layout id="components-layout-demo-top-side-2">
      <a-layout-header class="header">
        <div class="logo" />
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            nav 1
          </a-menu-item>
          <a-menu-item key="2">
            nav 2
          </a-menu-item>
          <a-menu-item key="3">
            nav 3
          </a-menu-item>
        </a-menu>
      </a-layout-header>
    </a-layout>
    <!-- Style Object Binding    -->
    <LandingBanner :target-date="targetDate" :style="{ backgroundImage: bannerUrl }"/>
    <LandingSpeakers :speakers="speakersData"/>
    <LandingSchedule/>
    <LandingFindUs :location="location"/>
    <LandingFooter/>
  </div>
</template>

<script>
import LandingBanner from "@/components/landing/LandingBanner";
import LandingSpeakers from "@/components/landing/LandingSpeakers";
import LandingSchedule from "@/components/landing/LandingSchedule";
import LandingFindUs from "@/components/landing/LandingFindUs";
import LandingFooter from "@/components/landing/LandingFooter";
import { parseDate }      from "@/utils/utils";
export default {
  name: "LandingPage",
  components: {
    LandingBanner,
    LandingSpeakers,
    LandingSchedule,
    LandingFindUs,
    LandingFooter
  },
  data()
  {
    return {
      event: {},
      bannerUrl: '',
      speakersData:{},
      location:{}
    }
  },
  //Todo: Create an EndPoint that returns the current event
  created()
  {
    this.axios.get('/events/497f6eca-6276-4993-bfeb-53cbbbba6f08/template')
        .then(response => {
          this.event = response.data.content.data;
          this.bannerUrl = "url('" + this.event.banner + "')";
          this.speakersData = this.event.performers;
          this.location = this.event.location;
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
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
