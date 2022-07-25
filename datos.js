

function guardar(){
    /*Captura de datos escrito en los inputs*/ 
    var nombre = document.getElementById('nom').value;
    var apellido = document.getElementById('ape').value;
    var telefono = document.getElementById('tel').value;
    let cliente = {nombre, apellido, telefono};
    /*Guardando los datos en el LocalStorage*/
    localStorage.setItem(nombre, JSON.stringify(cliente));
    console.log('Usuario agregado')

    /*Limpiando los campos o inputs*/
    document.getElementById('nom').value = "";
    document.getElementById('ape').value = "";
    document.getElementById('tel').value = "";
    
}     
               
function comparar(){

    var nombre = document.getElementById('nom').value;
    var apellido = document.getElementById('ape').value;
    var telefono = document.getElementById('tel').value;
    var texto = document.getElementById('submit_text');


    let cliente = localStorage.getItem(nombre);
    let data = JSON.parse(cliente);
    console.log(data);

    if(cliente == null){
        texto.innerHTML = 'Usuario invalido';
    }else if(nombre == data.nombre && apellido == data.apellido && telefono == data.telefono){
        texto.innerHTML = 'Logueado';
    }else{
        texto.innerHTML = 'Datos no coinsiden';
    }
}        