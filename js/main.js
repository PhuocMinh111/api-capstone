import Service from "./models/service.js";
function getEle(id) {
    return document.getElementById(id);
}
const cart = document.createElement("span");
const s = new Service();
function getProducts() {
    s.get()
        .then((res) => {
            const data = res.data;
            console.log(data);
            renderProducts(data);
        })
        .catch((err) => { });
}
function renderProducts(data) {
    const content = data.reduce((_, item) => {
        const { img, desc, type, name } = item;
        _ += `
        <div class="card">
        <img src="${img}" alt="phone"/>
        <h4 class="name">${name}</h4>
        <p class="desc">${desc} </p>
        <button class="btn btn-light" id="add-to-cart">add</button>
        </div>
        `;
        return _;
    }, "");
    getEle("products").innerHTML = content;
}
getProducts();
