import Vue from "vue";
import Vuex from "vuex";
import firebase from "../plugins/firebase";
import "firebase/firestore";

import { db } from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: ""
  },
  getters: {
    getUser: state => state.user
  },
  mutations: {
    settingUser: (state, user) => (state.user = user)
  },
  actions: {
    setUser: async ({ commit }, user) => {
      if (user) {
        const userObject = {
          displayName: user.displayName,
          email: user.email,
          roles: {
            user: true
          },
          lastAccess: new Date()
        };
        const userRef = db.collection("users").doc(user.uid);
        await userRef.set(userObject, { merge: true });
        const userDB = await userRef.get();
        commit("settingUser", { uid: user.uid, ...userDB.data() });
        await db
          .collection("logins")
          .doc(user.uid)
          .set({
            setUser: "",
            email: ""
          });
      } else {
        commit("settingUser", "");
      }
    }
  }
});

var firebaseConfig = {
  apiKey: "AIzaSyC7E2D2MhRdxHeqUqd25Lf-fX7dY2dhXo4",
  authDomain: "rgv-league.firebaseapp.com",
  databaseURL: "https://rgv-league.firebaseio.com",
  projectId: "rgv-league",
  storageBucket: "rgv-league.appspot.com",
  messagingSenderId: "1002686140837",
  appId: "1:1002686140837:web:daf26f1bc2a9b21ffa984c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
