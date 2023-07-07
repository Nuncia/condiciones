function contrasenya() {
    let elemento1 = document.querySelector('.selector_uno').value
    let elemento2 = document.querySelector('.selector_dos').value
    let elemento3 = document.querySelector('.selector_tres').value
   
    let contrasenya = elemento1 + elemento2 + elemento3
    if(elemento1 !== 'Selecciona un número' && elemento2 !== 'Selecciona un número' && elemento3 !== 'Selecciona un número'){
        if (contrasenya == 911){
            alert('Password 1 correcto')
        }
        else if ( contrasenya == 714){
            alert('Password 2 correcto')
        }
        else{
            alert('Password incorrecto')
        }
    } 
    else{
        alert('Ingresa la contraseña de 3 dígitos')
    }   
}