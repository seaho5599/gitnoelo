import axios from "axios"

const state = {
  mbMenuData : [],
  siteMenu: []
}
const actions = {
  fetchMenu({commit}){
    axios.get('./data/menu.json')
    .then(response => {
      commit('MENU_INIT', response.data)
    })
    .catch(err => console.log(err))
  },
  fetchSite({commit}){
    axios.get('./data/site.json')
    .then(response => {
      commit('SITE_INIT', response.data)
    })
    .catch(err => console.log(err))
  }
}
const mutations = {
  MENU_INIT(state, payload){
    state.mbMenuData = payload
  },
  SITE_INIT(state, payload){
    state.siteMenu = payload
  }
}
const getters = {
  getMbMenuData(state){
    return state.mbMenuData
  },
  getSiteMenu(state){
    return state.siteMenu
  }
}

export default { state, actions, mutations, getters }