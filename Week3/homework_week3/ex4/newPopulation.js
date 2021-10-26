const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://AJUP86:ORdajela86!@dbcontainer.wuyph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("world");
    const cities = database.collection("city");
    // Query for a movie that has the title 'Back to the Future'
    const query = {
      ID: 1001,
      Name: "Managua",
      ContryCode: "NIC",
      District: "Managua",
      Population: 1000000,
    };
    const newValues = { $set: { Population: 2000000 } };
    const city = await cities.updateOne(query, newValues);
    console.log({ city });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
