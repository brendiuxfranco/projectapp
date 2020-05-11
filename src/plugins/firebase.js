import Vue from "vue";

import firebase from "firebase/app";
import "firebase/firebase-auth";

import * as firebaseui from "firebaseui";

const firebaseConfig = {
  apiKey: "AIzaSyC7E2D2MhRdxHeqUqd25Lf-fX7dY2dhXo4",
  authDomain: "rgv-league.firebaseapp.com",
  databaseURL: "https://rgv-league.firebaseio.com",
  projectId: "rgv-league",
  storageBucket: "rgv-league.appspot.com",
  messagingSenderId: "1002686140837",
  appId: "1:1002686140837:web:daf26f1bc2a9b21ffa984c"
};

firebase.initializeApp(firebaseConfig);
const ui = new firebaseui.auth.AuthUI(firebase.auth());

Vue.prototype.$firebase = firebase;
Vue.prototype.$firebaseui = ui;
export default firebase();
