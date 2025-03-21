
function convert()
{
    const cmVal = Number(document.getElementById("input").value)
    const inchVal = cmVal / 2.54;
    document.getElementById('result') .innerHTML = inchVal.toFixed(2) + "inches";
}

function convert1()
{
    const celcius = Number(document.getElementById("input1").value)
    const fahrenheit = (celcius * 9/5) + 32;
    document.getElementById('result1').innerHTML = fahrenheit.toFixed(2) + "in Fahrenheit";
}
