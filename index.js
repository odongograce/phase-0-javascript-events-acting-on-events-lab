let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let left = dodger.style.left.replace("px", "");
  left = parseInt(left, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let left= dodger.style.left.replace("px", "");
 left = parseInt(left, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

