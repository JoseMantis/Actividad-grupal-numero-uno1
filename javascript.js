function validar(){
    var formularioOk = true
    
    var rut = $("#rut").val()
    var Lrut = rut.lenght
    if (Lrut < 9 && Lrut > 10){
        formularioOk = false
        alert("El rut no está bien")
        $("#msgRut").show()
    }

    var appaterno = $("#appaterno").val()
    var largoAppaterno = appaterno.lenght 
    if(largoAppaterno < 3 || largoAppaterno > 20){
        formularioOk = false
        alert("El apellido no ")
        $("#msgAppaterno").show()
    }
    
    var edad = $("#edad").val()
    var valorEdad = parseInt(edad)
    if (valorEdad < 18||valorEdad >36){
        formularioOk = false
        alert("Edad fuera de rango escrielo bien por favor muchas gracias.")
    }

    if(formularioOk){
        escribirCarta()
    }
}

function escribirCarta(){
    var rut = $("#rut").val()
    var nombre = $("#nombre").val()
    var carta =  `Rut: ${rut} - Nombre ${nombre}`
    $("#carta").val(carta)
    $("#carta").show()
    $("#formulario").hide()
    $("btnMostrar").show()
}

function mostrar(){
    $("#formulario").show()
    $("#carta").hide()
    $("#btnMostrar").hide()
}

function blurRut(){
    alert("evento Blur en rut")
}

function focusAppaterno(){
    alert("evento Change en appaterno")
}


function changeApmaterno(){
    $("#msgapellido-materno").show()
}

function selectNombre(){
    alert("evento Select en nombre")
}
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" minlength="3" maxlength="20" required=""><br><br>
    
        <label for="rut">RUT (sin puntos ni guion):</label>
        <input type="text" id="rut" name="rut" minlength="9" maxlength="10" required=""><br><br>
    
        <label for="apellido-paterno">Apellido Paterno:</label>
        <input type="text" id="apellido-paterno" name="apellido-paterno" required=""><br><br>
    
        <label for="apellido-materno">Apellido Materno:</label>
        <input type="text" id="apellido-materno" name="apellido-materno" required=""><br><br>
    
        <label for="fecha-nacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fecha-nacimiento" name="fecha-nacimiento" required=""><br><br>
    
        <label for="edad">Edad:</label>
        <input type="number" id="edad" name="edad" min="18" max="99" required=""><br><br>
    
        <label for="genero">Género:</label>
        <select id="genero" name="genero" required="">
            <option value="">Seleccione una opción</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
        </select><br><br>
    
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
    
        <label for="celular">Celular (sin +56 ni guiones):</label>
        <input type="tel" id="celular" name="celular" minlength="9" maxlength="9"><br><br>
    
        <label for="profesion">Profesión:</label>
        <input type="text" id="profesion" name="profesion" required=""><br><br>
    
        <label for="motivacion">Motivación para postular al trabajo:</label>
        <textarea id="motivacion" name="motivacion" rows="5" required=""></textarea><br><br>
    
        <input type="submit" value="Enviar">
    </form>
    <input
</body>
</html>


*/