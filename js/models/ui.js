export default class UI {
  // constructor(data) {
  //     this.data = data;
  // }
  render(data) { }
  getEle(id) {
    return document.getElementById(id);
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
        <span class="price">${price} $</span>
        <button id="${ID}"  class="btn btn-light toCart" >add</button>
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
      _ += `
            <li id="${id}" class="quantity mt-3">
            <button style="font-size:2rem;font-weight:bold" id="del" class="del btn mb-2  text-danger">-</button>
            <h5 style="font-size:18px" class="">${quantity}</h5>
            <button style="font-size:1.7rem;font-weight:bold"  id="add" class="del btn mb-2 text-danger">+</button>
            </li>`;
      return _;
    }, "");



    const numberProd = cartList.reduce((_, item) => {
      const { quantity } = item;
      _ += quantity;
      return _;
    }, 0);
    const totalPrice = cartList.reduce((_, item) => {
      const { price, quantity } = item;
      _ += parseInt(price) * parseInt(quantity);
      //   const finalPrice = arr.find((item) => item != "$");

      //   return finalPrice;
      return _;
    }, 0);




    this.getEle("total-price").innerHTML = `${totalPrice} $`;
    this.getEle("prod-show").innerHTML = content;
    this.getEle("prod-quantity").innerHTML = contentQuantity;
    this.getEle("cart-number").innerHTML = numberProd;
  }
}
