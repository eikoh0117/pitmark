<template>
  <div class="container">
    <span v-if="user">こんにちは {{ user.email }} さん</span>
    <span v-else>ログインしていません</span>
  </div>
</template>

<script>
// import firebase from "firebase";
import { authService } from "@/services/AuthService";

export default {
  name: "home",
  data() {
    return {
      user: null
    };
  },
  created() {
    authService.onStateChanged(user => {
      this.user = user;
    });
  }
};
</script>
