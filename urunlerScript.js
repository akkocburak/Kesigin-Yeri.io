document.addEventListener("DOMContentLoaded", function() {
  const productBoxes = document.querySelectorAll(".inner-box");

  productBoxes.forEach(box => {
    box.addEventListener("click", function(e) {
      // Sayfa yönlendirmesini engelle
      e.preventDefault();

      // Dropdown'u bul
      const dropdown = this.querySelector(".product-dropdown");

      // Diğer tüm dropdownları kapat
      document.querySelectorAll(".product-dropdown").forEach(d => {
        if (d !== dropdown) d.style.display = "none";
      });

      // Tıklanan dropdown'u aç/kapat
      dropdown.style.display = (dropdown.style.display === "none" || dropdown.style.display === "") ? "block" : "none";
    });
  });
});
