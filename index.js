const selections = [
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌",
    beats: "paper",
  },
  {
    name: "rock",
    emoji: "👊",
    beats: "scissors",
  },
];

let playerChoice
let computerChoice 
let playerScore = 0
let computerScore = 0
let commentGame = document.getElementById("game-commentary");
let plrSelection = document.getElementById('selection')
let compSelection = document.getElementById("computer-selection");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return computerChoice = selections[randomNumber];
}

function renderSelectionBox() {
  let selectionsHtml = selections.map(
    selected => `<div class="button" id="${selected.name}">${selected.emoji}</div>`).join('')
    let selectionsBox = document.getElementById('box')
    return selectionsBox.innerHTML = selectionsHtml
  }
  renderSelectionBox();
  
  const selected = document.querySelectorAll('.button');
  
  const playerChoiceNumber = (e) => {
    const getNumberOfChoice = (element) => element.name === e.target.id 
    const numberOfChoice = selections.findIndex(getNumberOfChoice);
    return playerChoice = selections[numberOfChoice];
  }
  
  const playerChoiceHtml = () => {
    return (document.getElementById(
      "selection"
    ).innerHTML = `<div id="${playerChoice.name}">${playerChoice.emoji}</div>`);
  }

  const computerChoiceHtml = (choiceComp) => {
    return (document.getElementById(
      "computer-selection"
    ).innerHTML = `<div id="${choiceComp.name}">${choiceComp.emoji}</div>`);
  };

function renderScoreBoxHtml() {
  const scoreBox = document.getElementById("score-box")
  return (scoreBox.innerHTML = `
            <p class="fade-in-top"><span class="score " id="score-player">${playerScore}</span></p>
            <p class="fade-in-top"><span class="score" id="score-comp">${computerScore}</span></p>`);
}

renderScoreBoxHtml();
  
  function scoreCounter(choicePlr, choiceComp, e){
    
    if(choicePlr.name === choiceComp.name){
      commentGame.innerHTML = 'draw!'
    } else if (choicePlr.name === choiceComp.beats){
      commentGame.innerHTML = "computer score!!"
      computerScore++;
    } else if (choiceComp.name === choicePlr.beats){
      commentGame.innerHTML = "player score!!"
      playerScore++;
      console.log(playerScore)
    }
    if(playerScore >= 5){
      setTimeout(() => commentGame.innerHTML = 'Player win!', 3000)
      setTimeout(
        () =>
          (document.getElementById("container-game").innerHTML =
            "<h1 class='title'>Congratulations! You win the game</h1><button id='new-game-button' class='text-shadow-pop-bl'>New game</button>"),
        5000
      );
      
    }
    else if (computerScore >= 5) {
      setTimeout(() => commentGame.innerHTML = "Computer win!",3000)
      setTimeout(
        () =>
          (document.getElementById("container-game").innerHTML =
            "<h1 class='title'>Game over</h1><button id='new-game-button' class='text-shadow-pop-bl'>New game</button>"),
        5000
      );
    }
  }

    let clickEvent = (e) => {
      playerChoiceNumber(e);
      playerChoiceHtml();
      getComputerChoice();
      computerChoiceHtml(computerChoice);
      scoreCounter(playerChoice, computerChoice);
      renderScoreBoxHtml();
      plrSelection.classList.remove('rotate-90-cw');
      compSelection.classList.remove("rotate-90-ccw");
    }
    
selected.forEach((btn) => {
    btn.addEventListener("click", clickEvent);
})