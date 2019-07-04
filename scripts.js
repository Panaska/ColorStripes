"use strict";
openModal();

function addingSomething(something) {
  //console.log (n);
  let nodelist = document.getElementsByClassName(something).length;
  for (let i = 1; i <= nodelist; i++) {
    let k = something + i;
    let node = document.getElementById(k);
    let randTop = Math.floor(Math.random() * 80);
    let randLeft = Math.floor(Math.random() * 80);
    node.style.top = randTop + "%";
    node.style.left = randLeft + "%";
    node.style.visibility="visible";

    if(something == 'star') node.style.borderBottomColor=randomColor();
    else node.style.backgroundColor=randomColor();
  }
}

function randomColor() {
  let colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  let colorAuto = "#";
  for (let f = 0; f < 6; f++) {
      let rand = Math.floor(Math.random() * 16);
      colorAuto += colors[rand];
  }

return colorAuto;
//   let colorAuto = "#";
//
//   for (let f = 0; f < 6; f++) {
//       let rand = Math.floor(Math.random() * 10);
//       if (rand > 5 && f == 0) {
//           rand = "B";
//       } else if (rand > 2 && f == 3) {
//           rand = "E";
//       } else if (rand > 7 && f < 2) {
//           rand = "A";
//       } else if (rand > 8 && f < 5) {
//           rand = "C";
//       } else if (rand > 3 && f < 1) {
//           rand = "D";
//       } else if (rand == 4 && f < 7) {
//           rand = "F";
//       }
//       colorAuto += rand;
//   }
//
// return colorAuto;
}

function redColor() {
  let colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  let colorAuto = "#FF";
let rand1 = Math.floor(Math.random() * 5);
colorAuto += rand1
  for (let f = 0; f < 3; f++) {
      let rand = Math.floor(Math.random() * 16);
      colorAuto += colors[rand];
  }
// if (colorAuto >= "470000" && colorAuto <= "FF5C5C") {
//   console.log(colorAuto);
//   return ("#" + colorAuto);
// }
//
// else redColor();
return colorAuto;
}

function greenColor() {
  let colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  let colorAuto = "#";
  for (let f = 0; f < 2; f++) {
      let rand = Math.floor(Math.random() * 16);
      colorAuto += colors[rand];
  }
  colorAuto += 'FF';

  for (let f = 0; f < 2; f++) {
      let rand = Math.floor(Math.random() * 16);
      colorAuto += colors[rand];
  }

return colorAuto;
}

function blueColor() {
  let colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  let colorAuto = "#";

  for (let f = 0; f < 4; f++) {
      let rand = Math.floor(Math.random() * 16);
      colorAuto += colors[rand];
  }

return colorAuto + 'FF';
}

function paintStripes(color) {

    let nodelist = document.getElementsByClassName("differentColors").length;
    //console.log(nodelist);
    for (let i = 1; i <= nodelist; i++) {
        let k = "wrap" + i;
        let node = document.getElementsByClassName(k)[0];


if (color == 'red') {
  node.style.backgroundColor = redColor();
}
else if (color == 'green') {
  node.style.backgroundColor = greenColor();
}
else if (color == 'blue') {
  node.style.backgroundColor = blueColor();
}
else {
  node.style.backgroundColor = randomColor();
}
      // console.log(node.style.backgroundColor);

      //  node.style.boxShadow = '2px 2px 5px 1px ' + colorAuto + ',  4px 4px 2px 0px black';

    }
}

// function addingSquare() {
//   let nodelist = document.getElementsByClassName("square").length;
//   for (let i = 1; i <= nodelist; i++) {
//     let k = "square" + i;
//     let node = document.getElementById(k);
//     let randTop = Math.floor(Math.random() * 85);
//     let randLeft = Math.floor(Math.random() * 85);
//     node.style.top = randTop + "%";
//     node.style.left = randLeft + "%";
// node.style.visibility="visible";
// node.style.backgroundColor=randomColor();
//   }
// }
//
// function addingCircle() {
//   let nodelist = document.getElementsByClassName("round").length;
//   for (let i = 1; i <= nodelist; i++) {
//     let k = "round" + i;
//     let node = document.getElementById(k);
//     let randTop = Math.floor(Math.random() * 85);
//     let randLeft = Math.floor(Math.random() * 85);
//     node.style.top = randTop + "%";
//     node.style.left = randLeft + "%";
// node.style.visibility="visible";
// node.style.backgroundColor=randomColor();
//   }
// }
//
// function addingHeart() {
//   let nodelist = document.getElementsByClassName("heart").length;
//   for (let i = 1; i <= nodelist; i++) {
//     let k = "heart" + i;
//     let node = document.getElementById(k);
//     let randTop = Math.floor(Math.random() * 83);
//     let randLeft = Math.floor(Math.random() * 83);
//     node.style.top = randTop + "%";
//     node.style.left = randLeft + "%";
// node.style.visibility="visible";
// node.style.backgroundColor=randomColor();
//   }
// }

// function addingStar() {
//   let nodelist = document.getElementsByClassName("star").length;
//   for (let i = 1; i <= nodelist; i++) {
//     let k = "star" + i;
//     let node = document.getElementById(k);
//     let randTop = Math.floor(Math.random() * 81);
//     let randLeft = Math.floor(Math.random() * 81);
//     node.style.top = randTop + "%";
//     node.style.left = randLeft + "%";
// node.style.visibility="visible";
// node.style.borderBottomColor=randomColor();
//   }
// }


function openModal() {
  // Get the modal
let modal = document.getElementById("modal");

// Get the button that opens the modal
let span = document.getElementsByClassName("openModal")[0];

// Get the <span> element that closes the modal
let spanClose = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
span.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanClose.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
