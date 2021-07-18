import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    inputData: 'hello',
  },
  mutations: {
    decrease(state, randomNumber) {
      state.counter -= parseInt(randomNumber[0])
    },
    increase(state, randomNumber) {

      state.counter += parseInt(randomNumber[0])

    },
  },
  actions: {
    increase({ commit }) {
      axios('https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new').then((res) => {
        commit('increase', res.data)

      })
    },
    decrease({ commit }) {
      axios('https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new').then((res) => {
        commit('increase', res.data)

      })
    }

  },
  getters: {

  },
  modules: {
  }
})
