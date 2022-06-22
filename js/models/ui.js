export default class UI {
  // constructor(data) {
  //     this.data = data;
  // }
  render(data) {}
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
      console.log(quantity);
      _ += `
            <li id="${id}" class="quantity mt-3">
            <h5 class="">${quantity}</h5>
            <button id="del" class="btn ml-3 btn-danger">del</button>
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
    console.log(totalPrice);
    console.log(numberProd);
    this.getEle("total-price").innerHTML = `${totalPrice} $`;
    this.getEle("prod-show").innerHTML = content;
    this.getEle("prod-quantity").innerHTML = contentQuantity;
    this.getEle("cart-number").innerHTML = numberProd;
  }
}
