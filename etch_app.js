/************** * ISSUES *****************/
// Need to figure out how to get equal rows & columns.
// Need to Not all squares are adjus automatically to fit in the container. 


const container = document.querySelector('#container');
const btnGridRequest = document.querySelector('.grid-request');
const btnClear = document.querySelector('.btn-clear');
const square = document.getElementsByClassName("square");

let gridNum;

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
//console.log(createDivs(64));

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let fraction = "";

function gridTemplate(c) {
    for(i = 1; i < c; i++) {  
    console.log(c, i);
    //let num = `${c}`
    fraction = `${i}fr`;
    //fraction = fraction * c;
    console.log(fraction);
    //container.style.gridTemplateColumns = `${fraction}`;
    //container.style.gridTemplateRows = `${fraction}`;
    return fraction;
  }
}

console.log(gridTemplate(4));

/*******Event Listeners *****/


btnGridRequest.addEventListener('click', () => {
    removeAllChildNodes(container);
    gridRequest();
});


//btnGridRequest.addEventListener('click', reload);

function gridRequest(){
    let gridNum = prompt("How many squares per side for the new grid? Enter a number from 1-100. Example: 50");
    // Check if a whole number from 1-100.
    if (gridNum === "" || gridNum <= 1 || gridNum > 100 || gridNum - (Math.floor(gridNum)) !== 0 ) {
       alert(`Not a valid number. Enter a number from 1-100, example: 50`);
    }
    else {
      divNum = gridNum * gridNum;
     createDivs(divNum);
     gridTemplate(gridNum);
     // console.log(`A valid number: ${gridNum}`)
    }
    return gridNum;
};


// Reloads the page when the Clear Grid button is clicked
btnClear.addEventListener('click', () => {
    removeAllChildNodes(container);
});

function reload() {
    location.reload();
}    

// Change color on the divs inside the container
container.onmouseover = handler;

function handler(event) {

  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }
  if (event.type == 'mouseover') {
    event.target.style.backgroundColor = 'grey'
  }
  if (event.type == 'mouseout') {
    event.target.style.backgroundColor = ''
  }
};


