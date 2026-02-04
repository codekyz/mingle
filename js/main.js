document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector("details");
  const menuLinks = mobileMenu.querySelectorAll("a");

  // 1. 메뉴 링크 클릭 시 메뉴 닫기
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.removeAttribute("open");
    });
  });

  // 2. 메뉴 바깥쪽 클릭 시 메뉴 닫기
  document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target)) {
      mobileMenu.removeAttribute("open");
    }
  });

  // 3. (옵션) 스크롤 시 헤더 그림자 제어
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("shadow-md");
    } else {
      header.classList.remove("shadow-md");
    }
  });
});
