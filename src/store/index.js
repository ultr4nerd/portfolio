import Vue from 'vue';
import Vuex from 'vuex';
import NProgress from 'nprogress';
import githubService from '@/services/github';
import getColorCombination from '@/utils/colors';
import getRandomFact from '@/utils/facts';
import getRandomProject from '@/utils/projects';

Vue.use(Vuex);

const [primary, secondary] = getColorCombination();
const [projectPrimary, projectSecondary] = getColorCombination();

export default new Vuex.Store({
  state: {
    primary,
    secondary,
    projectPrimary,
    projectSecondary,
    fact: getRandomFact(),
    project: null,
  },
  mutations: {
    SET_PRIMARY(state, color) {
      state.primary = color;
    },
    SET_SECONDARY(state, color) {
      state.secondary = color;
    },
    SET_PROJECT_PRIMARY(state, color) {
      state.projectPrimary = color;
    },
    SET_PROJECT_SECONDARY(state, color) {
      state.projectSecondary = color;
    },
    SET_FACT(state, fact) {
      state.fact = fact;
    },
    SET_PROJECT(state, project) {
      state.project = project;
    },
  },
  actions: {
    shuffleColors({ commit }) {
      const [primary, secondary] = getColorCombination();
      const [projectPrimary, projectSecondary] = getColorCombination();
      commit('SET_PRIMARY', primary);
      commit('SET_SECONDARY', secondary);
      commit('SET_PROJECT_PRIMARY', projectPrimary);
      commit('SET_PROJECT_SECONDARY', projectSecondary);
    },
    getRandomFact({ commit }) {
      const fact = getRandomFact();
      commit('SET_FACT', fact);
    },
    getRandomProject({ commit }) {
      NProgress.start();
      const repo = getRandomProject();
      return githubService.getRepo(repo).then(response => {
        commit('SET_PROJECT', response.data);
        NProgress.done();
      });
    },
  },
});
