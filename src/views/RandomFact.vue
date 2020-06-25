<template>
  <layout>
    <h2>Here's a random fact about me</h2>
    <p>{{ fact }}</p>
  </layout>
</template>

<script>
import { mapState } from "vuex";
import Layout from "@/components/Layout.vue";
export default {
  name: "Home",
  components: { Layout },
  computed: mapState(["fact"])
};
</script>
