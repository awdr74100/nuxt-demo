<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            我的收藏
          </h1>
          <h2 class="subtitle">
            Primary bold subtitle
          </h2>
        </div>
      </div>
    </section>
    <CourseList :courses="get_courses"></CourseList>
  </div>
</template>

<script>
import CourseList from "~/components/CourseList/CourseList.vue";

export default {
  meta: {
    auth: true
  },
  methods: {},
  async fetch() {
    if (!this.$store.state.courses.length) {
      await this.$store.dispatch("setCoursesList");
    }
    //代表userFavorite 還沒初始化
    if (this.$store.state.userFavorite === null) {
      await this.$store.dispatch("getUserFavorite");
    }
  },
  computed: {
    get_courses() {
      let courses = [];
      if (!this.$store.state.userFavorite) return;
      this.$store.state.courses.forEach(e => {
        if (this.$store.state.userFavorite[e.id]) {
          courses.push(e);
        }
      });
      return courses;
    }
  },
  components: {
    CourseList
  },
  middleware: ["auth", "aa"]
};
</script>
