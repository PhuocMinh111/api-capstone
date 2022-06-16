import Service from "./models/service.js";
import UI from "./models/ui.js";
function getEle(id) {
    return document.getElementById(id);
}
const cart = document.createElement("span");
function loader(isLoad) {
    if (isLoad) return;
    document.getEle('loader').style.display = none;
}
const s = new Service();
const ui = new UI();



function getProducts() {
    s.get()
        .then((res) => {
            const data = res.data;
            console.log(data);
            ui.renderProducts(data);
            loader(false)
        })
        .catch((err) => { });
}
getProducts();
