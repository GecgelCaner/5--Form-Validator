const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');



function error(input , message){
    input.className = 'form-control is-invalid' ;
    const div =input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}
function success(input){
    input.className = 'form-control is-valid' ;
    
}
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


form.addEventListener('submit',function(e){
    e.preventDefault();
    
    if (username.value === '' ) {
        error(username, 'Enter Username');
    }else{
        success(username);
    }
    if (email.value === '' ) {
        error(email, 'Enter Email');
    }else if(!validateEmail(email.value)){
        error(email,'Please enter the correct email address')
    }
    else{
        success(email);
    }
    if (password.value === '' ) {
        error(password , ' Enter Password');
    }else{
        success(password);
    }
    if (repassword.value === '' ) {
        error(repassword , 'Enter Re-Password');
    }else{
        success(repassword);
    }
});