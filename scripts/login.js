

document.querySelector("#signup").addEventListener("click", sign);

function sign(e) {
    e.preventDefault();
    console.log(e)
    location.href = ("/index.html");
}

document.querySelector("#form").addEventListener("submit", goget)


function goget (e)  {
    e.preventDefault()
    var get_obj = JSON.parse(localStorage.getItem("data"))
    // console.log(get_obj)
     let flag=false;
    get_obj.forEach((el) => {
        let email = document.querySelector("#em").value;
        let pass = document.querySelector("#pass").value;
        // console.log(pass)
        // console.log(el)
        if (el.email === email && el.password===pass) {
            console.log("yes");
            flag=true;
            return;            
        } 
    })
    
    if(flag===true){
        location.href = ("https://www.google.com");
    }else{
        alert("first create your account")
    }


}


