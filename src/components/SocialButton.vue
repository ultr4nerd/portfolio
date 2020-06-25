<template>
  <a
    v-if="to === 'github'"
    href="https://github.com/mauricio-chavez"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="fab fa-github"></i>
  </a>
  <a
    v-else-if="to === 'twitter'"
    href="https://twitter.com/ultr4nerd"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="fab fa-twitter"></i>
  </a>
  <a
    v-else-if="to === 'spotify'"
    href="https://open.spotify.com/user/12145548904?si=ewmsn26wSvGRJe0SUTHakg"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="fab fa-spotify"></i>
  </a>
  <a v-else-if="to === 'email'" href="mailto:mauriciochavez@ciencias.unam.mx">
    <i class="fas fa-envelope"></i>
  </a>
  <button v-else-if="to === 'random'" @click="shuffleColors">
    <i class="fas fa-palette"></i>
  </button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["to"],
  methods: mapActions(["shuffleColors"])
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #0d3042;
  font-size: 1.5rem;
  margin: 0 5px;
}

button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: #0d3042;
  font-size: 1.5rem;
  margin: 0 5px;
}
</style>