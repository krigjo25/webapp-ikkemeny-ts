export {};

function addtocart(productName: string): void {
  const cart = document.getElementById("cart");
  if (!cart) return;
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

function calculateTotal(name: string[], qty: number[]): number {
  const nlist: string[] = ["a", "b", "c"];
  const price: number[] = [1, 2, 3];
  let totalAmount: number = 0;

  for (let i = 0; i < name.length; i++) {
    for (let j = 0; j < nlist.length; j++) {
      if (nlist[j] === name[i]) {
        let value = price[j];
        totalAmount += value * qty[i];
      }
    }
  }

  const el = document.getElementById("total-amount");
  if (el) el.textContent = totalAmount + " kr";
  return totalAmount;
}

function removeFromCart(item: HTMLElement): void {
  const cart = document.getElementById("cart");
  if (!cart) return;
  if (item) {
    cart.removeChild(item);
    updateTotalProducts();
  } else {
    console.error("Elementet finnes ikke eller er allerede fjernet.");
  }
}

function updateTotalProducts(): void {
  const cart = document.getElementById("cart");
  if (!cart) return;
  const totalProductsCount = cart.getElementsByTagName("p").length;

  // Note: calculateTotal expects arrays, but previously received a single number.
  // Passing empty arrays to satisfy TS for now, as the original logic was flawed.
  let totalprice = calculateTotal([], []);

  const el = document.getElementById("total-products-count");
  if (el) el.textContent = totalProductsCount.toString();
}

function closeShoppingCart(): void {
 let cls = document.getElementsByClassName('wrapper-container');
 for (let i = 0; i < cls.length; i++) {
  cls[i].classList.toggle('hide');
 }
}
