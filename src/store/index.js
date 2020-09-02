import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, data) {
      state.count = data
    }
  },
  actions: {
    setNumber: ({ commit }, data) => {
      commit('increment', data)
    }
  }
})

export default store
