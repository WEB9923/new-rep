
const obj = {
    country:["საქართველო","თურქეთი","ამერიკა"],
    region:["თბილისი","ბათუმი","ქუთაისი"]
};

let firstSelect = document.getElementById("select1");
let secondSelect = document.getElementById("select2");

firstSelect.addEventListener("change", () => {
    let selectedOption = firstSelect.value;
    secondSelect.innerHTML = "";
    detectSelectedOptionValue(selectedOption);
});

function detectSelectedOptionValue(select) {
    switch(select) {
        case "ქვეყანა":
            addOptions(obj.country);
            break;
        case "რაიონი":
            addOptions(obj.region);
            break;
        default:
            alert("ქალაქები არ არის ხელმისაწვდომი!");
            break;
    }
}

function addOptions(options) {
    options.forEach((option) => {
        let newOption = document.createElement("option");
        newOption.value = option;
        newOption.text = option;
        secondSelect.appendChild(newOption);
    });
}



///// range value
const inp = document.getElementById("range");
const inpVal = document.querySelector(".value");
inpVal.innerText = inp.value;
inp.addEventListener("input", (e) => {
    inpVal.innerText = e.target.value;
})

