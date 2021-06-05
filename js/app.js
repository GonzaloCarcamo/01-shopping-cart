const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventsListeners();
function cargarEventsListeners() {
        // Cuando agregas un curso presionando "Agregar al Carrito"
        listaCursos.addEventListener('click', agregarCurso);

        // Elimina cursos del carrito
        carrito.addEventListener('click', eliminarCurso);
}



// Funciones
function agregarCurso(e){
        e.preventDefault();

        if( e.target.classList.contains('agregar-carrito') ){
                const cursoSeleccionado = e.target.parentElement.parentElement
                
                leerDatosCurso( cursoSeleccionado );
        }
}

// Elimina cursos del carrito
function eliminarCurso(e){
        if(e.target.classList.contains('borrar-curso')){
                const cursoId = e.target.getAttribute('data-id');

                // Elimina de arreglo articulosCarrito por id
                articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

                carritoHTML();
        }
}

// Leer contenido HTML
function leerDatosCurso(curso){
        // console.log(curso);

        // Crear objeto con el contenido del curso actual
        const infoCurso = {
                imagen: curso.querySelector('img').src,
                titulo: curso.querySelector('h4').textContent,
                precio: curso.querySelector('.precio span').textContent,
                id: curso.querySelector('a').getAttribute('data-id'),
                cantidad: 1
        }

        const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
        if(existe){
                // Actualizamos la cantidad
                const cursos = articulosCarrito.map( curso => {
                        if( curso.id === infoCurso.id ){
                                curso.cantidad++;
                                return curso; // Retorna el objeto actualizado
                        } else {
                                return curso; // Retorna los elementos no duplicados
                        }
                });
                articulosCarrito = [...cursos];
        } else {
                // Agrega elementos al arreglo del carrito
                articulosCarrito = [...articulosCarrito, infoCurso];
        }

        console.log(articulosCarrito);

        carritoHTML();

}

// Mostrar carrito en HTML
function carritoHTML(){

        // Limpiar HTML
        limpiarHTML();

        // Recorrer carrito y generar HTML

        articulosCarrito.forEach( curso => {
                const { imagen, titulo, precio, cantidad, id} = curso;
                const row = document.createElement('tr')
                row.innerHTML = `
                        <td>
                                <img src="${imagen}" width="100">
                        </td>
                        <td>${titulo}</td>
                        <td>${precio}</td>
                        <td>${cantidad}</td>
                        <td>
                                <a href="#" class="borrar-curso" data-id="${id}" >X</a>
                        </td>
                `;

                // Agrega HTML en tbody
                contenedorCarrito.appendChild(row);
        })
}

// Eliminar cursos de tbody
function limpiarHTML(){
        // contenedorCarrito.innerHTML = '';

        while(contenedorCarrito.firstChild){
                contenedorCarrito.removeChild(contenedorCarrito.firstChild)
        }
}