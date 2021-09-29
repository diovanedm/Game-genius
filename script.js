let order = [];
let clickOrder = [];
let score = 0;

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

function selectBlock(block, type) {
  switch (block) {
    case 0:
    case "blue":
      type && clickOrder.push(0);
      blue.classList.add("selected");
      removeSelected(blue);
      break;

    case 1:
    case "red":
      type && clickOrder.push(1);
      red.classList.add("selected");
      removeSelected(red);
      break;

    case 2:
    case "yellow":
      type && clickOrder.push(2);
      yellow.classList.add("selected");
      removeSelected(yellow);
      break;

    case 3:
    case "green":
      type && clickOrder.push(3);
      green.classList.add("selected");
      removeSelected(green);
      break;
  }
}

function removeSelected(block) {
  setTimeout(() => {
    block.classList.remove("selected");
  }, 200);
}

function getRandomBlock() {
  let numberBlock = Math.floor(Math.random() * 4);
  order.push(numberBlock);
  selectBlock(numberBlock);
}

let count = 0;
function newOrder() {
  setTimeout(() => {
    if (count < order.length) {
      selectBlock(order[count]);
      count = count + 1;
      newOrder();
    } else {
      count = 0;
      clickOrder = [];
      getRandomBlock();
    }
  }, 1000);
}

function start() {
  setTimeout(() => {
    getRandomBlock();
  }, 1000);
}
start();

let countClick = 0;
document.addEventListener("click", (e) => {
  selectBlock(e.target.className, true);

  for (let index = 0; index < order.length; index++) {
    if (clickOrder[index] !== undefined) {
      if (order[index] !== clickOrder[index]) {
        alert("Perdeu");
        order = [];
        clickOrder = [];
      } else {
        console.log(order[index])
        console.log(clickOrder[index])
      }
    } else {
      break;
    }
  }

  if (order.length === clickOrder.length) {
    newOrder();
  }
});
