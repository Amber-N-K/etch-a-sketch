/*************** ISSUES/WANT TO IMPROVE *****************/
// Refractor
// If the mouse leaves out of the container then the color changes to blackish colors with mouseover


const container = document.querySelector('#container');
const btnGridRequest = document.querySelector('.grid-request');
const btnClear = document.querySelector('.btn-clear');
//const square = document.getElementsByClassName("square");
const square = document.querySelectorAll(".square");

let gridNum;

// When DOM Content Loads, the 16x16 div squares and grid will be created
window.addEventListener('DOMContentLoaded', (event) => {
  newGridCreation(event);
});

function newGridCreation(event) {
  createDivs(256);
  gridTemplate(16);
  pixelsBlack(event);
};

// Function creates the # of div squares and appends to the container div based on the users input
function createDivs(c){
    for(i = 0; i < c; i++){  
    const div = document.createElement("div");  
    div.setAttribute("id", `${i}`)
    div.className = 'square';
    container.appendChild(div);
}
 return i;
}; 

function gridTemplate(c) {
  for(i = 1; i < c; i++) {  
  container.style.setProperty('--grid-template-columns', `repeat(${c}, 1fr)`);
  container.style.setProperty('--grid-template-rows', `repeat(${c}, 1fr)`);
 return c;
}
};

// Click New Grid Request button --> removes divs/squares & creates 16x16 grid
btnGridRequest.addEventListener('click', (event) => {
  container.onmouseover = pixelsBlack;
  removeAllChildNodes(container);
  gridRequest();
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function gridRequest(){
  let gridNum = prompt("How many squares would you like for the new grid? Enter a number from 1-100. Example: 50");
  // Check if a whole number from 1-100.
  if (gridNum === "" || gridNum <= 1 || gridNum > 100 || gridNum - (Math.floor(gridNum)) !== 0 ) {
     alert(`Not a valid number. Enter a number from 1-100, example: 50`);
  }
  else {
    divNum = gridNum * gridNum;
    createDivs(divNum);
    gridTemplate(gridNum);
    container.style.backgroundColor = ('--sqr-primary-bgcolor', "#f8ecf0");
  }
  return gridNum;
};


// Reloads the page when the Clear Grid button is clicked and creates 16x16 grid
btnClear.addEventListener('click', setDefaultGrid);
    
function setDefaultGrid(event) {
  reload();
  newGridCreation(event);
};

function reload() {
  location.reload();
};

/////// COLOR Options //////


/****** Random Square Color Button *******/

const sqrColorBtn = document.querySelector('.sqcolor-random');
const sqrBlackBtn = document.querySelector('.sqblack');

sqrColorBtn.addEventListener("click", function(event) {
    if (event.target.textContent === "Random Square Color") {
      event.target.textContent = "Black Square Color";
      pixelsColor(event);  
    }
    else if (event.target.textContent === "Black Square Color") {
      event.target.textContent = "Random Square Color";
      pixelsBlack(event);
    }
    else {
      pixelsColor(event);  
    }
  });

function pixelsBlack(event) {
  container.onmouseover = pixelsBlack;
  if (event.type == 'mouseover') {
    event.target.style.backgroundColor = 'black';
    }
  if (event.type == 'mouseout') {
      event.target.style.backgroundColor = '';
    }
};


function pixelsColor(event) {
  container.onmouseover = pixelsColor;
  if (event.type == 'mouseover') {
    const newBgColor = randomColor();
    event.target.style.backgroundColor = ('--sqr-primary-bgcolor', newBgColor)
  }
  if (event.type == 'mouseout') {
    event.target.style.backgroundColor = '';
  }
};


/****** Random Background Color Button *******/

// When you click the Random Background Color button, it will change the container background to a random color each time you click the button.

const bgColorBtn = document.querySelector('.bgcolor-random');
bgColorBtn.addEventListener('click', setRandomBgColor);

function setRandomBgColor() {
  const newBgColor = randomColor();
  container.style.backgroundColor = ('--contr-primary-bgcolor', newBgColor)
};

function randomColor() {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
};

function random(min,max) {
  const num = Math.floor(Math.random()*(max-min)) + min;
  return num;
};
 
/****** Blackish Square Color Option *******/

function pixelsBlackish(event) {
  container.onmouseleave = pixelsBlackish;
  if (event.type == 'mouseover') {
    const newBlackishColor = randomBlackColor();
    event.target.style.backgroundColor = ('--sqr-primary-bgcolor', newBlackishColor)
    }
  if (event.type == 'mouseout') {
      event.target.style.backgroundColor = '';
    }
};

function randomBlackColor() {
  return `hsl(0, 0%, ${percentBlack(0)}%)`;
};

// hsl(0, 0%, 0%) = black --> changes the squares from black, grey to white color
function percentBlack(min) {
   //let blackNum = Math.floor(Math.random()*(max-min)) + min;
   let sum = 1;
   let blackNum = "";
   for (let i = 1; i <= 10; i++) {
  sum++;
   blackNum = Math.floor(Math.random()*sum) * sum;
   }
   //console.log(blackNum);
   return blackNum;
  };

