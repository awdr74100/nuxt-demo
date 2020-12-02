<template>
  <div>
    <div class="course_main is-clearfix">
      <div class="course_left master">
        <div class="course_title is-clearfix">
          <h1 class="is-pulled-left">{{ get_courses.name }}</h1>
          <div class="button_parent">
            <button class="button is-pulled-right">
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

export default {
  name: "course-id",
  data() {
    return {
      tabActive: 0,
      itemActive: 1,
      coursesItem: []
    };
  },
  async fetch() {
    if (!this.$store.state.courses.length) {
      return this.$store.dispatch("setCoursesList");
    }
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
    }
  },
  computed: {
    get_courses() {
      const vm = this;
      return {
        ...vm.$store.state.courses.filter((item, index) => item.id === vm.id)[0]
      };
    },
    get_courses_item() {
      const vm = this;
      return {
        ...vm.coursesItem.filter(
          (item, index) => vm.itemActive === index + 1
        )[0]
      };
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
