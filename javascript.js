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
slider();


