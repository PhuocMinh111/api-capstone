import Service from "./models/service.js";
import UI from "./models/ui.js";
import Cart from "./models/cart.js";
import Utils from "./models/utils.js";
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
const u = new Utils();
function getProducts() {
    s.get()
        .then((res) => {
            const data = res.data;
            console.log(data);
            ui.renderProducts(data);
            ui.addEvent(cart);
            loader(false)
        })
        .catch((err) => { });
}
// function addEvent() {
//     const waitload = function () {
//         setInterval(() => {
//             const btns = document.querySelectorAll('.addToCart button');
//             if (btns.length > 0) clearInterval(waitload);
//             console.log(btns);
//         }, 200)
//     }
//     waitload();


// }
// addEvent();
getProducts();
