var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "healthcare",
});

const getstock = async (sql) => {
  let stock;

  stock = await new Promise((resolve) => {
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

  return stock;
};
exports.module = getstock;
