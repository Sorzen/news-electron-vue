import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '/',
      name: 'main-page',
      component: require('@/views/news').default
    },
    {
      path: '/newsDeatil/:id',
      name: 'news-detail',
      component: require('@/views/newsdetail').default
    },
    {
      path: '/type',
      name: 'news-type',
      component: require('@/views/type').default
    },
    {
      path: '/typeDetail/:id',
      name: 'news-type-detail',
      component: require('@/views/typedetail').default
    }
  ]
})
