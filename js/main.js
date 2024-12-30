// 固定ヘッダーの要素を取得
const menu = document.querySelector(".menu");

// セクションの位置を取得
const header = document.querySelector(".header");
const headerBottom = header.offsetTop + header.offsetHeight; // headerの下端を計算
const logo = document.querySelector(".logo");

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
      logo.style.display = "none"; // opacityでフェードイン・フェードアウト
    } else {
      menu.classList.remove("background");
      logo.style.display = "block"; // 元の状態に戻す
    }
  }
  // スクリーン幅が1000px以下の場合のみ実行
  if (window.innerWidth >= 1200) {
    // スクロール量がセクションの位置を超えると、ヘッダーを徐々に表示
    if (scrollY > headerBottom) {
      logo.style.display = "none"; // opacityでフェードイン・フェードアウト
    } else {
      logo.style.display = "block"; // 元の状態に戻す
    }
  }
});
