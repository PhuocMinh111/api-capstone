const URL = ""
export default class Service {
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