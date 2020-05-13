<template>
  <div>
    <pm-page-title title="サインアップ"></pm-page-title>
    <section class="section">
      <form class="container">
        <pm-text-field type="email" placeholder="メールアドレス" icon="envelope" v-model="email"></pm-text-field>
        <pm-text-field type="password" placeholder="パスワード" icon="lock" v-model="password"></pm-text-field>
        <div class="field">
          <p class="control">
            <button class="button is-primary" @click.prevent="signUp">サインアップ</button>
          </p>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
// import firebase from "firebase";
import { authService } from "@/services/AuthService";
import pmPageTitle from "@/components/PageTitle";
import pmTextField from "@/components/TextField";

export default {
  name: "sign_up",
  components: { pmPageTitle, pmTextField },
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    signUp() {
      authService
        .signIn(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>
