let display = document.getElementById("display");
let themeBtn = document.getElementById("themeBtn");

// Button Click Handling (IMPORTANT FIX)
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {

        let value = button.getAttribute("data-value");
        let action = button.getAttribute("data-action");

        if(value){
            display.value += value;
        }

        if(action === "clear"){
            display.value = "";
        }

        if(action === "delete"){
            display.value = display.value.slice(0,-1);
        }

        if(action === "equal"){
            try{
                display.value = Function("return " + display.value)();
            }catch{
                display.value = "Error";
            }
        }

        if(action === "square"){
            if(display.value !== ""){
                display.value = Math.pow(Number(display.value), 2);
            }
        }

    });
});

// Theme Toggle
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    let icon = document.getElementById("toggleIcon");

    if(document.body.classList.contains("light")){
        icon.textContent = "☀️";
    }else{
        icon.textContent = "🌙";
    }
});
