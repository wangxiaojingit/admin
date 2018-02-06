import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login/login'
import home from '@/components/home/home'
import authManage from '@/components/page/authManage/authManage'
import table from '@/components/page/table/table'
import form from '@/components/page/form/form'
import page404 from '@/components/page/404/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/home',
      component: home,
      children:[
          {
            path:"/authManage",
            component:authManage
          },
          {
            path:"/table",
            component:table
          },
          {
            path:"/form",
            component:form
          },
          {
            path:"/emailManage",
            component:page404
          },
          {
            path:"/integralManage",
            component:page404
          },
          {
            path:"/classifyManage",
            component:page404
          },
          {
            path:"/articleManage",
            component:page404
          },
          {
            path:"/commentManage",
            component:page404
          },
      ]
    },
    {
        path: '*',
        component: page404
    }
  ]
})
