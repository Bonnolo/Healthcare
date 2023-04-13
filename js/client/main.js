let stock = "http://127.0.0.1:3000/stock";
let itemsSold = "http://127.0.0.1:3000/solds";
let orders = "http://127.0.0.1:3000/orders";
// Get's dbtable on http://127.0.0.1:3000/stock

function inserDataLastSold(typeOfClass, typeOfElement, typeOfData, data) {
  let dataValue = Object.values(data);
  for (const data of dataValue) {
    let element = document.createElement(`${typeOfElement}`);
    element.classList.add(`${typeOfClass}`);
    let idSelector = document.querySelector(`${typeOfData}`);
    idSelector.after(element);
    element.innerHTML = `
                        <p>${data.name}</p>
                        <p>${data.quantity}</p>
                        <p>${data.product_id}</p>
                        <p>${data.price}€</p>`;
  }
}
function inserDataStock(typeOfClass, typeOfElement, typeOfData, data) {
  let dataValue = Object.values(data);
  for (const data of dataValue) {
    let element = document.createElement(`${typeOfElement}`);
    element.classList.add(`${typeOfClass}`);
    let idSelector = document.querySelector(`${typeOfData}`);
    idSelector.after(element);
    let date = new Date(data.expiration);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    element.innerHTML = `
                        <p>${data.name}</p>
                        <p>${data.stock}</p>
                        <p>${data.product_id}</p>
                        <p>${data.buy_price}€</p>
                        <p>${data.sell_price}€</p>
                        <p>${day}/${month}/${year}</p>`;
  }
}
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

async function fillContainer(dbtable) {
  let data = await dbtable;
  inserDataStock("dataStock", "div", "#dataStock", data);
  /*   inserDataLastSold("data", "div", "#dataSold", data); */
}

// running fetch
fillContainer(fetchdata());
