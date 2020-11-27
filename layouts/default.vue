<template>
  <div>
    <Header @login-click="loginClick" @registered-click="registeredClick" />
    <Nuxt />
    <Footer />
    <LoginModal
      v-if="openModal"
      @loginModalSubmit="loginModalSubmit"
      :modalTyple="modalTyple"
      :openModal.sync="openModal"
    ></LoginModal>
    <!--  @update:openModal="val => (openModal = val)" -->
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
  data() {
    return {
      openModal: false,
      modalTyple: ""
    };
  },
  methods: {
    async loginModalSubmit({ modalTyple, email, password }) {
      const mode = modalTyple === "login" ? "signInWithPassword" : "signUp";
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${process.env.firebaseApiKey}`;
      const payload = { email, password, returnSecureToken: true };
      try {
        const { data } = await this.$axios.post(url, payload);
        this.openModal = false;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    loginClick() {
      this.openModal = !this.openModal;
      this.modalTyple = "login";
    },
    registeredClick() {
      this.openModal = !this.openModal;
      this.modalTyple = "registered";
    }
  }
};
</script>
