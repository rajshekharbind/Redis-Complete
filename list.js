const client = require("./client");

// Add list operations here all the list operations you want to test
async function listOperations() {
  // Example: Adding elements to a list
  await client.rpush("mylist", "element1");
  await client.rpush("mylist", "element2");
  await client.rpush("mylist", "element3");
  // Example: Retrieving elements from the list
  const listLength = await client.llen("mylist");
  console.log(`List length: ${listLength}`);
  const elements = await client.lrange("mylist", 0, -1);
  console.log("List elements:", elements);
  
  // lpop: removes and returns the first element
  const firstElement = await client.lpop("mylist");
  console.log(`Popped from left: ${firstElement}`);
  
  // rpop: removes and returns the last element
  const lastElement = await client.rpop("mylist");
  console.log(`Popped from right: ${lastElement}`);
  
  // lindex: gets element at index
  const elementAtIndex = await client.lindex("mylist", 0);
  console.log(`Element at index 0: ${elementAtIndex}`);
  
  // lset: sets element at index
  await client.lset("mylist", 0, "modified_element");
  console.log("Set element at index 0 to 'modified_element'");
  
  // lrem: removes elements from list
  await client.rpush("mylist", "duplicate", "duplicate");
  const removedCount = await client.lrem("mylist", 0, "duplicate");
  console.log(`Removed ${removedCount} occurrences of 'duplicate'`);
  
  // Display final list
  const finalElements = await client.lrange("mylist", 0, -1);
  console.log("Final list elements:", finalElements);

  const res1 = await client.lpush('bikes:repairs', 'bike:1');
  console.log(res1);  // 1

  const res2 = await client.lpush('bikes:repairs', 'bike:2');
  console.log(res2);  // 2

  const res3 = await client.rpop('bikes:repairs');
  console.log(res3);  // bike:2

  const res4 = await client.rpop('bikes:repairs');
  console.log(res4);  // bike:1
}

listOperations();
