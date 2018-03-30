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

  $("#loginButton").on("click", function (event) {
   
      var newEmail = $("#inputEmail").val();
      var newPassword = $("#inputPassword").val();
      console.log(newEmail);
      console.log(newPassword);

      firebase
       .auth()
       .signInWithEmailAndPassword(newEmail, newPassword)
       .then(data => {
         console.log(data);
       })
       .catch(function(error) {
         if (error.code == "auth/user-not-found") {
           alert("User Not Found.");
         }
         console.log(error);
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;

         alert(errorMessage);
       });
  })

  $("#submitButton").on("click", function (event) {
      console.log("a");
      event.preventDefault();

      var emailAddress = $("#newEmail").val().trim();
      var firstPassword = $("#newPassword").val().trim();
      var confirmFirstPassword = $("#confirmPassword").val().trim();

      console.log(emailAddress);
      console.log(firstPassword);
      console.log(confirmFirstPassword);

      var newUser = {
          email: emailAddress,
          password: firstPassword
      }
      console.log(newUser);

      if (firstPassword !== confirmFirstPassword) {
          alert("Passwords Do Not Match, Please Try Again");
      }
      else {
          firebase
       .auth()
       .createUserWithEmailAndPassword(emailAddress, firstPassword)
       .catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // ...
         alert(errorMessage);
       });
      }
  });

  /*database.ref().on("child_added", function (childSnapshot, prevChildKey) {
      console.log(childSnapshot.val());
      // Store everything into a variable.
      var userName = childSnapshot.val().name;
      var emailAddress = childSnapshot.val().destination;
      var firstPassword = childSnapshot.val().firstTrain;
  });*/

  firebase.auth().onAuthStateChanged(function(user) {
      console.log(user);
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
   
        window.location = "index.html";
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });
});

/*firebase.auth().onAuthStateChanged(function(user) {
 if (user) {
   // User is signed in.
   var displayName = user.displayName;
   var email = user.email;
   var emailVerified = user.emailVerified;
   var photoURL = user.photoURL;
   var isAnonymous = user.isAnonymous;
   var uid = user.uid;
   var providerData = user.providerData;

   window.location = "index.html";
   // ...
 } else {
   // User is signed out.
   // ...
 }
});*/

