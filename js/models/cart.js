export default class Cart {
    constructor(list) {
        this.list = list || [];
    }

    add(prod) {

        return this.list = this.list.push(prod)
        console.log(this.list);
    }
}