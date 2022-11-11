let outputElement = document.getElementById("output");

let arrayTypeElement = document.querySelectorAll("input[name='array-type']");
let dataTypeElement = document.querySelectorAll("input[name='data-type']");

let sizeElement = document.getElementById("size");
let stepsElement = document.getElementById("steps");
let minRangeElement = document.getElementById("range-min");
let maxRangeElement = document.getElementById("range-max");

let arrayType = "linear";
let dataType = "int";

let size;
let steps;
let min;
let max = 0;



let setValues = () =>
{
    arrayType = document.querySelector("input[name='array-type']:checked").id;
    dataType = document.querySelector("input[name='data-type']:checked").id;

    size = parseInt(sizeElement.value);
    steps = parseInt(stepsElement.value);
    min = parseInt(minRangeElement.value);
    if (maxRangeElement.value == null) max = (min + 2);
    else max = maxRangeElement.value;
}

function generateArray()
{
    setValues();

    let output = dataType + "[] = { ";

    for (let i = 0; i < size; i++)
    {
        let increment;
        
        if (arrayType === "linear") increment = (i * steps + min);
        if (arrayType === "random")
        {
            increment = parseInt((Math.random() * (max - min) + min));
        }

        output += increment;

        if (i < size - 1) output += ", ";
    }

    outputElement.innerHTML = output + " };";
}

generateArray();