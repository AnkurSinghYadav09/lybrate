let dataarr = JSON.parse(localStorage.getItem("data")) || [];


let button=document.getElementById("button")
button.addEventListener("click", function(event)
{
    event.preventDefault();

    let country = document.querySelector("#country").value;
    let name = document.querySelector("#name").value;
    let phonenum = document.querySelector("#phonenum").value;
    let password = document.querySelector("#password").value;
    let email = document.querySelector("#email").value;
    if(name=="" || phonenum=="" || password=="" || email=="")
    {
        alert("input correct data!")
    }
    else
    {  
        var obj = {
            name: name,
            phone: phonenum,
            password: password,
            email: email,
            country: country
        }
        
        if (country !== "91") {
            alert(`CURRENTLY OUR SERVICE IS ONLY AVAILABLE IN INDIA`);
            
        } else {
            dataarr.push(obj);
            localStorage.setItem("data", JSON.stringify(dataarr));
            location.href = "login.html"; 
        }
    }
    console.log("hello")

});










