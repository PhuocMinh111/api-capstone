import Service from "./models/service.js";
function getEle(id) {
    return document.getElementById(id);
}
const cart = document.createElement("span");
function loader(isLoad) {
    if (isLoad) return;
    document.getEle('loader').style.display = none;
}
const s = new Service();
function getProducts() {
    s.get()
        .then((res) => {
            const data = res.data;
            console.log(data);
            renderProducts(data);
            loader(false)
        })
        .catch((err) => { });
}
function renderProducts(data) {
    const content = data.reduce((_, item) => {
        const { img, id, desc, type, price, name } = item;
        _ += `
        <div  class="card">
        <img src="${img}" alt="phone"/>
        <div class="footer text-light">
        <h4 class="name">${name}</h4>
        <p class="desc">${desc} </p>
        <div class="addToCart"x>
        <span class="price">${price}</span>
        <button class="btn btn-light toCart" >add</button>
        </div>
        </div>
        </div>
        `;
        return _;
    }, "");
    getEle("products").innerHTML = content;
}
getProducts();
