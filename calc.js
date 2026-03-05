let expression = document.getElementById("expression");
let result = document.getElementById("result");
let current = "";

document.querySelectorAll(".btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{

        let value = btn.getAttribute("data-value");
        let action = btn.getAttribute("data-action");

        /* ADD NUMBER OR OPERATOR */
        if(value){
            current += value;
            updateDisplay();
        }

        /* AC CLEAR */
        if(action === "clear"){
            current = "";
            expression.textContent = "";
            result.textContent = "0";
        }

        /* DELETE */
        if(action === "delete"){
            current = current.slice(0,-1);
            updateDisplay();
        }

        /* EQUAL */
        if(action === "equal"){
            calculateFinal();
        }

    });
});

/* LIVE UPDATE FUNCTION */
function updateDisplay(){
    expression.textContent = current;

    try{
        if(current !== ""){
            result.textContent = eval(current);
        } else {
            result.textContent = "0";
        }
    }catch{
        result.textContent = "";
    }
}

/* FINAL CALCULATION */
function calculateFinal(){
    try{
        let calc = eval(current);
        result.textContent = calc;
        current = calc.toString();
        expression.textContent = current;
    }catch{
        result.textContent = "Error";
    }
}

/* THEME TOGGLE */
let toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});
