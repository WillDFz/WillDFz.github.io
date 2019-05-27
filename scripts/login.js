
function validarPassReset(){
    let checkBox = document.getElementById('passReset').value;
    let passTag = document.getElementById('inputPassword');
    if(checkBox.checked == true){
        
        passTag.removeAttribute('required');
        window.location.href = "../reset-password.html";
        console.log("a");

    }else{
        console.log("b");
        passTag.setAttribute('required', true);
        window.location.href = "../user.html";
    }

}