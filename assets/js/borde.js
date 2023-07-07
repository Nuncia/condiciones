function cambioColorBorde() {
    let imagen = document.querySelector('#imagen_conejo')
    // imagen.style.border = '10px solid red'
    if(imagen.style.borderColor !== 'red'){
        imagen.style.border = '10px solid red'
    }
    else{
        imagen.style.border = '0px solid black'
    }
    
}