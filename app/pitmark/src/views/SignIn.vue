<template>
  <div>
    <pm-page-title title="サインイン"></pm-page-title>
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
import pmIcon from "@/components/Icon";

export default {
  components: { pmPageTitle, pmIcon },
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
