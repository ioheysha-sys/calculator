let btns = document.querySelectorAll('.btns')

// console.log(btns)

let display = document.getElementById('display')

// console.log(display)

btns.forEach( btn=>{
    btn.addEventListener('click' , ()=>{
        display.value += btn.value;
    })
})

let equal = ()=> display.value = eval(display.value)

let allClear = ()=> display.value=''

let sq =() =>display.value=display.value**2

let del = () => display.value = display.value.slice(0,-1)