


          ////////// here i have given window sliding javascript


          let imageArr=[
            {I:"https://assets.lybrate.com/q_auto,f_auto/rio/800x800/Swan-Timios-Nutty-Bars-Web.jpg"},
            {I:"	https://assets.lybrate.com/q_auto,f_auto/rio/800x800/Swan-Snec-P-Drops-Web.jpg"},
          
        ]
        
          
             localStorage.setItem("images",JSON.stringify(imageArr));
        
             let images=JSON.parse(localStorage.getItem("images")) || [];
        
        
             console.log(images);
        
        
             let container=document.getElementById("slideshow");
        
             let i=0;
        
             setInterval(function(){
                 if(i==images.length){
                   i=0;
                 }
                 let image=imageArr[i].I;
                 container.innerHTML=null;
                 let Img=document.createElement("img");
                 Img.setAttribute("id","slidingimg")
                 Img.src=image;
        
                 container.append(Img);
                 i++;
             },2000);
        
        
        
             /////////  eliding     end //////////////
        
           
            /////      product page javascript////////
        
            let dt;
        
           async function getData() {
        
                try{
                   let res = await fetch(`../API's/child care.json`)
                   let data = await res.json()
                   let data1 = data.productList
                   console.log("data",data)
                   displayData(data1)
                   dt=data1;
                }
                catch(error){
                  console.log("error",error)
                }
            }
            getData()
        
           
        
        
            function displayData(ram){
                main.innerHTML=null
                
                console.log("ram",ram)
                try{
                    let main = document.getElementById("main")
                    ram.map(function(ele){
                    
                     if(ele.outOfStock==true){
        
                        let Bathdiv1= document.createElement("div")
        
                        let Bathimg = document.createElement("img");
                        Bathimg.setAttribute("class","allImage")
                       // Bathimg.src = "https://assets.lybrate.com/rio/lupin/vbath/vbath_1.jpg";
                        Bathimg.src =ele.media[0].absoluteMediaPath
        
                        let imgButton = document.createElement("button")
                        imgButton.innerText = "OUT OF STOCK"
                        imgButton.setAttribute("class", "imgButton")
        
                        let productdiv1 = document.createElement("div")
                        productdiv1.setAttribute("class","productName")
        
                        let productp1 = document.createElement("p")
                        productp1.innerText=ele.productName
        
        
                        let descridiv1 = document.createElement("div")
                        descridiv1.setAttribute("class","prodDescription")
        
        
                        let descrip1 = document.createElement("p")
                        descrip1.innerText =ele.prodDesc
                       
                        let pricediv1 =  document.createElement("div");
                        pricediv1.setAttribute("class","priceId")
        
                        let price1 = document.createElement("p");
                        price1.innerText="₹"+ele.priceDTO.price
        
                        let price2 = document.createElement("p");
                        price2.innerText="₹"+ele.priceDTO.mrp
        
                        let price3 = document.createElement("p");
                        price3.innerText=ele.priceDTO.discountPercentage+"OFF";
        
                        let alldiv = document.createElement("div")
        
                        let alldivappended = document.createElement("div")
                        alldivappended.setAttribute("class","alldivappended")
        
                        let buttondiv = document.createElement("div")
                        buttondiv.setAttribute("class","buttondiv")
                        
                        // let button = document.createElement("button");
                        // button.innerText = "Add to cart";
                        // button.setAttribute("class" , "addToCart")
        
                        // button.addEventListener("click" , function(){
                        //   cartdata(ele);
                        // });
        
        
                        // alldiv.addEventListener("click", function() {
                        //     getalldeatails(ele);
                        // })
                        
        
                        
                        let div = document.createElement("div");
        
        
        
                        //buttondiv.append(button)
                        Bathdiv1.append(Bathimg,imgButton)
                        productdiv1.append(productp1)
                        descridiv1.append(descrip1)
                        pricediv1.append(price1,price2,price3)
                        
                        
                        alldiv.append(productdiv1,descridiv1,pricediv1)
        
                        div.append(alldiv )//,buttondiv
        
                        alldivappended.append( Bathdiv1,div)
                        alldivappended.style.opacity="0.5"
                        alldivappended.style.backgroundColor="#DEDEDE"
        
                        main.append(alldivappended,)
        
                      }
        
                         if(ele.outOfStock==false){
        
                        let Bathdiv1= document.createElement("div")
        
                        let Bathimg = document.createElement("img");
                        Bathimg.setAttribute("class","allImage")
                       // Bathimg.src = "https://assets.lybrate.com/rio/lupin/vbath/vbath_1.jpg";
                        Bathimg.src =ele.media[0].absoluteMediaPath
        
                        let productdiv1 = document.createElement("div")
                        productdiv1.setAttribute("class","productName")
        
                        let productp1 = document.createElement("p")
                        productp1.innerText=ele.productName
        
        
                        let descridiv1 = document.createElement("div")
                        descridiv1.setAttribute("class","prodDescription")
        
        
                        let descrip1 = document.createElement("p")
                        descrip1.innerText =ele.prodDesc
                       
                        let pricediv1 =  document.createElement("div");
                        pricediv1.setAttribute("class","priceId")
        
                        let price1 = document.createElement("p");
                        price1.innerText="₹"+ele.priceDTO.price
        
                        let price2 = document.createElement("p");
                        price2.innerText="₹"+ele.priceDTO.mrp
        
                        let price3 = document.createElement("p");
                        price3.innerText=ele.priceDTO.discountPercentage+"OFF";
        
                        let alldiv = document.createElement("div")
        
                        let alldivappended = document.createElement("div")
                        alldivappended.setAttribute("class","alldivappended")
        
                        let buttondiv = document.createElement("div")
                        buttondiv.setAttribute("class","buttondiv")
                        
                        let button = document.createElement("button");
                        button.innerText = "Add to cart";
                        button.setAttribute("class" , "addToCart")
        
                        button.addEventListener("click" , function(){
                          cartdata(ele);
                        });
        
        
                        alldiv.addEventListener("click", function() {
                            getalldeatails(ele);
                        })
                        
        
                        
                        let div = document.createElement("div");
        
        
        
                        buttondiv.append(button)
                        Bathdiv1.append(Bathimg)
                        productdiv1.append(productp1)
                        descridiv1.append(descrip1)
                        pricediv1.append(price1,price2,price3)
                        
                        
                        alldiv.append(productdiv1,descridiv1,pricediv1)
        
                        div.append(alldiv,buttondiv )
        
                        alldivappended.append( Bathdiv1,div)
                       
        
                        main.append(alldivappended,)
                        
                      }
        
                })
                       function cartdata(ele){
                         let cartArr=[]
                        console.log(ele);
                        // elem.quantity = 1;
                        cartArr.push(ele);
                        console.log(cartArr);
                        localStorage.setItem("cartItems", JSON.stringify(cartArr));
                        }
        
        
                        
                        let allProductArr = [];
                        function  getalldeatails(ele) {
                        allProductArr.push(ele);
                        console.log(allProductArr)
                        localStorage.setItem('productAlldetails',JSON.stringify(allProductArr))
        
                        location.href ="../main localStorage for all p/mainLocalstorage.html"
        
                }
        
        
        
        
        
                    }
                    catch(error){
                        console.log("error",error)
                    }
            }
        
        
        
        
        
        
                    //  here we have filtered price 
        
              document.querySelector("#search1").addEventListener("click", myfunction1)
        
                     function myfunction1(){
                         
                         var x = dt.filter(function(ele){
                             return ele.priceDTO.price<200
                             console.log("cdsghfgdshvchj",data1)
                             
                         })
        
                         displayData(x);
                     }
        
                document.querySelector("#search2").addEventListener("click", myfunction2)
        
                function myfunction2(){
                    
                    var x = dt.filter(function(ele){
                        return ele.priceDTO.price>200 &&  ele.priceDTO.price<500;
                        
                        
                    })
        
                    displayData(x);
                }
        
                document.querySelector("#search3").addEventListener("click", myfunction3)
        
                function myfunction3(){
                
                var x = dt.filter(function(ele){
                    return ele.priceDTO.price>500 &&  ele.priceDTO.price<1000;
                    
                    
                })
        
                displayData(x);
                }
                document.querySelector("#search4").addEventListener("click", myfunction4)
        
                function myfunction4(){
                
                var x = dt.filter(function(ele){
                    return ele.priceDTO.price>1000;
                    
                    
                })
        
                displayData(x);
                }
        
        
        
        
                  // here we have filtered brand
        
                      
        
                     function myfunctionB1(Timios){
                         var serch = "Timios"
                         var filterDeta = dt.filter(function(ele){
            
                            return ele.productName.includes(serch)
        
                           // console.log(ele.productName)
                        })
                           displayData(filterDeta)
                     }
        
        
        
                     function myfunctionB2( MommyPure){
                         var serch1 = "MommyPure"
                         var filterDeta1 = dt.filter(function(ele){
            
                            return ele.productName.includes(serch1)
        
                           // console.log(ele.productName)
                        })
                           displayData(filterDeta1)
                     }
        
        
        
                     function myfunctionB3(Donum){
                         var serch = "Donum"
                         var filterDeta = dt.filter(function(ele){
            
                            return ele.productName.includes(serch)
        
                           // console.log(ele.productName)
                        })
                           displayData(filterDeta)
                     }
        
        
                     function myfunctionB4(NutriBears){
                         var serch = "NutriBears"
                         var filterDeta = dt.filter(function(ele){
            
                            return ele.productName.includes(serch)
        
                           // console.log(ele.productName)
                        })
                           displayData(filterDeta)
                     }
        
                     function myfunctionB5(Zerobeli){
                         var serch = "Zerobeli"
                         var filterDeta = dt.filter(function(ele){
            
                            return ele.productName.includes(serch)
        
                           // console.log(ele.productName)
                        })
                           displayData(filterDeta)
                     }
        
                     function myfunctionB6(Nestle){
                         var serch = "Nestle"
                         var filterDeta = dt.filter(function(ele){
            
                            return ele.productName.includes(serch)
        
                           // console.log(ele.productName)
                        })
                           displayData(filterDeta)
                     }
        
        
                     function myfunctionB7(Onelife){
                         var serch = "Onelife"
                         var filterDeta = dt.filter(function(ele){
            
                            return ele.productName.includes(serch)
        
                           // console.log(ele.productName)
                        })
                           displayData(filterDeta)
                     }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                                      //here we have filtered Discount
                document.querySelector("#searchD1").addEventListener("click", myfunctionD1)
        
                    function myfunctionD1(){
        
                    var x = dt.filter(function(ele){
                        return ele.priceDTO.discountPercentage >"10%" && ele.priceDTO.discountPercentage <"20%";         
                    })
        
                    displayData(x);
                    }
        
                    document.querySelector("#searchD2").addEventListener("click", myfunctionD2)
        
                    function myfunctionD2(){
        
                    var x = dt.filter(function(ele){
                        return ele.priceDTO.discountPercentage >"20%" && ele.priceDTO.discountPercentage <"30%";         
                    })
        
                    displayData(x);
                    }
        
                    document.querySelector("#searchD3").addEventListener("click", myfunctionD3)
        
                    function myfunctionD3(){
        
                    var x = dt.filter(function(ele){
                        return ele.priceDTO.discountPercentage >"30%" && ele.priceDTO.discountPercentage <"40%";         
                    })
        
                    displayData(x);
                    }
        
        
                    document.querySelector("#searchD4").addEventListener("click", myfunctionD4)
        
                    function myfunctionD4(){
        
                    var x = dt.filter(function(ele){
                        return ele.priceDTO.discountPercentage >"40%" && ele.priceDTO.discountPercentage <"50%";         
                    })
        
                    displayData(x);
                    }
        
                    document.querySelector("#searchD5").addEventListener("click", myfunctionD5)
        
                    function myfunctionD5(){
        
                    var x = dt.filter(function(ele){
                        return ele.priceDTO.discountPercentage >"50%" && ele.priceDTO.discountPercentage <"60%";         
                    })
        
                    displayData(x);
                    }
        
        
                    document.querySelector("#searchD6").addEventListener("click", myfunctionD6)
        
                    function myfunctionD6(){
        
                    var x = dt.filter(function(ele){
                        return ele.priceDTO.discountPercentage >"60%" ;         
                    })
        
                    displayData(x);
                    }
        
        
        
        
                    //here i am making low to high  shorting
                    
                   
                        document.querySelector("#para1").addEventListener("click",shortitem)
                        
                        function shortitem(){
                    
                              dt.sort(function(a,b){
                                  return a.priceDTO.price-b.priceDTO.price
        
                                })
                                displayData(dt)
        
                            }
                            
                        
                            document.querySelector("#para2").addEventListener("click",shortitem2)
                        
                        function shortitem2(){
                    
                              dt.sort(function(a,b){
                                  return b.priceDTO.price-a.priceDTO.price
        
                                })
                                displayData(dt)
        
                            }    
        
        
        
        
                            document.querySelector("#clear").addEventListener("click", refresh)
                            
                            function refresh(){
                                window.location.reload()
                            }