// handle adding to cart button on the product page
const handleAddToCart = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
  if (!cart) {
    let cart = [];
    cart.push({
      id: id,
      quantity: 1,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    let productId = -1;
    cart.forEach((element, index) => {
      if (element.id == id) productId = index;
    });
    if (productId == -1) {
      cart.push({
        id: id,
        quantity: 1,
      });
    } else {
      cart[productId].quantity++;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

// handling the cart in the cart page
const cart_container = document.querySelector("#cart");

const addItemToCart = (item, quantity) => {
  cart_container.innerHTML += `
    <div
        class="cart_item p-3 mb-2 d-flex align-items-center justify-content-between"
    >
        <div class="d-flex align-items-center">
        <div
            class="cart_img back_img"
            style="--img-url: url('${item.img}')"
        ></div>
        <div class="d-md-flex gap-2">
          <h1 class="sub_title mb-0 ms-3">${item.name}</h1>
          <p class="sub-big_header mb-0 ms-3">${item.price}$</p>
        </div>
        </div>
        <div class="d-flex align-items-center gap-3">
        <button
            class="main_button cart_img d-flex justify-content-center align-items-center fs-2 trans"
            onclick="handleProduct(${item.id},0)"
        >
            <span>-</span>
        </button>
        <p class="sub-big_header mb-0">${quantity}</p>
        <button
            class="main_button cart_img d-flex justify-content-center align-items-center fs-2 trans"
            onclick="handleProduct(${item.id},1)"
        >
            <span>+</span>
        </button>
        </div>
    </div>
    `;
};

let response_cart;

const addItemsToCard = (cards) => {
  cart_container.innerHTML = "";
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart.forEach((element) => {
    addItemToCart(cards[element.id], element.quantity);
  });
};

const handleProduct = (id, method) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let productId = -1;
  cart.forEach((element, index) => {
    if (element.id == id) productId = index;
  });
  if (method) cart[productId].quantity++;
  else {
    cart[productId].quantity--;
    if (cart[productId].quantity == 0) cart.pop(productId);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  addItemsToCard(response_cart);
};

fetch("./data/products.json")
  .then((res) => res.json())
  .then((res) => {
    response_cart = res;
    addItemsToCard(res);
  });
