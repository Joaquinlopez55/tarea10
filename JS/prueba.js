let elementoTitulo = document.querySelector ("#titulo")

function cambiarTexto (texto)
{
    elementoTitulo.innerHTML = texto
}

elementoTitulo.addEventListener ("click", ()=> {
    cambiarTexto ("Hola soy el nuevo titulo")
}
)