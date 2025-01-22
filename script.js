// Pilih elemen navbar dan menu
const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#menu");

// Toggle kelas 'active' pada navbar saat menu diklik
menu.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Hilangkan sidebar saat klik di luar menu atau navbar
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
