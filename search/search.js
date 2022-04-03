    let arr=JSON.parse(localStorage.getItem("searcheditems"));
    let input=localStorage.getItem("searchkeyword");

    let inputkeyword=document.createElement("h3");
    inputkeyword.innerText=`Showing search results for "${input}"`;
    let search_key_word=document.getElementById("search-key-word");
    search_key_word.append(inputkeyword);
    

    let bodydata=document.getElementById("search-results-div");
    bodydata.innerHTML=null;

    let empty=document.getElementById("no-results");
    empty.innerHTML=null;

    if(arr.length>0)
    {
        console.log(arr);
        arr.forEach(function(ele)
        {
            let main=document.createElement("div");

            //image
            let img=document.createElement("img");
            img.src=ele.media[0].absoluteMediaPath;
            main.append(img);

            let rightdiv=document.createElement("div");
            

            //written data
            let namediv=document.createElement("div");
            namediv.addEventListener("click", function()
            {
                let bag=[];
                bag.push(ele);
                localStorage.setItem("productAlldetails", JSON.stringify(bag));
                location.href="../main localStorage for all p/mainLocalstorage.html"
            })
            namediv.setAttribute("class", "namediv");

            //title
            let titlediv=document.createElement("div");
            titlediv.setAttribute("class", "titlediv");
            let title=document.createElement("h3");
            title.innerText=ele.productName;
            titlediv.append(title);

            let discdiv=document.createElement("div");
            discdiv.setAttribute("class", "discdiv");
            let disc=document.createElement("p");
            disc.innerText=ele.prodDesc;
            discdiv.append(disc);

            namediv.append(titlediv, discdiv);


            //price
            let pricediv=document.createElement("div")
            pricediv.setAttribute("class", "pricediv");

            let price=document.createElement("h3");
            price.innerText=`₹${ele.priceDTO.price}`;

            let mrp=document.createElement("p");
            mrp.setAttribute("class", "mrp");
            mrp.innerText=`₹${ele.priceDTO.mrp}`;

            let discount=document.createElement("p");
            discount.setAttribute("class", "discount");
            discount.innerText=`${ele.priceDTO.discountPercentage} OFF`;

            pricediv.append(price, mrp, discount);

            //rating & add to cart
            let addcartdiv=document.createElement("div");
            addcartdiv.setAttribute("class", "addcartdiv");

            let ratingdiv=document.createElement("div");

            let aratingdiv=document.createElement("div");
            aratingdiv.setAttribute("class", "ratingdiv");

            let rating=document.createElement("p");
            rating.innerText=ele.gf;
            aratingdiv.append(rating);

            let goodfactordiv=document.createElement("div");
            goodfactordiv.setAttribute("class", "goodfactordiv");
            let goodfactor=document.createElement("p");
            goodfactor.innerText="GoodFactor";
            goodfactordiv.append(goodfactor);

            if(ele.gf>=4.5)
            {
                ratingdiv.append(aratingdiv, goodfactordiv);
            }

            addcartdiv.append(ratingdiv);

            //button
            let button=document.createElement("button");
            button.addEventListener("click", function()
            {
                let cartdata=JSON.parse(localStorage.getItem("cart"))||[];
                cartdata.push(ele);
                localStorage.setItem("cart", JSON.stringify(cartdata));
            })
            button.innerText="Add to Cart";

            if(ele.outOfStock===false)
            {
                addcartdiv.append(button);
            }


            rightdiv.append(namediv, pricediv, addcartdiv);

            main.append(rightdiv);
            bodydata.append(main);
        });
    }
    else
    {
        let div=document.createElement("div");
        div.innerHTML=`<img ng-src="https://assets.lybrate.com/q_auto,f_auto/imgs/product/Homepage/HealthProducts_48.png" src="https://assets.lybrate.com/q_auto,f_auto/imgs/product/Homepage/HealthProducts_48.png">`
        
        let oops=document.createElement("p");
        oops.setAttribute("class", "oops");
        oops.innerText="Oops, no results found.";

        let working=document.createElement("p");
        working.innerText="We are working on adding more products!";

        let goKartdiv=document.createElement("div");
        goKartdiv.setAttribute("class", "redirect-to-goodKart");

        let p=document.createElement("p");
        p.innerText="Meanwhile, continue shopping on";

        let goKartlink=document.createElement("p");
        goKartlink.setAttribute("class", "goKartlink");
        goKartlink.innerText="GoodKart";

        goKartdiv.append(p, goKartlink);


        empty.append(div, oops, working, goKartdiv)
    }