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
// searchbar

// get search bar element
const searchInput = document.querySelector("#searchInput");

// store name elements in array-like object
const namesFromDOM = document.getElementsByClassName("dataStock");

// listen for user events
searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;
    
    // get user search input converted to lowercase
    const searchQuery = value.toLowerCase();
    
    for (const nameElement of namesFromDOM) {
        // store name text and convert to lowercase
        let name = nameElement.textContent.toLowerCase();
        
        // compare current name to search input
        if (name.includes(searchQuery)) {
            // found name matching search, display it
            nameElement.style.display = "grid";
            nameElement.style.background = "rgb(200, 90, 90)";
            
        } else {
            // no match, don't display name
            nameElement.style.display = "none";
            nameElement.style.background = "#417716"
        }
    }
});