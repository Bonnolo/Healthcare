import {
  inserDataLastSold,
  inserDataStock,
  inserDataOrders,
  entrateData,
  usciteData,
} from "./functions.js";

let stock = "http://127.0.0.1:3000/stock";
let itemsSold = "http://127.0.0.1:3000/solds";
let orders = "http://127.0.0.1:3000/orders";
// Get's dbtable on http://127.0.0.1:3000/

const fetchdata = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    // console.log(stock);
    return data;
  } catch (error) {
    console.log(error);
  }
};

async function fillStock(dbtable) {
  let data = await dbtable;
  inserDataStock("dataStock", "div", "#dataStock", data);
}

async function fillLastSold(dbtable) {
  let data = await dbtable;
  inserDataLastSold("data", "div", "#dataSold", data);
  entrateData("dataEntrate", "div", "#entrateData", data);
}

async function fillOrders(dbtable) {
  let data = await dbtable;
  inserDataOrders("dataEntrate", "div", "#dataOrders", data);
  usciteData("dataEntrate", "div", "#usciteData", data);
}

// running fetch
fillStock(fetchdata(stock));
fillLastSold(fetchdata(itemsSold));
fillOrders(fetchdata(orders));
