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
  async fetch() {
    if (!this.$store.state.courses.length) {
      return this.$store.dispatch("setCoursesList");
    }
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
    }
  }
};
</script>
