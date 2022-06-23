import Service from "./models/service.js";
import UI from "./models/ui.js";
import Cart from "./models/cart.js";
import Products from "./models/products.js";
import CartItem from "./models/cartItem.js";
function getEle(id) {
    return document.getElementById(id);
}
function loader(isLoad) {
    if (isLoad) return;
    document.getEle('loader').style.display = none;
}
const s = new Service();
const ui = new UI();
const cart = new Cart();
const products = new Products();



function getProducts() {
    s.get()
        .then((res) => {
            const data = res.data;
            console.log(data);
            ui.renderProducts(data);
            products.addList(data);
            addEvent();
            loader(false)
        })
        .catch((err) => { });
}









function addEvent() {
    const btns = document.querySelectorAll(".addToCart button")
    btns.forEach(item => {
        item.addEventListener('click', (e) => {
            const id = e.target.id;
            const prod = products.find(id);
            console.log(prod);
            cart.add(new CartItem(prod));
            ui.renderCart(cart.list);
        })
    })
    document.getElementById("prod-quantity").addEventListener('click', (e) => {
        const isButton = e.target.nodeName == "BUTTON";
        if (!isButton) return;
        const button = e.target;
        const id = button.parentNode.id;
        console.log(id);
        cart.remove(id);
        ui.renderCart(cart.list)

    })
}
// }
// addEvent();
getProducts();
