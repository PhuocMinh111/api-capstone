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
            const { img, name, price } = item.payload;
            console.log(img);
            _ += `
            <li class="mt-3">
            <img src="${img}" style="width:50px" />
            <span>${name} </span>
            </li>
        `;
            return _;
        }, "");
        this.getEle("prod-show").innerHTML = content;

    }


}