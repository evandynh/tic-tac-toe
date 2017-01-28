console.log("connected!");

var topLeft = document.getElementById('topLeft')
var topMiddle = document.getElementById('topMiddle')
var topRight = document.getElementById('topRight')
var middleLeft = document.getElementById('middleLeft')
var middleMiddle = document.getElementById('middleMiddle')
var middleRight = document.getElementById('middleRight')
var bottomLeft = document.getElementById('bottomLeft')
var bottomMiddle = document.getElementById('bottomMiddle')
var bottomRight = document.getElementById('bottomRight')

//creates an array of the board//
var board = document.getElementsByClassName('box')

//starts the game with player 1 going first//
var player1 = true

// changes userInput image based on who's turn it is //
for (var i = 0; i < board.length; i++) {
  board[i].addEventListener('click', function(){
    if(player1) {
      this.style.backgroundImage = "url('http://preparingyourfamily.com/wp-content/uploads/2012/06/Get-Off-The-X.png')"
      alert("Player 2, Your Turn!")
      player1 = false
    } else {
      this.style.backgroundImage = "url('http://www.iconsplace.com/download/red-letter-o-512.png')"
      alert("Player One, Your Turn!")
      player1 = true
    }
  })
}
