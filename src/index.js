let player2 = 0
let player1 = 0
let player2Selection = ''
let player1Selection = ''

let gameCount = 0
let choices = [
  'Schere', 'Stein', 'Papier'
]
let gameCards = document.getElementsByClassName('game-card');
let refreshButton = document.getElementById('refresh');
let toggleButton = document.getElementById('auto-select');
let startButton = document.getElementById('startGame');
let nextRoundButton = document.getElementById('next-round');

document.addEventListener("DOMContentLoaded", function (event) {

  refreshButton.addEventListener('click', e => {
    window.location.reload();
    gameCount = 0
     player2Selection = ''
     player1Selection = ''
  })
  startButton.addEventListener('click', e => {
    startGame(player1Selection)
   
  })
  // player1Selection automatically
  toggleButton.addEventListener('change', e => {
    player1Selection = randomselect(choices)
    document.getElementById('choice-ply1').innerHTML = player1Selection
  

  })

  Array.from(gameCards).forEach((card, i) => {
    card.onclick = () => {player1Selection = choices[i];
      document.getElementById('choice-ply1').innerHTML = choices[i]
      
    }
    
  })
  nextRoundButton.addEventListener('click', e => {

     player2Selection = ''
    player1Selection = ''
    document.getElementById('choice-ply1').innerHTML = ''
    document.getElementById('choice-comp').innerHTML = ''
    document.getElementById('round-count').innerHTML = gameCount+1

  })
})


function startGame(value){

  // computer makes its own choice
  let player2Selection = randomselect(choices)

  //compare choices check and for the winner
  compareChoices(value, player2Selection)

  // //increase game count
  gameCount += 1
  document.getElementById('player1').innerHTML = player1
  document.getElementById('player2').innerHTML = player2
 
  if (gameCount === 3) {

    compare(player1, player2)
    document.getElementById('refresh').style = 'display: block'
  }
}

function randomselect(arr) {
  let rand = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById('choice-comp').innerHTML = rand
  return rand
}


function compareChoices(playerSelection, player2Selection) {
  // translate name to place in table above
  let rpslvEnum = {
    Stein: 0,
    Papier: 1,
    Schere: 2,

  };
  let scheme = [
    [0, -1, 1,],
    [1, 0, -1,],
    [-1, 1, 0,],
    [-1, 1, -1,],
    [1, -1, 1,]
  ];
  let result = scheme[rpslvEnum[playerSelection]]
  [rpslvEnum[player2Selection]];

  document.getElementById('next-round').style = 'display: block'
  switch (result) {

    case 0: return document.getElementById('winner').innerHTML = "Unentschieden!";
    case 1: player1 += 1; return document.getElementById('winner').innerHTML = "Du hast gewonnen!";
    case -1: player2 += 1; return document.getElementById('winner').innerHTML = "Du hast verloren!";
    default: throw new Error("Something unexpected happend in ");
  }


}
function compare(player1, player2) {
  if (player1 > player2) {
    document.getElementById('game-result').innerHTML = 'Du hast das Match gewonnen!'
  }
  else if (player2 > player1) {
    document.getElementById('game-result').innerHTML = 'Du hast das Match verloren!'
  }
  else {
    document.getElementById('game-result').innerHTML = 'Das Match is unentschieden!'
  }
  document.getElementById('card-grid').style = 'display: none'
}


