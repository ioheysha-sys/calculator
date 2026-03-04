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

/* Toggle Theme */
function toggleTheme(){
    if(document.body.classList.contains("light")){
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
}
