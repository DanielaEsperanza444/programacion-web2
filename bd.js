const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'daniela',
  password: 'daniela',
  database: 'libros'
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión:', err);
    return;
  }
  console.log('Conexión a la base de datos MySQL exitosa');

  // Realizar la consulta SELECT * FROM
  connection.query('SELECT * FROM clientes', (error, results, fields) => {
    if (error) {
      console.error('Error en la consulta:', error);
      return;
    }
    console.log('Resultados de la consulta:');
    console.log(results); // Muestra los resultados en la consola

    // Puedes procesar los resultados aquí
    // Por ejemplo, recorrer los resultados y hacer algo con ellos
    results.forEach((row) => {
      console.log(row); // Muestra cada fila de resultados
      // Puedes hacer cualquier operación con los datos de cada fila aquí
    });
  });

  // Cierra la conexión al finalizar las operaciones
  connection.end((err) => {
    if (err) {
      console.error('Error al cerrar la conexión:', err);
      return;
    }
    console.log('Conexión cerrada exitosamente');
  });
});