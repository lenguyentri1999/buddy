'use strict';

angular.module('firebaseConfig', ['firebase'])

.run(function(){

    var config = {
      apiKey: "AIzaSyCu6owGWT99AXhg7d7UiMfNs_qcoV0coyk",
      authDomain: "mycommunity-a33e4.firebaseapp.com",
      databaseURL: "https://mycommunity-a33e4.firebaseio.com",
      storageBucket: "mycommunity-a33e4.appspot.com",
      messagingSenderId: "1093225836397"
  };
  firebase.initializeApp(config);
});
