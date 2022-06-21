export default class Cart {
    constructor() {
        this.list = [];
    }

    add(prod) {
        let added = false;
        // const newItem = new CartItem(prod);
        // this.list.forEach(item => {
        //     const { id } = item;
        //     if (prod.id == id) added = true;
        // });
        // if (added) prod = { ...prod, quantity:}
        this.list = this.list.map(item => {
            const { id } = item.payload;
            if (prod.payload.id == id) {
                prod.quantity += 1;
                added = true;
                return item;
            };
        })
        console.log(added);

        if (!added) this.list.push(prod);
        console.log(this.list);
    }
}


