var allowedKeys = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  65: "a",
  66: "b",
  13: "enter",
};
var konamiCode = [
  "up",
  "up",
  "down",
  "down",
  "left",
  "right",
  "left",
  "right",
  "b",
  "a",
  "enter",
];
var konamiCodePosition = 0;
document.addEventListener("keydown", function (e) {
  var key = allowedKeys[e.keyCode];
  var requiredKey = konamiCode[konamiCodePosition];
  if (key == requiredKey) {
    konamiCodePosition++;
    if (konamiCodePosition == konamiCode.length) {
      redirectpage("secret-konami.html");
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function redirectpage(page) {
  location.href = page;
}
