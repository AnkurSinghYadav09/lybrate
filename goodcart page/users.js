let parent1 = document.getElementById("protine")
let parent2 = document.getElementById("newArrival")
let parent3 = document.getElementById("moneySaving")
let parent4 = document.getElementById("sexWell")
let parent5 = document.getElementById("immunity")
let parent6 = document.getElementById("weightManage")
let parent7 = document.getElementById("vitamines")

async function getdata(url, parent) {

    let res = await fetch(url);
    let data = await res.json();
    console.log(data[0].bestinporfit);
    showProducts(data[0].bestinporfit, parent);
}

// 2nd
async function getdata1(url, parent) {

    let res = await fetch(url);
    let data = await res.json();
    console.log(data[0].bestinporfit);
    showProducts(data[0].newArrival, parent);
}

// 3rd

async function getdata2(url, parent) {

    let res = await fetch(url);
    let data = await res.json();
    console.log(data[0].bestinporfit);
    showProducts(data[0].moneySaving, parent);
}


//4th

async function getdata3(url, parent) {

    let res = await fetch(url);
    let data = await res.json();
    console.log(data[0].bestinporfit);
    showProducts(data[0].sexwell, parent);
}

//4th

async function getdata4(url, parent) {

    let res = await fetch(url);
    let data = await res.json();
    console.log(data[0].bestinporfit);
    showProducts(data[0].immunity, parent);
}


//5th
async function getdata5(url, parent) {

    let res = await fetch(url);
    let data = await res.json();
    console.log(data[0].bestinporfit);
    showProducts(data[0].weightmanagement, parent);
}


// 6th

async function getdata6(url, parent) {

    let res = await fetch(url);
    let data = await res.json();
    console.log(data[0].bestinporfit);
    showProducts(data[0].vitamins, parent);
}


getdata("users.json", parent1);
getdata1("users.json", parent2);
getdata2("users.json", parent3);
getdata3("users.json", parent4);
getdata4("users.json", parent5);
getdata5("users.json", parent6);
getdata6("users.json", parent7);

var timerId;
let search = document.getElementById("searchproducts")
async function searchproduct() {
    let res = await fetch(`http://localhost:2000/api/Searchproducts`);
    let data = await res.json();
    return data;
}

let search_div = document.getElementById("search_div");

function appendproduct(search_data) {
    search_div.style.display = "block"
    if (search_data === undefined) {
        return false;
    }

    search_div.innerHTML = null;

    search_data.forEach((el) => {
        let p = document.createElement("p");
        p.innerText = el.name;
        p.onclick = () => {
            localStorage.setItem("Single_products", JSON.stringify(el));
            window.location.href = "Product Description.html"
        }
        search_div.append(p)
    });
}

async function main() {
    let name = document.getElementById("searchBox").value;
    if (name.length < 3) {
        return false;
    }

    let res = await searchproduct();

    let product_data = res;
    var search_data = [];
    product_data.forEach((el) => {
        if (el.name.includes(name)) {
            console.log(el);
            search_data.push(el);
        }
    });
    appendproduct(search_data);
}



function showProducts(data, parent) {

    data.forEach((element) => {

        let { img, name, newprice, oldprice, off } = element;

        let div = document.createElement("div");
        div.onclick = () => {
            localStorage.setItem("Single_products", JSON.stringify(element));
            window.location.href = "Product Description.html"
        }

        let image = document.createElement("img");
        image.src = img;
        image.setAttribute('class', 'img-fluid');

        let heading = document.createElement("p");
        heading.textContent = name;
        heading.setAttribute('class', 'fw-bold')

        let price = document.createElement("p");
        let priceNew = document.createElement("span");
        priceNew.textContent = "₹" + Number(newprice).toFixed(2) + " ";
        priceNew.setAttribute('class', 'fw-bold text-danger')

        let priceOld = document.createElement("span");
        priceOld.textContent = oldprice;
        priceOld.setAttribute('class', 'text-muted text-decoration-line-through')

        let discount = document.createElement("span");
        discount.textContent = off;
        discount.setAttribute('class', 'text-success')

        price.append(priceNew, priceOld, discount)
        div.append(image, heading, price);

        parent.append(div)
    });
}


