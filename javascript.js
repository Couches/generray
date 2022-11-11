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
    steps = parseFloat(stepsElement.value);
    min = parseFloat(minRangeElement.value);
    if (maxRangeElement.value == null) max = (min + 2);
    else max = maxRangeElement.value;
}


function randomChar()
{
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function generateArray()
{
    setValues();

    let output = dataType + "[] = { ";

    for (let i = 0; i < size; i++)
    {
        if (dataType == "int" || dataType == "double")
        {
            let increment = 0.0;
        
            if (arrayType === "linear")
            {
                increment = (i * steps + min);
            }
    
            if (arrayType === "random")
            {
                increment = ((Math.random() * (max - min) + min));
            }
    
            increment = Math.round(increment * 100) / 100;
            if (dataType == "int") increment = parseInt(increment);
    
            output += increment;
        }
        else if (dataType == "String")
        {
            let result = "";
            let length = Math.random() * (max - min) + min;

            for (let j = 0; j < length; j++ ) 
            {
                result += randomChar();
            }

            output += '"' + result + '"';
        }
        else
        {
            output += "'" + randomChar() + "'";
        }

        if (i < size - 1) output += ", ";
    }

    outputElement.innerHTML = output + " };";
}


generateArray();