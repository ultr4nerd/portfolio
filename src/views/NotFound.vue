<template>
  <div>
    <img src="../assets/404.png" alt="404" height="200" />
    <h1>Oops...</h1>
    <h3>The resource you're looking for is not here.</h3>
    <base-button :to="{ name: 'home' }">Go back</base-button>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
  name: "NotFound",
  components: { BaseButton }
};
</script>

<style scoped>
div {
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  margin: 20px 0 0;
}

h3 {
  margin: 10px 0 20px;
}
</style>