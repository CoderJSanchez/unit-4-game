//Global Variables
let guessThisNumber = 0;
let crystalRandomNumber = 0;
let winCounter = 0;
let lossCounter = 0;
let playerCounter = 0;



//counts every time a crystal is clicked and adds it to the DOM
$('#crystalImage').on('click',function(){
    playerCounter++;
    $('#yourCurrentScore').text(playerCounter);

    if(guessThisNumber === playerCounter){
        alert('you win');
    }
    
})

//Random number for player to reach and adds it to the DOM
guessThisNumber = Math.floor(Math.random() * (120 - 19) + 19);
$('#numToMatch').text(guessThisNumber);

