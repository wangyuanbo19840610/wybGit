import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 1,
    flagOne: '1',
    flagTwo: '1',
    flagThree: '1',
    flagFour: '1'
  },
  mutations: {
    increment (state) {
    // 变更状态
      state.count++
    }
  },
  getters: {
    doneTodos: state => {
      return state
    }
  }
})
