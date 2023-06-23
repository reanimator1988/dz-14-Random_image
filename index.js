"use strict";


const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
const randomIndex = Math.floor(Math.random() * images.length);
const img = document.createElement('img');
img.src = `images/${images[randomIndex]}`;
img.classList.add('random_img');
const container = document.getElementById('images_container');
container.appendChild(img);