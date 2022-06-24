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
            const { id } = item;
            if (prod.id == id) {
                item.quantity = item.quantity + 1;
                added = true;

            };
            return item;
        })

        if (!added) this.list.push(prod);
        console.log(this.list);
    }
    checkQuantity() {
        this.list = this.list.filter(item => item.quantity !== 0);
    }

    removeItem(id) {
        this.list = this.list.map(item => {
            if (item.id !== id) return item;
            if (item.id == id) {
                const { quantity } = item;
                item = { ...item, quantity: quantity - 1 };
                if (item.quantity >= 0) return item;
            }
        })
    }

    addItem(id) {
        this.list = this.list.map(item => {
            if (item.id !== id) return item;
            if (item.id == id) {
                const { quantity } = item;
                return item = { ...item, quantity: quantity + 1 };
            }
        })
    }
}


