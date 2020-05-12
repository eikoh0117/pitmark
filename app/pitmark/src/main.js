import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAhHVzs0X2jlLavbnjQcFOYrrg2fyiIDxI",
  authDomain: "pitmark-d1c0f.firebaseapp.com",
  databaseURL: "https://pitmark-d1c0f.firebaseio.com",
  projectId: "pitmark-d1c0f",
  storageBucket: "pitmark-d1c0f.appspot.com",
  messagingSenderId: "331188842084",
  appId: "1:331188842084:web:e5c87067a9945e18f4f971",
  measurementId: "G-BBKFVM43WY",
};

firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
