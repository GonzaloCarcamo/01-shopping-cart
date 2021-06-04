const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');


cargarEventsListeners();
function cargarEventsListeners() {
        // Cuando agregas un curso presionando "Agregar al Carrito"
        listaCursos.addEventListener('click', agregarCurso);
}



// Funciones
function agregarCurso(e){
        e.preventDefault();

        if( e.target.classList.contains('agregar-carrito') ){
                const cursoSeleccionado = e.target.parentElement.parentElement
                
                leerDatosCurso( cursoSeleccionado );
        }
}

// Leer contenido HTML
function leerDatosCurso(curso){
        // console.log(curso);
}

// Crear objeto con el contenido del curso actual
const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
}