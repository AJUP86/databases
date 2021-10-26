import { createConnection } from "mysql";

const connection = createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "Hyfpassword01!",
  database: "Transactions",
});

async function insertValues() {
  const accountQuery = `INSERT INTO account VALUES ?`;
  const accountValues = [
    [101, 3576.46],
    [102, 432.32],
  ];
  const accountChangesQuery = `INSERT INTO account_change VALUES ? `;
  const accountChangesValues = [
    [1, 101, 1000.0, "2021-10-25 22:40:35", "Energy payment"],
    [2, 102, 50.0, "2021-10-10 11:30:03", "restaurant bill"],
  ];
  connection.connect();
  try {
    await Promise.all[
      (connection.query(accountQuery, [accountValues], (error, results) => {
        error ? error : console.log(JSON.stringify(results));
      }),
      connection.query(
        accountChangesQuery,
        [accountChangesValues],
        (error, results) => {
          error ? error : console.log(JSON.stringify(results));
        }
      ))
    ];
  } catch (error) {
    console.error(error);
  }
  connection.end();
}
insertValues();
