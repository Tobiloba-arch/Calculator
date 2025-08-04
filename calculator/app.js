const display = document.querySelector("#display");

    console.log(display)

    document.querySelectorAll("input[type=button]").forEach((btn)=> {
        btn.addEventListener("click", () =>{
            if(btn.value === '=') {
                display.value = eval(display.value);
            }
            else if(btn.value === "AC"){
                display.value = ""
            }
            else if (btn.value === "DE" ){
                display.value = display.value.slice(0, -1)
                let x = display.value.substring(0, display.value.length - 1);
                display.value  = x;
            } else{
                display.value += btn.value;
            }
        });
    });
