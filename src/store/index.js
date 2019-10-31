import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    // 不是异步数据操作或者大批量的同步操作，actions步骤可以省略
    actions,
    mutations
})
