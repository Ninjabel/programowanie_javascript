window.addEventListener('deviceorientation', onDeviceMove)

function onDeviceMove(event) {
    console.log(event)
}

function animate() {
    requestAnimationFrame(animate)
}

requestAnimationFrame(animate)