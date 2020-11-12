<template>
  <div class="courseList">
    <div class="columns is-centered is-multiline">
      <div
        class="card column is-5-tablet is-3-desktop"
        v-for="(item, index) in courses"
        :key="index"
      >
        <div class="course_item">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="item.img" :alt="item.name" />
            </figure>
          </div>
          <div class="course_title_parent">
            <div class="course_title is-clearfix">
              <h2 class="is-pulled-left">{{ item.name }}</h2>
            </div>
          </div>
          <div class="description">
            {{ item.description }}
          </div>
          <nuxt-link
            class="details"
            :to="{
              name: 'course-id',
              params: {
                id: item.id
              }
            }"
          >
          </nuxt-link>
        </div>
      </div>
      <div v-if="courses.length == 0" class="section">
        <p>沒有發現課程!!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseList",
  props: {
    courses: {
      type: Array,
      default: () => []
    }
  },
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
