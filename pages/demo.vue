<template>
  <div>
    <p>{{ $route.fullPath }}</p>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: false
};
</script>
