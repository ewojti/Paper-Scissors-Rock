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
let playerScore = document.getElementById('score-player')
let computerScore = document.getElementById("score-comp");
let commentGame = document.getElementById("game-commentary");
let plrSelection = document.getElementById('selection')
let compSelection = document.getElementById("computer-selection");

playerScore.innerHTML = 0
computerScore.innerHTML = 0

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

  function gameplay(){
    if (playerScore.innerHTML > 5){
      commentGame.innerHTML = 'player win'
    } else if (computerScore.innerHTML > 5) {
      commentGame.innerHTML = "computer win"
    }
  }
  gameplay()
  
  function nextRoundComment(){
    commentGame.classList.add = "tracking-in-contract-bck"
    commentGame.innerHTML = "Next round!"
  }
  
  function scoreCounter(choicePlr, choiceComp, e){
    if(choicePlr.name === choiceComp.name){
      commentGame.innerHTML = 'draw!'
      setTimeout(() => {
        nextRoundComment();
      }, 4000);
      
    } else if (choicePlr.name === choiceComp.beats){
      commentGame.innerHTML = 'computer score!!'
      setTimeout(() => {
        nextRoundComment();
      }, 4000);
      computerScore.innerHTML ++;
    } else if (choiceComp.name === choicePlr.beats){
      commentGame.innerHTML = "player score!!";
      setTimeout(() => {nextRoundComment()}, 4000);
      playerScore.innerHTML ++;
    }
  }

    let clickEvent = (e) => {
      playerChoiceNumber(e);
      playerChoiceHtml();
      getComputerChoice();
      computerChoiceHtml(computerChoice);
      scoreCounter(playerChoice, computerChoice);
      plrSelection.classList.remove('rotate-90-cw');
      compSelection.classList.remove("rotate-90-ccw");
    }
    
selected.forEach((btn) => {
    btn.addEventListener("click", clickEvent);
})