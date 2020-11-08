<template>
  <div class="courseList">
    <div class="columns is-centered is-multiline">
      <div
        class="card column is-5-tablet is-3-desktop"
        v-for="n in 10"
        :key="n"
      >
        <div class="course_item">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="課程名稱"
              />
            </figure>
          </div>
          <div class="course_title_parent">
            <div class="course_title is-clearfix">
              <h2 class="is-pulled-left">課程名稱</h2>
            </div>
          </div>
          <div class="description">
            課程介紹
          </div>
          <nuxt-link
            class="details"
            :to="{
              name: 'course-id',
              params: {
                id: n
              }
            }"
          >
          </nuxt-link>
        </div>
      </div>
      <div v-if="1 == 2" class="section">
        <p>沒有發現課程!!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseList",
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "./courseList.scss";
</style>
