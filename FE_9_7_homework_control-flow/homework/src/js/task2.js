function askEndGame(totalPrize){
    alert('Thank you for a game. Your prize is: ' + totalPrize);
    
    let playAgain = confirm('Do you want to play again?');
    
    if (playAgain === true) {
        playGame(5, 10, 0);
    }
}

function playGame(maxValue, maxPrize, totalPrize) {
    let winNumber = Math.floor(Math.random() * maxValue);
    console.log(winNumber);
    
    let userNumber;
    let thisGamePrize = maxPrize;
    
    for (let i=0;i<3;i++) {
        userNumber = prompt('Enter a number from 0 to ' + maxValue + '\n' + 
            'Attempts left: ' + (3-i) + '\n' + 
            'Total prize: ' + totalPrize + '$' + '\n' + 
            'Possible prize on current attempt: ' + (totalPrize+thisGamePrize) + '$');
        
        if (userNumber === null || userNumber === '') {
            askEndGame(totalPrize);
            break;
        }
        
        if (userNumber == winNumber) {
            totalPrize = totalPrize + thisGamePrize;
            
            let playAgain = confirm('Congratulation! Your prize is: ' + totalPrize + 
                '$. ' + 'Do you want to continue?');
            
            if (playAgain === true) {
                playGame(maxValue*2, maxPrize*3, totalPrize);
                break;
            }
            else {
                askEndGame(totalPrize);
                break;
            }
        }
        
        thisGamePrize = Math.floor(thisGamePrize / 2);
        
        if (i === 2){
            askEndGame(totalPrize);
        }
    }
    
}

let playGameConfirm = confirm('Do you want to play a game?');

if (playGameConfirm === true) {
    playGame(5, 10, 0);
}

else {
    alert('You did not become a millionaire, but can.');
}