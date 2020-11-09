<template>
  <div class="123">
    <CourseList />
  </div>
</template>

<script>
import CourseList from "~/components/CourseList/CourseList";

export default {
  components: {
    CourseList
  },
  methods: {
    loginModalSubmit({ modalTyple, name, email, password }) {
      console.log(modalTyple, name, email, password);
    }
  }
};
</script>
