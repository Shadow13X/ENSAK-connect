<template>
  <div class="ensak-landing-footer-container" >
    <!--    Todo: Find a better alternative by making a base asset path as a variable -->
    <span class="ensak-landing-footer-copyright">Copyright © {{year}} - ENSA Kénitra</span>
    <div class="ensak-landing-footer-social">
        <a href=""><img src="../../assets/socialicons/facebook.png" class="ensak-landing-footer-social-icon"/></a>
        <a href=""><img src="../../assets/socialicons/instagram.png" class="ensak-landing-footer-social-icon"/></a>
        <a href=""><img src="../../assets/socialicons/linkedin.png" class="ensak-landing-footer-social-icon"/></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingFooter",
  data () {
    return {
      year:""
    }
  },
  created(){
     var cd = new Date()
     this.year = cd.getFullYear()
  }

}

</script>

<style lang="scss">

.ensak-landing-footer-container {
  background: #040812;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10vh;
  padding: 0 10px;
  width: 100%;
  color:#fff;
}
.ensak-landing-footer-copyright {
  font-size:18px;
  font-weight: 200;
  margin:auto 0;
}
.ensak-landing-footer-social {
  margin:auto 0;
  background-color: transparent;
  color: white;
  font-weight: 600;
  font-size: 18px;
  &-icon{
    height:30px;
    margin: 0 0 0 20px;
  }
}

</style>

