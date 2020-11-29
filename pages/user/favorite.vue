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
    <CourseList></CourseList>
  </div>
</template>

<script>
import CourseList from "~/components/CourseList/CourseList.vue";

export default {
  meta: {
    auth: true
  },
  methods: {},
  components: {
    CourseList
  },
  middleware: ["auth", "aa"]
};
</script>
