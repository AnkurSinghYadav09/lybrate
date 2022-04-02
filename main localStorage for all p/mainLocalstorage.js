let  leftSideDiv = document.getElementById("leftSideDiv");

let centreSideDiv =  document.getElementById("centreSideDiv");

let rightSideDiv = document.getElementById("rightSideDiv");


let allProductArr = JSON.parse(localStorage.getItem("productAlldetails"));

console.log("datatat",allProductArr)

allProductArr.map(function(ele){
  leftSideDiv.innerHTML=null
  centreSideDiv.innerHTML=null
  rightSideDiv.innerHTML=null


  //here we have written ljeftside div mapping

  console.log("media",ele.media.length)

  if(ele.media.length===6||ele.media.length===7||ele.media.length===8||ele.media.length===9||ele.media.length===10||ele.media.length===11||ele.media.length===12||ele.media.length===13){

      let img1 = document.createElement("img")
      img1.setAttribute("class","leftsideimg")
      img1.src = ele.media[1].absoluteMediaPath

      console.log("gfiewdgf",ele.media.length)
      let img2 = document.createElement("img")
      img2.setAttribute("class","leftsideimg")
      img2.src = ele.media[2].absoluteMediaPath

      let img3 = document.createElement("img")
      img3.setAttribute("class","leftsideimg")
      img3.src = ele.media[3].absoluteMediaPath

      let img4 = document.createElement("img")
      img4.setAttribute("class","leftsideimg")
      img4.src = ele.media[4].absoluteMediaPath

      let img5 = document.createElement("img")
      img5.setAttribute("class","leftsideimg")
      img5.src = ele.media[5].absoluteMediaPath

      leftSideDiv.append(img1,img2,img3,img4,img5)

  }

  else if (ele.media.length===5){
      let img1 = document.createElement("img")
      img1.setAttribute("class","leftsideimg")
      img1.src = ele.media[1].absoluteMediaPath

      console.log("gfiewdgf",ele.media.length)
      let img2 = document.createElement("img")
      img2.setAttribute("class","leftsideimg")
      img2.src = ele.media[2].absoluteMediaPath

      let img3 = document.createElement("img")
      img3.setAttribute("class","leftsideimg")
      img3.src = ele.media[3].absoluteMediaPath

      let img4 = document.createElement("img")
      img4.setAttribute("class","leftsideimg")
      img4.src = ele.media[4].absoluteMediaPath

      leftSideDiv.append(img1,img2,img3,img4)
  }
  else if (ele.media.length===4){
      let img1 = document.createElement("img")
      img1.setAttribute("class","leftsideimg")
      img1.src = ele.media[2].absoluteMediaPath

      console.log("gfiewdgf",ele.media.length)
      let img2 = document.createElement("img")
      img2.setAttribute("class","leftsideimg")
      img2.src = ele.media[3].absoluteMediaPath

      let img3 = document.createElement("img")
      img3.setAttribute("class","leftsideimg")
      img3.src = ele.media[1].absoluteMediaPath

      leftSideDiv.append(img1,img2,img3)
  }
  else if (ele.media.length===3){
      let img1 = document.createElement("img")
      img1.setAttribute("class","leftsideimg")
      img1.src = ele.media[1].absoluteMediaPath

      console.log("gfiewdgf",ele.media.length)
      let img2 = document.createElement("img")
      img2.setAttribute("class","leftsideimg")
      img2.src = ele.media[2].absoluteMediaPath

      leftSideDiv.append(img1,img2)
  }
  else if (ele.media.length===2){
      let img1 = document.createElement("img")
      img1.setAttribute("class","leftsideimg")
      img1.src = ele.media[1].absoluteMediaPath

     

      leftSideDiv.append(img1)
  }


  //here we have written centreside div mapping

  let centerdiv = document.createElement("div")

  let centerimg = document.createElement("img")
  centerimg.setAttribute("class","centerimg")
  centerimg.src = ele.media[0].absoluteMediaPath

  let button = document.createElement("div")
  button.setAttribute("class","centrebutton")
  
  let addbutton1 = document.createElement("button")
  addbutton1.setAttribute("class","addtoCard")
  addbutton1.innerText = "ADD TO CART"

  let addbutton2 = document.createElement("button")
  addbutton2.setAttribute("class","buynow")
  addbutton2.innerText = "BUY NOW"

  centerdiv.append(centerimg)
  button.append(addbutton1,addbutton2)


  centreSideDiv.append(centerdiv,button)


   //here we have written Righttside div mapping


   let rightdiv = document.createElement("div")


   let productdiv1 = document.createElement("div")
      productdiv1.setAttribute("class","productName")

      let productp1 = document.createElement("h1")
      productp1.innerText=ele.productName

      let special = document.createElement("h5")
      special.innerText="Special Price"
      special.setAttribute("class","special")

      productdiv1.append(productp1,special)


  let pricediv1 =  document.createElement("div");
      pricediv1.setAttribute("class","priceId")

      

      let price1 = document.createElement("p");
      price1.innerText="₹"+ele.priceDTO.price

      let price2 = document.createElement("p");
      price2.innerText="₹"+ele.priceDTO.mrp

      let price3 = document.createElement("p");
      price3.innerText=ele.priceDTO.discountPercentage+"OFF";

      pricediv1.append(price1,price2,price3);


  let goldrating = document.createElement("div")
      goldrating.setAttribute("class","goldratingdiv")
      
      let rating = document.createElement("p")
      rating.setAttribute("class","rating")
      rating.innerText=ele.rating

     
     let goldratingp1 = document.createElement("p")
       goldratingp1.setAttribute("class","goldrating")
      goldratingp1.innerText=ele.attributes[0]

      goldrating.append(rating,goldratingp1)


      let goldmember = document.createElement("div")
      goldmember.setAttribute("class","goldmember")

      let goldmemberp1 = document.createElement("h3")
          goldmemberp1.setAttribute("class","goldmemberp1")
         goldmemberp1.innerText= "Become a  and you get this for  Free  using bonus LybrateCash"

      let goldmemberp2 =document.createElement("p")
      goldmemberp2.setAttribute("class","goldmemberp2")
      goldmemberp2.innerText="Also get ₹802 LybrateCash for your future purchases."


      goldmember.append(goldmemberp1,goldmemberp2)


  let descridiv1 = document.createElement("div")
      descridiv1.setAttribute("class","prodDescription")


      let descrip1 = document.createElement("p")
      descrip1.innerText =ele.prodDesc

      descridiv1.append( descrip1 )



  let shippingdiv= document.createElement("div")

  let logodiv1 = document.createElement("div")
  logodiv1.setAttribute("class","logodiv1")

  let logo= document.createElement("p")
   logo.innerHTML='<span class="material-icons">local_shipping</span>'

  let logop1 = document.createElement("p")
      logop1.setAttribute("class","logop1")
      logop1.innerText="Free Shipping Applicable"

      logodiv1.append(logo,logop1)

     
  let logodiv2 = document.createElement("div")
  logodiv2.setAttribute("class","logodiv1")

      let logo1= document.createElement("p")
      logo1.innerHTML='<span id = "ram"class="material-icons">payments</span>'

      let logop2 = document.createElement("p")
      logop2.setAttribute("class","logop2")
      logop2.innerText="Cash on delivery available"

      logodiv2.append(logo1,logop2)

      shippingdiv.append( logodiv1,logodiv2 )


      let pincodediv = document.createElement("div")
      pincodediv.setAttribute("class","pincodediv")

      let pincodep1 = document.createElement("p")
      pincodep1.setAttribute("class","pincodep1")
      pincodep1.innerText = "Deliver to"

       let pincodeimput = document.createElement("input")
       pincodeimput.setAttribute("class","pincodeimput")
        pincodeimput.placeholder="Enter delivery code"
       pincodeimput.type="number"


       let pincodebtn = document.createElement("button")
       pincodebtn.setAttribute("class","pincodebtn")
       pincodebtn.innerText="check"
       let checkoutpudivt=document.createElement("div");
       checkoutpudivt.setAttribute("class", "checkoutpudiv")
       pincodebtn.addEventListener("click", function()
       {
           
           let checkoutput=document.createElement("p");
           checkoutpudivt.innerHTML=null;
           let chechpin=document.createElement("p");
           if(pincodeimput.value>=100000 && pincodeimput.value<=999999)
           {
               checkoutput.innerText="Delivery available at this pincode";
               checkoutput.style.color="green";
               checkoutpudivt.append(checkoutput)
               console.log("done");
           }
           else{
            checkoutput.innerText="Pincode not serviceable";
            checkoutput.style.color="red";
            checkoutpudivt.append(checkoutput)
               console.log("No")
           }
       })

       pincodediv.append(pincodep1,pincodeimput,pincodebtn, checkoutpudivt)





       let main_authantic_div = document.createElement("div")
        main_authantic_div.setAttribute("class","main_authantic_div")

       let authantic_div = document.createElement("div")

       let authantic_logo = document.createElement("p")
        authantic_logo.setAttribute("class","authantic-logo")
        authantic_logo.innerHTML ='<span class="material-icons">verified_user</span>'

       let authantic_p1= document.createElement("p")
       authantic_p1.setAttribute("class","authantic_p1")
       authantic_p1.innerText ="100% authentic product"

       authantic_div.append(authantic_logo,authantic_p1)


       
       let authantic_div1 = document.createElement("div")

      let authantic_logo1 = document.createElement("p")
       authantic_logo1.setAttribute("class","authantic-logo1")
       authantic_logo1.innerHTML ='<span class="material-icons">payments</span>'

      let authantic_p2= document.createElement("p")
      authantic_p2.setAttribute("class","authantic_p1")
      authantic_p2.innerText ="Safe and Secure Payments"


      authantic_div1.append(authantic_logo1,authantic_p2)



        let authantic_div2 = document.createElement("div")

       let authantic_logo2 = document.createElement("p")
        authantic_logo2.setAttribute("class","authantic-logo2")
        authantic_logo2.innerHTML ='<span class="material-icons">price_change</span>'

       let authantic_p3= document.createElement("p")
       authantic_p3.setAttribute("class","authantic_p1")
       authantic_p3.innerText ="Assured Best Price"

       authantic_div2.append(authantic_logo2,authantic_p3)


       main_authantic_div.append(authantic_div,authantic_div1,authantic_div2)






      rightdiv.append(productdiv1, pricediv1, goldrating, goldmember,descridiv1,shippingdiv, pincodediv,main_authantic_div)

      rightSideDiv.append(rightdiv)




 


 
})