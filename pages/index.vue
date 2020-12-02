<template>
  <div>
    <nuxt-link to="/demo/7788">連結</nuxt-link>
    <CourseList :courses="courses" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import CourseList from "~/components/CourseList/CourseList";
import API from "@/api.js";

export default {
  components: {
    CourseList
  },
  asyncData() {},
  // async fetch() {
  //   await this.$store.dispatch("getCourses");
  // },
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
      // try {
      //   const { data } = await this.$axios.post(API.member.exchangeToken.url);
      //   console.log(data);
      // } catch (error) {
      //   console.log(error);
      // }
    }
  }
};
</script>
