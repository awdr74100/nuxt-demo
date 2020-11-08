<template>
  <div class="123">
    <Header />
    <CourseList />
    <Footer />
    <LoginModal
      @loginModalSubmit="loginModalSubmit"
      :openModal="true"
      modalTyple="registered"
    />
  </div>
</template>

<script>
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import CourseList from "~/components/CourseList/CourseList";
import LoginModal from "~/components/Modal/LoginModal";

export default {
  components: {
    Header,
    Footer,
    CourseList,
    LoginModal
  },
  methods: {
    loginModalSubmit({ modalTyple, name, email, password }) {
      console.log(modalTyple, name, email, password);
    }
  }
};
</script>
