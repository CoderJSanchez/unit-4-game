//Global Variables
let guessThisNumber = 0;
let crystalRandomNumber = 0;
let playerCounter = 0;
let winCounter = 0;
let lossCounter = 0;


//function to reset the value of the crystal
function crystalReset(){
    let crysNum = Math.floor(Math.random() * 12) + 1
    crystalRandomNumber = crysNum;
    playerCounter = 0;
    $('#yourCurrentScore').text(playerCounter);
    newNumberToGuess()
    console.log(`crystalRandomNumber is: ${crystalRandomNumber}`);
}
crystalReset();

//Random number for player to reach and adds it to the DOM
function newNumberToGuess(){
    guessThisNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $('#numToMatch').text(guessThisNumber);
}

//counts every time a crystal is clicked and adds it to the DOM
$('.crystalImage').on('click',function(){
    playerCounter += crystalRandomNumber;

    $('#yourCurrentScore').text(playerCounter);

    if(guessThisNumber === playerCounter){
        alert('you win');
        crystalReset();
        winCounter++;
        $('#wins').text(winCounter);
    }else if(playerCounter > guessThisNumber){
        alert('You lost');
        crystalReset();
        lossCounter++;
        $('#loss').text(lossCounter);
    }else{ 
        false;
    };
    
})

//for loop to create more crystals on the DOM
for(let i = 0; i < 4; i++){
  
    let addCrystal = $('<img>');
    addCrystal.addClass('crystalImage col-md-3');
    addCrystal.attr('src', 'assets/images/diamondImage.jpg');
    $('#crystalArea').append(addCrystal);
}






