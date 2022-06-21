export default class Products {
    constructor(list) {
        this.list = list;
        this.addId();
    }
    addId() {
        this.list = this.list.map((item, index) => {
            item[id] = index;
            return item;
        })
    }
}