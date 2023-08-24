// javaScript file

// generates a dynamic grid
// function generateDivs(num){
//     const container = document.querySelector('#container');
//     for(let i = 0; i < num; i++){
//         let row = document.createElement('div');
//         row.className = 'row';
//         for (let x = 1; x <= num; x++){
//             let cell = document.createElement('div');
//             cell.className = 'gridSquare';
//             row.appendChild(cell);
//         };
//         container.appendChild(row);
//     };
//    // document.querySelector('#code').innerText = container.innerHTML;
// };


document.querySelector('#container').style.grid = '250px / auto auto';
