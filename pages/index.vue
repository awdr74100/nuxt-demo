<template>
  <div class="123">
    <Header />
    <CourseList />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import CourseList from "~/components/CourseList/CourseList";

export default {
  components: {
    Header,
    Footer,
    CourseList
  }
};
</script>
