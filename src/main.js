import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import store from './store/index'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
Vue.use(Vuex)
Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyCEN5rmJuJuGX4Zz3xGi_AeOBTbroEjgxY",
  authDomain: "camper-f60d4.firebaseapp.com",
  projectId: "camper-f60d4",
  storageBucket: "camper-f60d4.appspot.com",
  messagingSenderId: "458034968861",
  appId: "1:458034968861:web:51f15a65978e57ebe189f4",
  measurementId: "G-HHWZRPRX0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
