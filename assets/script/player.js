$(document).ready(function() {

  // Firebase
  var config = {
    apiKey: "AIzaSyB_sWSBse_GOfDx63Jh5wEj_GNs4Fyl5pI",
    authDomain: "zekes-dice-rolling-app.firebaseapp.com",
    databaseURL: "https://zekes-dice-rolling-app.firebaseio.com",
    projectId: "zekes-dice-rolling-app",
    storageBucket: "zekes-dice-rolling-app.appspot.com",
    messagingSenderId: "735930562541"
  };
  firebase.initializeApp(config);

  var displayName = "";

  // Route user to login screen if they are not logged in.
  firebase.auth().onAuthStateChanged(function(user) {
    console.log(user);
    if (user) {
      // User is signed in.
      displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

      // setup NAV Links 
      $('#home').html(user.displayName);
      $('#logout').on('click', (evt) => firebase.auth().signOut() );
      

    } else {
      // User is signed out.
      window.location = "login.html";
    }

  });

  firebase.database().ref("chat").on("child_added", function(snapshot) {
    var d = snapshot.val();
    $("#displayResults").append('<div class="message">' + d.Message + '</div>');
  });

  var queue = [];
  var sum = 0;
  //Global Variables and Objects..
  var dice = {
    d2: {
      name: "d2",
      max: 2
    },
    d3: {
      name: "d3",
      max: 3
    },
    d4: {
      name: "d4",
      max: 4
    },
    d6: {
      name: "d6",
      max: 6
    },
    d8: {
      name: "d8",
      max: 8
    },
    d10: {
      name: "d10",
      max: 10
    },
    d12: {
      name: "d12",
      max: 12
    },
    d20: {
      name: "d20",
      max: 20
    },
    d100: {
      name: "d100",
      max: 100
    }
  };

  //Dice rolling functions
  function rolldice(max) {
    // console.log('max');
    // console.log(max);
    var a = Math.floor(Math.random() * max) + 1; // returns a number for the die roll.
    // console.log(a);
    return a;
  }
  //When dice are clicked, they are added into the selected dice div to await roll funtion.
  $("#dice").on("click", "img", function() {
    var myElement = $(this);
    var img = myElement.clone();
    $("#selectedDice").append(img);
    var diceValue = $(this).attr("diceValue");
    var ericVal = rolldice(diceValue);
    console.log(ericVal);
    queue.push(ericVal);
    console.log(queue);
    console.log("sum");
    sum = queue.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    console.log(sum);
  });
  //Dice can be removed from the rolling que by clicking on them while in the selected dice div.
  $("#selectedDice").on("click", "img", function() {
    var myElement = $(this);
    var img = myElement.remove();
  });
  //When the roll dice image is clicked, all dice in the selected dice div (rolling que) are rolled
  $("#rollDice").on("click", "img", function() {
    rolldice();

    console.log(queue);
    //the images of the dice in the rolling que are removed
    $("#selectedDice").html("");
    //the sum of the roll is displayed in the results div
    // $("#displayResults").append("displayName rolled: " + sum + "<br>");
    queue = [];

    var message = displayName + " rolled a " + sum;

    firebase.database().ref('chat').push({ Message :  message } );

  });

  $("#Send").on('click', function(){
    var message = displayName + " : " + $("#SendText").val();
    + $("#SendText").val("");
    firebase.database().ref('chat').push({ Message :  message } );
  });

  

  
});
