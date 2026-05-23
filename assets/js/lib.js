//  Initializing the project's object
let itemName = [

              {name:"slightly Old Apple", price:70.23, qty: 0},
              {name:"HalvSpist Jokke bolle", price:50.7, qty: 0},
              {name:"Vintage Pepsi",price:79.4, qty: 0}];

function addToCart(productName)
{
  // @Nico
  updateTotalProducts(productName);

  const item = document.createElement("p");

  // edited : Gjorde funksjonen litt mer dynamisk i forhold til objektet @krigjo25
  for (let i = 0; i < itemName.length; i++)
  {
    // Ensure its the same product
    if (productName == itemName[i].name)
    {
      // Creating a new product
      item.textContent = itemName[i].name + " x 1 kr" + itemName[i].price;
    }

  }

    // @Nico
  // Lager en knapp for å fjerne produktet fra handlekurven 
  const removeButton = document.createElement("button");
  removeButton.textContent = "Fjern";
  removeButton.onclick = function() {
  removeCart(item, productName);  
  }

  //  Append button and item 
  item.appendChild(removeButton);

  const cart = document.getElementById("cart");
  cart.appendChild(item);
}

function removeCart(item, name)
{

  // Når den får input fra addtocart
  if (item)
    {

      //  Edited : using another variable
      for (let i = 0; i < itemName.length; i++)
        {
          // Ensure its the same product
          if (name === itemName[i].name)
          {
            //  Decrease quanity
            itemName[i].qty--;

            //  Calculate total products
            product = calculatetotalProducts();
            price = calcualteTotalAmmount();

            //  Ensure 
            if (product == 0)
            {
              document.getElementById("total-products").textContent = "Tom HandleKurv";
            } else {
    
              document.getElementById("total-products").textContent = "Antall varer : " + product + " Total pris : kr " + price;
            }
            
          }
      
      }
       //  RemoveChild
      const cart = document.getElementById("cart");
      cart.removeChild(item);
    }
  else
  {
    console.log('Error : can not find item')
  }
}


function updateTotalProducts(name)
{

    //Edited:  Updating quanity & find total
  for (let i = 0; i < itemName.length; i++)
  {
    if (name == itemName[i].name)
      {
        //  Increase quanity
        itemName[i].qty++;
      }
  }
  //Edited: Find total ammount and total Products
  price = calcualteTotalAmmount();
  product = calculatetotalProducts();

  document.getElementById("total-products").textContent = "Antall varer : " + product + " Total pris : kr" + price;
  
}
// @krigjo25
function calculatetotalProducts()
{
      //  Initializing variable
      let total = 0;

      //  Updating quanity
      for (let i = 0; i < itemName.length; i++)
        {
          //  Calculate and add
          total += itemName[i].qty;
        }
        return total;
}
// @krigjo25
function calcualteTotalAmmount()
{
    //  Initializing variable
    let total = 0;

    //  Updating quanity
    for (let i = 0; i < itemName.length; i++)
      {
        //  Calculate and add
        total += (itemName[i].qty * itemName[i].price);
      }       

      return total;
}
// @krigjo25
function toggleShoppingCart()
{
  //  Fetch element to show
  // @krigjo25
 let cls = document.getElementsByClassName('wrapper-container');

  //  Initialize | check if condition is met | increment
 for (let i = 0; i < cls.length; i++)
 {
  // Toggle the class element off / on
  cls[i].classList.toggle('hide');
 }
  return;

}

