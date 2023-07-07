function cambioColorBorde() {
    let imagen = document.querySelector('#imagen_conejo')
    // imagen.style.border = '10px solid red'
    if(imagen.style.borderColor !== 'red'){
        imagen.style.border = '2px solid red'
    }
    else{
        imagen.style.border = '0px solid black'
    }
    
}

function contrasenya() {
    let elemento1 = document.querySelector('.selector_uno').value
    let elemento2 = document.querySelector('.selector_dos').value
    let elemento3 = document.querySelector('.selector_tres').value
    const texto = document.querySelector('p')
   
    let contrasenya = elemento1 + elemento2 + elemento3
    if(elemento1 !== 'Selecciona un número' && elemento2 !== 'Selecciona un número' && elemento3 !== 'Selecciona un número'){
        if (contrasenya == 911){
            texto.innerHTML = 'Password 1 correcto'
        }
        else if ( contrasenya == 714){
            texto.innerHTML = 'Password 2 correcto'
        }
        else{
            texto.innerHTML = 'Password incorrecto'
        }
    } 
    else{
        alert('Ingresa la contraseña de 3 dígitos')
    }   
}

function verificarStickers() {
    let elemento1 = document.querySelector('.input__uno').value
    let elemento2 = document.querySelector('.input__dos').value
    let elemento3 = document.querySelector('.input__tres').value
    let suma = Number(elemento1) + Number(elemento2) + Number(elemento3)
    let parrafo = document.querySelector('p')
    if(suma > 10) {
     parrafo.innerHTML = 'Llevas demasiados stickers'
 
    }
    else if(suma == 1) {
     parrafo.innerHTML = 'LLevas ' + suma + ' sticker'
    }
    else if(suma <= 0){
        alert('Ingresa tus stickers')
    }
    else
    {
        parrafo.innerHTML = 'LLevas ' + suma + ' stickers'
    }
     
 }
