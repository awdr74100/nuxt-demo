<template>
  <div>
    <div class="course_main is-clearfix">
      <div class="course_left master">
        <div class="course_title is-clearfix">
          <h1 class="is-pulled-left">{{ get_courses.name }}</h1>
          <div class="button_parent">
            <button
              v-if="this.$store.state.isUserLoggedIn"
              :class="{ 'is-link': this.favicon_active }"
              class="button is-pulled-right"
              @click="setFavorite"
            >
              <span class="icon">
                <i class="far fa-heart"></i>
              </span>
            </button>
          </div>
        </div>
        <div class="course_content">
          <div class="course_movie">
            <div class="course_movie_inner">
              <figure class="image is-16by9">
                <iframe
                  class="has-ratio"
                  width="640"
                  height="360"
                  :src="
                    `https://www.youtube.com/embed/${get_courses_item.youtube_id}?showinfo=0`
                  "
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </figure>
            </div>
          </div>
          <div class="course_info">
            <div class="tabs is-fullwidth">
              <ul>
                <li @click="setTab(0)" :class="{ 'is-active': tabActive == 0 }">
                  <a>
                    <span class="icon"
                      ><i class="far fa-file-alt" aria-hidden="true"></i
                    ></span>
                    <span>課程介紹</span>
                  </a>
                </li>
                <li @click="setTab(1)" :class="{ 'is-active': tabActive == 1 }">
                  <a>
                    <span class="icon"
                      ><i class="fas fa-bolt" aria-hidden="true"></i
                    ></span>
                    <span>即時資訊</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="info_content">
              <div class="content">
                {{ get_courses.introduction }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="course_right secondary">
        <div class="course_top is-clearfix">
          <div class="course_top_left">章節</div>
          <span class="course_top_station">名稱</span>
        </div>
        <div class="course_item_parent" style="color:#4a4a4a;">
          <div
            @click="clickItem(index + 1)"
            v-for="(item, index) in coursesItem"
            :key="index + 1"
            :class="{ active: index + 1 == itemActive }"
            class="course_item"
          >
            <div class="course_item_station">
              <span class="course_item_number">{{ index + 1 }}</span>
            </div>
            <div class="course_item_name">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sleep } from "~/assets/js/tool";
import API from "~/api.js";

let coursesSearch = (courses, id) => {
  let courses_data = {};
  courses.forEach(i => {
    if (i.id === id) courses_data = i;
  });
  return courses_data;
};

export default {
  name: "course-id",
  data() {
    return {
      tabActive: 0,
      itemActive: 1,
      coursesItem: []
    };
  },
  validate(context) {
    const { id } = context.route.params;
    if (!id) context.redirect("/");
    return true;
  },
  async fetch() {
    if (this.$store.state.userFavorite === null) {
      await this.$store.dispatch("getUserFavorite");
    }
    const { id } = this.$nuxt.context.route.params;
    if (!this.$store.state.courses.length) {
      await this.$store.dispatch("setCoursesList");
    }
    const courses = coursesSearch(this.$store.state.courses, id);
    if (!courses.id) this.$nuxt.context.redirect("/");
  },
  async asyncData({ $axios, route }) {
    const id = route.params.id;
    const method = API.getCoursesItem.method;
    const url = API.getCoursesItem.url.replace(":id.json", id + ".json");
    try {
      const { data } = await $axios[method](url);
      return { id, coursesItem: data.item };
    } catch (error) {
      console.log(error);
    }
  },
  mounted() {
    this.itemActive = this.$route.query.item || 1;
  },
  methods: {
    clickItem(item) {
      if (item == this.itemActive) return;
      this.itemActive = item;
      this.$router.push({ query: { item: item } });
    },
    setTab(index) {
      this.tabActive = index;
    },
    setFavorite() {
      if (this.$store.state.userFavorite === null) return;
      //先更新 vuex
      this.$store.commit("set_userFavorite", {
        ...this.$store.state.userFavorite,
        [this.id]: !this.$store.state.userFavorite[this.id]
      });
      //更新Favorite
      this.$store.dispatch("updateUserFavorite");
    }
  },
  computed: {
    get_courses() {
      return coursesSearch(this.$store.state.courses, this.id);
    },
    get_courses_item() {
      const vm = this;
      return {
        ...vm.coursesItem.filter(
          (item, index) => vm.itemActive === index + 1
        )[0]
      };
    },
    favicon_active() {
      return (
        this.$store.state.userFavorite &&
        this.$store.state.userFavorite[this.id]
      );
    }
  },
  watch: {
    $route(to, from) {
      this.itemActive = parseInt(to.query.item, 10);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/course.scss";
</style>
