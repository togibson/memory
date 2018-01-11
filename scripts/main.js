/* Get cavas context. */
let c = document.getElementById("canvas").getContext("2d");

/* Load images. */
let images = [];

images.push(new Image());
images[images.length - 1].src = "images/Skull.png";
images.push(new Image());
images[images.length - 1].src = "images/House 1.png";
images.push(new Image());
images[images.length - 1].src = "images/House 2.png";
images.push(new Image());
images[images.length - 1].src = "images/House 3.png";

images[0].onload = function() {
    c.drawImage(imxages[0], 500, 200, 40, 40);
}

images[1].onload = function() {
    c.drawImage(images[1], 55, 5, 40, 40);
}
