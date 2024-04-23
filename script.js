var choices = ["malphite", "amumu", "gwen"];
var roundCount = 0;
var playerScore = 0;
var computerScore = 0;
var tieCount = 0;
var consecutiveWinsPlayer = 0;
var consecutiveWinsComputer = 0;

function userChoice(choice)
{
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
        result = playerKillCounter();
    }
    else
    {
        result = computerKillCounter();
    }

    roundCount++;
    document.getElementById('round-count').innerHTML = "Round: " + roundCount + " (Ties: " + tieCount + ")";
    document.getElementById('result-text').innerHTML = result;
    document.getElementById('player-score').innerHTML = "Player: " + playerScore;
    document.getElementById('computer-score').innerHTML = "Computer: " + computerScore;
}

function playerKillCounter()
{
    document.getElementById('result-text').style.backgroundColor = "green";
    document.getElementById('result-text').style.color = "white";
    playerScore++;
    consecutiveWinsPlayer++;
    consecutiveWinsComputer = 0;
    
    switch (consecutiveWinsPlayer) {
        case 2:
            return "Double kill!";
        case 3:
            return "Triple kill!";
        case 4:
            return "Quadra kill!";
        case 5:
            return "Penta kill!";
            consecutiveWinsPlayer = 0;
        default:
            return "You win!";
    }
}

function computerKillCounter()
{
    document.getElementById('result-text').style.backgroundColor = "red";
    document.getElementById('result-text').style.color = "white";
    computerScore++;
    consecutiveWinsComputer++;
    consecutiveWinsPlayer = 0;
    
    switch (consecutiveWinsComputer) {
        case 2:
            return "Enemy double kill!";
        case 3:
            return "Enemy triple kill!";
        case 4:
            return "Enemy quadra kill!";
        case 5:
            return "Enemy penta kill!";
            consecutiveWinsComputer = 0;
        default:
            return "Enemy wins!";
    }
}

function resetGame()
{
    location.reload();
}