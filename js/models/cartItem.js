export default class CartItem {
    constructor(prod) {
        this.payload = { ...prod };
        this.quantity = 1;

    }
}