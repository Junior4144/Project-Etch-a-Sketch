console.log("hello")



const btn = document.querySelector('.custom-btn');
const body = document.querySelector("body")
let grid = 16;

function createGrid(){
    const gridContainer = document.querySelector('.grid-container');


    
    for(let i = 0; i < grid*grid; i++){

        let div = document.createElement('div');
        div.className = "grid_square";
        let x = 400 / grid;
        div.style.width = x.toString() + "px";
        div.style.height =  x.toString() + "px";

        div.addEventListener('mouseover', () =>{
            div.style.backgroundColor = "black";
        });

        gridContainer.appendChild(div);
        
    }
}

btn.addEventListener('click', () => {
    grid = prompt("What would you like the custom grid size to be?");
    while (grid > 100){
        grid = prompt("The grid size is too big, enter a number less than 100");
    }
    while (grid < 4){
        grid = prompt("The grid size is too small, enter a number greater than 3 ")
    }
    

    const gridContainer = document.querySelector('.grid-container');
    body.removeChild(gridContainer);

    const newGrid = document.createElement('div');
    
    newGrid.className = "grid-container";
    body.appendChild(newGrid);
    createGrid();
});



createGrid();