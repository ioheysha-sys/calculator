let expression = document.getElementById("expression");
let result = document.getElementById("result");
let current = "";

/* 🔊 Sound */
let clickSound = new Audio("click.mp3");

document.querySelectorAll(".btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{

        // 🔊 Play sound
        clickSound.currentTime = 0;
        clickSound.play();

        let value = btn.getAttribute("data-value");
        let action = btn.getAttribute("data-action");

        if(value){
            current += value;
            expression.textContent = current;
        }

        if(action === "clear"){
            current = "";
            expression.textContent = "";
            result.textContent = "0";
        }

        if(action === "delete"){
            current = current.slice(0,-1);
            expression.textContent = current;
        }

        if(action === "equal"){
            try{
                let calc = eval(current);
                result.textContent = calc;
                current = calc.toString();
            }catch{
                result.textContent = "Error";
            }
        }
    });
});

/* Theme Toggle */
let toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});
