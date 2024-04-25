const product_container = document.querySelector("#product_container");

const addCard = (card) => {
  product_container.innerHTML += `
    <div class="col-lg-4 col-md-6 col-12">
    <div class="custom_card-body position-relative">
      <div
        class="products_viewershort back_img d-flex align-items-end"
        style="--img-url: url('${card.img}')"
      >
        <p class="price mb-0 ps-3 text-dark">${card.price}</p>
      </div>
      <div class="p-3">
        <div
          class="d-flex justify-content-between align-items-center mb-3"
        >
          <h1 class="small_title  mb-0">${card.name}</h1>
          <div class="d-flex align-items-center gap-1">
            <p class="sub-big_header mb-0"><b>${card.rate}</b></p>
            <i class="fa-solid fa-star text-warning"></i>
          </div>
        </div>
        ${
          card.new
            ? `<div class="position-absolute top-0 end-0 NewTag">
        <div class="position-relative px-3 py-1 text-white">
          NEW
          <img src="./assets/tag-01.svg" alt="" class="tag" />
        </div>
      </div>`
            : ""
        }
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <p class="px-3 py-1 category d-inline rounded-5 mb-0">
          ${card.category}
          </p>
          <button type="button" class="main_button py-2 px-3">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
    `;
};

fetch("./data/products.json")
  .then((res) => res.json())
  .then((res) =>
    res.forEach((element) => {
      addCard(element);
    })
  );
