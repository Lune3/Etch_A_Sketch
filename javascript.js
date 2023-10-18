const slider = document.querySelector("#slider");
const sliderOutput1 = document.querySelector(".sliderOutput1");
const sliderOutput2 = document.querySelector(".sliderOutput2");

sliderOutput1.textContent = slider.value;
sliderOutput2.textContent = slider.value; 

slider.addEventListener("input",(e) => {
    sliderOutput1.textContent = e.target.value;
    sliderOutput2.textContent = e.target.value;
})


