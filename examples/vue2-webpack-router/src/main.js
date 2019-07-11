import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

const Home = { template: '<div><h2>Home Page</h2></div>' }
const Contact = { template: '<div><h2>Contact Page</h2></div>' }
// import About from './About.vue'
// const About = import("./About.vue")

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: () => {
    return import("./About.vue")
  } },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})
