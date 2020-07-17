// import {RouteConfig} from 'react-router-config'

export const routes = [
    {
      path: '/user',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      name: 'Home',
      icon: 'smile',
      component: './Home',
    },
    {
      component: './404',
    },
  ]