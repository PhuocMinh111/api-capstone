const URL = "https://62a8907aec36bf40bda8f061.mockapi.io/PhoneList";
export default class Service {
  constructor(list) {
    this.list = list;
  }
  get() {
    return axios({
      url: URL,
      method: "get",
    });
  }
}
