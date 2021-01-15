const GRID_WIDTH = 20;
const GRID_HEIGHT=20;
const GRID_SIZE = GRID_HEIGHT * GRID_WIDTH;

let score = 0;

const snakeElement= document.querySelector("#snake-grid");
let position = (GRID_SIZE/2) - (GRID_WIDTH/2);


let createFoodPosition = () => {
    return Math.floor(Math.random() * GRID_SIZE);
};
let foodPosition = createFoodPosition();


const createGrid = () => {
    for (let i = 0; i < GRID_SIZE; i++) {
        const singLeBlock = document.createElement("div");
        singLeBlock.classList.add("snake-grid-item");
        snakeElement.appendChild(singLeBlock);
    }

}

createGrid();

const createStart = (position) => {
    const startBlock = document.querySelectorAll(".snake-grid-item");
    startBlock[position].classList.add("filled");
}
createStart(position);


const foodCreate = (position) => {
    
    const foodBlock = document.querySelectorAll(".snake-grid-item");
    foodBlock[foodPosition].classList.add("food");
};
foodCreate(position);

const deleteEl = (position) => {
    const deleteBlock = document.querySelectorAll(".snake-grid-item");
    deleteBlock[position].classList.remove("filled");
}


const removeFood = () => {
    const foodBlock = document.querySelector(".food");
    foodBlock.classList.remove("food")
};



const bindEvents = () => {
    document.addEventListener("keyup", (e) => {
        handleControls(e);
    });
};

const handleControls = (e) => {
    if(e.keyCode === 37){
        deleteEl(position);
        position = position -1;
        createStart(position);
        
    }
    if(e.keyCode === 39){
        deleteEl(position);
        position = position +1;
        createStart(position);
    }
    if(e.keyCode === 38){
        deleteEl(position);
        position = position -GRID_WIDTH;
        createStart(position);
    }
    if(e.keyCode === 40){
        deleteEl(position);
        position = position +GRID_WIDTH;
        createStart(position);
    }

    if(position == foodPosition) {
        removeFood();

        foodPosition = createFoodPosition();

        foodCreate(foodPosition);

        score += 10;

        const scoreEl = document.querySelector("#point");
        scoreEl.innerHTML = score;
        
        
    }
};
bindEvents();

