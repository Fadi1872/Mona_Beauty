const p = document.querySelectorAll(".productNumber");

let makeupNum = 0,
  accessoriesNum = 0,
  bundlesNum = 0;
const countProduct = (data) => {
  data.forEach((element) => {
    if(element.category == 'make up') makeupNum++
    else if(element.category == 'accessories') accessoriesNum++
    else if(element.category == 'bundles') bundlesNum++
  });
  p[0].innerHTML = `${makeupNum} products`
  p[1].innerHTML = `${accessoriesNum} products`
  p[2].innerHTML = `${bundlesNum} products`
};

fetch("./data/products.json")
  .then((res) => res.json())
  .then((res) => countProduct(res));
