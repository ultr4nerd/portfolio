<template>
  <div id="app">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
