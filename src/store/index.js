import Vue from 'vue';
import Vuex from 'vuex';
import getColorCombination from '@/utils/colors';
import getRandomFact from '@/utils/facts';

Vue.use(Vuex);

const [primary, secondary] = getColorCombination();

export default new Vuex.Store({
  state: {
    primary,
    secondary,
    fact: getRandomFact(),
  },
  mutations: {
    SET_PRIMARY(state, color) {
      state.primary = color;
    },
    SET_SECONDARY(state, color) {
      state.secondary = color;
    },
    SET_FACT(state, fact) {
      state.fact = fact;
    },
  },
  actions: {
    shuffleColors({ commit }) {
      const [primary, secondary] = getColorCombination();
      commit('SET_PRIMARY', primary);
      commit('SET_SECONDARY', secondary);
    },
    getRandomFact({ commit }) {
      const fact = getRandomFact();
      commit('SET_FACT', fact);
    },
  },
});
