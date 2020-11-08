<template>
  <div>
    <logo />
    <h1 class="text-danger">
      {{ title }}
    </h1>
    <h2>
      {{ h2 }}
    </h2>
    <h2 class="text-primary">
      {{ demoH2 }}
    </h2>
    <div class="d-flex">
      <div class="img"></div>
    </div>
    <i class="fas fa-car"></i>

    <datepicker></datepicker>

    <button v-tooltip="title" style="margin-top:30px">按鈕</button>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import * as ccc from "@/assets/js/test1.js";
import tool from "@/assets/js/test2.js";

export default {
  layout: "default",
  head() {
    return {
      title: this.title
    };
  },
  components: {
    Logo
  },
  data() {
    return {
      title: "demo",
      h2: "這是 h2"
    };
  },
  methods: {
    demoFn() {
      console.log("demoFn");
    }
  },
  computed: {
    demoH2() {
      return this.h2 + "(computed)";
    }
  },
  beforeCreate() {
    console.log("tpl beforeCreate");
  },
  async created() {
    console.log("tpl created");
    // const url = "https://randomuser.me/api/";
    // console.log(url);
    // console.log(this);
    // const { data } = await this.$axios.get(url);
    // console.log(data);
    // console.log(ccc.fun1("BLACK"));
    // console.log(ccc.fun2("BLUE"));
    // console.log(tool.fun3("GREEN"));
    // console.log(tool.fun4("PINK"));
  },
  beforeMount(){
    console.log('tpl beforeMount');
  },
  mounted() {
    console.log("tpl mounted");
  },
  destroyed(){
    console.log('tpl destroyed');
  }
  // beforeMount() {
  //   console.log("before mount");
  // },
  // mounted() {
  //   console.log("mounted active");
  // }
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
// @import "@/assets/scss/all.scss";

// @import "~/assets/scss/all.scss";
</style>
