const mysql = require('mysql2/promise');
async function createDb() {
  try {
    const con = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '230706',
      port: 3306
    });
    await con.query('CREATE DATABASE IF NOT EXISTS ecommerce_db');
    console.log('CREATED DB');
    await con.end();
  } catch(e) {
    console.log('ERROR: ' + e.message);
  }
}
createDb();
