const grid = new gridjs.Grid({
    columns: ['idproducto','nombre','descripcion','urlpremio'],
    server: {
      url: 'https://ornatebitesizedcore.revis8466.repl.co/listadepremios',
      then: data => data.map(producto =>
        [producto.idproducto, producto.nombre, producto.descripcion, producto.urlpremio])
    },
  style: {
    td: {
      border: '1px solid #ccc'
    },
    table: {
      'background-color':"white",
      'font-size': '15px'
    }
  }

  
  }).render(document.getElementById("wrapper1"));