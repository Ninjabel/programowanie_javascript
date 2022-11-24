window.addEventListener('deviceorientation', onDeviceMove)

const ball = document.getElementById("ball");
const hole = document.getElementById("hole");

function onDeviceMove(event) {
    console.log(event)
}

function animate() {

    let alpha;
    let beta;

    requestAnimationFrame(animate)
}

requestAnimationFrame(animate)