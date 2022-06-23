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
            const ID = Number.parseInt(id);
            _ += `
        <div  class="card">
        <img src="${img}" alt="phone"/>
        <div class="footer text-light">
        <h4 class="name">${name}</h4>
        <p class="desc">${desc} </p>
        <div class="addToCart">
        <span class="price">${price}</span>
        <button id="${ID}" data-toggle="modal" data-target="#modelId" class="btn btn-light toCart" >add</button>
        </div>
        </div>
        </div>
        `;
            return _;
        }, "");
        this.getEle("products").innerHTML = content;
    }



    renderCart(cartList) {
        const content = cartList.reduce((_, item) => {
            const { img, name, price } = item;
            console.log(img);
            _ += `
            <li class="mt-3">
            <img src="${img}" style="width:50px" />
            <span>${name} </span>
            </li>
        `;
            return _;
        }, "");
        const contentQuantity = cartList.reduce((_, item) => {
            const { quantity, id } = item;
            console.log(quantity);
            _ += `
            <li id="${id}" class="quantity mt-3">
            <span class="down text-primary"> </span>
            <h5 class="">${quantity}</h5>
            <span class="up text-primary"><i class="fas fa-plus"></i></span>
            </li>`
            return _;
        }, "");
        const numberProd = cartList.reduce((_, item) => {
            const amount = parseInt(item.quantity);
            _ += amount;
            return _;
        }, 0)
        this.getEle("prod-show").innerHTML = content;
        this.getEle("prod-quantity").innerHTML = contentQuantity;
        this.getEle('prod-quantity').innerHTML = numberProd;

    }


}