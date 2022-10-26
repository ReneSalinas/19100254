const grid = new gridjs.Grid({
    columns: ['IdEmpleado', 'Nombre', 'Apellido'],
    server: {
        url: 'http://localhost:8085/',
        then: data => data.map(empleado =>
            [empleado.id, empleado.nombre, empleado.apellido]
        )
    }
}).render(document.getElementById("wrapper"));

// const grid = new gridjs.Grid({
//     columns: ['Title', 'Director', 'Producer'],
//     server: {
//       url: 'https://swapi.dev/api/films/',
//       then: data => data.results.map(movie => 
//         [movie.title, movie.director, movie.producer]
//       )
//     } 
//   }).render(document.getElementById("wrapper"));