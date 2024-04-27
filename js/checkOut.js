const baseFare_p = document.querySelector("#baseFare");
const taxes_p = document.querySelector("#taxes");
const total_p = document.querySelector("#total");
const cart_bill = JSON.parse(localStorage.getItem("cart"));
let baseFare = 0;
// taxes 2% on each item
let taxes = 2;
let shipping = 50;
let discount = 5;
let total = 0;

fetch("./data/products.json")
  .then((res) => res.json())
  .then((res) => {
    let coutProducts = 0;
    cart_bill.forEach((element) => {
      coutProducts += 1 * element.quantity;
      baseFare += res[element.id].price * element.quantity;
    });
    total += baseFare + taxes * coutProducts + shipping;
    total = total - Math.round(total * 0.05, 1);
    baseFare_p.innerHTML = `${baseFare}$`;
    taxes_p.innerHTML = `${taxes * coutProducts}$`;
    total_p.innerHTML = `${total}$`;
  });
