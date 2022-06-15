import Service from "./models/service.js";
function getEle(id) {
    return document.getElementById(id)
}
const s = new Service();
function renderProduct() {
    s.get()
        .then(res => {
            const data = res.data;
            console.log(res);
        }
        )
    getEle("products").innerHTML = `
`
}