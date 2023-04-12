let url = "http://127.0.0.1:3000/stock";
// Get's dbtable on http://127.0.0.1:3000/stock
const fetchdata = async () => {
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
  let dataValue = Object.values(data)
  let idDataStock = document.querySelector("#dataStock");
  let classDataStock = document.querySelector(".datastock")
  for (const data of dataValue) {
    let element = document.createElement("div")
    console.log(data);
    // da rendere una funzione (classe, elemento)
    if (classDataStock) {
      classDataStock.after(element);
      let date = new Date(data.expiration)
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      element.innerHTML = `<div class="dataStock">
                          <p>${data.name}</p>
                          <p>${data.stock}</p>
                          <p>${data.product_id}</p>
                          <p>${data.buy_price}</p>
                          <p>${data.sell_price}</p>
                          <p>${day}/${month}/${year}</p>
                          </div>`
    } else {
      idDataStock.after(element);
      let date = new Date(data.expiration)
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      element.innerHTML = `<div class="dataStock">
                          <p>${data.name}</p>
                          <p>${data.stock}</p>
                          <p>${data.product_id}</p>
                          <p>${data.buy_price}</p>
                          <p>${data.sell_price}</p>
                          <p>${day}/${month}/${year}</p>
                          </div>`
    }
  }
}

// running fetch
fillContainer(fetchdata())



function renderElement(key, value) {
  
}
