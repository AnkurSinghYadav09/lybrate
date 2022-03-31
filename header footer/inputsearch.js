const inputsearch=async()=>
{
    try
    {
        let input=document.getElementById("navbarsearch").value;
        inputarr=input.trim().split(" ");
        for(let i=0; i<inputarr.length; i++)
        {
            inputarr[i]=inputarr[i].toLowerCase();
        }
        
        //console.log(inputarr);

        let childcare=await fetch(`../API's/child care.json`)
        let childcaredata=await childcare.json();
        let childarr=childcaredata.productList;
        //console.log('childarr:', childarr)

        let food=await fetch(`../API's/food and drinks.json`);
        let fooddata=await food.json();
        let foodarr=fooddata.productList;
        //console.log('foodarr:', foodarr)

        let personalcare=await fetch(`../API's/personal care.json`);
        let personaldata=await personalcare.json();
        let personalarr=personaldata.productList;
        //console.log('personalarr:', personalarr)

        let protein=await fetch(`../API's/protein and fitness.json`);
        let proteindata=await protein.json();
        let proteinarr=proteindata.productList;
        //console.log('proteinarr:', proteinarr)

        let swellness=await fetch(`../API's/sexual wellness.json`);
        let swellnessdata=await swellness.json();
        let swellnessarr=swellnessdata.productList;
        //console.log('swellnessarr:', swellnessarr)

        let skincare=await fetch(`../API's/skin and hair care.json`);
        let skincaredata=await skincare.json();
        let skincarearr=skincaredata.productList;
        //console.log('skincarearr:', skincarearr)

        let vitamins=await fetch(`../API's/vitamins and suppliments.json`);
        let vitaminsdata=await vitamins.json();
        let vitaminsarr=vitaminsdata.productList;
        //console.log('vitaminsarr:', vitaminsarr)

        let weight=await fetch(`../API's/weight management.json`);
        let weightdata=await weight.json();
        let weightarr=weightdata.productList;
        //console.log('weightarr:', weightarr)


        let defaultprod=[];
        for(let i=0; i<skincarearr.length; i++)
        {
            if(skincarearr[i].outOfStock===true && skincarearr[i].productName=="Auggmin Herbal Vibe Hair Growth Kit - 3 in 1 Pack")
            {
                defaultprod.push(skincarearr[i]);
                break;
            }
        }

        for(let j=0; j<foodarr.length; j++)
        {
            if(foodarr[j].outOfStock===true && foodarr[j].productName=="15 Days Weight Loss Pack (Meal Shake (Chocolate) + Meal-Soup + Green Coffee + Green Tea)")
            {
                defaultprod.push(foodarr[j]);
                break;
            }
        }


        let arr=[];
        pushdata(arr, childarr);
        pushdata(arr, foodarr);
        pushdata(arr, personalarr);
        pushdata(arr, proteinarr);
        pushdata(arr, swellnessarr);
        pushdata(arr, skincarearr);
        pushdata(arr, vitaminsarr);
        pushdata(arr, weightarr);
        //console.log(arr);

        let bag=[];
        for(let i=0; i<arr.length; i++)
        {
            let flag1=false;
            let flag2=false;

            let name=arr[i].productName.trim().split(" ");

            if(inputarr.length>1)
            {
                for(let k=0; k<inputarr.length; k++)
                {
                    for(let j=0; j<name.length; j++)
                    {
                        name[j]=name[j].toLowerCase();

                        if(inputarr[0]===name[j])
                        {
                            //console.log(name[j], inputarr[k]);
                            flag1=true;
                        }

                        if(inputarr[1]===name[j] && flag1===true)
                        {
                            //console.log(name[j], inputarr[k]);
                            flag2=true;
                            break;
                        }
                    }

                    if(flag2===true)
                    {
                        break;
                    }
                }

                if(flag2===true)
                {
                    bag.push(arr[i]);
                }
            }
            else
            {
                for(let k=0; k<inputarr.length; k++)
                {
                    for(let j=0; j<name.length; j++)
                    {
                        name[j]=name[j].toLowerCase();

                        if(inputarr[k]===name[j])
                        {
                            //console.log(name[j], inputarr[k]);
                            flag1=true;
                        }
                    }

                    if(flag1===true)
                    {
                        break;
                    }
                }

                if(flag1===true)
                {
                    bag.push(arr[i]);
                }
            }
        }
        
        localStorage.setItem("searcheditems", JSON.stringify(bag));
        localStorage.setItem("searchkeyword", input);

        inputonfocus(bag, inputarr, defaultprod);

        let searched=document.getElementById("navbarsearch");
        searched.addEventListener("keypress", (event)=>
        {
            if(event.code==='Enter')
            {
                location.href="../search/searcheditems.html";
            }
        })
    }


    catch(err)
    {
        console.log(err);
    }
}



function pushdata(arr, arr2)
{
    for(let i=0; i<arr2.length; i++)
    {
        arr.push(arr2[i]);
    }
}


const inputonfocus=(data, input, defaultprod)=>
{
    let focusdiv=document.getElementById("onfocuscontent");
    focusdiv.innerHTML=null;
    //console.log(data);

    if(data===undefined || input=="")
    {
        let focusdiv=document.getElementById("onfocuscontent");
        focusdiv.innerHTML=null;

        let h4=document.createElement("h4");
        h4.innerText="Hot Offers";
        focusdiv.append(h4);

        defaultprod.forEach(function(ele)
        {
            let focusdiv=document.getElementById("onfocuscontent");
            let div=document.createElement("div");

            let img=document.createElement("img");
            img.src=ele.media[0].absoluteMediaPath;

            let title=document.createElement("p");
            title.innerText=ele.productName;

            div.append(img, title);
            focusdiv.append(div);
        })
    }
    else if(data.length==0)
    {
        let p=document.createElement("p");
        p.innerText="No results found";

        focusdiv.append(p);
    }
    else if(data.length>0)
    {
        data.forEach(function(ele, ind)
        {
            if(ind<6)
            {
                let focusdiv=document.getElementById("onfocuscontent");
                let div=document.createElement("div");

                let img=document.createElement("img");
                img.src=ele.media[0].absoluteMediaPath;

                let title=document.createElement("p");
                title.innerText=ele.productName;

                div.append(img, title);
                focusdiv.append(div);
            }
        })
    }

}

const inputonfocusout=()=>
{
    let focusdiv=document.getElementById("onfocuscontent");
    focusdiv.innerHTML=null;
}

const tosearchpage=()=>
{
    location.href="../search/searcheditems.html";
}
