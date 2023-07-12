function cambioColorBorde() {
    let imagen = document.querySelector('#imagen_conejo')
    if(imagen.style.borderColor !== 'red'){
        imagen.style.border = '2px solid red'
    }
    else{
        imagen.style.border = '0px solid'
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
            texto.innerHTML = 'Password 1 es correcto'
        }
        else if ( contrasenya == 714){
            texto.innerHTML = 'Password 2 es correcto'
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
    let elemento1 = document.querySelector('.input__uno')
    let elemento2 = document.querySelector('.input__dos')
    let elemento3 = document.querySelector('.input__tres')
    let parrafo = document.querySelector('p')
    if(elemento1.value < 0 || elemento2.value < 0 || elemento3.value < 0){
        alert('Los números deben ser iguales o mayores que cero')
        parrafo.innerHTML = 'Selecciona tus stickers'
    }
    else{
        let suma = Number(elemento1.value) + Number(elemento2.value) + Number(elemento3.value)
        if(suma > 10) {
         parrafo.innerHTML = 'Llevas demasiados stickers'
        }
        else if(suma === 1) {
         parrafo.innerHTML = 'LLevas ' + suma + ' sticker'
        }
        else if(suma <= 0){
            alert('Ingresa tus stickers')
            parrafo.innerHTML = 'Selecciona tus stickers'
        }
        else
        {
            parrafo.innerHTML = 'LLevas ' + suma + ' stickers'
        }
    } 
    elemento1.value = ''
    elemento2.value = ''
    elemento3.value = ''
    // parrafo.innerHTML = 'Selecciona tus stickers'
 }
