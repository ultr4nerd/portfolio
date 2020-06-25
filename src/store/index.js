import Vue from 'vue';
import Vuex from 'vuex';
import getColorCombination from '@/utils/colors';

Vue.use(Vuex);

const [primary, secondary] = getColorCombination();

export default new Vuex.Store({
  state: {
    primary,
    secondary,
  },
  mutations: {
    SET_PRIMARY(state, color) {
      state.primary = color;
    },
    SET_SECONDARY(state, color) {
      state.secondary = color;
    },
  },
  actions: {
    shuffleColors({ commit }) {
      const [primary, secondary] = getColorCombination();
      commit('SET_PRIMARY', primary);
      commit('SET_SECONDARY', secondary);
    },
  },
});
