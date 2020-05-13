<template>
  <div>
    <pm-page-title title="サインアップ"></pm-page-title>
    <section class="section">
      <form class="container">
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="email" placeholder="メールアドレス" v-model="email" />
            <pm-icon class="is-small is-left" name="envelop"></pm-icon>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="パスワード" v-model="password" />
            <pm-icon class="is-small is-left" name="lock"></pm-icon>
          </p>
        </div>
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
import pmIcon from "@/components/Icon";

export default {
  name: "sign_up",
  components: { pmPageTitle, pmIcon },
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
