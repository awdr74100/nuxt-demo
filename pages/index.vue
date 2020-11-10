<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ message }}</h2>
    <h3>{{ dd }}</h3>
    <CourseList />
  </div>
</template>

<script>
import CourseList from "~/components/CourseList/CourseList";

export default {
  components: {
    CourseList
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get("/api/test");
    return { title: data.title, message: data.message };
  },
  data() {
    return {
      title: "Roya",
      message: "我好帥",
      dd: "dd"
    };
  },
  methods: {
    loginModalSubmit({ modalTyple, name, email, password }) {
      console.log(modalTyple, name, email, password);
    }
  },
  async created() {
    // const { data } = await this.$axios.get("/api/test");
    // console.log(data);
  }
};
</script>
