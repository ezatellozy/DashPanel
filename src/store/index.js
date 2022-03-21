import { createStore } from "vuex";
import Cookies from "js-cookie";

export default createStore({
  state: {
    locale: Cookies.get("locale") || "en",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
