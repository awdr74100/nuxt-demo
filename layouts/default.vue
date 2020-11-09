<template>
  <div>
    <Header />
    <Nuxt />
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
import LoginModal from "~/components/Modal/LoginModal";

export default {
  components: {
    Header,
    Footer,
    LoginModal
  },
  methods: {
    loginModalSubmit({ modalTyple, name, email, password }) {
      console.log(modalTyple, name, email, password);
    }
  }
};
</script>
