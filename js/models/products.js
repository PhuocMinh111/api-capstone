export default class Products {
    constructor(list) {
        this.list = list || [];
    }
    addList(data) {
        this.list = data;
        console.log(this.list);
    }
    find(id) {
        return this.list.find(item => item.id == id);
    }
}