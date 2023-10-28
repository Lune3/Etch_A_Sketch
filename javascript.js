function slider(){

    const slider = document.querySelector("#slider");
    const sliderOutput1 = document.querySelector(".sliderOutput1");
    const sliderOutput2 = document.querySelector(".sliderOutput2");

    sliderOutput1.textContent = slider.value;
    sliderOutput2.textContent = slider.value; 

    slider.addEventListener("input",(e) => {
        sliderOutput1.textContent = e.target.value;
        sliderOutput2.textContent = e.target.value;
        createGrid(sliderOutput1.textContent);
    })
}

function createGrid(area){
    area = parseInt(area);
    const gridArea = document.querySelector(".drawingBox");
    gridArea.textContent = '';
    for(let i = 1;i <= area * area;i++)
    {   
        let grid = document.createElement('div');
        grid.className = "grid";
        grid.style.height = `${560/(area)}px`;
        grid.style.width = `${560/(area)}px`;
        gridArea.appendChild(grid); 
    }
}

function drawingMode(){
    const selectedMode = document.querySelectorAll("button");
    selectedMode.forEach((click) => {
        click.addEventListener("click",(e) =>{
            switch(e.target.textContent)
            {
                case "Draw":
                    draw();
                    break;
                case "Random":
                    random();
                    break;
                case "Eraser":
                    erase();
                    break;
                case "Clear":
                    clear();
                    break;
            }
        })
    });
}

function draw(){
    const drawingPixel = document.querySelectorAll(".grid");
    let mouseIsDown = false;
    drawingPixel.forEach((box) =>{
        box.addEventListener("mousedown",() =>{
            mouseIsDown = true;
        })
        box.addEventListener("mouseup",() =>{
            mouseIsDown = false;
        })
        box.addEventListener("mousemove",() =>{
            if(mouseIsDown)
            {
                box.style.backgroundColor = "Black";
            }
        })
    })
}

function random(){
    let arr = [];
    for(let i = 0;i < 3;i++)
    {
        let rand = Math.floor((Math.random()) * 255);
        arr.push(rand);
    }
    const drawingPixel = document.querySelectorAll(".grid");
    let mouseIsDown = false;
    drawingPixel.forEach((box) =>{
        box.addEventListener("mousedown",() =>{
            mouseIsDown = true;
        })
        box.addEventListener("mouseup",() =>{
            mouseIsDown = false;
        })
        box.addEventListener("mousemove",() =>{
            if(mouseIsDown)
            {
                box.style.backgroundColor = `rgb(${arr[0]},${arr[1]},${arr[2]})`;
            }
        })
    })
}

function clear(){
    const drawingPixel = document.querySelectorAll(".grid");
    drawingPixel.forEach((box) => {
        box.style.backgroundColor = "White";
    })
}

function erase(){
    const drawingPixel = document.querySelectorAll(".grid");
    let mouseIsDown = false;
    drawingPixel.forEach((box) =>{
        box.addEventListener("mousedown",() =>{
            mouseIsDown = true;
        })
        box.addEventListener("mouseup",() =>{
            mouseIsDown = false;
        })
        box.addEventListener("mousemove",() =>{
            if(mouseIsDown)
            {
                box.style.backgroundColor = "White";
            }
        })
    })
}


drawingMode();
slider();



