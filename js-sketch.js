// javaScript file

// generates a dynamic grid
function generateDivs(x, y, cellSize, gridElement) {
    gridElement.style.display = "grid";
    gridElement.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
    gridElement.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;

    let squares = new DocumentFragment();
    
    for (let i = 0; i < x * y; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        squares.appendChild(square);
    }
    gridElement.appendChild(squares);
}


function promptBtn(){
    let userGridSelectRow = prompt("Please enter the number of rows desired");
    let userGridSelectColumns = prompt("Please enter the number of columns desired");
    if (userGridSelectColumns <= 100 && userGridSelectRow <= 100) {
        cleanBtn();
        generateDivs(userGridSelectColumns, userGridSelectRow, 15, document.querySelector('#container'));
    }else {
        promptBtn();
    }        
}

// use innerHTML to clean grid when generating a new one
function cleanBtn(){
    let cleanContainer = document.getElementById('container');
     cleanContainer.innerHTML = '';
 }

