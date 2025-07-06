// Inisialisasi animasi AOS
AOS.init({
  once: true,
  duration: 800,
  easing: 'ease-in-out',
});

// Navigasi tombol ke section terkait dengan scroll smooth
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav-subtabs button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Buat tombol back-to-top dan tambahkan ke body
  const backToTop = document.createElement("button");
  backToTop.innerText = "↑ Top";
  backToTop.id = "backToTopBtn";
  backToTop.style.display = "none";  // sembunyikan awalnya
  document.body.appendChild(backToTop);

  // Tampilkan tombol jika scrollY > 500, sembunyikan jika kurang
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // Scroll ke atas saat tombol diklik
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
