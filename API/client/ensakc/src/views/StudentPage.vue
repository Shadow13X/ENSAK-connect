<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <p>
        If Ant-Design-Vue is successfully added to this project, you'll see an
        <code v-text="'<a-button>'"></code>
        below
      </p>
      <a-button type="primary">{{ resp }}</a-button>
    </div>
    <div>
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>
        <a-menu-item key="app" disabled> <a-icon type="appstore" />Navigation Two </a-menu-item>
        <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
        ><a-icon type="setting" />Navigation Three - Submenu</span
        >
          <a-menu-item-group title="Item 1">
            <a-menu-item key="setting:1">
              Option 1
            </a-menu-item>
            <a-menu-item key="setting:2">
              Option 2
            </a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="Item 2">
            <a-menu-item key="setting:3">
              Option 3
            </a-menu-item>
            <a-menu-item key="setting:4">
              Option 4
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-menu-item key="alipay">
          <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
          >Navigation Four - Link</a
          >
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>


export default {
  name: "StudentPage",

  data()
  {
    return {
      resp: '',
      errors: [],
      current: ['mail'],
    }
  },
  //Populate the data after the component creation
  created()
  {
    this.axios.get('/students')
        .then(response => {
          this.resp = response.data.content.data[0].id;
          console.log(response.data);
        })
        .catch(e => {
          this.errors.push(e)
        })
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  }
}
</script>

<style scoped>

</style>
