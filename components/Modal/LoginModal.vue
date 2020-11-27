<template>
  <div
    class="registrationLoginModal"
    :class="[isOpenModal ? 'is-active' : '', 'modal']"
  >
    <div class="modal-background"></div>
    <div class="modal-card login">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <span>{{ modalTitle }}</span>
        </p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <a class="button_a">
        <button class="button is-fullwidth google">
          <span class="reg_login icon is-small">
            <i class="fab fa-google"></i>
          </span>
          <span>使用 google 帳號 {{ modalTitle }}</span>
        </button>
      </a>
      <hr class="login-or" />
      <form @submit="checkForm" method="post">
        <section class="modal-card-body">
          <!--登入表單-->
          <div v-if="modalTyple == 'login'">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  :class="[emailWithError ? 'input is-danger' : 'input']"
                  type="email"
                  placeholder="Your email"
                  name="emailName"
                  v-model="email"
                  autocomplete="on"
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </p>
              <p v-if="emailWithError" class="help is-danger">請輸入email</p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  :class="[passwordWithError ? 'input is-danger' : 'input']"
                  type="password"
                  placeholder="Your password"
                  name="passwordName"
                  v-model="password"
                  autocomplete="on"
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </p>
              <p v-if="passwordWithError" class="help is-danger">請輸入密碼</p>
            </div>
          </div>

          <!--註冊表單-->
          <div v-if="modalTyple == 'registered'">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  :class="[nameWithError ? 'input is-danger' : 'input']"
                  type="text"
                  placeholder="Name*"
                  v-model="name"
                  autocomplete="on"
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </p>
              <p v-if="nameWithError" class="help is-danger">請填寫姓名</p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  :class="[emailWithError ? 'input is-danger' : 'input']"
                  type="email"
                  placeholder="Email*"
                  name="emailName"
                  v-model="email"
                  autocomplete="on"
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </p>
              <p v-if="emailWithError" class="help is-danger">請輸入email</p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  :class="[passwordWithError ? 'input is-danger' : 'input']"
                  type="password"
                  placeholder="Password*"
                  v-model="password"
                  autocomplete="on"
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </p>
              <p v-if="passwordWithError" class="help is-danger">請填寫密碼</p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  :class="[
                    repeatPasswordWithError ? 'input is-danger' : 'input'
                  ]"
                  type="password"
                  placeholder="Repeat Password*"
                  v-model="repeatPassword"
                  autocomplete="on"
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </p>
              <p v-if="repeatPasswordWithError" class="help is-danger">
                密碼必須相等
              </p>
            </div>
          </div>
          <div class="reg_login_button">
            <button type="submit" class="button is-fullwidth">
              {{ modalTitle }}
            </button>
          </div>
          <hr />
          <div class="bottom_center">
            還沒有帳戶嗎? <a href="#">立即註冊</a> 或是 <a href="#">忘記密碼</a>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginModal",
  props: {
    modalTyple: {
      type: String,
      required: true
    },
    openModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpenModal: this.openModal,
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      emailWithError: null,
      passwordWithError: null,
      nameWithError: null,
      repeatPasswordWithError: null
    };
  },
  computed: {
    modalTitle() {
      if (this.modalTyple === "login") {
        return "登入";
      }
      if (this.modalTyple === "registered") {
        return "註冊";
      }
    }
  },
  methods: {
    checkForm(e) {
      e.preventDefault();

      this.emailWithError = false;
      this.passwordWithError = false;
      this.nameWithError = false;
      this.repeatPasswordWithError = false;

      //驗證 email、密碼
      if (this.modalTyple == "login") {
        if (!this.email) return (this.emailWithError = true);
        if (!this.password) return (this.passwordWithError = true);
      }

      if (this.modalTyple == "registered") {
        if (!this.name) return (this.nameWithError = true);
        if (!this.email) return (this.emailWithError = true);
        if (!this.password) return (this.passwordWithError = true);
        if (this.repeatPassword !== this.password) {
          return (this.repeatPasswordWithError = true);
        }
      }
      // 送出表單發射表單資訊出去
      this.$emit("loginModalSubmit", {
        modalTyple: this.modalTyple,
        name: this.name,
        email: this.email,
        password: this.password
      });
    },
    closeModal() {
      this.$emit("update:openModal", false);
      // this.isOpenModal = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./loginModal.scss";
</style>
