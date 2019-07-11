<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Welcome to your prerender-spa-plugin Vuejs 2.0 demo app!'
    }
  },
  created(){
    setTimeout(() => {
      this.msg = "Hahaha " + Math.random() * 10
      console.log('hi?')
    }, 5000)
  }
}
</script>

<style>
</style>
