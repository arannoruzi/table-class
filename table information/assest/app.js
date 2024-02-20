let name_input = document.getElementById("name_input");
let model_input = document.getElementById("model_input");
let color_input = document.getElementById("color_input");
let year_input = document.getElementById("Year_input");
let outputs = document.getElementById("outputs");
let button = document.querySelector("button");
let name_1 = document.getElementById("name");
let model_1 = document.getElementById("model");
let color_1 = document.getElementById("color");
let year_1 = document.getElementById("year");
button.addEventListener("click", myfunction);
class information {
    constructor(name, model, color, year){
        this.name = name;
        this.model = model;
        this.color = color;
        this.year = year;
    }
}
let myinfo = new info(name_input,model_input,color_input,year_input);
function myfunction() {
name_1.innerHTML = info.name;
model_1.innerHTML = info.model;
color_1.innerHTML = info.color;
year_1.innerHTML = info.year;
}