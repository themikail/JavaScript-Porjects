var code = document.querySelector(".colorCode");

var btn = document.querySelector(".generateBtn");

var code2 = document.querySelector(".colorCode2");

var btn2 = document.querySelector(".generateBtn2");

btn.addEventListener("click", colorGenerator);
btn2.addEventListener("click", colorGenerator2);

function colorGenerator() {
  var letters = "0123456789abcdef";

  var hash1 = "#";

  var hash2 = "#";

  for (let i = 0; i < 6; i++) {
    hash1 += letters[Math.floor(Math.random() * 16)];

    hash2 += letters[Math.floor(Math.random() * 16)];
  }

  code.innerHTML = `background : linear-gradient(to right,${hash1},${hash2})`;

  document.documentElement.style.background = `linear-gradient(to right,${hash1},${hash2})`;
}

window.onload = colorGenerator();

function colorGenerator2() {
  var letters = "0123456789abcdef";

  var hash1 = "#";

  for (let i = 0; i < 6; i++) {
    hash1 += letters[Math.floor(Math.random() * 16)];
  }

  code2.innerHTML = `background : ${hash1}`;

  document.documentElement.style.background = `${hash1}`;
}

window.onload = colorGenerator2();
