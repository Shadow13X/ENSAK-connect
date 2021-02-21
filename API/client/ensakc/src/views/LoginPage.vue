<template>
  <div class="ensak-landing-page-container">
    <!-- Style Object Binding    -->
    LOGIN
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data()
  {
    return {
      event: {},
      bannerUrl: '',
      speakersData:{},
      location:{}
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
