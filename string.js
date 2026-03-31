const client = require("./client");

async function setValue() {
  //await client.set("user:1", "John Doe");
  await client.expire("user:1", 10); // Set expiration time to 10 seconds
  const result = await client.get("user:1");
  console.log(result);

}
setValue();