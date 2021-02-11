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
    <HelloWorld response="resp"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data()
  {
    return {
      resp: '',
      errors: []
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
  }
}
</script>
