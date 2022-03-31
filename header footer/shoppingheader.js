function shoppingheader()
{
    return `<div id="navbar">
        
    <div id="imagelogo">
        <img style="height: 36px;" src="https://www.lybrate.com/img/Lybrate-Goodkart-Logo.png" alt="GoodKart">
    </div>

    <div id="navb-arsearch-div">
        <input type="text" id="navbarsearch" placeholder="Search for health products" onfocus="inputsearch()" onfocusout="inputonfocusout()" oninput="inputsearch()">
        <button onclick="tosearchpage()">
            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path ng-attr-d="{{$root.icons[ctrl.p]}}" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg>
        </button>
        <div id="onfocuscontent"></div>
    </div>
    
    <div id="left-itemsi-in-navbar">
        
        <div class="sign-in-drop" onmouseleave="clear_dropdown()" onmouseover="dropdown()">
            <p>Hello, Sign in</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path ng-attr-d="{{$root.icons[ctrl.p]}}" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
        </div>
        
        <div id="top-dropdown" onmouseover="dropdown()" onmouseleave="clear_dropdown()" onscroll="clear_dropdown()"></div>
    
        <div class="lybrateCash">
            <img style="margin-right: 4px;" src="https://assets.lybrate.com/q_auto,f_auto,h_20,w_20/imgs/product/d2d/PatientGoldMembership/lybrate_icon_red_large.png" alt="lybrateCash">
            LybrateCash
        </div>

        <div>
            <button>Home</button>
        </div>

        <div style="display: flex; align-items: center; cursor: pointer;">
            <p id="cart-count">0</p>
            <svg fill="rgb(200,37,6)" xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path ng-attr-d="{{$root.icons[ctrl.p]}}" d="M8,17.816a2.3,2.3,0,0,1-2.178-1.728L3.411,5.261a2.087,2.087,0,0,0-.695-1.006L0.475,2.771a0.815,0.815,0,0,1-.227-1.14L0.364,1.46a0.839,0.839,0,0,1,1.155-.224L3.76,2.721A3.89,3.89,0,0,1,5.24,4.864L7.654,15.691A0.434,0.434,0,0,0,8,15.968H19.965a0.488,0.488,0,0,0,.386-0.3l1.728-6.789a0.833,0.833,0,0,1,1.01-.6l0.2,0.05a0.82,0.82,0,0,1,.6,1l-1.728,6.789a2.32,2.32,0,0,1-2.2,1.694H8Zm11.754,2.695A1.534,1.534,0,1,1,18.223,19,1.525,1.525,0,0,1,19.757,20.511Zm-8.842,0A1.535,1.535,0,1,1,9.381,19,1.525,1.525,0,0,1,10.916,20.511Z"></path></svg>
        </div>
    
    </div>

    
</div>
<div id="category">
    <div style="display: flex; margin: auto; width: 90%; justify-content: space-between; align-items: center;">
        <div style="cursor:context-menu;" onscroll="clear_dropdown()" onmouseleave="clear_dropdown()" onmouseover="shopbycategory()">
            <p>Shop By Category</p>
            <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path ng-attr-d="{{$root.icons[ctrl.p]}}" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
        </div>
        <div id="shop-by-category-drop" style="display: inline;" onscroll="clear_dropdown()" onmouseover="shopbycategory()" onmouseleave="clear_dropdown()"></div>

        <div style="cursor:context-menu;" onmouseover="clear_dropdown()" onscroll="clear_dropdown()" onmouseleave="clear_dropdown()">Redeem LybrateCash</div>

        <div style="cursor:context-menu;" onmouseover="swellnessfn()" onscroll="clear_dropdown()" onmouseleave="clear_dropdown()">
            <p>Sexual Wellness</p>
            <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path ng-attr-d="{{$root.icons[ctrl.p]}}" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
        </div>
        <div id="swellness-drop" style="display: inline;" onscroll="clear_dropdown()" onmouseover="swellnessfn()" onmouseleave="clear_dropdown()"></div>

        <div style="cursor:context-menu;" onmouseover="fooddrink()" onmouseleave="clear_dropdown()" onscroll="clear_dropdown()">
            <p>Food & Drink</p>
            <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path ng-attr-d="{{$root.icons[ctrl.p]}}" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
        </div>
        <div id="food-drop" style="display: inline;" onscroll="clear_dropdown()" onmouseover="fooddrink()" onmouseleave="clear_dropdown()"></div>

        <div style="cursor:context-menu;" onmouseover="vitaminsfn()" onmouseleave="clear_dropdown()" onscroll="clear_dropdown()">
            <p>Vitamin & Supplement</p>
            <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path ng-attr-d="{{$root.icons[ctrl.p]}}" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
        </div>
        <div id="vitamis-drop" style="display: inline;" onmouseover="vitaminsfn()" onmouseleave="clear_dropdown()" onscroll="clear_dropdown()"></div>

        <div style="cursor:context-menu;" onmouseover="weightdropfn()" onmouseleave="clear_dropdown()" onscroll="clear_dropdown()">
            <p>Weight Management</p>
            <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path ng-attr-d="{{$root.icons[ctrl.p]}}" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
        </div>
        <div id="weight-drop" style="display: inline;" onmouseover="weightdropfn()" onmouseleave="clear_dropdown()" onscroll="clear_dropdown()"></div>

        <div style="cursor:context-menu;" onmouseover="childdropfn()" onmouseleave="clear_dropdown()" onscroll="clear_dropdown()">
            <p>Child Care</p>
            <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path ng-attr-d="{{$root.icons[ctrl.p]}}" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
        </div>
        <div id="child-drop" style="display: inline;" onmouseover="childdropfn()" onmouseleave="clear_dropdown()" onscroll="clear_dropdown()"></div>
    </div>
</div>`;
}

export default shoppingheader;