<template>
  <layout>
    <h2>{{ project.name }}</h2>
    <p class="description">{{ project.description }}</p>
    <p v-if="project.language">
      <small>Language: {{ project.language }}</small>
    </p>
    <div class="buttons">
      <base-button :color="projectSecondary" :href="project.html_url">Ver en GitHub</base-button>
      <base-button
        v-if="project.homepage"
        :color="projectPrimary"
        :href="project.homepage"
      >
        Ir al Sitio
      </base-button>
    </div>
  </layout>
</template>

<script>
import { mapState } from "vuex";
import Layout from "@/components/Layout.vue";
import BaseButton from "@/components/BaseButton.vue";
export default {
  name: "Home",
  components: { Layout, BaseButton },
  computed: mapState(["project", "projectPrimary", "projectSecondary"])
};
</script>

<style scoped>
h2 {
  margin: 20px 0 5px;
}

p {
  margin: 0;
}

p.description {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #0d3042;
}

small {
  font-weight: 900;
}

div.buttons {
  margin-top: 15px;
}
</style>
