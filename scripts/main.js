/* Get cavas context. */
let c = document.getElementById("canvas").getContext("2d");

/* Load images. */
let images = [];

images.push(new Image());
images[images.length - 1].src = "images/Skull.png";

c.fillStyle = "green";
c.fillRect(5, 5, 40 , 40);

images[0].onload = function() {
    c.drawImage(images[0], 50, 50, 40, 40);
}
