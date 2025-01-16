(function (d) {
  var config = {
      kitId: "xeg1hdh",
      scriptTimeout: 3000,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

// スクロール
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (window.innerWidth <= 767) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
    if (window.innerWidth >= 767) {
      window.scrollTo({
        top: target.offsetTop - 140,
        behavior: "smooth",
      });
    }
    if (window.innerWidth >= 1200) {
      window.scrollTo({
        top: target.offsetTop - 150,
        behavior: "smooth",
      });
    }
  });
});
const menu = document.querySelector(".menu");
const header = document.querySelector(".header");
const headerBottom = header.offsetTop + header.offsetHeight;
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  if (window.innerWidth <= 1200) {
    if (scrollY > headerBottom) {
      const opacity = Math.min((scrollY - headerBottom) / 0, 1);
      menu.classList.add("background");
    } else {
      menu.classList.remove("background");
    }
  }
});

const headerh1 = document.querySelector(".headerh1");
const headerTop = headerh1.offsetTop;
const logo = document.querySelector(".logo");

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;

  if (window.innerWidth <= 767) {
    if (scrollY > headerTop - 200) {
      logo.style.opacity = 0;
    } else {
      logo.style.opacity = 1;
    }
  }
  if (window.innerWidth <= 1200) {
    if (scrollY > headerTop - 200) {
      logo.style.opacity = 0;
    } else {
      logo.style.opacity = 1;
    }
  }
  if (window.innerWidth >= 1200) {
    if (scrollY > headerTop - 200) {
      logo.style.opacity = 0;
    } else {
      logo.style.opacity = 1;
    }
  }
});

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
