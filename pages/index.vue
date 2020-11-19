<template>
  <div>
    <!-- <h1>{{ title }}</h1>
    <h2>{{ message }}</h2>
    <h3>{{ dd }}</h3> -->
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
  async fetch(context) {
    await context.store.dispatch("getCourses");
    // const { data } = await context.$axios.get("/api/courses");
    // context.store.commit("set_courses", { ...data });
    // return context.$axios("api/courses").then(data => {
    //   context.store.commit("set_courses", {
    //     ...data.data
    //   });
    // });
  },
  async asyncData(context) {
    // await context.store.dispatch("getCourses");
    // const { data } = await context.$axios.get("/api/courses");
    // context.store.commit("set_courses", { ...data });
    // return { title: "Roya" };
    // console.log(process.client);
    // console.log(process.server);
    // console.log("async data active");
    // const { data } = await context.$axios.get("/api/test");
    // return { title: data.title, message: data.message };
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
  async created() {
    if (process.client) {
      // const res1 = await this.$axios.get("http://localhost:3500");
      // console.log(res1.data);
      const res2 = await this.$axios.get("/api");
      console.log(res2.data);
      const res3 = await this.$axios.patch("/api", {
        headers: { Authorization: "Basic 123" }
      });
      console.log(res3.data);
      // this.$axios("api/courses").then(data => {
      //   this.$store.commit("set_courses", {
      //     ...data.data
      //   });
      // });
    }
    // console.log(process);
    // console.log(process.client);
    // console.log(process.server);
    // const { data } = await this.$axios.get("/api/test");
    // console.log(data);
  }
};
</script>
