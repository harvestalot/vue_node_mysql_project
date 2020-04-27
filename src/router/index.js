import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/', // http://localhost:8080/#/
      name: 'Home',
      component: Home
    },
    {
      path: '/blog', // http://localhost:8080/#/blog
      name: 'Blog',
      component: Blog
    }
  ]
})
