// add or remove product

function handleProduct(product, isIncrease) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  let productNewCount = productCount;
  if (isIncrease == true) {
    productNewCount = productCount + 1;
  }
  if (isIncrease == false && productCount > 0) {
    productNewCount = productCount - 1;
  }
  productInput.value = productNewCount;

  let productTotal = 0;
  if (product == "phone") {
    productTotal = productNewCount * 1219;
  }
  if (product == "case") {
    productTotal = productNewCount * 59;
  }
  document.getElementById(product + "-total").innerText = productTotal;
  calculateTotal();
}

// Calculate total
function calculateTotal() {
  const phoneCount = getInputValue("phone");
  const caseCount = getInputValue("case");

  const totalPrice = phoneCount * 1219 + caseCount * 59;
  document.getElementById("total-price").innerText = totalPrice;

  const tax = Math.round(totalPrice * 0.06);
  document.getElementById("tax").innerText = tax;

  const grandTotal = totalPrice + tax;
  document.getElementById("grand-total").innerText = grandTotal;
}

// Get input value
function getInputValue(product) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  return productCount;
}

// Check Out Page
const checkBtn = document.getElementById("checkOutBtn");
checkBtn.addEventListener("click", function () {
  const cartPage = document.getElementById("shopping__cart");
  cartPage.style.display = "none";
  const checkOutPage = document.getElementById("check__out");
  checkOutPage.style.display = "block";
});

// remove phone item page
const phoneRemoveBtn = document.getElementById("phone-remove");
phoneRemoveBtn.addEventListener("click", function () {
  const phoneRemovePage = document.getElementById("phone__item");
  phoneRemovePage.style.display = "none";
});

// remove case item page
const caseRemoveBtn = document.getElementById("case-remove");
caseRemoveBtn.addEventListener("click", function () {
  const caseRemovePage = document.getElementById("case__item");
  caseRemovePage.style.display = "none";
});
