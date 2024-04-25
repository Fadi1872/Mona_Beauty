const p = document.querySelectorAll(".productNumber");

let numbers = [0, 0, 0];
const countProduct = (data) => {
  data.forEach((element) => {
    if (element.category == "make up") numbers[0]++;
    else if (element.category == "accessories") numbers[1]++;
    else if (element.category == "bundles") numbers[2]++;
  });

  p.forEach((element, index) => {
    element.innerHTML = `${numbers[index]} products`;
  });
};

fetch("./data/products.json")
  .then((res) => res.json())
  .then((res) => countProduct(res));
