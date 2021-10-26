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
      Name: "Managua",
    };
    const city = await cities.findOne(query);
    console.log({ city });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
  try {
    await client.connect();
    const database = client.db("world");
    const cities = database.collection("city");
    // Query for a movie that has the title 'Back to the Future'
    const query = {
      CountryCode: "NIC",
    };
    const city = await cities.findOne(query);
    console.log({ city });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
