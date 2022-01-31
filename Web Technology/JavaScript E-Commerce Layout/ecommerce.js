function addProduct()
{
    // Get values from input fields.
    var pname = document.getElementById("pname");
    var pdesc = document.getElementById("pdesc");
    var pqty = document.getElementById("pqty");
    var pprice = document.getElementById("pprice");
    var pimg = document.getElementById("pimg");
    var randomID="id" + Math.random().toString(16).slice(2); // Generate random product id for uniqueness.
    
    // Get entire right section of page that holds our products list.
    var fullProduct = document.getElementById("fullProduct");
    
    // Create a div for single product 
    var parentDiv = document.createElement("div");
    parentDiv.className="row justify-content-between singleProduct";
    parentDiv.id=randomID;
    
    // Create first child element which holds our product image.
    var childDiv1 = document.createElement("div");
    childDiv1.className="col-4 prodimg";
    
    // Get file path of image and create img tag.
    var imgTag = document.createElement("img");
    var temp=window.URL.createObjectURL(pimg.files[0]);
    imgTag.classList.add("productImage");
    imgTag.setAttribute("src", temp);

    // Add image tag to our first child div.
    childDiv1.appendChild(imgTag);

    // Create second child element which holds our product information (name, price, qty etc).
    var childDiv2 = document.createElement("div");
    childDiv2.className="col-8 productList";

    var nameTag0 = document.createElement("b");
    nameTag0.innerText = "Product Name: ";

    var nameTag1 = document.createElement("span");
    nameTag1.innerText = pname.value;

    var descTag0 = document.createElement("b");
    descTag0.innerText = "Product Description: ";

    var descTag1 = document.createElement("span");
    descTag1.innerText = pdesc.value;

    var qtyTag0 = document.createElement("b");
    qtyTag0.innerText = "Product Quantity: ";

    var qtyTag1 = document.createElement("span");
    qtyTag1.innerText = pqty.value;
    qtyTag1.id="plq"+randomID;

    var priceTag0 = document.createElement("b");
    priceTag0.innerText = "Product Price: ";

    var priceTag1 = document.createElement("span");
    priceTag1.innerText = pprice.value;

    var addToCart = document.createElement("button");
    addToCart.innerHTML="Add to Cart";
    addToCart.className="btn btn-primary";
    addToCart.style.float="right";
    addToCart.style.marginRight="5%";
    addToCart.setAttribute("onclick","addToCart(this)");

    // Add all product details to our second child div.
    childDiv2.appendChild(nameTag0);
    childDiv2.appendChild(nameTag1);
    childDiv2.appendChild(document.createElement("br"));
    childDiv2.appendChild(descTag0);
    childDiv2.appendChild(descTag1);
    childDiv2.appendChild(document.createElement("br"));
    childDiv2.appendChild(qtyTag0);
    childDiv2.appendChild(qtyTag1);
    childDiv2.appendChild(document.createElement("br"));
    childDiv2.appendChild(priceTag0); 
    childDiv2.appendChild(priceTag1);
    childDiv2.appendChild(document.createElement("br"));
    childDiv2.appendChild(addToCart);

    // Add both child divs to their parent div which represents one single product.
    parentDiv.appendChild(childDiv1);
    parentDiv.appendChild(childDiv2);
    
    // Finally add single product to right side of Product list which holds multiple such products.
    fullProduct.appendChild(parentDiv);
}

