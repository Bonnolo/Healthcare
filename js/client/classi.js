class DataStock {
    constructor(data){
    // incomming data from db table
    this.element = document.createElement("div")
    this.element.classList.add("dataStock")
    this.idSelector = document.querySelector("#dataStock");
    this.idSelector.after(this.element)
    this.template = `
                    <p>${data.name}</p>
                    <p>${data.quantity}</p>
                    <p>${data.product_id}</p>
                    <p>${data.price.toFixed(2)}€</p>`;
    this.element.innerHTML = this.template
    }
    
}

export default DataStock;

/* function inserDataLastSold(typeOfClass, typeOfElement, typeOfData, data) {
    let dataValue = Object.values(data);
    for (const data of dataValue) {
      console.log(data);
      let element = document.createElement(`${typeOfElement}`);
      element.classList.add(`${typeOfClass}`);
      let idSelector = document.querySelector(`${typeOfData}`);
      idSelector.after(element);
      element.innerHTML = `
                          <p>${data.name}</p>
                          <p>${data.quantity}</p>
                          <p>${data.product_id}</p>
                          <p>${data.price.toFixed(2)}€</p>`;
    }
} */