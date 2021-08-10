import "./css/tailwind.css";
import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();

var canvas = document.getElementById("starfield"),
  context = canvas.getContext("2d"),
  stars = 200;

for (var i = 0; i < stars; i++) {
  var x = Math.random() * canvas.offsetWidth;
  (y = Math.random() * canvas.offsetHeight), (radius = Math.random() * 1.2);
  context.beginPath();
  context.arc(x, y, radius, 0, 360);
  context.fillStyle = "hsla(200,100%,50%,0.8)";
  context.fill();
}
