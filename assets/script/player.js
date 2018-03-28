$(document).ready(function(){
    //Global Variables
    var d2 = "";
    var d3 = "";
    var d4 = "";
    var d6 = "";
    var d8 = "";
    var d10 = "";
    var d12 = "";
    var d20 = "";
    var d100 = "";

    var dice = {
        d2: {
            name: 'd2',
            max: 2
        }, 
        d3:{
            name: 'd3',
            max: 3
        }


    }


    //Dice rolling functions
    function rolld2( max) {
        var a = Math.floor(Math.random() * max) + 1;  // returns a number between 1 and 2
       console.log(a) ;

    }
    
    rolld2(dice.d2.max)
    rolld2(dice.d2.max)
    rolld2(dice.d2.max)
    rolld2(dice.d2.max)
    // function rolld3(min, max) {
    //     var a = Math.floor(Math.random() * 3) + 1;  // returns a number between 1 and 3
    //     return a;
    // }
    // function rolld4(min, max) {
    //     var a = Math.floor(Math.random() * 4) + 1;  // returns a number between 1 and 4
    //     return a;
    // }
    // function rolld6(min, max) {
    //     var a = Math.floor(Math.random() * 6) + 1;  // returns a number between 1 and 6
    //     return a;
    // }
    // function rolld8(min, max) {
    //     var a = Math.floor(Math.random() * 8) + 1;  // returns a number between 1 and 8
    //     return a;
    // }
    // function rolld10(min, max) {
    //     var a = Math.floor(Math.random() * 10) + 1;  // returns a number between 1 and 10
    //     return a;
    // }
    // function rolld12(min, max) {
    //     var a = Math.floor(Math.random() * 12) + 1;  // returns a number between 1 and 12
    //     return a;
    // }
    // function rolld20(min, max) {
    //     var a = Math.floor(Math.random() * 20) + 1;  // returns a number between 1 and 20
    //     return a;
    // }
    // function rolld100(min, max) {
    //     var a = Math.floor(Math.random() * 100) + 1;  // returns a number between 1 and 100
    //     return a;
    // }
});
