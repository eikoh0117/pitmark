<template>
  <div>
    <pm-page-title title="サインイン"></pm-page-title>
    <section class="section">
      <form class="container">
        <pm-text-field type="email" placeholder="メールアドレス" icon="envelope" v-model="email"></pm-text-field>
        <pm-text-field type="password" placeholder="パスワード" icon="lock" v-model="password"></pm-text-field>
        <div class="field is-grouped">
          <div class="control">
            <button @click.prevent="signIn" class="button is-primary">サインイン</button>
          </div>
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
  components: { pmPageTitle, pmTextField },
  name: "sign_in",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    // サインイン処理を追加
    signIn() {
      authService
        .signIn(this.email, this.password)
        .then(() => {
          // サインイン成功後にトップページに遷移する
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>
