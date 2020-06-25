<template>
  <router-link v-if="to" :to="to">
    <button :class="color">
      <slot />
    </button>
  </router-link>
  <button v-else :class="color">
    <slot />
  </button>
</template>

<script>
export default {
  props: ["color", "to"]
};
</script>

<style scoped>
button {
  box-shadow: 8px 8px #0d3042;
  border: none;
  box-sizing: border-box;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  margin: 4px 4px 4px 12px;
  padding: 0 48px;
  transition: all 0.2s ease-in-out;
}

button:hover {
  cursor: pointer;
  box-shadow: 5px 5px #0d3042;
  transition: box-shadow 0.2s ease-in;
}

button:focus {
  outline: none;
}

a {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

.blue {
  background: #2046f6;
  color: #fff;
}

.pink {
  background: #ff99cc;
  color: #0d3042;
}

.yellow {
  background: #f9c549;
  color: #0d3042;
}

.red {
  background: #901e1b;
  color: #fff;
}

.mint {
  background: #83f9d6;
  color: #0d3042;
}
</style>