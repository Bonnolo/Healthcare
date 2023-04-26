
function inserDataLastSold(typeOfClass, typeOfElement, typeOfData, data) {
    let dataValue = Object.values(data);
    for (const data of dataValue) {
      //console.log(data);
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
}

function inserDataOrders(typeOfClass, typeOfElement, typeOfData, data) {
    let dataValue = Object.values(data);
    for (const data of dataValue) {
        let element = document.createElement(`${typeOfElement}`);
        element.classList.add(`${typeOfClass}`);
        let idSelector = document.querySelector(`${typeOfData}`);
        idSelector.after(element);
        let date = new Date(data.date_of_order);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        element.innerHTML = `
                            <p>${day}/${month}/${year}</p>
                            <p>${data.name}</p>
                            <p>${data.quantity}</p>
                            <p>${data.price}€</p>
                            <p>${data.product_id}</p>`;
    }
}

function inserDataStock(typeOfClass, typeOfElement, typeOfData, data) {
    let dataValue = Object.values(data);
    let dataCount = data.length
    let maxStock = 100
    let percentageInStock = (dataCount / maxStock) * 100
    document.querySelector(".orange").style.width = `${percentageInStock}%`
    document.querySelector("#stockBar").innerHTML = `${percentageInStock.toFixed(0)}% / 100%`
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
                        <p>${data.buy_price.toFixed(2)}€</p>
                        <p>${data.sell_price.toFixed(2)}€</p>
                        <p>${day}/${month}/${year}</p>`;
    }
}
function entrateData(typeOfClass, typeOfElement, typeOfData, data) {
    let dataValue = Object.values(data);
    for (const data of dataValue) {
    let element = document.createElement(`${typeOfElement}`);
    element.classList.add(`${typeOfClass}`);
    let idSelector = document.querySelector(`${typeOfData}`);
    idSelector.after(element);
    let date = new Date(data.sold_date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    element.innerHTML = `
                        <p>${data.name}</p>
                        <p>${day}/${month}/${year}</p>
                        <p>${data.quantity}</p>
                        <p>${data.product_id}</p>
                        <p>${data.price.toFixed(2)}€</p>`;
    }
}
function usciteData(typeOfClass, typeOfElement, typeOfData, data) {
    let dataValue = Object.values(data);
    for (const data of dataValue) {
    let element = document.createElement(`${typeOfElement}`);
    element.classList.add(`${typeOfClass}`);
    let idSelector = document.querySelector(`${typeOfData}`);
    idSelector.after(element);
    let date = new Date(data.date_of_order);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    element.innerHTML = `
                        <p>${data.name}</p>
                        <p>${day}/${month}/${year}</p>
                        <p>${data.quantity}</p>
                        <p>${data.product_id}</p>
                        <p>${data.price.toFixed(2)}€</p>`;
    }
}

    export {inserDataLastSold, inserDataStock, inserDataOrders, entrateData, usciteData}