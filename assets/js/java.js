function addtocart(productName) {
  // @Nico
  //  cart is constant = ->
  const cart = document.getElementById("cart");
  const item = document.createElement("p");
  item.textContent = productName;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Fjern";
  removeButton.onclick = function() {
    removeFromCart(item);
  };

  item.appendChild(removeButton);
  cart.appendChild(item);

  updateTotalProducts();
}

function calculateTotal(name, qty) {
  // @krigjo25
  // Denne funksjonen beregner totalbeløpet i handlekurven

  // Initialisering av en liste med produktnavn
  const nlist = ["a", "b", "c"];

  // Initialisering av en liste med tilsvarende priser
  const price = [1, 2, 3]; // Anta at dette er prisene for 'a', 'b', 'c'

  // Variabel for å lagre totalbeløpet
  let totalAmount = 0;

  // Beregner totalen for varene i handlekurven
  for (let i = 0; i < name.length; i++) {
    for (let j = 0; j < nlist.length; j++) {
      
      // Sørger for at navnet samsvarer med listen
      if (nlist[j] === name[i]) {
        // Beregner prisen basert på mengden
        let value = price[j];
        totalAmount += value * qty[i];
      }
    }
  }

  // @krigjo25
  // Oppdaterer totalbeløpet
  document.getElementById("total-amount").textContent = totalAmount + " kr";
  return totalAmount;
}

function removeFromCart(item) {

  // legge til en variabel
  const cart = document.getElementById("cart");
  if (item) {
    cart.removeChild(item);
    updateTotalProducts();
  } else {
    console.error("Elementet finnes ikke eller er allerede fjernet.");
  }
}

function updateTotalProducts() {
  const cart = document.getElementById("cart");
  const totalProductsCount = cart.getElementsByTagName("p").length;

  let totalprice = calculateTotal(totalProductCount);

  document.getElementById("total-products-count").textContent = totalProductsCount;

  
}

function closeShoppingCart()
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
