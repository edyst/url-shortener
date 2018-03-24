const actions = {
  LOAD_TEST({commit}){
    // Your API calls need to be made here
    var test = [1,2,3,4,5]
    commit('SET_TEST',test)
  }
}

export default actions