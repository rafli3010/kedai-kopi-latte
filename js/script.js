// Toggle Class Active Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger Menu di Klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
};
// Toggle Class Active Search Form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle Class Active Shopping Cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di Luar Elemen
const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const spc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!spc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetail = document.querySelector("#item-detail-modal");
const itemButtons = document.querySelectorAll(".item-detail-button");

itemButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetail.style.display = "flex";
    e.preventDefault();
  };
});

// Klik Tombol Close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetail.style.display = "none";
  e.preventDefault();
};

// Klik Diluar Tombol
window.onclick = (e) => {
  if (e.target === itemDetail) {
    itemDetail.style.display = "none";
  }
};
