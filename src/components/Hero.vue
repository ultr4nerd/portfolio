<template>
  <header>
    <img src="https://avatars3.githubusercontent.com/u/30444800?v=4" alt="Me" />
    <h1>Hi, I'm Mauricio 👽</h1>
    <p>
      Backend Engineer at
      <a
        :style="{
          color: primary !== 'yellow' ? primary : 'inherit',
        }"
        href="https://cornershopapp.com/"
        >Cornershop</a
      >
      🥑 | GitHub Campus Expert 🚩
    </p>
    <div class="social-media">
      <social-button to="github" />
      <social-button to="twitter" />
      <social-button to="spotify" />
      <social-button to="email" />
      <social-button to="random" />
    </div>
    <div class="buttons">
      <template v-if="$route.name === 'randomFact'">
        <base-button :color="primary" @click="getRandomFact"
          >Get random fact</base-button
        >
      </template>
      <template v-else>
        <base-button :color="primary" :to="{ name: 'randomFact' }"
          >Get random fact</base-button
        >
      </template>
      <template v-if="$route.name === 'randomProject'">
        <base-button :color="secondary" @click="getRandomProject"
          >Get a random Project</base-button
        >
      </template>
      <template v-else>
        <base-button :color="secondary" :to="{ name: 'randomProject' }"
          >Get a random Project</base-button
        >
      </template>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BaseButton from '@/components/BaseButton.vue';
import SocialButton from '@/components/SocialButton.vue';

export default {
  components: { BaseButton, SocialButton },
  computed: mapState(['primary', 'secondary']),
  methods: mapActions(['getRandomFact', 'getRandomProject']),
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  text-align: center;
}

h1 {
  margin: 0;
  font-size: 3rem;
}

p {
  margin: 10px 0;
}

a {
  text-decoration: none;
  font-weight: 900;
}

a:visited {
  color: inherit;
}

img {
  height: 150px;
  margin-bottom: 15px;
  box-shadow: 8px 8px #0d3042;
  transition: box-shadow 0.2s ease-in;
}

img:hover {
  box-shadow: 5px 5px #0d3042;
  transition: box-shadow 0.2s ease-in;
}

.buttons {
  margin: 20px 0;
}
</style>
