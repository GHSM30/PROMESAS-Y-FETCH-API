function MyFetchPut () {

    // Definimos un objeto de usuario que será actualizado
    let usuarioActualizado = {
        nombre: 'Aitana',
        edad: 26 // Cambiamos la edad para simular la actualización
    }
    
    // Realizamos una petición HTTP usando el método PUT para actualizar un recurso en la API
    fetch('https://reqres.in/api/users/2', { // La URL apunta a un recurso específico (user 2)
        method: 'PUT', // Usamos el método PUT para actualizar los datos
        body: JSON.stringify(usuarioActualizado), // Convertimos el objeto JavaScript a un formato JSON
        headers: {
            'Content-Type': 'application/json' // Indicamos que el contenido es de tipo JSON
        }
    })
    .then(resp => resp.json()) // Convertimos la respuesta de la API a un formato JSON
    .then(console.log) // Mostramos la respuesta en la consola para verificar que la actualización se realizó correctamente
    .catch(error => { // Manejamos los posibles errores en la petición
        console.log('Error en la petición API PUT');
        console.log(error); // Mostramos el error en la consola
    });

    // Lo que renderizamos en el componente es simplemente una estructura básica
    return (
        <>
            <div>
                <h1>
                    Programa para MyFetchPut
                </h1>
            </div>
        </>
    );
}

export default MyFetchPut;

