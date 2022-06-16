export default class UI {
    // constructor(data) {
    //     this.data = data;
    // }
    render(data) {

    }
    getEle(id) {
        return document.getElementById(id)
    }
    renderProducts(data) {
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
        <button data-toggle="modal" data-target="#modelId" class="btn btn-light toCart" >add</button>
        </div>
        </div>
        </div>
        `;
            return _;
        }, "");
        this.getEle("products").innerHTML = content;
    }
    renderCart(data) {
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
        <button data-toggle="modal" data-target="#modelId" class="btn btn-light toCart" >add</button>
        </div>
        </div>
        </div>
        `;
            return _;
        }, "");
        this.getEle("products").innerHTML = content;

    }

}