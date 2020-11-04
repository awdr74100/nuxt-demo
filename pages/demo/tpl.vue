<template>
  <div>
    <logo />
    <h1>
      {{ title }}
    </h1>
    <h2>
      {{ h2 }}
    </h2>
    <h2>
      {{ demoH2 }}
    </h2>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import * as ccc from "~/assets/js/test1.js";
import tool from "~/assets/js/test2.js";

export default {
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
  created() {
    console.log(ccc.fun1("BLACK"));
    console.log(ccc.fun2("BLUE"));
    console.log(tool.fun3("GREEN"));
    console.log(tool.fun4("PINK"));
  }
};
</script>
