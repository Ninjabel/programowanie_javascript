window.addEventListener('deviceorientation', onDeviceMove)

const ball = document.getElementById("ball");
const hole = document.getElementById("hole");
const gardeb = document.getElementById("garden");

const maxX = garden.clientWidth - ball.clientWidth;
const maxY = garden.clientHeight - ball.clientHeight;

function onDeviceMove(event) {

    var x = event.beta; // In degree in the range [-180,180)
    var y = event.gamma; // In degree in the range [-90,90)

    console.log(x, y);

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x > 90) {
    x = 90;
  }
  if (x < -90) {
    x = -90;
  }

  // To make computation easier we shift the range of
  // x and y to [0,180]
  x += 90;
  y += 90;

  animate();
}

function animate() {    
    console.log('works');

    ball.style.top = `${(maxY * y) / 180 - 10}px`;
    ball.style.left = `${(maxX * x) / 180 - 10}px`;
}

requestAnimationFrame(animate);