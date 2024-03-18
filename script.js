var roundCount = 0;
var playerScore = 0;
var computerScore = 0;
var tieCount = 0;
var consecutiveWinsPlayer = 4;
var consecutiveWinsComputer = 4;

function userChoice(choice)
{
    var choices = ["malphite", "amumu", "gwen"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    var computerChoiceText = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    var computerChoiceImage = "images/" + computerChoice + ".jpg";
    document.getElementById('computer-choice-text').innerHTML = "Computer's choice: " + computerChoiceText;
    document.getElementById('computer-choice-image').src = computerChoiceImage;
    
    var result = "";
    if (choice === computerChoice) 
    {
        result = "It's a tie!";
        document.getElementById('result-text').style.backgroundColor = "yellow";
        document.getElementById('result-text').style.color = "black";
        tieCount++;
        consecutiveWinsComputer = 0;
        consecutiveWinsPlayer = 0;
    }
    else if ((choice === "malphite" && computerChoice === "gwen") || (choice === "amumu" && computerChoice === "malphite") || (choice === "gwen" && computerChoice === "amumu")) 
    {
        if (consecutiveWinsPlayer == 0)
        {
            result = "You win!";
        }
        else if (consecutiveWinsPlayer == 1)
        {
            result = "Double kill!";
        }
        else if (consecutiveWinsPlayer == 2)
        {
            result = "Triple kill!";
        }
        else if (consecutiveWinsPlayer == 3)
        {
            result = "Quadra kill!";
        }
        else if (consecutiveWinsPlayer == 4)
        {
            result = "Penta kill!";
            consecutiveWinsPlayer = -1;
        }
        document.getElementById('result-text').style.backgroundColor = "green";
        document.getElementById('result-text').style.color = "white";
        playerScore++;
        consecutiveWinsPlayer++;
        consecutiveWinsComputer = 0;
    } 
    else 
    {
        if (consecutiveWinsComputer == 0)
        {
            result = "Enemy wins!";
        }
        else if (consecutiveWinsComputer == 1)
        {
            result = "Enemy double kill!";
        }
        else if (consecutiveWinsComputer == 2)
        {
            result = "Enemy triple kill!";
        }
        else if (consecutiveWinsComputer == 3)
        {
            result = "Enemy quadra kill!";
        }
        else if (consecutiveWinsComputer == 4)
        {
            result = "Enemy penta kill!";
            consecutiveWinsComputer = -1;
        }
        document.getElementById('result-text').style.backgroundColor = "red";
        document.getElementById('result-text').style.color = "white";
        computerScore++;
        consecutiveWinsComputer++;
        consecutiveWinsPlayer = 0;
    }

    roundCount++;
    document.getElementById('round-count').innerHTML = "Round: " + roundCount + " (Ties: " + tieCount + ")";
    document.getElementById('result-text').innerHTML = result;
    document.getElementById('player-score').innerHTML = "Player: " + playerScore;
    document.getElementById('computer-score').innerHTML = "Computer: " + computerScore;
}

function resetGame()
{
    location.reload();
}
