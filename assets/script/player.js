$(document).ready(function () {
    var queue = [];
    var sum = 0;
    //Global Variables and Objects..
    var dice = {
        d2: {
            name: 'd2',
            max: 2,
        },
        d3: {
            name: 'd3',
            max: 3
        },
        d4: {
            name: 'd4',
            max: 4,
        },
        d6: {
            name: 'd6',
            max: 6,
        },
        d8: {
            name: 'd8',
            max: 8,
        },
        d10: {
            name: 'd10',
            max: 10
        },
        d12: {
            name: 'd12',
            max: 12,
        },
        d20: {
            name: 'd20',
            max: 20,
        },
        d100: {
            name: 'd100',
            max: 100
        },
    }

    //Dice rolling functions
    function rolldice(max) {
        // console.log('max');
        // console.log(max);
        var a = Math.floor(Math.random() * max) + 1;  // returns a number for the die roll.
        // console.log(a);
        return a;

    }
    //When dice are clicked, they are added into the selected dice div to await roll funtion.
    $('#dice').on('click', 'img', function () {
        var myElement = $(this);
        var img = myElement.clone();
        $('#selectedDice').append(img);
        var diceValue = $(this).attr('diceValue');
        var ericVal =  rolldice(diceValue);
        console.log(ericVal);
        queue.push(ericVal);
        console.log(queue);
        console.log('sum');
        sum = queue.reduce((accumulator, currentValue) => accumulator + currentValue);
        console.log(sum);
    
    });
    //Dice can be removed from the rolling que by clicking on them while in the selected dice div.
    $('#selectedDice').on('click', 'img', function () {
        var myElement = $(this);
        var img = myElement.remove();
    });
    //When the roll dice image is clicked, all dice in the selected dice div (rolling que) are rolled
    $('#rollDice').on('click', 'img', function () {
        rolldice();
        

        console.log(queue);
        //the images of the dice in the rolling que are removed
        $("#selectedDice").html("");
        //the sum of the roll is displayed in the results div 
        $("#displayResults").append("Total rolled: " + sum + "<br>");
        queue=[];


    });
});
