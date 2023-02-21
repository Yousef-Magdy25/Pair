//startHeader
//menuButton
let menu = document.querySelector(".header .container .menu-bar ul");
let startMenuButton = document.querySelector(
  ".header .container .menu-bar i:last-of-type"
);
startMenuButton.addEventListener("click", function (e) {
  let landing = document.querySelectorAll(".landing .container img");
  let firstProduct = document.querySelectorAll(".market .container .product");
  firstProduct.forEach((col) => {
    col.style.zIndex = "-1";
  });
  startMenuButton.style.display = "none";
  let menu = document.querySelector(".header .container .menu-bar ul");
  menu.style.display = "flex";
  let exit = document.querySelector(
    ".header .container .menu-bar i:first-of-type"
  );
  exit.style.display = "block";
  exit.addEventListener("click", function (e) {
    menu.style.display = "none";
    exit.style.display = "none";
    startMenuButton.style.display = "block";
    firstProduct.forEach((col) => {
      col.style.zIndex = "1";
    });
  });
});
//searchButton
let searchButton = document.querySelector(
  ".header .container .search i:last-of-type"
);
searchButton.addEventListener("click", function (e) {
  let search = document.querySelector(".header .container .search input");
  search.style.display = "block";
  searchButton.style.display = "none";
  let exit = document.querySelector(
    ".header .container .search i:first-of-type"
  );
  exit.style.display = "block";
  exit.addEventListener("click", function (e) {
    search.style.display = "none";
    exit.style.display = "none";
    searchButton.style.display = "block";
  });
});
//endHeader
//startMarket
//startProducts
let productKidsImage = [
  "./images/kshoes1.jpg",
  "./images/kshoes2.jpg",
  "./images/kshoes3.jpg",
  "./images/kshoes4.jpg",
  "./images/kshoes5.jpg",
  "./images/kshoes6.jpg",
  "./images/kshoes7.jpg",
  "./images/kshoes8.jpg",
  "./images/kshoes9.jpg",
  "./images/kshoes10.jpg",
  "./images/kshoes11.jpg",
  "./images/kshoes12.jpg",
  "./images/kshoes13.jpg",
  "./images/kshoes14.jpg",
  "./images/kshoes15.jpg",
  "./images/kshoes16.jpg",
  "./images/kshoes17.jpg",
  "./images/kshoes18.jpg",
  "./images/kshoes19.jpg",
];
let productMenImage = [
  "./images/mshoes1.jpg",
  "./images/mshoes2.jpg",
  "./images/mshoes3.jpg",
  "./images/mshoes4.jpg",
  "./images/mshoes5.jpg",
  "./images/mshoes6.jpg",
  "./images/mshoes7.jpg",
  "./images/mshoes8.jpg",
  "./images/mshoes9.jpg",
  "./images/mshoes10.jpg",
  "./images/mshoes11.jpg",
  "./images/mshoes12.jpg",
  "./images/mshoes13.jpg",
  "./images/mshoes14.jpg",
  "./images/mshoes15.jpg",
  "./images/mshoes16.jpg",
  "./images/mshoes17.jpg",
];
let productWomenImage = [
  "./images/wshoes1.jpg",
  "./images/wshoes2.jpg",
  "./images/wshoes3.jpg",
  "./images/wshoes4.jpg",
  "./images/wshoes5.jpg",
  "./images/wshoes6.jpg",
  "./images/wshoes7.jpg",
  "./images/wshoes8.jpg",
  "./images/wshoes9.jpg",
  "./images/wshoes10.jpg",
  "./images/wshoes11.jpg",
  "./images/wshoes12.jpg",
  "./images/wshoes13.jpg",
  "./images/wshoes14.jpg",
  "./images/wshoes15.jpg",
  "./images/wshoes16.jpg",
  "./images/wshoes17.jpg",
  "./images/wshoes18.jpg",
  "./images/wshoes19.jpg",
  "./images/wshoes20.jpg",
  "./images/wshoes21.jpg",
  "./images/wshoes22.jpg",
  "./images/wshoes23.jpg",
  "./images/wshoes24.jpg",
];
let productBrand = [
  "AIR JORDAN",
  "NIKE",
  "CONVERSE",
  "TRIVET",
  "ADIDAS",
  "GUCCI",
  "NB",
  "GEOX",
];
let productKind = ["Sport Shoes", "Classic Shoes"];
let productType = ["men", "women", "kids"];
class products {
  constructor(brand, kind, image, type, price) {
    this.brand = brand;
    this.kind = kind;
    this.image = image;
    this.type = type;
    this.price = price;
  }
  setBrand(newBrand) {
    this.brand = newBrand;
  }
  setKind(newKind) {
    this.kind = newKind;
  }
  setImage(newImage) {
    this.image = newImage;
  }
  setType(newType) {
    this.type = newType;
  }
  setPrice(newPrise) {
    this.price = newPrise;
  }
}
let product0 = new products(
  productBrand[0],
  productKind[0],
  productMenImage[0],
  productType[0],
  149
);
let product1 = new products(
  productBrand[1],
  productKind[0],
  productMenImage[1],
  productType[0],
  92
);
let product2 = new products(
  productBrand[5],
  productKind[1],
  productWomenImage[22],
  productType[1],
  150
);
let product3 = new products(
  productBrand[1],
  productKind[0],
  productKidsImage[3],
  productType[2],
  49
);
let product4 = new products(
  productBrand[2],
  productKind[1],
  productMenImage[2],
  productType[0],
  36
);
let product5 = new products(
  productBrand[1],
  productKind[0],
  productMenImage[3],
  productType[0],
  75
);
let product6 = new products(
  productBrand[2],
  productKind[1],
  productWomenImage[9],
  productType[1],
  81
);
let product7 = new products(
  productBrand[2],
  productKind[1],
  productWomenImage[10],
  productType[1],
  21
);
let product8 = new products(
  productBrand[5],
  productKind[1],
  productWomenImage[11],
  productType[1],
  116
);
let product9 = new products(
  productBrand[5],
  productKind[1],
  productWomenImage[12],
  productType[1],
  179
);
let product10 = new products(
  productBrand[1],
  productKind[0],
  productMenImage[4],
  productType[0],
  83
);
let product11 = new products(
  productBrand[1],
  productKind[1],
  productKidsImage[14],
  productType[2],
  27
);
let product12 = new products(
  productBrand[4],
  productKind[1],
  productKidsImage[15],
  productType[2],
  42
);
let product13 = new products(
  productBrand[1],
  productKind[1],
  productWomenImage[18],
  productType[1],
  37
);
let product14 = new products(
  productBrand[5],
  productKind[1],
  productWomenImage[19],
  productType[1],
  52
);
let product15 = new products(
  productBrand[1],
  productKind[1],
  productKidsImage[13],
  productType[2],
  49
);
let product16 = new products(
  productBrand[0],
  productKind[0],
  productKidsImage[16],
  productType[2],
  102
);
let product17 = new products(
  productBrand[2],
  productKind[1],
  productMenImage[5],
  productType[0],
  18
);
let product18 = new products(
  productBrand[5],
  productKind[1],
  productKidsImage[18],
  productType[2],
  79
);
let product19 = new products(
  productBrand[1],
  productKind[0],
  productMenImage[6],
  productType[0],
  50
);
let product20 = new products(
  productBrand[2],
  productKind[1],
  productMenImage[7],
  productType[0],
  32
);
let product21 = new products(
  productBrand[1],
  productKind[1],
  productKidsImage[0],
  productType[2],
  31
);
let product22 = new products(
  productBrand[1],
  productKind[1],
  productKidsImage[1],
  productType[2],
  52
);
let product23 = new products(
  productBrand[1],
  productKind[1],
  productWomenImage[7],
  productType[1],
  82
);
let product24 = new products(
  productBrand[5],
  productKind[1],
  productWomenImage[8],
  productType[1],
  182
);
let product25 = new products(
  productBrand[5],
  productKind[1],
  productMenImage[14],
  productType[0],
  158
);
let product26 = new products(
  productBrand[5],
  productKind[0],
  productMenImage[15],
  productType[0],
  62
);
let product27 = new products(
  productBrand[5],
  productKind[1],
  productWomenImage[13],
  productType[1],
  159
);
let product28 = new products(
  productBrand[2],
  productKind[1],
  productWomenImage[16],
  productType[1],
  47
);
let product29 = new products(
  productBrand[2],
  productKind[1],
  productKidsImage[2],
  productType[2],
  19
);
let product30 = new products(
  productBrand[4],
  productKind[1],
  productKidsImage[4],
  productType[2],
  27
);
let product31 = new products(
  productBrand[2],
  productKind[1],
  productMenImage[8],
  productType[0],
  52
);
let product32 = new products(
  productBrand[5],
  productKind[1],
  productWomenImage[14],
  productType[1],
  214
);
let product33 = new products(
  productBrand[5],
  productKind[1],
  productWomenImage[15],
  productType[1],
  132
);
let product34 = new products(
  productBrand[0],
  productKind[0],
  productMenImage[9],
  productType[0],
  199
);
let product35 = new products(
  productBrand[3],
  productKind[0],
  productMenImage[10],
  productType[0],
  64
);
let product36 = new products(
  productBrand[5],
  productKind[1],
  productKidsImage[5],
  productType[2],
  74
);
let product37 = new products(
  productBrand[3],
  productKind[1],
  productMenImage[11],
  productType[0],
  48
);
let product38 = new products(
  productBrand[2],
  productKind[1],
  productMenImage[12],
  productType[0],
  35
);
let product39 = new products(
  productBrand[1],
  productKind[0],
  productWomenImage[1],
  productType[1],
  62
);
let product40 = new products(
  productBrand[1],
  productKind[1],
  productWomenImage[2],
  productType[1],
  41
);
let product41 = new products(
  productBrand[5],
  productKind[1],
  productKidsImage[6],
  productType[2],
  58
);
let product42 = new products(
  productBrand[1],
  productKind[1],
  productKidsImage[7],
  productType[2],
  34
);
let product43 = new products(
  productBrand[1],
  productKind[1],
  productKidsImage[8],
  productType[2],
  29
);
let product44 = new products(
  productBrand[2],
  productKind[1],
  productKidsImage[9],
  productType[2],
  39
);
let product45 = new products(
  productBrand[4],
  productKind[1],
  productMenImage[13],
  productType[0],
  102
);
let product46 = new products(
  productBrand[2],
  productKind[1],
  productWomenImage[0],
  productType[1],
  24
);
let product47 = new products(
  productBrand[1],
  productKind[0],
  productWomenImage[3],
  productType[1],
  82
);
let product48 = new products(
  productBrand[5],
  productKind[1],
  productWomenImage[4],
  productType[1],
  127
);
let product49 = new products(
  productBrand[2],
  productKind[1],
  productWomenImage[5],
  productType[1],
  53
);
let product50 = new products(
  productBrand[4],
  productKind[0],
  productWomenImage[6],
  productType[1],
  51
);
let product51 = new products(
  productBrand[4],
  productKind[1],
  productKidsImage[10],
  productType[2],
  18
);
let product52 = new products(
  productBrand[5],
  productKind[1],
  productKidsImage[11],
  productType[2],
  99
);
let product53 = new products(
  productBrand[5],
  productKind[1],
  productWomenImage[17],
  productType[1],
  89
);
let product54 = new products(
  productBrand[5],
  productKind[1],
  productWomenImage[20],
  productType[1],
  99
);
let product55 = new products(
  productBrand[0],
  productKind[0],
  productMenImage[16],
  productType[0],
  178
);
let product56 = new products(
  productBrand[6],
  productKind[1],
  productWomenImage[21],
  productType[1],
  89
);
let product57 = new products(
  productBrand[1],
  productKind[1],
  productKidsImage[12],
  productType[2],
  29
);
let product58 = new products(
  productBrand[4],
  productKind[1],
  productKidsImage[17],
  productType[2],
  23
);
let newProduct = new products();
let prod = [
  product0,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
  product19,
  product20,
  product21,
  product22,
  product23,
  product24,
  product25,
  product26,
  product27,
  product28,
  product29,
  product30,
  product31,
  product32,
  product33,
  product34,
  product35,
  product36,
  product37,
  product38,
  product39,
  product40,
  product41,
  product42,
  product43,
  product44,
  product45,
  product46,
  product47,
  product48,
  product49,
  product50,
  product51,
  product52,
  product53,
  product54,
  product55,
  product56,
  product57,
  product58,
];
let prodMen = [];
let prodWomen = [];
let prodKids = [];
for (i = 0; i < prod.length; i++) {
  if (prod[i].type === "men") {
    prodMen.push(prod[i]);
  }
}
for (i = 0; i < prod.length; i++) {
  if (prod[i].type === "women") {
    prodWomen.push(prod[i]);
  }
}
for (i = 0; i < prod.length; i++) {
  if (prod[i].type === "kids") {
    prodKids.push(prod[i]);
  }
}
//endProducts
for (i = 0; i < prod.length; i++) {
  let productContainer = document.querySelector(".market .container .products");
  let product = document.createElement("div");
  product.setAttribute("class", "product");
  let imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "image");
  let productInfo = prod[i];
  product.classList.add(productInfo.type);
  let image = document.createElement("img");
  image.setAttribute("src", productInfo.image);
  let info = document.createElement("div");
  info.setAttribute("class", "text");
  let brand = document.createElement("h4");
  let brandText = document.createTextNode(productInfo.brand);
  brand.appendChild(brandText);
  let type = document.createElement("p");
  let typeText = document.createTextNode(productInfo.kind);
  type.appendChild(typeText);
  let price = document.createElement("p");
  let priceText = document.createTextNode(`${productInfo.price}$`);
  price.appendChild(priceText);
  imageContainer.appendChild(image);
  product.appendChild(imageContainer);
  product.appendChild(info);
  info.appendChild(brand);
  info.appendChild(type);
  info.appendChild(price);
  productContainer.appendChild(product);
  product.addEventListener("click", function (e) {
    let repeatAlert = document.querySelector(
      ".market .view-product .container .info h4"
    );
    repeatAlert.style.display = "none";
    newProduct.setBrand(productInfo.brand);
    newProduct.setImage(productInfo.image);
    newProduct.setKind(productInfo.kind);
    newProduct.setPrice(productInfo.price);
    newProduct.setType(productInfo.type);
    let image = document.querySelector(
      ".market .view-product .container .image img"
    );
    image.setAttribute("src", productInfo.image);
    let logo = document.querySelector(
      ".market .view-product .container .info h3"
    );
    logo.innerHTML = productInfo.brand;
    let kind = document.querySelector(
      ".market .view-product .container .info p:first-of-type"
    );
    kind.innerHTML = productInfo.kind;
    let price = document.querySelector(
      ".market .view-product .container .info p:last-of-type"
    );
    price.innerHTML = `${productInfo.price}$`;
    let productCards = document.querySelectorAll(
      " .market .container .product"
    );
    let viewInfo = document.querySelector(".market .view-product");
    if (screen.width >= 768 && screen.height >= 780) {
      viewInfo.style.height = "55vh";
    } else if (screen.height >= 780) {
      viewInfo.style.height = "90vh";
    } else {
      viewInfo.style.height = "105vh";
    }
    let exit = document.querySelector(".market .view-product .container i");
    exit.addEventListener("click", function (e) {
      viewInfo.style.height = 0;
    });
  });
}
let size = 40;
let sizeInfo = document.querySelectorAll(
  ".market .view-product .container .image .sizes .size"
);
sizeInfo.forEach((col) => {
  col.addEventListener("click", function (e) {
    size = e.currentTarget.innerHTML;
    sizeInfo.forEach((col) => {
      col.style.opacity = "1";
    });
    e.currentTarget.style.opacity = "0.6";
  });
});
//startCart
//starCartButton
let cartAllProductsImages = [];
let cartAllprices = [];
let cartButton = document.querySelector(
  ".header .container .cart i:first-of-type"
);
let cartXButton = document.querySelector(
  ".header .container .cart i:last-of-type"
);
cartButton.addEventListener("click", function (e) {
  let mainCart = document.querySelector(".market .container .cart");
  let landing = document.querySelector(".landing");
  if (screen.width >= 780) {
    landing.style.display = "none";
    mainCart.style.display = "flex";
    mainCart.style.flexBasis = "25%";
    mainCart.style.width = "100%";
    let mainProducts = document.querySelector(".market .container .products");
    mainProducts.style.flexBasis = "73%";
    cartXButton.style.display = "block";
    cartButton.style.display = "none";
  } else {
    landing.style.display = "none";
    mainCart.style.display = "flex";
    mainCart.style.flexBasis = "100%";
    mainCart.style.width = "100%";
    let mainProducts = document.querySelector(".market .container .products");
    mainProducts.style.flexBasis = "0%";
    mainProducts.style.display = "none";
    cartXButton.style.display = "block";
    cartButton.style.display = "none";
  }
});
cartXButton.addEventListener("click", function (e) {
  let landing = document.querySelector(".landing");
  if (screen.width >= 780) {
    landing.style.display = "block";
    let mainCart = document.querySelector(".market .container .cart");
    mainCart.style.display = "none";
    mainCart.style.flexBasis = "0%";
    mainCart.style.width = "0%";
    let mainProducts = document.querySelector(".market .container .products");
    mainProducts.style.flexBasis = "100%";
    cartXButton.style.display = "none";
    cartButton.style.display = "block";
  } else {
    landing.style.display = "block";
    let mainCart = document.querySelector(".market .container .cart");
    mainCart.style.display = "none";
    mainCart.style.flexBasis = "0%";
    mainCart.style.width = "0%";
    let mainProducts = document.querySelector(".market .container .products");
    mainProducts.style.flexBasis = "100%";
    mainProducts.style.display = "grid";
    cartXButton.style.display = "none";
    cartButton.style.display = "block";
  }
});
//endCartButton
//startAddToCarts
let addToCart = document.querySelector(
  ".market .view-product .container .info .button"
);
addToCart.addEventListener("click", function (e) {
  if (cartAllProductsImages.includes(newProduct.image)) {
    let repeatAlert = document.querySelector(
      ".market .view-product .container .info h4"
    );
    repeatAlert.style.display = "block";
  } else {
    let cartProduct = document.createElement("div");
    cartProduct.setAttribute("class", "cart-product");
    let cartProductInfo = document.createElement("div");
    cartProductInfo.setAttribute("class", "info");
    let cartProductInfoImage = document.createElement("img");
    cartProductInfoImage.setAttribute("src", newProduct.image);
    cartAllProductsImages.splice(
      cartAllProductsImages.length,
      0,
      newProduct.image
    );
    let cartProductInfoText = document.createElement("div");
    cartProductInfoText.setAttribute("class", "text");
    let cartProductInfoTextLogo = document.createElement("h3");
    let cartProductInfoTextLogoTextNode = document.createTextNode(
      newProduct.brand
    );
    cartProductInfoTextLogo.appendChild(cartProductInfoTextLogoTextNode);
    let cartProductInfoTextPriceSize = document.createElement("div");
    cartProductInfoTextPriceSize.setAttribute("class", "price-size");
    let cartProductInfoTextSize = document.createElement("p");
    let cartProductInfoTextSizeTextNode = document.createTextNode(size);
    cartProductInfoTextSize.appendChild(cartProductInfoTextSizeTextNode);
    let cartProductInfoTextPrice = document.createElement("p");
    cartAllprices.splice(cartAllprices.length, 0, newProduct.price);
    let cartProductInfoTextPriceTextNode = document.createTextNode(
      `${newProduct.price}$`
    );
    cartProductInfoTextPrice.appendChild(cartProductInfoTextPriceTextNode);
    cartProductInfoTextPriceSize.appendChild(cartProductInfoTextSize);
    cartProductInfoTextPriceSize.appendChild(cartProductInfoTextPrice);
    cartProductInfoText.appendChild(cartProductInfoTextLogo);
    cartProductInfoText.appendChild(cartProductInfoTextPriceSize);
    cartProductInfo.appendChild(cartProductInfoImage);
    cartProductInfo.appendChild(cartProductInfoText);
    let cartProductPurshase = document.createElement("div");
    cartProductPurshase.setAttribute("class", "purshase");
    let cartProductPurshaseQuantity = document.createElement("div");
    cartProductPurshaseQuantity.setAttribute("class", "quantity");
    let cartProductPurshaseQuantityScreen = document.createElement("div");
    cartProductPurshaseQuantityScreen.setAttribute("class", "screene");
    let cartProductPurshaseQuantityScreenMinus = document.createElement("i");
    cartProductPurshaseQuantityScreenMinus.setAttribute(
      "class",
      "fa-solid fa-minus"
    );
    let cartProductPurshaseQuantityScreenNumber = document.createElement("p");
    let productQuantity = 1;
    let cartProductPurshaseQuantityScreenNumberTextNode =
      document.createTextNode(productQuantity);
    cartProductPurshaseQuantityScreenNumber.appendChild(
      cartProductPurshaseQuantityScreenNumberTextNode
    );
    let cartProductPurshaseQuantityScreenPlus = document.createElement("i");
    cartProductPurshaseQuantityScreenPlus.setAttribute(
      "class",
      "fa-regular fa-plus"
    );
    cartProductPurshaseQuantityScreen.appendChild(
      cartProductPurshaseQuantityScreenMinus
    );
    cartProductPurshaseQuantityScreen.appendChild(
      cartProductPurshaseQuantityScreenNumber
    );
    cartProductPurshaseQuantityScreen.appendChild(
      cartProductPurshaseQuantityScreenPlus
    );
    let cartProductPurshaseQuantityTrash = document.createElement("i");
    cartProductPurshaseQuantityTrash.setAttribute("class", "fa-solid fa-trash");
    cartProductPurshaseQuantity.appendChild(cartProductPurshaseQuantityScreen);
    cartProductPurshaseQuantity.appendChild(cartProductPurshaseQuantityTrash);
    cartProductPurshase.appendChild(cartProductPurshaseQuantity);
    cartProduct.appendChild(cartProductInfo);
    cartProduct.appendChild(cartProductPurshase);
    let cartProducts = document.querySelector(
      ".market .container .cart .products"
    );
    cartProducts.appendChild(cartProduct);
    let viewInfo = document.querySelector(".market .view-product");
    viewInfo.style.height = 0;
    let productCards = document.querySelectorAll(
      " .market .container .product"
    );
    productCards.forEach((col) => {
      col.classList.remove("deselected");
    });
    let productAllprices = document.querySelectorAll(
      ".market .container .cart .cart-product .text .price-size p:last-of-type"
    );
    let eachProductPrice = [];
    productAllprices.forEach((col) => {
      eachProductPrice.push(
        parseFloat(col.innerHTML) *
          col.parentElement.parentElement.parentElement.nextElementSibling
            .children[0].children[0].children[1].innerHTML
      );
    });
    let finalProduct = 0;
    for (i = 0; i < eachProductPrice.length; i++) {
      finalProduct += eachProductPrice[i];
    }
    let TotolPrice = document.querySelector(
      ".market .container .cart .buy .total-price p:last-of-type"
    );
    TotolPrice.innerHTML = `${finalProduct}$`;
    //endPrice
    //endAddtoCart
    //startCartProductButton
    //startDecreament
    cartProductPurshaseQuantityScreenMinus.addEventListener(
      "click",
      function (e) {
        if (e.currentTarget.nextElementSibling.innerHTML > 1) {
          e.currentTarget.nextElementSibling.innerHTML--;
          while (eachProductPrice.length > 0) {
            eachProductPrice.pop();
          }
          productAllprices.forEach((col) => {
            eachProductPrice.push(
              parseFloat(col.innerHTML) *
                col.parentElement.parentElement.parentElement.nextElementSibling
                  .children[0].children[0].children[1].innerHTML
            );
          });
          finalProduct = 0;
          for (i = 0; i < eachProductPrice.length; i++) {
            finalProduct += eachProductPrice[i];
          }
          TotolPrice.innerHTML = `${finalProduct}$`;
        }
      }
    );
    //endDecreament
    //startIncreament
    cartProductPurshaseQuantityScreenPlus.addEventListener(
      "click",
      function (e) {
        e.currentTarget.previousElementSibling.innerHTML++;
        while (eachProductPrice.length > 0) {
          eachProductPrice.pop();
        }
        productAllprices.forEach((col) => {
          eachProductPrice.push(
            parseFloat(col.innerHTML) *
              col.parentElement.parentElement.parentElement.nextElementSibling
                .children[0].children[0].children[1].innerHTML
          );
        });
        finalProduct = 0;
        for (i = 0; i < eachProductPrice.length; i++) {
          finalProduct += eachProductPrice[i];
        }
        TotolPrice.innerHTML = `${finalProduct}$`;
      }
    );
    //endIncreament
    //startTrash
    cartProductPurshaseQuantityTrash.addEventListener("click", function (e) {
      e.currentTarget.parentElement.parentElement.parentElement.remove();
      cartAllProductsImages.splice(
        cartAllProductsImages.indexOf(
          e.currentTarget.parentElement.parentElement.previousElementSibling
            .children[0]
        ),
        1
      );
      console.log(
        parseFloat(
          e.currentTarget.previousElementSibling.children[1].innerHTML
        ) *
          parseFloat(
            e.currentTarget.parentElement.parentElement.previousElementSibling
              .children[1].children[1].children[1].innerHTML
          )
      );
      finalProduct -=
        parseFloat(
          e.currentTarget.previousElementSibling.children[1].innerHTML
        ) *
        parseFloat(
          e.currentTarget.parentElement.parentElement.previousElementSibling
            .children[1].children[1].children[1].innerHTML
        );
      TotolPrice.innerHTML = `${finalProduct}$`;
    });
    //endTrash
    //endCartProductButton
  }
});
//endCart
//startHeaderSort
//startAllsort
let allSort = document.querySelector(
  ".header .container .menu-bar ul li:first-of-type"
);
allSort.addEventListener("click", function (e) {
  let allProducts = document.querySelectorAll(".market .container .product");
  allProducts.forEach((col) => {
    col.style.display = "block";
  });
  if (screen.width < 992) {
    let exit = document.querySelector(
      ".header .container .menu-bar i:first-of-type"
    );
    exit.style.display = "block";
    menu.style.display = "none";
    exit.style.display = "none";
    startMenuButton.style.display = "block";
    let firstProduct = document.querySelectorAll(".market .container .product");
    firstProduct.forEach((col) => {
      col.style.zIndex = "1";
    });
  }
});
//endAllSort
//startMenSort
let menSort = document.querySelector(
  ".header .container .menu-bar ul li:nth-of-type(2)"
);
menSort.addEventListener("click", function (e) {
  let allProducts = document.querySelectorAll(".market .container .product");
  allProducts.forEach((col) => {
    col.style.display = "block";
  });
  allProducts.forEach((col) => {
    if (col.classList.contains("men")) {
      col.style.display = "block";
    } else {
      col.style.display = "none";
    }
  });
  if (screen.width < 992) {
    let exit = document.querySelector(
      ".header .container .menu-bar i:first-of-type"
    );
    exit.style.display = "block";
    menu.style.display = "none";
    exit.style.display = "none";
    startMenuButton.style.display = "block";
    let firstProduct = document.querySelectorAll(".market .container .product");
    firstProduct.forEach((col) => {
      col.style.zIndex = "1";
    });
  }
});
//endtMenSort
//startWomenSort
let womenSort = document.querySelector(
  ".header .container .menu-bar ul li:nth-of-type(3)"
);
womenSort.addEventListener("click", function (e) {
  let allProducts = document.querySelectorAll(".market .container .product");
  allProducts.forEach((col) => {
    col.style.display = "block";
  });
  allProducts.forEach((col) => {
    if (col.classList.contains("women")) {
      col.style.display = "block";
    } else {
      col.style.display = "none";
    }
  });
  if (screen.width < 992) {
    let exit = document.querySelector(
      ".header .container .menu-bar i:first-of-type"
    );
    exit.style.display = "block";
    menu.style.display = "none";
    exit.style.display = "none";
    startMenuButton.style.display = "block";
    let firstProduct = document.querySelectorAll(".market .container .product");
    firstProduct.forEach((col) => {
      col.style.zIndex = "1";
    });
  }
});
//endWomenSort
//startKidsSort
let kidsSort = document.querySelector(
  ".header .container .menu-bar ul li:nth-of-type(4)"
);
kidsSort.addEventListener("click", function (e) {
  let allProducts = document.querySelectorAll(".market .container .product");
  allProducts.forEach((col) => {
    col.style.display = "block";
  });
  allProducts.forEach((col) => {
    if (col.classList.contains("kids")) {
      col.style.display = "block";
    } else {
      col.style.display = "none";
    }
  });
  if (screen.width < 992) {
    let exit = document.querySelector(
      ".header .container .menu-bar i:first-of-type"
    );
    exit.style.display = "block";
    menu.style.display = "none";
    exit.style.display = "none";
    startMenuButton.style.display = "block";
    let firstProduct = document.querySelectorAll(".market .container .product");
    firstProduct.forEach((col) => {
      col.style.zIndex = "1";
    });
  }
});
//endKidsSort
//endHeaderSort
//startSearch
let searchBar = document.querySelector(".header .container .search input");
searchBar.addEventListener("input", function (e) {
  let value = e.currentTarget.value.toLowerCase();
  let landing = document.querySelector(".landing");
  if (value === "") {
    landing.style.display = "block";
  } else {
    landing.style.display = "none";
  }
  let allLogos = document.querySelectorAll(
    ".market .container .product .text h4"
  );
  allLogos.forEach((e) => {
    if (!e.innerHTML.toLowerCase().includes(value)) {
      e.parentElement.parentElement.style.display = "none";
    } else {
      e.parentElement.parentElement.style.display = "block";
    }
  });
});
//endSearch
//endMarket
//startScrollToTop
let scrollTop = document.querySelector("body >i");
window.addEventListener("scroll", function (e) {
  if (window.scrollY >= 700) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
  scrollTop.addEventListener("click", function (e) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
//endScrollToTop
