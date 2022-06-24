var service = new Servcies();

function getEle(id) {
  return document.getElementById(id);
}

function getListProducts() {
  service
    .getListProductApi()
    .then(function (result) {
      renderListProducts(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListProducts();

function renderListProducts(data) {
  var contentHTML = "";

  data.forEach(function (product, index) {
    contentHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${product.tenSP}</td>
            <td>${product.gia}</td>
            <td>
                <img class="img-fluid" src="./../../assets/img/${
                  product.hinhAnh
                }"  width="50"/>
            </td>
            <td>${product.moTa}</td>
            <td>
                <button class="btn btn-info">Sửa</button>
                <button class="btn btn-danger">Xoá</button>
            </td>
        </tr>
    `;
  });

  getEle("tblDanhSachSP").innerHTML = contentHTML;
}
