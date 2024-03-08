// Función para expandir imagen en la galería - Página Dragon Ball.

function expandirImagen(imagen) {
    // Remover la clase 'expandida' de todas las imágenes
    const imagenes = document.querySelectorAll('.item_imagen');
    imagenes.forEach(img => img.classList.remove('expandida'));
  
    // Agregar la clase 'expandida' a la imagen seleccionada
    imagen.classList.add('expandida');
  
    // Calcula el desplazamiento horizontal necesario para que la imagen esté completamente visible en la galería
    var desplazamiento = imagen.offsetLeft - (document.querySelector('.scroll-container').offsetWidth - imagen.offsetWidth) / 2;
    
    // Aplica el desplazamiento a la galería
    document.querySelector('.scroll-container').scrollLeft = desplazamiento;
  }
