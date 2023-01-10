var board = document.getElementById("board");
var ball = document.getElementById("ball");
var hole = document.getElementById("hole");
var scoreboard = document.getElementById("scoreboard");
var holeX = 250;
var holeY = 250;
var ballX = 250;
var ballY = 250;
var speedX = 0;
var speedY = 0;
var score = 0;
var startTime;
var endTime;

// Kulka na środku
ball.style.left = ballX + "px";
ball.style.top = ballY + "px";
hole.style.left = holeX + "px";
hole.style.top = holeY + "px";


window.addEventListener("deviceorientation", handleOrientation);

function handleOrientation(event) {

  var x = event.beta;
  var y = event.gamma;

  // Prędkość kulki na podstawie beta i gamma
  speedX = -x;
  speedY = y;
}

startTime = Date.now();
requestAnimationFrame(animate);

function animate() {

  ballX += speedX;
  ballY += speedY;

  if (ballX < 0) {
    ballX = 0;
    speedX = 0;
  }
  if (ballX > 470) {
    ballX = 470;
    speedX = 0;
  }
  if (ballY < 0) {
    ballY = 0;
    speedY = 0;
  }
  if (ballY > 470) {
    ballY = 470;
    speedY = 0;
  }


  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  // Sprawdzenie czy kulka jest w dziurze
  if (Math.abs(ballX - holeX) < 20 && Math.abs(ballY - holeY) < 20) {

    score++;

    if (score === 5) {
      endTime = Date.now();
      var totalTime = (endTime - startTime) / 1000;
      alert("Gratulacje! Ukończyłeś grę w czasie " + totalTime + " sekund.");
      var userName = prompt("Podaj swoją nazwę.");

      // Zapisywanie wyniku do localStorage
      if (localStorage.getItem("scores") === null) {
        localStorage.setItem("scores", `${userName}: ${totalTime}s`);
      } else {
        var currentScores = localStorage.getItem("scores");
        localStorage.setItem("scores", currentScores + `, ${userName}: ${totalTime}s`);
      }
      // Tabela wyników
      var scores = localStorage.getItem("scores");
      scoreboard.innerHTML = `<h2>Top Scores</h2> <p> ${scores} </p>`;
      return;
    }

    // Losowanie nowego położenia diury
    holeX = Math.random() * 470;
    holeY = Math.random() * 470;
    hole.style.left = holeX + "px";
    hole.style.top = holeY + "px";

    speedX = 0;
    speedY = 0;
  }

requestAnimationFrame(animate);
}
