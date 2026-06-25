const mysql = require('mysql2/promise');
const fs = require('fs');

async function generateDbView() {
  try {
    const con = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '230706',
      database: 'ecommerce_db',
      port: 3306
    });

    const [rows] = await con.query('SELECT * FROM user');
    
    let rowsHtml = '';
    for(const user of rows) {
      rowsHtml += `
        <tr>
          <td>${user.id}</td>
          <td>${user.username}</td>
          <td class="password-col">${user.password}</td>
        </tr>
      `;
    }

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Database View: user table</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa; padding: 30px; }
            .container { max-width: 900px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            h2 { color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;}
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { padding: 12px 15px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background-color: #007bff; color: white; }
            tr:hover { background-color: #f1f1f1; }
            .password-col { font-family: monospace; color: #d63384; word-break: break-all;}
            .db-info { margin-bottom: 20px; font-size: 14px; color: #555; }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>MySQL Database: ecommerce_db</h2>
            <div class="db-info">
                <strong>Table:</strong> user <br>
                <strong>Records found:</strong> ${rows.length}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>password (Hashed with bcrypt)</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
            </table>
        </div>
    </body>
    </html>
    `;

    fs.writeFileSync('d:\\btapnhomsecurity\\view-db.html', htmlContent);
    console.log('Generated view-db.html');
    await con.end();
  } catch(e) {
    console.log('ERROR: ' + e.message);
  }
}

generateDbView();
