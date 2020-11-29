<template>
  <div>
    <p>{{ $route.fullPath }}</p>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: "demo",
  middleware: ["test"],
  async asyncData() {
    console.log("asyncData active", Date.now());
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("asyncData promise", Date.now());
        resolve();
      }, 500);
    });
  },
  async fetch() {
    console.log("fetch active", Date.now());
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("fetch promise", Date.now());
        resolve();
      }, 500);
    });
  },
  beforeCreate() {
    console.log("beforeCreate active", Date.now());
  },
  created() {
    console.log("created active", Date.now());
  },
  beforeMount() {
    console.log("beforeMount active", Date.now());
  },
  mounted() {
    console.log("mounted active", Date.now());
  },
  beforeDestroy() {
    console.log("beforeDestroy active", Date.now());
  },
  destroyed() {
    console.log("destroyed active", Date.now());
  }
};
</script>
