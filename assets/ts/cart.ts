export {};
import { Item } from "./types/types";


let itemName: Item[] = [
  {name:"slightly Old Apple", price:70.23, qty: 0},
  {name:"HalvSpist Jokke bolle", price:50.7, qty: 0},
  {name:"Vintage Pepsi",price:79.4, qty: 0}
];

function addToCart(productName: string): void {
  updateTotalProducts(productName);

  const item = document.createElement("p");

  for (let i = 0; i < itemName.length; i++) {
    if (productName == itemName[i].name) {
      item.textContent = itemName[i].name + " x 1 kr" + itemName[i].price;
    }
  }

  const removeButton = document.createElement("button");
  removeButton.textContent = "Fjern";
  removeButton.onclick = function() {
    removeCart(item, productName);  
  }

  item.appendChild(removeButton);

  const cart = document.getElementById("cart");
  if (cart) cart.appendChild(item);
}

function removeCart(item: HTMLElement, name: string): void {
  if (item) {
    for (let i = 0; i < itemName.length; i++) {
      if (name === itemName[i].name) {
        itemName[i].qty--;

        let product = calculatetotalProducts();
        let price = calcualteTotalAmmount();

        const el = document.getElementById("total-products");
        if (el) {
          if (product == 0) {
            el.textContent = "Tom HandleKurv";
          } else {
            el.textContent = "Antall varer : " + product + " Total pris : kr " + price;
          }
        }
      }
    }
    const cart = document.getElementById("cart");
    if (cart) cart.removeChild(item);
  } else {
    console.log('Error : can not find item')
  }
}

function updateTotalProducts(name: string): void {
  for (let i = 0; i < itemName.length; i++) {
    if (name == itemName[i].name) {
      itemName[i].qty++;
    }
  }
  let price = calcualteTotalAmmount();
  let product = calculatetotalProducts();

  const el = document.getElementById("total-products");
  if (el) el.textContent = "Antall varer : " + product + " Total pris : kr" + price;
}

function calculatetotalProducts(): number {
  let total = 0;
  for (let i = 0; i < itemName.length; i++) {
    total += itemName[i].qty;
  }
  return total;
}

function calcualteTotalAmmount(): number {
  let total = 0;
  for (let i = 0; i < itemName.length; i++) {
    total += (itemName[i].qty * itemName[i].price);
  }       
  return total;
}

function toggleShoppingCart(): void {
 let cls = document.getElementsByClassName('wrapper-container');
 for (let i = 0; i < cls.length; i++) {
  cls[i].classList.toggle('hide');
 }
}
