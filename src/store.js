import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reservations: [],
    id: "",
    service: "http://10.0.4.128:9999",
    user: {
      username: "",
      password: ""
    },
    loginredirect: "/reservations",
    loginerr: false
  },
  mutations: {
    //Mutacija za login
    setToken(state, payload) {
      localStorage.setItem("token", payload);
    },
    loginerr() {
      this.state.loginerr = !this.state.loginerr;
    },
    setId(state, id) {
      localStorage.setItem("id", id)
    },
    setReservations(state, payload){
      this.state.reservations = payload.reverse()
    },
    clearId(){
      localStorage.removeItem("id")
    }
  },
  actions: {
    handleLoginError(context, err) {
      context.commit("loginerr");
      console.log(err);
    },
    handleAPIError(err) {
      console.log(err);
    },

    login(context, payload) {
      return new axios.post(this.state.service + "/login", {
        username: payload.username,
        password: payload.password
      })
        .then(response => {
          if (response.status == 200) {

            var id = response.data.id;
            context.commit("setId", id);
            let token =
              "Basic " + btoa(payload.username + ":" + payload.password);
            context.commit("setToken", token);
            context.commit("setUser", payload.username, payload.password )
            router.push({ path: "/reservations" });
          }
        })
        .catch(err => {
          // handle error
          // console.log(err)
          this.dispatch("handleLoginError", err);
        });
    },
    loadReservations(context, payload) {

      return new axios.get(this.state.service + "/reservations/" + payload)
        .then(response => {
          if (response.status == 200) {
            context.commit("setReservations", response.data);
          }
        })
        .catch(err => {
          // handle error
          // console.log(err)
          this.dispatch("handleAPIError", err);
        });
    },
    clearStorageId(context){
      context.commit("clearId")
    }
  },
  modules: {},
  getters: {
    getReservations(state) {

      return state.reservations;
    },
    
    getID(){
      return localStorage.getItem('id')
    }
   
  }
});
