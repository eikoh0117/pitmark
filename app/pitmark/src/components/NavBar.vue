<template>
  <nav id="nav" class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-itema">Pitmark</router-link>
        <a
          role="button"
          id="navbar-burger"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-links"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar-links" class="navbar-menu">
        <div v-if="user" class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <pm-icon name="user"></pm-icon>
            </a>
            <div class="navbar-dropdown is-right">
              <a @click="signOut" class="navbar-item">
                <pm-icon name="user"></pm-icon>
                <span>サインアウト</span>
              </a>
            </div>
          </div>
        </div>
        <div v-else class="navbar-end">
          <div class="navbar-item">
            <router-link :to="{ name: 'sign_in' }" class="button is-text">
              <pm-icon name="sign-in-alt"></pm-icon>
              <span>サインイン</span>
            </router-link>
          </div>
          <div class="navbar-item">
            <router-link :to="{ name: 'sign_up' }" class="button is-text">
              <pm-icon name="user-plus"></pm-icon>
              <span>サインアップ</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import pmIcon from "./Icon";

export default {
  name: "pm-nav-bar",
  components: { pmIcon },
  props: {
    user: Object
  },
  methods: {
    signOut() {
      this.$emit("sign-out-clicked");
    }
  }
};
</script>
