
//CAPTURA INFORMACIÒN DE TODO EL FORMULARIO

let arr_usuarios = [];

let btn_registro= document.getElementById("btn_registro");
let btn_login= document.getElementById("btn_login");

//REGISTRO
btn_registro.addEventListener("click", function(e){

    e.preventDefault();

    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    let usuario={email:email.value, password:pass.value};

    arr_usuarios.push(usuario);
    let arreglo_JSON = JSON.stringify(arr_usuarios);
    localStorage.setItem("arr_usuarios", arreglo_JSON);

    //RECUPERANDO USUARIO
    let recuperando_usuarios =localStorage.getItem("arr_usuarios");
    recuperando_usuarios= JSON.parse(recuperando_usuarios);

    console.log(recuperando_usuarios);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario registrado correctamente',
        text: 'Ingresa y compra con nosotros',
        showConfirmButton: false,
        timer: 2500,
        hideClass:{
            popup: "animate__animated animate__fadeOut"    
        }
      })
})

//LOGIN
btn_login.addEventListener("click", function(e){

    e.preventDefault();

    let arr_usuarios = localStorage.getItem("arr_usuarios");
    let arreglo_JSON = JSON.parse(arr_usuarios);

    arr_usuarios= arreglo_JSON;

    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    for(let usuario of arr_usuarios){
        if(email.value == usuario.email && pass.value ==usuario.password){
            
            window.location.href = '../index.html';
            break;  
        }
            else{
                console.log("CREDENCIALES INVALIDAS");
                
                Swal.fire({
                    icon: 'error',
                    title: 'Credenciales invalidas',
                    text: 'Por favor registrate y vuelve a ingresar',
                    showClass:{
                        popup: "animate__animated animate__shakeX"
                    },
                    hideClass:{
                        popup: "animate__animated animate__bounceOut"    
                    }
                    })
            }
    }

});




//FETCH CLIMA

/*
function mostrar_posicion(posicion){
    let lat =(posicion.coords.latitude);
    let long =(posicion.coords.longitude);
    let key ="848f5ebe6dc04165521951ca87d650dd"


    fetch ('https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}')
    .then(response => response.JSON())
    .then(data => {document.body.innerHTML =   `<p>${data.name}</p>
                                                <p>Temperatura:${data.name}</p>
                                                <p>Clima:${data.wather[0].description}</p>`

    })
}


navigator.geolocation.getCurrentPosition(mostrar_posicion);
*/