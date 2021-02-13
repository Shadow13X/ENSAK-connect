<template>
  <div class="ensak-landing-nav-container" >
    <!--    Todo: Find a better alternative by making a base asset path as a variable -->
    <img src="./../../assets/branding/ensak.png" alt="Ensak Branding">
    <button class="ensak-landing-login-button">LOGIN</button>
  </div>
</template>

<script>
export default {
  name: "LandingNav"
}
</script>

<style lang="scss">

$side-margins: 50px;
$curve-radius: 50px;

.ensak-landing-nav-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 20%;
  width: 100%;
  //border: 2px red dotted;

  img {
    height: 150px;
    width: 250px;
    margin: 10px 0 10px $side-margins;
  }
}

.ensak-landing-login-button {
  width: 10%;
  min-width: 150px ;
  padding: 10px;
  margin-right: $side-margins;

  border-radius: $curve-radius 0 $curve-radius 0;
  background-color: transparent;
  color: white;
  font-weight: bold;
  font-size: 1.3rem;
  border: 5px white solid;
  outline: none;

  &:hover {
    cursor: pointer;
  }
}

</style>

