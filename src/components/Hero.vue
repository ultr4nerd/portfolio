<template>
  <header>
    <img src="https://avatars3.githubusercontent.com/u/30444800?v=4" alt="Me" />
    <h1>Hi, I'm Mauricio 👽</h1>
    <p>A friendly software engineer | GitHub Campus Expert 🚩</p>
    <div class="social-media">
      <social-button to="github" />
      <social-button to="twitter" />
      <social-button to="spotify" />
      <social-button to="random" />
    </div>
    <div class="buttons">
      <base-button :color="primary" :to="{ name: 'randomFact' }">Random Fact</base-button>
      <base-button :color="secondary" :to="{ name: 'randomProject' }">Random Project</base-button>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import BaseButton from "@/components/BaseButton.vue";
import SocialButton from "@/components/SocialButton.vue";

export default {
  components: { BaseButton, SocialButton },
  computed: mapState(["primary", "secondary"])
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}

h1 {
  margin: 0;
  font-size: 3rem;
}

p {
  margin: 10px 0 20px;
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