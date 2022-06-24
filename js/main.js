import Service from "./models/service.js";
import UI from "./models/ui.js";
import Cart from "./models/cart.js";
import Products from "./models/products.js";
import CartItem from "./models/cartItem.js";
function getEle(id) {
    return document.getElementById(id);
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
            getEle("loader").style.display = "none";
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
        const isButton = e.target.nodeName == "BUTTON" && e.target.id == "del" || e.target.id == "add";
        if (!isButton) return;
        const type = e.target.id;
        if (type == "del") {
            const button = e.target;
            const id = button.parentNode.id;
            console.log(id);
            cart.removeItem(id);
            cart.checkQuantity();
            ui.renderCart(cart.list);
        }
        if (type == "add") {
            const button = e.target;
            const id = button.parentNode.id;
            console.log(id);
            cart.addItem(id);
            ui.renderCart(cart.list);
        }
    })
}
// }
// addEvent();
getProducts();
