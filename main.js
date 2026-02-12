console.log("Script is connected!");
let targetElement = document.querySelector("#brand");

targetElement.addEventListener("mouseover", function () {
    this.innerText = "American people?";
    this.style = "cursor: wait;";
});

targetElement.addEventListener("mouseout", function () {
    this.innerText = "American Eagle";
    this.style = "cursor: pointer;";
});

let jeansElement = document.querySelector("#jeans");


jeansElement.addEventListener("mouseover", function () {
    this.innerText = "RED BLOOD";
    this.style = "cursor: wait;";
});


jeansElement.addEventListener("mouseout", function () {
    this.innerText = "BLUE JEANS";
    this.style = "cursor: pointer;";
});
