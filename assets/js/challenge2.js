$("document").ready(function () {
  spaceshipTimer();
  loadInstructions();
});

const popup = $(".intructions-popup");

async function loadInstructions() {
  const res = await fetch("../challenges/instructions-2.txt");
  const text = await res.text();
  $(".instructions").text(text);
}

$(".instructions-open").click(() => popup.show("ease"));
$(".close-instructions").click(() => popup.hide("ease"));

// David's spaceship Logic
let spaceship = document.getElementById("davids_spaceship");

let timer;
let x = 300;
let y = 40;

let spaceshipTimer = () => {
  startTimer();
};

function startTimer() {
  x++;
  y--;
  updatePostion(x, y);
  timer = setTimeout(startTimer, 10);
  terminate(y);
}

function stopTimer() {
  clearTimeout(timer);
}

function updatePostion(x, y) {
  // console.log(x,y)
  spaceship.style.left = x + "px";
  spaceship.style.top = y + "px";
}

function terminate(y) {
  if (y < -500) {
    // console.log('terminate')
    stopTimer();
    $("#davids_spaceship").remove();
  }
}
