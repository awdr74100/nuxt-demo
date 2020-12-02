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

import API from "~/api";

export default {
  asyncData() {
    // console.log("layout asyncdata");
    // console.log(this.message);
  },
  fetch() {
    // console.log("layout fetch");
    // console.log(this.message);
  },
  components: {
    Header,
    Footer,
    LoginModal
  },
  data() {
    return {
      openModal: false,
      modalTyple: "",
      message: "Hello World"
    };
  },
  methods: {
    async loginModalSubmit({ modalTyple, email, password }) {
      const method =
        modalTyple === "login"
          ? API.member.login.method
          : API.member.registered.method;
      const url =
        modalTyple === "login"
          ? API.member.login.url
          : API.member.registered.url;
      const baseURL = process.env.FIREBASE_API_URL;
      const payload = { email, password, returnSecureToken: true };
      try {
        const { data } = await this.$axios[method](url, payload, { baseURL });
        this.openModal = false;
        this.$store.commit("setUserLoggedIn", {
          id_token: data.idToken,
          refresh_token: data.refreshToken,
          userUid: data.localId,
          userName: data.email
        });
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
      // let id_token_Decode = jwtDecode(this.$route.query.id_token);
      // this.$store.commit("setUserLoggedIn", {
      //   id_token: this.$route.query.id_token,
      //   refresh_token: this.$route.query.refresh_token,
      //   userUid: id_token_Decode.user_id,
      //   userPicture: id_token_Decode.picture,
      //   userName: id_token_Decode.name
      // });
      // console.log(window.location.pathname);
      window.history.replaceState(null, null, window.location.pathname);
      return;
    }
    // if (Cookie.get("id_token")) {
    //   this.$store.commit("setUserLoggedIn", {
    //     id_token: Cookie.get("id_token"),
    //     refresh_token: Cookie.get("refresh_token"),
    //     userUid: Cookie.get("userUid"),
    //     userPicture: Cookie.get("userPicture"),
    //     userName: Cookie.get("userName")
    //   });
    // }
  }
};
</script>
