let contLogueos = 0;

function login(){
    var form = "login";
    var email = document.forms["login"]["email"].value;
    var contrasena = document.forms["login"]["password"].value;
    var contrasenaEM = document.forms["login"]["passwordEM"].value;
    let emailCorrecto = "ejemplo@gmail.com";
    let contrasenaCorrecta = "ejemplo1";
    let contrasenaEMCorrecta = "ejemplo1";

    console.log(email);
    console.log(contrasena);
    console.log(contrasenaEM);

    if (contLogueos == 5){
        alert ("Ha ingresado sus datos de manera incorrecta 5 veces. Le hemos enviado un mail para recuperar su cuenta.")
        resetForm(form);
        contLogueos = 0;
        return false;
    }

    if ((email == emailCorrecto && contrasena == contrasenaCorrecta) || (email == emailCorrecto && contrasena != contrasenaCorrecta && contrasenaEM == contrasenaEMCorrecta)){
        alert("Se ha logueado correctamente");
        resetForm(form);
        return true;
    }

    else {
        alert("Los datos ingresados son incorrectos");
        contLogueos= contLogueos+1;
        console.log(contLogueos);
        return false;
    }
}

function emergenciaPass(){
    document.getElementById('emergencia').style.display = 'block';
}

function registro(){
    var form = "signup";
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    var alphanumeric = /^[A-Za-z0-9]+$/;
    var emailregEx = /[A-Za-z0-9._-]+@[A-Za-z0-9.-]+.[A-Za-z]+$/;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("identificacion").value;
    let domicilio = document.getElementById("domicilio").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let empassword = document.getElementById("passwordEM").value;

    // Check si el nombre es válido
    if(!letters.test(nombre) || (nombre.length<3 || nombre.length>15)){
        alert("El nombre solo puede tener letras, tiene que ser mayor que 3 y menor que 15 caracteres.");
        return false;
    }

    // Check si el apellido es válido
    if(!letters.test(apellido) || (apellido.length<3 || apellido.length>15)){
        alert("El apellido solo puede tener letras, tiene que ser mayor que 3 y menor que 15 caracteres.");
        return false;
    }

    // Check si el DNI es válido
    if(letters.test(dni) || dni.length!=8){
        alert("El DNI solo puede tener números y debe tener 8 caracteres.");
        return false;
    }

    // Check si el domicilio es válido
    if((domicilio.length<8 || domicilio.length>30)){
        alert("El domicilio debe ser alfanumérico y tener entre 8 y 30 caracteres.");
        return false;
    }

    if(email.length==0){
        alert("El email no puede quedar vacío");
        return false;
    }

    // Check si el domicilio es válido
    if(!emailregEx.test(email)){
        alert("El email no es válido");
        return false;
    }

    // Check si la contraseña es válida
    if(!alphanumeric.test(password) || password.length<8){
        alert("La contraseña debe ser alfanumérica y tener mínimo 8 caracteres.");
        return false;
    }

    // Check si la contraseña de emergencia
    if(!alphanumeric.test(empassword) || empassword.length<8){
        alert("La contraseña de emergencia debe ser alfanumérica y tener mínimo 8 caracteres.");
        return false;
    }

    if (!document.getElementById("tipo_metodopagoMP").checked && !document.getElementById("tipo_metodopagoCB").checked && !document.getElementById("tipo_metodopagoTdC").checked){
        alert("Debe registrar al menos 1 método de pago");
        return false;
    }

    if (document.getElementById("tipo_metodopagoMP").checked){
        var CVU = document.getElementById("CVU").value;
        var Alias_MP = document.getElementById("Alias_MP").value;
        if (CVU.length==0 && Alias_MP.length==0){
            alert("Tiene que completar al menos uno de los valores de 'Método de Pago Mercado Pago'");
            return false;
        }
        if (letters.test(CVU)){
            alert("El CVU sólo puede contener números.");
            return false;
        }
    }

    if (document.getElementById("tipo_metodopagoCB").checked){
        var CBU = document.getElementById("CBU").value;
        var Alias_CB = document.getElementById("Alias_CB").value;
        if(CBU.length==0 && Alias_CB.length==0){
            alert("Tiene que completar al menos uno de los valores de 'Método de Pago Cuenta Bancaria'");
            return false;
        }
        if (letters.test(CBU)){
            alert("El CBU sólo puede contener números.");
            return false;
        }
    }

    if (document.getElementById("tipo_metodopagoTdC").checked){
        var nombreTarjeta = document.getElementById("nombreTarjeta").value;
        var numeroTarjeta = document.getElementById("numeroTarjeta").value;
        var fechavencimiento = document.getElementById("fechavencimiento").value;
        var codigo = document.getElementById("codigo").value;

        if(nombreTarjeta.length==0 || numeroTarjeta.length==0 || fechavencimiento.length==0 || codigo.length==0){
            alert("Tiene que completar los valores de 'Método de Pago Tarjeta de Crédito'");
            return false;
        }

        if(numbers.test(nombreTarjeta) || letters.test(numeroTarjeta) || letters.test(codigo)){
            alert("Los datos ingresados no son válidos, por favor verifique los datos de su tarjeta.");
            return false;
        }
    }

    if (!document.getElementById("VIP1").checked && !document.getElementById("VIP2").checked){
        alert("Por favor seleccione si desea ser VIP o no.");
        return false;
    }

    alert("Se ha registrado de manera exitosa");
    resetForm(form);
    return true;
}

function resetForm(form){
    document.getElementById(form).reset();
    return;
}
