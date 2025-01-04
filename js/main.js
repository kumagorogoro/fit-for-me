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

// 固定ヘッダーの要素を取得
const menu = document.querySelector(".menu");

// セクションの位置を取得
const header = document.querySelector(".header");
const headerBottom = header.offsetTop + header.offsetHeight; // headerの下端を計算

// スクロールイベントをリッスン
window.addEventListener("scroll", function () {
  // 現在のスクロール位置
  const scrollY = window.scrollY;

  // スクリーン幅が1000px以下の場合のみ実行
  if (window.innerWidth <= 1200) {
    // スクロール量がセクションの位置を超えると、ヘッダーを徐々に表示
    if (scrollY > headerBottom) {
      const opacity = Math.min((scrollY - headerBottom) / 0, 1); // opacityを滑らかに変更
      menu.classList.add("background");
    } else {
      menu.classList.remove("background");
    }
  }
});

// セクションの位置を取得
const headerh1 = document.querySelector(".headerh1");
const headerTop = headerh1.offsetTop; // headerの上端位置を取得
const logo = document.querySelector(".logo");

// スクロールイベントをリッスン
window.addEventListener("scroll", function () {
  // 現在のスクロール位置
  const scrollY = window.scrollY;

  // スクリーン幅が1200px以下の場合のみ実行
  if (window.innerWidth <= 1200) {
    // headerTopより50px上でlogoが消えるようにする
    if (scrollY > headerTop + 0) {
      // 50px上でlogoをフェードアウト
      logo.style.opacity = 0; // opacityを0にしてフェードアウト
    } else {
      // それ以外の場合はlogoをフェードイン
      logo.style.opacity = 1; // opacityを1にしてフェードイン
    }
  }
  // スクリーン幅が1200px以下の場合のみ実行
  if (window.innerWidth <= 767) {
    // headerTopより50px上でlogoが消えるようにする
    if (scrollY > headerTop - 160) {
      // 50px上でlogoをフェードアウト
      logo.style.opacity = 0; // opacityを0にしてフェードアウト
    } else {
      // それ以外の場合はlogoをフェードイン
      logo.style.opacity = 1; // opacityを1にしてフェードイン
    }
  }
  // スクリーン幅が1200px以上の場合のみ実行
  if (window.innerWidth >= 1200) {
    // スクロール量がセクションの位置を超えると、logoを非表示
    if (scrollY > headerTop) {
      logo.style.opacity = 0; // opacityを0にしてフェードアウト
    } else {
      logo.style.opacity = 1; // opacityを1にしてフェードイン
    }
  }
});
