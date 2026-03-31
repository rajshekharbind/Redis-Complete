
const client = require("./client");
async function geospatialOperations() {
  const res1 = await client.geoadd('bikes:rentable', -122.27652, 37.805186, 'station:1');
console.log(res1)  // 1

const res2 = await client.geoadd('bikes:rentable', -122.2674626, 37.8062344, 'station:2');
console.log(res2)  // 1

const res3 = await client.geoadd('bikes:rentable', -122.2469854, 37.8104049, 'station:3');
console.log(res3)  // 1


const res4 = await client.geosearch(
  'bikes:rentable', {
    longitude: -122.27652,
    latitude: 37.805186,
  },
  { radius: 5,
    unit: 'km'
  }
);
console.log(res4)

}
geospatialOperations();