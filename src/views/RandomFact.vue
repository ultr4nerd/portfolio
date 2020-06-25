<template>
  <layout>
    <h2>Here's a random fact about me</h2>
    <p>This route is {{ $route.path }}</p>
  </layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
export default {
  name: "Home",
  components: { Layout }
};
</script>
