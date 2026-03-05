let display = document.getElementById("display");

function append(value){
    display.value += value;
}

function allClear(){
    display.value = "";
}

function del(){
    display.value = display.value.slice(0,-1);
}

function equal(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}

function square(){
    if(display.value !== ""){
        display.value = eval(display.value) ** 2;
    }
}

function toggleTheme(){
    document.body.classList.toggle("light");

    let icon = document.getElementById("toggleIcon");

    if(document.body.classList.contains("light")){
        icon.textContent = "☀️";
    }else{
        icon.textContent = "🌙";
    }
}
