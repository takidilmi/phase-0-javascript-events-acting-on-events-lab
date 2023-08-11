// Your code here

/* const dodger = document.getElementById("dodger");
const maxWidth = 360;
const maxHeight = 380; // Adjust this value according to your needs

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
        left--;
        dodger.style.left = `${left}px`;
        requestAnimationFrame(moveDodgerLeft);
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left < maxWidth) {
        left++;
        dodger.style.left = `${Math.min(left, maxWidth)}px`;
        requestAnimationFrame(moveDodgerRight);
    }
}

function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
  
    if (bottom < maxHeight) {
        bottom++;
        dodger.style.bottom = `${Math.min(bottom, maxHeight)}px`;
        requestAnimationFrame(moveDodgerUp);
    }
}

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
  
    if (bottom > 0) {
        bottom--;
        dodger.style.bottom = `${bottom}px`;
        requestAnimationFrame(moveDodgerDown);
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    } else if (e.key === "ArrowUp") {
        moveDodgerUp();
    } else if (e.key === "ArrowDown") {
        moveDodgerDown();
    }
}); */

const dodger = document.getElementById("dodger");
const maxWidth = 360;

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < maxWidth) {
        dodger.style.left = `${Math.min(left + 1, maxWidth)}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});