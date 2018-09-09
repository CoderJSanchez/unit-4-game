//Global Variables
let guessThisNumber = 0;
let crystalRandomNumber = 0;
let crystalRandomNumber2 = 0;
let crystalRandomNumber3 = 0;
let crystalRandomNumber4 = 0;
let playerCounter = 0;
let winCounter = 0;
let lossCounter = 0;



//function to reset the value of the crystal
function crystalReset(){
    let crysNum = Math.floor(Math.random() * 12) + 1
    crystalRandomNumber = crysNum;

    let crysNum2 = Math.floor(Math.random() * 12) + 1
    crystalRandomNumber2 = crysNum2;

    let crysNum3 = Math.floor(Math.random() * 12) + 1
    crystalRandomNumber3 = crysNum3;

    let crysNum4 = Math.floor(Math.random() * 12) + 1
    crystalRandomNumber4 = crysNum4;


    playerCounter = 0;

    $('#yourCurrentScore').text(playerCounter);

    newNumberToGuess()

    console.log(`crystalRandomNumber is: ${crystalRandomNumber}`);
    console.log(`crystalRandomNumber is: ${crystalRandomNumber2}`);
    console.log(`crystalRandomNumber is: ${crystalRandomNumber3}`);
    console.log(`crystalRandomNumber is: ${crystalRandomNumber4}`);
}
crystalReset();

//Random number for player to reach and adds it to the DOM
function newNumberToGuess(){
    guessThisNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $('#numToMatch').text(guessThisNumber);
}


$('#crystalOne').on('click', function(){
    playerCounter+= crystalRandomNumber;
    $('#yourCurrentScore').text(playerCounter);
    console.log(playerCounter);
      
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


$('#crystalTwo').on('click', function(){
    playerCounter+= crystalRandomNumber2;
    $('#yourCurrentScore').text(playerCounter);
    console.log(playerCounter);
      
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


$('#crystalThree').on('click', function(){
    playerCounter+= crystalRandomNumber3;
    $('#yourCurrentScore').text(playerCounter);
    console.log(playerCounter);
      
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


$('#crystalFour').on('click', function(){
    playerCounter+= crystalRandomNumber4;
    $('#yourCurrentScore').text(playerCounter);
    console.log(playerCounter);
      
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


// function crystalCaller(crystalName, crystalNumber){
//     $(crystalName).on('click', function(){
//         playerCounter += crystalNumber;
//         $('#yourCurrentScore').text(playerCounter);
//         console.log(playerCounter);
          
//     if(guessThisNumber === playerCounter){
//         alert('you win');
//         crystalReset();
//         winCounter++;
//         $('#wins').text(winCounter);
//     }else if(playerCounter > guessThisNumber){
//         alert('You lost');
//         crystalReset();
//         lossCounter++;
//         $('#loss').text(lossCounter);
//     }

//     })
// }

// crystalCaller($('#crystalOne', crystalRandomNumber));
// crystalCaller($('#crystalTwo', crystalRandomNumber2));
// crystalCaller($('#crystalThree', crystalRandomNumber3));
// crystalCaller($('#crystalFour', crystalRandomNumber4));