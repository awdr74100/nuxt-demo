<template>
  <div>
    <button @click.prevent="increase(10)">increase</button>
    <button @click.prevent="decrease(10)">decrease</button>
    <button @click.prevent="delayIncrease(10)">delayIncrease</button>
    {{ counter }}
    {{ reverse }}
    <CourseList />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

import CourseList from "~/components/CourseList/CourseList";

export default {
  components: {
    CourseList
  },
  data() {
    return {
      title: "Roya"
    };
  },
  methods: {
    loginModalSubmit({ modalTyple, name, email, password }) {
      console.log(modalTyple, name, email, password);
    },
    ...mapActions(["delayIncrease"]),
    ...mapMutations(["increase", "decrease"])
    // increase() {
    //   this.$store.commit("increase", 10);
    // },
    // decrease() {
    //   this.$store.commit("decrease", 10);
    // }
  },
  computed: {
    ...mapState(["counter"]),
    ...mapState("user", ["isSignin"]),
    ...mapGetters(["filterCounter"]),
    ...mapGetters("user", ["reverse"])
  },
  created() {
    // if (!process.client) return;
    // console.log(process.env.baseUrl);
    console.log(123);
    console.log(process.env.NODE_ENV);
    // console.log(this.isSignin);
    // this.$store.commit("increase", 10);
  }
};
</script>
