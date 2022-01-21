function rpsGame(yourChoice)
{
    console.log(yourChoice);

    var humanChoice;
    var botChoice;

    humanChoice = yourChoice.id;
    // console.log(humanChoice);
    
    botChoice = numToChoice(randomChoice());
    // console.log(botChoice);
    
    
    var result = decideWinner( humanChoice, botChoice);

    console.log(result);

  message = finalMessage(result)

  console.log(message);
  
rpsFrontEnd(yourChoice.id,botChoice,message)
    
    
}



function randomChoice()
{
    return Math.floor((Math.random()*3));

}

function numToChoice(number)
{
 return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,botChoice) {
    var rpsDaraBase = {
        'rock': {'scissors':1 , 'rock':0.5 , 'paper':0},
        'paper': {'rock':1 , 'paper':0.5 , 'scissors':0},
        'scissors': {'paper':1 , 'scissors':0.5 , 'rock':0},
    }

    var yourScore = rpsDaraBase[yourChoice][botChoice];
    var compScore = rpsDaraBase[botChoice][yourChoice];

    return [yourScore,compScore];
}

function finalMessage([yourScore,compScore])
{
    if(yourScore===1)
    {
        return{'message': 'You won!','color':'green'}
    }
    else if(yourScore===0)
    {
        return{'message': 'You lost!','color':'red'}
    }
    else if(yourScore===0.5)
    {
        return{'message': 'You tied!','color':'yellow'}
    }
 }
function rpsFrontEnd(humanImage,botImage,finalMessage)
{
    imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    
humanDiv.innerHTML = "<img src = " + imageDataBase[humanImage] + " height = 150 width = 150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
 messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "<h1?"
botDiv.innerHTML = "<img src=" + imageDataBase[botImage] + " height = 150 width = 150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"

console.log(humanDiv.innerHTML);
console.log(botDiv.innerHTML);
console.log(messageDiv.innerHTML);



document.getElementById('flex-box-prs-div').appendChild(humanDiv);
document.getElementById('flex-box-prs-div').appendChild(messageDiv);
document.getElementById('flex-box-prs-div').appendChild(botDiv);
}

