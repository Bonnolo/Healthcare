let url = "http://127.0.0.1:3000/stock";
// Get's dbtable on http://127.0.0.1:3000/stock
const fetchstock = async () => {
  try {
    let response = await fetch(url);
    let stock = await response.json();
    // console.log(stock);
    return stock;
  } catch (error) {
    console.log(error);
  }
};
let container = document.querySelector(".container");
function renderElement(key, value) {
  let element = document.createElement("li");
  element.innerHTML = `<span>${key}: ${value}</span>`;
  container.append(element);
}

async function fillContainer(dbtable) {
  let data = await dbtable;
  for (const obj of data) {
    for (const [key, value] of Object.entries(obj)) {
      console.log(`${key}: ${value}`);
      renderElement(key, value);
    }
  }
}

// running fetch
// fillContainer(fetchstock())

// async function fillContaine(){
//   try {
//     let data = await translateOBJ(fetchstock())
//     container.innerHTML = data
//   } catch (error) {
//     console.log(error)
//   }
// }
