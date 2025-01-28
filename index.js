
function openForm(){
    document.getElementById("form").style.display = "block"
}

function closeForm(){
    document.getElementById("form").style.display = "none"
}

function height(){
    let height = document.getElementById("height").value;
    document.getElementById("box").style.height = height;
}


function color(){
    let color = document.getElementById("color").value;
    document.getElementById("box").style.backgroundColor = color;
}

function text(){
    let text = document.getElementById("text").value;
    document.getElementById("box").textContent = text;
}

function font(){
    let size = document.getElementById("font-size").value;
    document.getElementById("box").style.fontSize = size;
}

function weight(){
    let weight = document.getElementById("font-weight").value;
    document.getElementById("box").style.fontWeight = weight;
}

function textcolor(){
    let textcolor = document.getElementById("text-color").value;
    document.getElementById("box").style.color = textcolor;
}