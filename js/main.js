console.log("connected!");

//////creates an array of the board//////
var board = document.getElementsByClassName('box')

//////starts the game with player 1 going first//////
var player1 = true

///////changes userInput image based on who's turn it is//////
for (var i = 0; i < board.length; i++) {
  board[i].addEventListener('click', imgClick)
  board[i].addEventListener('click', handler)
  }

function imgClick() {
  if(player1) {
    this.style.backgroundImage = "url('http://preparingyourfamily.com/wp-content/uploads/2012/06/Get-Off-The-X.png')"
    this.setAttribute('data-box', 1)
    player1 = false
  } else {
    this.style.backgroundImage = "url('http://www.iconsplace.com/download/red-letter-o-512.png')"
    this.setAttribute('data-box', 2)
    player1 = true
  }
  winner()
  isTie()
}

//////Game logic for who wins the match//////
function winner(i) {
  rowWin("1") || rowWin("2")
  columnWin("1") || columnWin("2")
  diagnalWin("1") || diagnalWin("2")
}
function rowWin(attribute) {
  if (
    ((board[0].getAttribute('data-box') == attribute) && (board[1].getAttribute('data-box') === attribute) && (board[2].getAttribute('data-box') === attribute)) ||
    ((board[3].getAttribute('data-box') === attribute) && (board[4].getAttribute('data-box') === attribute) && (board[5].getAttribute('data-box') === attribute)) ||
    ((board[6].getAttribute('data-box') === attribute) && (board[7].getAttribute('data-box') === attribute) && (board[8].getAttribute('data-box') === attribute))) {
      alert('Player ' + attribute + " Wins!")
  }
}
function columnWin(attribute) {
  if (
    ((board[0].getAttribute('data-box') == attribute) && (board[3].getAttribute('data-box') === attribute) && (board[6].getAttribute('data-box') === attribute)) ||
    ((board[1].getAttribute('data-box') === attribute) && (board[4].getAttribute('data-box') === attribute) && (board[7].getAttribute('data-box') === attribute)) ||
    ((board[2].getAttribute('data-box') === attribute) && (board[5].getAttribute('data-box') === attribute) && (board[8].getAttribute('data-box') === attribute))) {
      alert('Player ' + attribute + " Wins!")
  }
}
function diagnalWin(attribute) {
  if (
    ((board[0].getAttribute('data-box') == attribute) && (board[4].getAttribute('data-box') === attribute) && (board[8].getAttribute('data-box') === attribute)) ||
    ((board[2].getAttribute('data-box') === attribute) && (board[4].getAttribute('data-box') === attribute) && (board[6].getAttribute('data-box') === attribute))) {
      alert('Player ' + attribute + " Wins!")
  }
}
//////Game logic for if there is a tie//////
function isTie(){
  var count = 0;
  for (var i = 0; i < board.length; i++) {
    if ((board[i].getAttribute('data-box') === "1") || (board[i].getAttribute('data-box') === "2")) {
      count++
    }
    if (count === 9) {
      var answer = prompt("It's a tie! Play Again?");
      if (answer === 'yes') {
        alert('Click below to play again!')
      } else {
        alert("Thanks for playing")
      }
    }
  }
}

//////Game logic for only being able to click a button once//////
function handler(i) {
	i.target.removeEventListener(i.type, arguments.callee);
  console.log('done');
}







///
