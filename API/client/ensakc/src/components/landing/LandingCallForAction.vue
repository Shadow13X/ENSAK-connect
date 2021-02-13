<template>
  <div class="ensak-landing-cfa-container" >
    <button class="ensak-landing-sponsorship-button">SPONSORSHIP</button>
    <button class="ensak-landing-save-the-date-button">SAVE THE DATE</button>
  </div>
</template>

<script>
export default {
  name: "LandingCallForAction"
}
</script>

<style lang="scss">

.ensak-landing-cfa-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  // border: 1px red dotted;
  padding: 0 20px;
  width: 100vw;
}

.ensak-landing-sponsorship-button {
  padding: 5px 30px 5px 30px;
  margin:auto 10px;
  border-radius: 40px 0 40px 0;
  background-color: white;
  color: #040812;
  font-weight: 600;
  font-size: 24px;
  border: 2px white solid;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: white;
  }
}
.ensak-landing-save-the-date-button {
  padding: 5px 30px 5px 30px;
  margin:auto 10px;
  border-radius: 40px 0 40px 0;
  background-color: transparent;
  color: white;
  font-weight: 600;
  font-size: 24px;
  border: 2px white solid;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: #040812;
  }
}
</style>

