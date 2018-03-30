
<script src="https://www.gstatic.com/firebasejs/4.11.0/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB_sWSBse_GOfDx63Jh5wEj_GNs4Fyl5pI",
    authDomain: "zekes-dice-rolling-app.firebaseapp.com",
    databaseURL: "https://zekes-dice-rolling-app.firebaseio.com",
    projectId: "zekes-dice-rolling-app",
    storageBucket: "zekes-dice-rolling-app.appspot.com",
    messagingSenderId: "735930562541"
  };
  firebase.initializeApp(config);

  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

  