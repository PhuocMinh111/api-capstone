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
        const prodArr = cartList.map(item => item.prod);
        const contentProd = prodArr.reduce((_, item) => {
            const { image } = item;
            _ += `
            <li>
            <img src="${image}" />
            </li>
        `;
            return _;
        }, "");
        this.getEle("prod-show").innerHTML = content;

    }
    addEvent(cart) {
        const btns = document.querySelectorAll(".addToCart button")
        btns.forEach(item => {
            item.addEventListener('click', (e) => {
                const id = e.target.id;
                cart.add(id);
            })
        })
    }

}