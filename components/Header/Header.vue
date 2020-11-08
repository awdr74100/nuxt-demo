<template>
  <div class="header">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <nuxt-link :to="{ name: 'index' }">
            <Logo class="title_img"></Logo>
            <span class="title_span">你的網站名稱</span>
          </nuxt-link>
          <a
            role="button"
            class="navbar-burger burger"
            @click="isMenuOpen = !isMenuOpen"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-start">
            <div class="navbar-item field">
              <Search></Search>
            </div>
          </div>
        </div>

        <!-- For mobile and tablet -->
        <div v-show="isMenuOpen" class="navbar-end is-hidden-tablet">
          <Menu></Menu>
        </div>

        <!-- For desktop -->
        <div class="navbar-end is-hidden-mobile">
          <Menu></Menu>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu";
import Search from "./Search";
import Logo from "~/components/Logo.vue";

export default {
  name: "Header",
  props: ["title"],
  data() {
    return {
      isMenuOpen: false
    };
  },
  created() {},
  components: {
    Search,
    Menu,
    Logo
  }
};
</script>

<style lang="scss" scoped>
@import "./header.scss";
</style>
