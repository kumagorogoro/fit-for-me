// ハンバーガーメニュー
const menuBtn = document.querySelector(".menu");
const sp = document.querySelector("#sp");
const closeBtn = document.querySelector(".close");
const links = document.querySelectorAll("#sp li a");

menuBtn.addEventListener("click", function () {
  sp.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  sp.style.display = "none";
});

links.forEach(function (link) {
  link.addEventListener("click", function () {
    sp.style.display = "none";
  });
});

// スクロール
const menu = document.querySelector(".menu");
const header = document.querySelector(".header");
const headerBottom = header.offsetTop + header.offsetHeight;
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  if (window.innerWidth <= 1200) {
    if (scrollY > headerBottom) {
      menu.classList.add("background");
    } else {
      menu.classList.remove("background");
    }
  }
});
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (window.innerWidth <= 767) {
      window.scrollTo({
        top: target.offsetTop - 70,
      });
    }
    if (window.innerWidth >= 767) {
      window.scrollTo({
        top: target.offsetTop - 140,
      });
    }
    if (window.innerWidth >= 1200) {
      window.scrollTo({
        top: target.offsetTop - 150,
      });
    }
  });
});

// ロゴ変更
const headerh1 = document.querySelector(".headerh1");
const headerTop = headerh1.offsetTop;
const logo = document.querySelector(".logo");

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  if (window.innerWidth <= 1200) {
    if (scrollY > headerTop - 200) {
      logo.style.opacity = 0;
    } else {
      logo.style.opacity = 1;
    }
  }
});
