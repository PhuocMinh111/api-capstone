export default class CartItem {
    constructor(prod) {
        const { img, price, name, id } = prod;
        this.img = img;
        this.name = name;
        this.price = price;
        this.id = id;
        this.quantity = 1;

    }
}