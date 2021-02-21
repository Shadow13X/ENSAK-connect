<template>
  <div class="ensak-landing-schedule-container">
      <H1 class="ensak-landing-schedule-title">OUR<span style="font-weight: 600;color:#28DFFE">SCHEDULE</span></H1>
      <VueFaqAccordion :items="myItems"/>

  </div>
</template>
<script>
import VueFaqAccordion from 'vue-faq-accordion/src/'

export default {
  name: "LandingSchedule",
  components: {
    VueFaqAccordion
  },
  // props: {
  //   items: {
  //     type: Array,
  //     required: true
  //   }
  // },
  data () {
    return {
      myItems: 
      [
        {
          title: 'Activity Title',
          value: `{
              "activity":"Activity Name",
              "time":"Time"
            }--{
              "activity":"Activity Name",
              "time":"Time"
            }`,
          category: 'Day 1'
        },
        {
          title: 'Activity Title',
          value: `{
              "activity":"Activity Name",
              "time":"Time"
            }--{
              "activity":"Activity Name",
              "time":"Time"
            }`,
          category: 'Day 2'
        },
        {
          title: 'Activity Title',
          value: `{
              "activity":"Activity Name",
              "time":"Time"
            }--{
              "activity":"Activity Name",
              "time":"Time"
            }`,
          category: 'Day 1'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .ensak-landing-schedule-container {
    background: #040812;
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    padding:10px 0 20px 0;
    //border: 2px red dotted;
  }
  .ensak-landing-schedule-title{
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
