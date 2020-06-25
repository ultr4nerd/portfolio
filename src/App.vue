<template>
  <div id="app">
    <hero v-if="$route.name !== 'notFound'" />
    <transition name="slide-up" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
export default {
  name: "App",
  components: { Hero }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");

#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0d3042;
  margin: 0;
  padding: 0;
}

/* ANIMATIONS */
.slide-up-enter-active {
  transition: all 0.4s ease-out;
}
.slide-up-leave-active {
  transition: all 0.4s ease-in;
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translatey(10px);
  opacity: 0;
}
</style>
