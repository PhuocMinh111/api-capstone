export default class Cart {
    constructor() {
        this.list = [];
    }

    add(prod) {
        this.list = this.list.push(prod);
        console.log(this.list);
    }
}