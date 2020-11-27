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
import jwtDecode from "jwt-decode";
import Cookie from "js-cookie";

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
  },
  mounted() {
    if (this.$route.query.id_token && this.$route.query.refresh_token) {
      let id_token_Decode = jwtDecode(this.$route.query.id_token);
      console.log(id_token_Decode);
      this.$store.commit("setUserLoggedIn", {
        id_token: this.$route.query.id_token,
        refresh_token: this.$route.query.refresh_token,
        userUid: id_token_Decode.user_id,
        userPicture: id_token_Decode.picture,
        userName: id_token_Decode.name
      });
      window.history.replaceState(null, null, window.location.pathname);
      return;
    }
    if (Cookie.get("id_token")) {
      this.$store.commit("setUserLoggedIn", {
        id_token: Cookie.get("id_token"),
        refresh_token: Cookie.get("refresh_token"),
        userUid: Cookie.get("userUid"),
        userPicture: Cookie.get("userPicture"),
        userName: Cookie.get("userName")
      });
    }
  }
};
</script>
