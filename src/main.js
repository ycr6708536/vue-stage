import Vue from 'vue';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Home from './views/Home';
import TimeEntries from './views/TimeEntries';
import LogTime from './views/LogTime';
import NotFound from './views/404';

import store from './store'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/home',
  component: Home
}, {
  path: '/time-entries',
  component: TimeEntries,
  children: [{
    path: 'log-time',
    component: LogTime,
  }]
}, {
  path: '*',
  component: NotFound
}];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
});
