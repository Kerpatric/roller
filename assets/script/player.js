$(document).ready(function(){
    //Global Variables
    var d2 = 0;
    var d3 = 0;
    var d4 = 0;
    var d6 = 0;
    var d8 = 0;
    var d10 = 0;
    var d12 = 0;
    var d20 = 0;
    var d100 = 0;


    //Dice rolling functions
    function rolld2(min, max) {
        var a = Math.floor(Math.random() * 2) + 1;  // returns a number between 1 and 2
       return a;
    }
    function rolld3(min, max) {
        var a = Math.floor(Math.random() * 3) + 1;  // returns a number between 1 and 3
        return a;
    }
    function rolld4(min, max) {
        var a = Math.floor(Math.random() * 4) + 1;  // returns a number between 1 and 4
        return a;
    }
    function rolld6(min, max) {
        var a = Math.floor(Math.random() * 6) + 1;  // returns a number between 1 and 6
        return a;
    }
    function rolld8(min, max) {
        var a = Math.floor(Math.random() * 8) + 1;  // returns a number between 1 and 8
        return a;
    }
    function rolld10(min, max) {
        var a = Math.floor(Math.random() * 10) + 1;  // returns a number between 1 and 10
        return a;
    }
    function rolld12(min, max) {
        var a = Math.floor(Math.random() * 12) + 1;  // returns a number between 1 and 12
        return a;
    }
    function rolld20(min, max) {
        var a = Math.floor(Math.random() * 20) + 1;  // returns a number between 1 and 20
        return a;
    }
    function rolld100(min, max) {
        var a = Math.floor(Math.random() * 100) + 1;  // returns a number between 1 and 100
        return a;
    }
});
