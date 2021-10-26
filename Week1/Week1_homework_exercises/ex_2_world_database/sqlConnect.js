import { createConnection } from "mysql";
export const connection = createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "Hyfpassword01!",
  database: "world",
});
