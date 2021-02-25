<template>
  <div class="ensak-landing-nav-container" >
    <!--    Todo: Find a better alternative by making a base asset path as a variable -->
    <img src="./../../assets/branding/ensak.png" alt="Ensak Branding">
    <button class="ensak-landing-login" @click="login">LOGIN</button>
  </div>
</template>

<script>
export default {
  name: "LandingNav",
  methods:{
    login(){
      this.$emit('clicked-login',true);
    }
  }
}
</script>

<style lang="scss">

.ensak-landing-nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // border: 1px red dotted;
  height: 15vh;
  padding: 0 20px;
  width: 100%;
  img {
    height: 100%;
    margin:auto 0;
  }
}

.ensak-landing-login{
  padding: 0px 30px 0px 30px;
  margin:auto 0;
  border-radius: 25px 0 25px 0;
  font-weight: 600;
  font-size: 18px;
  background-color: transparent;
  border: 2px white solid;
  color:white;
  &:hover {
    cursor: pointer;
    background-color: white;
  }
  &-button{
    color: white !important;
    &:hover {
      cursor: pointer;
      color: #040812 !important;
    }
  }
}

</style>

