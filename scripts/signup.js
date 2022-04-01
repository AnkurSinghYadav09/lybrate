var arr = JSON.parse(localStorage.getItem("data")) || [];


document.querySelector("#form").addEventListener("submit", signup);

function signup(event) {
    event.preventDefault();

    let country = document.querySelector("#country").value;
    let name = document.querySelector("#name").value;
    let phonenum = document.querySelector("#phonenum").value;
    let password = document.querySelector("#password").value;
    let email = document.querySelector("#email").value;

    var obj = {
        name: name,
        phone: phonenum,
        password: password,
        email: email,
        country: country
    }

    arr.push(obj)
    
    if (country !== "91") {
        alert(`CURRENTLY OUR SERVICE IS ONLY AVAILABLE IN INDIA`);
        
    } else {
        
        localStorage.setItem("data", JSON.stringify(arr));
        location.href = ("/login.html");
    }

}










