import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './Router.js'
import store from '../store.js'
const pinia = createPinia()

const onClickOutside = (event, el, binding, vnode) => {
    if (!(el === event.target || el.contains(event.target))) {
      vnode.context[binding.expression](event);
    }
  };
  
  const directives = {
    clickOutside: {
      bind: function (el, binding, vnode) {
        el.__vueClickOutside__ = event => onClickOutside(event, el, binding, vnode);
        document.body.addEventListener('click', el.__vueClickOutside__);
      },
      unbind: function (el) {
        document.body.removeEventListener('click', el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      },
    },
  };

createApp(App).use(router).use(store).use(pinia).use(directives).mount('#app')
