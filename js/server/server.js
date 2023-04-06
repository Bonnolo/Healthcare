// Require the framework and instantiate it
var mysql = require("mysql");
const fastify = require("fastify")({ logger: true });

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "healthcare",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});

let stock = "SELECT * FROM stock";
let solds = "SELECT * FROM items_sold";
let orders = "SELECT * FROM orders";

const getsql = async (sql) => {
  let data;

  data = await new Promise((resolve) => {
    connection.query(sql, (err, result) => {
      if (err) throw err;
      // console.log(result, "Primo");
      result = JSON.stringify(result);
      // console.log(result, "Secondo");
      resolve(result);
    });
  }).then((res) => {
    return res;
  });

  /*   connection.end(function (err) {
    if (err) throw err;
    console.log("Disconnected");
  }); */

  return data;
};

const queryFactory = (query) => {
  return Object.keys(query)
    .map((key, index) => {
      const value = Object.values(query)[index];

      switch (key) {
        case "order_by":
          return `${key.replace("_", " ")} '${value}'`;
        case "order":
          return value;
        default:
          return "";
      }
    })
    .join(" ");
};

// in testing

// Declare a route
fastify.get("/", async (request, reply) => {
  const dbQueryParams = queryFactory(request.query);

  let data = "aviables routes: /stock ; /solds ; /orders";
  return dbQueryParams;
});
fastify.get("/stock", async (request, reply) => {
  const dbQueryParams = queryFactory(request.query);
  const sqlString = stock + " " + dbQueryParams;
  let data = await getsql(sqlString);
  return data;
});

fastify.get("/solds", async (request, reply) => {
  let data = await getsql(solds);
  return data;
});

fastify.get("/orders", async (request, reply) => {
  let data = await getsql(orders);
  return data;
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
