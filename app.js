function changeImage(value) {
    var image = document.getElementById('bulb')
    if (value==0) {
        image.src = "bulboff.png"

    }
    else {
        image.src = "bulbon.png"
    }
}