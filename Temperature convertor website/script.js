let convertbtn = document.getElementById("convert-btn");
let select_degree = document.getElementById("select-degree");
let select_convert = document.getElementById("select-convert");
let outputval = document.getElementById("output-value")
let input_degree = document.getElementById("input-degree");

function handleclick() {
    let degree = select_degree.value;
    let convert = select_convert.value;
    let inp = input_degree.value;
    let result = 0;
    if(inp==="")
    {
        inp = 0;
    }
    else{
        inp = parseInt(inp);
    }
    if( degree===convert )
    {
        result = inp;
    }
    else if( degree==="C" && convert==="F" )
    {
        result = ( inp * (9/5)) + 32 ;
    }
    else if( degree==="F" && convert==="C" )
    {
        result = (inp-32)*(5/9);
    }
    else if( degree==="C" && convert==="K" )
    {
        result = inp + 273.15;
    }
    else if( degree==="K" && convert==="C" )
    {
        result = inp - 273.15 ;
    }
    else if( degree==="K" && convert==="F" )
    {
        result = (inp - 273.15) * (9/5) + 32;
    }
    else if( degree==="F" && convert==="K" )
    {
        result = (inp - 32) * (5/9) + 273.15;
    }
    
    outputval.innerHTML = `${result.toFixed()} &deg;${convert}`
}

