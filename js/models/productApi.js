const URL = ""
export default class Product {
    constructor(list) {
        this.list = list;
    }
    get() {
        return axios({
            url: URL,
            method: "get"
        })
    }
}