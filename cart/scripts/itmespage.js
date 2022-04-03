fetchdata();
async function fetchdata() {
  let url = `sexual wellness.json`;
  try {
    let res = await fetch(url);
    let data = await res.json();
    let data1 = data.productList;
    append1(data1);
  } catch (error) {
    console.log(error);
  }
}
function append1(data) {
  data.map(function (elem) {
    console.log(data)
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = elem.media[0].absoluteMediaPath;
    let name = document.createElement("p");
    name.innerText = elem.productName;
    let price = document.createElement("p");
    price.innerText = elem.priceDTO.price;
    let discountprice = document.createElement("p")
    discountprice.innerText = elem.priceDTO.mrp;
    let add = document.createElement("button");
    add.setAttribute("id", "addtocart");
    add.innerText = "add to cart";
    add.addEventListener("click", function () {
      cart(elem);
    });
    div.append(image, name, price,discountprice, add);
    document.getElementById("sexual").append(div);
    if(elem.quantity===undefined)
      {
          elem.quantity=1;
      }
      else
      {
          elem.quantity+=1;
      }
  });
}

//local storage
let countvalue = 0;
var setcart = JSON.parse(localStorage.getItem("cart")) || [];
function cart(elem) {
  countvalue++;
  document.querySelector("#count").innerHTML = null;
  // var obj = {
  //     image: elem.media[0].absoluteMediaPath,
  //     name: elem.productName,
  //     price: elem.priceDTO.price,
  // }
  let count = document.createElement("p");
  count.innerText = countvalue;
  document.querySelector("#count").append(count);
  if (elem.quantity === undefined) {
    elem.quantity = 1;
  } else {
    let flag = false;
    for (var i = 0; i < setcart.length; i++) {
      if (elem.productName == setcart[i].productName) {
        flag = true;
      }
    }
    if (flag === false) {
      elem.quantity += 1;
    } else {
      elem.quantity = 1;
    }
  }
  setcart.push(elem)
  console.log(setcart);
  localStorage.setItem("cart", JSON.stringify(setcart));
}
