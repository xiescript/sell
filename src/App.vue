<template>
  <div id="app">
    <Header></Header>
    <div class="tab">
      I am tab
    </div>
    <div class="content">
      I am content
    </div>
  </div>
</template>

<script>
import Header from 'components/header/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
  data (){
    return {
      msg:"hello vue"
    }
  }
}
</script>

<style>

</style>
