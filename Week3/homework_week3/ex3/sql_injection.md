# **SQL Injections**

function getPopulation(Country, name, code, cb) {
// assuming that connection to the database is established and stored as conn
conn.query(
`SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
function(err, result) {
if (err) cb(err);
if (result.length == 0) cb(new Error("Not found"));
cb(null, result[0].name);
}
);
}

1. Give an example of a value that can be passed as name and code that would take advantage of SQL-injection and (fetch all the records in the database)

**You can place in both parameters the following injections to retreive all data:**
**`AnyNameYouWant OR 1=1; show tables;` this will show all records in the database.**

2. Rewrite the function so that it is no longer vulnerable to SQL injection

function getPopulation(Country, name, code, cb) {
// assuming that connection to the database is established and stored as conn
conn.query(
`SELECT Population FROM` + conn.scape(Country) `WHERE Name =`+ conn.scape(name) `and code =` + conn.scape(code)`,
function(err, result) {
if (err) cb(err);
if (result.length == 0) cb(new Error("Not found"));
cb(null, result[0].name);
}
);
}

or you can also try
function getPopulation(Country, name, code, cb) {
// assuming that connection to the database is established and stored as conn
conn.query(
`SELECT Population FROM ${Country} WHERE Name = ? and code = ?`,
function(err, result) {
if (err) cb(err);
if (result.length == 0) cb(new Error("Not found"));
cb(null, result[0].name);
}
);
}
