// Show Real Products -->
let products = [
  {
    name: "Yellow Chair",
    headLine: "Soft Like Your Cheeks",
    price: "$ 2500",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "White Sofa",
    headLine: "Feel The Luxuriousness",
    price: "$ 5470",
    image:
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lakri Ki Chair",
    headLine: "Feel Pain For Ass",
    price: "$ 1590",
    image:
      "https://images.unsplash.com/photo-1540809799-5da9372c3f64?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Show Real Poular-Products -->
let popular = [
  {
    name: "U Shape Chair",
    headLine: "Feel The Design",
    price: "$ 2999",
    image:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "White Chair",
    headLine: "Simple As You",
    price: "$ 4700",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kings Chair",
    headLine: "Only For Kings",
    price: "$ 10,000",
    image:
      "https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let myCart = [];

function addProducts() {
  let realProducts = "";
  products.forEach((product, index) => {
    realProducts += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
            <img class="w-full object-cover" src="${product.image}"/>
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.headLine}</h3>
                    <h4 class="font-semibold mt-2">${product.price}</h4>
                </div>
                <button data-index="${index}" class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><i data-index="${index}"
                        class="add ri-add-line"></i></button>
            </div>
        </div>
    </div>`;
  });
  const productsDiv = (document.querySelector(".products").innerHTML =
    realProducts);
}

function addPopular() {
  let realPopular = "";
  popular.forEach((product) => {
    realPopular += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
    <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
        <img class="w-full h-full object-cover"
            src="${product.image}">
            </div>
    <div class="data py-2 w-full">
    <h1 class="leading-none font-semibold">${product.name}</h1>
        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headLine}</h4>
        <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
    </div>
</div>`;
  });
  const popularDiv = (document.querySelector(".populars").innerHTML =
    realPopular);
}

function addToCart() {
  const allProductsDiv = document.querySelector(".products");
  allProductsDiv.addEventListener("click", (details) => {
    if (details.target.classList.contains("add")) {
      // console.log(details.target.dataset.index)
      myCart.push(products[details.target.dataset.index]);
      // console.log(myCart)
    }
  });
}

function showCart() {
  const cartIcon = document.querySelector(".carticon");
  cartIcon.addEventListener("click", () => {
    document.querySelector(".cartexpnd").style.display = "block";

    let cartProducts = "";
    myCart.forEach((product) => {
      cartProducts += `<div class="flex gap-2 bg-white p-2 rounded-lg"></div>
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-full h-full -object-cover" src="${product.image}"/>
            </div>
            <div>
                <h3 class="font-semibold">${product.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${product.price}</h5>
            </div>`;
    });
    document.querySelector(".cartexpnd").innerHTML = cartProducts;
  });
}

addProducts();
addPopular();
addToCart();
showCart();
