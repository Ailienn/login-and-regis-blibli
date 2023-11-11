let inputEmail = document.querySelector(".email");
let inputPassword = document.querySelector(".password");
let inputNama = document.querySelector(".text");
let tombol = document.querySelector(".tombol");

tombol.disabled = true;

inputEmail.addEventListener("input", success);
inputPassword.addEventListener("input", success);
inptNama.addEventListener("input", success);

function success(){
    if(inputEmail.value.length >= 10 && inputPassword.value.length >= 8 && inputNama.value.length >= 6){
        tombol.disabled = false;
    }
    else{
        tombol.disabled = true;
    }
}

//toggle password
const password = document.querySelector(".password");
const toggePassword = document.querySelector("#toggle-password")

togglePassword.addEventListener("click", intip);

function intip(){
    //toggle type input
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    //toggle icon
    toggePassword.classList.toggle("eye-slash");
    
}