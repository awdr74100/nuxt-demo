<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <nuxt-link :to="{ name: 'index' }">
        <Logo class="footer_logo" />
      </nuxt-link>
      <div>
        <i class="far fa-copyright"></i> 2020 <strong>你的網站名稱</strong> Co.,
        Ltd, all rights reserved.
        <div style="margin-top:1em">
          <a class="icon_a" href="#" target="_blank">
            <span class="icon">
              <i class="fab fa-facebook"></i>
            </span>
          </a>
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  name: "Footer",
  props: ["year", "title"],
  created() {},
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
@import "./footer.scss";
</style>
