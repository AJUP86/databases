import { createConnection } from "mysql";

const connection = createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "Transactions",
});

/*async function createTables() {
  const account = `CREATE TABLE account (account_number INT , balance REAL, PRIMARY KEY(account_number));`;
  const accountChanges = `CREATE TABLE account_change(change_no INT, account_number INT , amount REAL, change_date DATETIME, remark VARCHAR(100), FOREIGN KEY(account_number) REFERENCES account(account_number), PRIMARY KEY (change_no));`;
  connection.connect();
  try {
    await Promise.all[
      (connection.query(account, (error, results) => {
        error ? error : console.log(results[0]);
      }),
      connection.query(accountChanges, (error, results) => {
        error ? error : console.log(results[0]);
      }))
    ];
  } catch (error) {
    console.error(error);
    connection.end();
  }
  connection.end();
}
createTables();*/
async function createTables() {
  const account = `CREATE TABLE account (account_number INT , balance REAL, PRIMARY KEY(account_number));`;
  const accountChanges = `CREATE TABLE account_change(change_no INT, account_number INT , amount REAL, change_date DATETIME, remark VARCHAR(100), FOREIGN KEY(account_number) REFERENCES account(account_number), PRIMARY KEY (change_no));`;
  connection.connect();
  try {
    await Promise.all[
      (connection.query(account, (error, results) => {
        error ? error : console.log(results[0]);
      }),
      connection.query(accountChanges, (error, results) => {
        error ? error : console.log(results[0]);
      }))
    ];
  } catch (error) {
    console.error(error);
    connection.end();
  }
  connection.end();
}
createTables();
