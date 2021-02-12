<template>
  <div class="ensak-landing-nav-container" >
    <!--    Todo: Find a better alternative by making a base asset path as a variable -->
    <img src="./../../assets/branding/ensak.png" alt="Ensak Branding">
    button
  </div>
</template>

<script>
export default {
  name: "LandingNav"
}
</script>

<style lang="scss" scoped>

.ensak-landing-nav-container {
  height: 20%;
  width: 100%;
  border: 2px red dotted;

  img {
    height: 80%;
    width: 250px;
    padding: 10px;
  }
}

</style>

