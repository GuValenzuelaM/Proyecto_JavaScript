const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//EVENTO + PREVENIR COMPORTAMIENTO ESTANDAR DE FORMULARIO + FUNCIÓN VALIDAR INPUTS
form.addEventListener('submit',e => {
    e.preventDefault();
    validateinputs();
});

//CREACIÓN FUNCÓN ERROR
const setError = (element, message) =>{
    const inputControl = element.parentElemnet;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText =message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

//CREACIÓN FUNCÓN ÉXITO
const setSuccess = element =>{
    const inputControl = element.parentElemnet;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText ='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

//FUNCIÓN VALIDAR EMAIL
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//CREACIÓN DE LA FUNCIÓN VALIDAR INPUTS
const validateinputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(firstnameValue === ''){
        setError(firstname,'Por favor ingresa tu nombre');
    } else{
        setSuccess(firstname);
    }

    if(lasttnameValue === ''){
        setError(lastname,'Por favor ingresa tu apellido');
    } else{
        setSuccess(lastname);
    }

    //VALIDACIÓN DE EMAIL CON FUNCIÓN VALIDAR EMAIL
    if(emailValue === ''){
        setError(email,'Por favor ingresar un email válido');
    } else if(!isValidEmail(emailValue)){
        setError(email,'Por favor ingresar un email válido');
    } else {
        setSuccess(email);
    }

    if(password === ''){
        setError(password,'Por favor ingrese una contraseña');
    } else{
        setSuccess(password);
    }

    if(password2 === ''){
        setError(password2,'Por favor confirme su contraseña');
    } else if (password2Value !== passwordValue){
        setError(password2,'Las contraseñas no coinciden');
    } else{
        setSuccess(password2);
    }
}
