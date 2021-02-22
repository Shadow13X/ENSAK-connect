<template>
  <div class="ensak-landing-cfa-container" >
    <button class="ensak-landing-sponsorship-button" @click="showModal">SPONSORSHIP</button>
    <button class="ensak-landing-save-the-date-button">SAVE THE DATE</button>
    <a-modal v-model="visible" title="Title" on-ok="handleOk">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">
          Return
        </a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          Submit
        </a-button>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "LandingCallForAction",
  data() {
    return {
      loading: false,
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    handleCancel() {
      this.visible = false;
    },
  },
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

