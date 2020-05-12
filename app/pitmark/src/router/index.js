import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import firebase from "firebase";
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
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign_up",
    name: "sign_up",
    component: SignUp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