function addToCart(id)
{
    var parentID=id.parentNode.parentNode.id;
    var pname=document.getElementById(parentID).getElementsByClassName("productList")[0].getElementsByTagName("span")[0].innerHTML;      
    var pqty=parseInt(document.getElementById(parentID).getElementsByClassName("productList")[0].getElementsByTagName("span")[2].innerHTML);
    var pprice=document.getElementById(parentID).getElementsByClassName("productList")[0].getElementsByTagName("span")[3].innerHTML;
    var imgpath=document.getElementById(parentID).getElementsByClassName("productImage")[0].src;
    var prc=parseInt(document.getElementById(parentID).getElementsByClassName("productList")[0].getElementsByTagName("span")[3].innerHTML);
            
    var qty=parseInt(prompt("Enter Quantity: "));

    if(qty<=pqty && qty>0)
    {
        if(document.getElementById("ct"+parentID) === null)
        {
            var newqty=pqty-qty;
            document.getElementById(parentID).getElementsByClassName("productList")[0].getElementsByTagName("span")[2].innerHTML=newqty;
            
            var cartProduct = document.getElementById("cartProduct");
 
            var parentDiv = document.createElement("div");
            parentDiv.className="row justify-content-between singleProduct";
            parentDiv.id="ct"+parentID;
            
            var childDiv1 = document.createElement("div");
            childDiv1.className="col-4 prodimg";

            var imgTag = document.createElement("img");
            imgTag.classList.add("productImage");
            imgTag.setAttribute("src", imgpath);

            childDiv1.appendChild(imgTag);

            var childDiv2 = document.createElement("div");
            childDiv2.className="col-8 productList";

            var nameTag0 = document.createElement("b");
            nameTag0.innerText = "Product Name: ";

            var nameTag1 = document.createElement("span");
            nameTag1.innerText = pname;
            nameTag1.id="pn"+parentID;

            var qtyTag0 = document.createElement("b");
            qtyTag0.innerText = qty;
            qtyTag0.id="pq"+parentID;

            var qtyTag1 = document.createElement("b");
            qtyTag1.innerText = " x ";

            var priceTag0 = document.createElement("b");
            priceTag0.innerText = pprice;
            priceTag0.id="pp"+parentID;

            var equalTag = document.createElement("b");
            equalTag.innerText = " = ";

            var sumTag = document.createElement("b");
            sumTag.innerText = parseInt(qty*pprice);
            sumTag.id="pt"+parentID;
            
            var deleteFromCart = document.createElement("button");
            deleteFromCart.innerHTML="Delete Item";
            deleteFromCart.className="btn btn-primary";
            deleteFromCart.setAttribute("onclick","deleteFromCart(this)");
        
            // Add all product details to our second child div.
            childDiv2.appendChild(nameTag0);
            childDiv2.appendChild(nameTag1);
            childDiv2.appendChild(document.createElement("br"));
            childDiv2.appendChild(qtyTag0);
            childDiv2.appendChild(qtyTag1);
            childDiv2.appendChild(priceTag0);
            childDiv2.appendChild(equalTag);
            childDiv2.appendChild(sumTag);
            childDiv2.appendChild(document.createElement("br"));
            childDiv2.appendChild(deleteFromCart);

            // Add both child divs to their parent div which represents one single product.
            parentDiv.appendChild(childDiv1);
            parentDiv.appendChild(childDiv2);
            
            // Finally add single product to right side of Product list which holds multiple such products.
            cartProduct.appendChild(parentDiv);

            document.getElementById("cTotal").innerHTML=parseInt(document.getElementById("cTotal").innerHTML)+(prc*qty);
        }
        else
        {
            var newqty=pqty-qty;
            document.getElementById(parentID).getElementsByClassName("productList")[0].getElementsByTagName("span")[2].innerHTML=newqty;
            document.getElementById("pq"+parentID).innerHTML=parseInt(document.getElementById("pq"+parentID).innerHTML)+qty;
            document.getElementById("pt"+parentID).innerHTML=parseInt(document.getElementById("pt"+parentID).innerHTML)+(prc*qty)
            document.getElementById("cTotal").innerHTML=parseInt(document.getElementById("cTotal").innerHTML)+(prc*qty);
        }
    }
    else
    {
        alert("Sorry, Required quantity is not available.");
    }
}

function deleteFromCart(value)
{
    // Get Product ID
    var productID=value.parentNode.parentNode.id.slice(2);

    // Get quantity from cart
    var qty=document.getElementById("pq"+productID).innerHTML;

    // Get the calculated price from cart
    var DeductPrice=document.getElementById("pt"+productID).innerHTML;

    // Update quantity in Product list
    document.getElementById("plq"+productID).innerHTML=parseInt(document.getElementById("plq"+productID).innerHTML)+parseInt(qty);

    // Remove product from cart
    document.getElementById("cartProduct").removeChild(document.getElementById("ct"+productID));

    // Deduct calculated price from cart total
    document.getElementById("cTotal").innerHTML=parseInt(document.getElementById("cTotal").innerHTML)-parseInt(DeductPrice);
}