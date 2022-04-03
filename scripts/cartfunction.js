var getcart = JSON.parse(localStorage.getItem("cart"));
display(getcart);
function display(getcart, total) {
  document.querySelector("#cart").innerHTML = null;
  getcart.map(function (elem, index) {
      if(elem.quantity===undefined)
      {
          elem.quantity=1;
      }
      else
      {
          elem.quantity+=1;
      }
    let div = document.createElement("div");
    div.setAttribute("id","all-details-div")
    let div1 = document.createElement("div")
    div1.setAttribute("id","cart-images-div")
    let image = document.createElement("img");
    image.src = elem.media[0].absoluteMediaPath;
    image.setAttribute("id","cartimages")
    let div2 = document.createElement("div")
    div2.setAttribute("id","cart-product-name-div")
    let name = document.createElement("p");
    name.innerText = elem.productName;
    name.setAttribute("id","product-name-ptag")
    let div3 = document.createElement("div")
    div3.setAttribute("id","cart-product-price-div")
    let price = document.createElement("p");
    price.setAttribute("id","off-price-ptag")
    price.innerText = `₹${elem.priceDTO.price}`;
    let maxprice = document.createElement("p")
    maxprice.setAttribute("id","max-price-ptag")
    maxprice.innerText = `₹${elem.priceDTO.mrp}`;
    let remove = document.createElement("button");
    remove.setAttribute("id", "remove");
    remove.innerText = "Remove";
    remove.addEventListener("click", function () {
      rem(index, total);
    });
    // div.append(image, name, price, remove);
    // document.getElementById("cart-images-div").append(image)
    // document.getElementById("cart-product-name-div").append(name)
    // document.getElementById("cart-product-price-div").append(price)
    div1.append(image)
    div2.append(name)
    div3.append(price,maxprice)
    div.append(div1,div2,div3,remove)
    document.querySelector("#cart").append(div);
    localStorage.setItem("cart", JSON.stringify(getcart));
    let total = 0;
    let discounttotal = 0;
    for (let i = 0; i < getcart.length; i++) {
      total = total + getcart[i].priceDTO.price;
      discounttotal = discounttotal + getcart[i].priceDTO.mrp;
    }
    let newprice = (document.getElementById("price").innerText = `₹${total}`);
    let newdiscount = (document.getElementById("discount-price-display").innerText = `-₹${discounttotal-total}`);
    let newtotalmrp = (document.getElementById("total-price").innerText= `₹${discounttotal}`)
    let newamountpayable = (document.getElementById("amount-payable-value").innerText= `₹${discounttotal}`)
    // let newitemdisplay = (document.getElementById("no-of-items-ptag").innerText = elem.length;
  });
}

//remove

function rem(index, total, discounttotal) {
  //console.log(index)
  let newprice = document.getElementById("price");
  newprice.innerText = "";

  //console.log(newprice)
  total = total - getcart[index].priceDTO.price;
  discounttotal = discounttotal - getcart[index].priceDTO.mrp;
  //   newprice.append(total);

  getcart.splice(index, 1);
  
  display(getcart);
}

