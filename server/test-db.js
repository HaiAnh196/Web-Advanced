const mysql = require('mysql2/promise');

async function test() {
  try {
    const con = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      port: 3306
    });
    console.log('SUCCESS_EMPTY');
    await con.end();
    return;
  } catch(e) {
    console.log('FAIL_EMPTY: ' + e.message);
  }

  try {
    const con = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '230706',
      port: 3306
    });
    console.log('SUCCESS_230706');
    await con.end();
  } catch(e) {
    console.log('FAIL_230706: ' + e.message);
  }
}

test();
