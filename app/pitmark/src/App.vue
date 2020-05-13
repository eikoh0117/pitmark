<template>
  <div id="app">
    <pm-nav-bar></pm-nav-bar>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
import pmNavBar from "@/components/NavBar";
import { authService } from "@/services/AuthService";

export default {
  name: "app",
  components: { pmNavBar },
  data() {
    return {
      user: null
    };
  },
  created() {
    authService.onStateChanged(user => {
      this.user = user;
    });
  },
  methods: {
    async signOut() {
      await authService.signOut();
      // サインアウト後にトップページに遷移する
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
</style>
