<template>
  <div>
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
  },
  async asyncData({ $axios }) {},
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
      const res4 = await this.$axios.post("/api/cookie");
      console.log(res4.data);
      console.log(process.env.NODE_ENV);
      console.log(process.env.API_KEY);
    }
  }
};
</script>
