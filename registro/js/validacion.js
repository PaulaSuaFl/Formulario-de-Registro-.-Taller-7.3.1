document.addEventListener('DOMContentLoaded', ()=>{

})

document.getElementById("regBtn").addEventListener('click',()=>{

let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let email = document.getElementById("email").value;
let contraseña = document.getElementById("password1").value;
let contraseña2 = document.getElementById("password2").value;
let checkbox = document.getElementById("terminos");

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
if (nombre!='' && apellido!='' && email!='' && contraseña!='' && contraseña2!='' &&  contraseña.length >= 6 && contraseña === contraseña2 && checkbox.checked) {
  showAlertSuccess();
} else {
    showAlertError();
}
})
