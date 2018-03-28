// Initialize Firebase
$(document).ready(function () {

  var config = {
    apiKey: "AIzaSyB_sWSBse_GOfDx63Jh5wEj_GNs4Fyl5pI",
    authDomain: "zekes-dice-rolling-app.firebaseapp.com",
    databaseURL: "https://zekes-dice-rolling-app.firebaseio.com",
    projectId: "zekes-dice-rolling-app",
    storageBucket: "zekes-dice-rolling-app.appspot.com",
    messagingSenderId: "735930562541"
  };
  firebase.initializeApp(config);

  $("#register").click(function () {
    $("#welcomeToAdventure").addClass("hide");
    $("#registerNewPlayer").removeClass("hide");
  });
});