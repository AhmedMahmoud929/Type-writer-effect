let p = document.getElementById("type");
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");

let text = inp.value;



let i = 0;

btn.addEventListener("click", function(eo) {
    eo.preventDefault();

    if (inp.value != "") {
        let typeWriter = setInterval(function() {
            p.innerHTML += inp.value[i];
            i++;
            if (i > inp.value.length - 1) {
                clearInterval(typeWriter)
                setInterval(function() {
                    p.innerHTML += '.';
                }, 1000)
                setTimeout(function() {
                    location.reload()
                }, 3000)
            }
        }, 500)

    }

})