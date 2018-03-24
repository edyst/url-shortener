import actions from './actions'
import mutations from './mutations'

const state = ()=>({
  testState:[]
})

const getters = {
  getTestState: state =>{
    return state.testState
  }
}

const module ={
  namespaced:true,
  state,
  getters,
  mutations,actions
}

export default module