import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import America from './views/America.vue'
import Australia from './views/Australia.vue'
import Germany from './views/Germany.vue'
import Italy from './views/Italy.vue'
import Paris from './views/Paris.vue'
import Russia from './views/Russia.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/',
        name: 'america',
        component: America,
      },      
      {
        path: '/',
        name: 'australia',
        component: Australia,
      },      
      {
        path: '/',
        name: 'germany',
        component: Germany,
      },      
      {
        path: '/',
        name: 'italy',
        component: Italy,
      },
      {
        path: '/',
        name: 'paris',
        component: Paris,
      },         
      {
        path: '/',
        name: 'russia',
        component: Russia,
      },
    ]
  });