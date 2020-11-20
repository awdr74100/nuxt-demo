<template>
  <div>
    <div class="course_main is-clearfix">
      <div class="course_left master">
        <div class="course_title is-clearfix">
          <h1 class="is-pulled-left">課程名稱</h1>
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
                  src="https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=0"
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
                資料1
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
            @click="clickItem(n)"
            v-for="n in 10"
            :key="n"
            :class="{ active: n == itemActive }"
            class="course_item"
          >
            <div class="course_item_station">
              <span class="course_item_number">{{ n }}</span>
            </div>
            <div class="course_item_name">
              分類名稱
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sleep } from "~/assets/js/tool";

export default {
  name: "course-id",
  data() {
    return {
      tabActive: 0,
      itemActive: 0
    };
  },
  async asyncData() {
    // await sleep(500);
  },
  created() {},
  mounted() {
    this.itemActive = this.$route.query.item || 1;
  },
  computed: {},
  methods: {
    clickItem(item) {
      if (item == this.itemActive) return;
      this.itemActive = item;
      this.$router.push({
        query: {
          item: item
        }
      });
    },
    setTab(index) {
      this.tabActive = index;
    }
  },
  watch: {
    $route(to, from) {
      this.itemActive = to.query.item;
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/course.scss";
</style>
