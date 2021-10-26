import { createConnection } from "mysql";
import { promisify } from "util";

const connection = createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "Hyfpassword01!",
  database: "Transactions",
});
const excQuery = promisify(connection.query.bind(connection));

async function performSqlTransaction() {
  const startTransaction = `START transaction;`;
  const endTransaction = `commit;`;
  const payMoney = `INSERT INTO account_change VALUES (3, 101, 1000, '2021-10-26 09:30:10', "Payment to my friend 102" );`;
  const payerAccount = `UPDATE account SET balance = balance - 1000 WHERE account_number = 101; `;
  const beneficiaryAccount = `UPDATE account SET balance = balance + 1000 WHERE account_number = 102;`;
  const mistake = `ROLLBACK`;
  connection.connect();
  try {
    await excQuery(startTransaction);
    await excQuery(payMoney);
    await excQuery(payerAccount);
    await excQuery(beneficiaryAccount);
    await excQuery(endTransaction);
  } catch (error) {
    console.error(error);
    await excQuery(mistake);
    connection.end();
  }
  connection.end();
}
performSqlTransaction();
