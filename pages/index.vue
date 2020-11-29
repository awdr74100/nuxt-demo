<template>
  <div>
     <nuxt-link to="/demo/7788">連結</nuxt-link>
    <CourseList :courses="courses" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import CourseList from "~/components/CourseList/CourseList";

export default {
  components: {
    CourseList
  },
  asyncData() {
    // console.log("asyncData Active", new Date().getTime());
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log("asyncData Promise", new Date().getTime());
    //     resolve({});
    //   }, 600);
    // });
    // console.log("pages asyncdata");
    // console.log(this);
  },
  async fetch() {
    // console.log("pages fetch");
    // console.log("new fetch Active", new Date().getTime());
    await this.$store.dispatch("getCourses");
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log("fetch Promise", new Date().getTime());
    //     resolve({});
    //   }, 600);
    // });
    // await context.store.dispatch("getCourses");
  },
  data() {
    return {
      title: "unknown",
      message: "unknown",
      dd: "unknown"
    };
  },
  methods: {
    loginModalSubmit({ modalTyple, name, email, password }) {
      console.log(modalTyple, name, email, password);
    }
  },
  computed: {
    ...mapState(["courses"])
  },
  // beforeCreate() {
  //   console.log("beforeCreate Active", new Date().getTime());
  // },
  // async created() {
  //   console.log("created Active", new Date().getTime());
  //   if (process.client) {
  //     // const res4 = await this.$axios.post("/api/cookie");
  //     // console.log(res4.data);
  //     // console.log(process.env.NODE_ENV);
  //     // console.log(process.env.API_KEY);
  //   }
  // },
  // beforeMount() {
  //   console.log("beforeMount Active", new Date().getTime());
  // },
  // mounted() {
  //   console.log("mounted Active", new Date().getTime());
  // }
};
</script>
