function Servcies() {
  this.getListProductApi = function () {
    return axios({
      url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/products",
      method: "GET",
    });
  };
}
