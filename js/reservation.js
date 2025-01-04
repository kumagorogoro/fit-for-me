document
  .getElementById("reservationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const memberNumber = document.getElementById("memberNumber").value;
    const fullName = document.getElementById("fullName").value;
    const reservationDate = document.getElementById("reservationDate").value;
    const reservationTime = document.getElementById("reservationTime").value;

    let isValid = true;

    // 会員番号バリデーション
    const errorNumber = document.getElementById("errorNumber");
    errorNumber.textContent = "";
    if (!/^\d+$/.test(memberNumber)) {
      errorNumber.textContent = "会員番号は数字のみで入力してください。";
      isValid = false;
    } else if (memberNumber.length !== 8) {
      errorNumber.textContent = "会員番号は8桁で入力してください。";
      isValid = false;
    }

    // 氏名バリデーション
    const errorName = document.getElementById("errorName");
    errorName.textContent = "";
    if (!fullName.trim()) {
      errorName.textContent = "氏名を入力してください。";
      isValid = false;
    }

    // 予約日バリデーション
    const errorDate = document.getElementById("errorDate");
    errorDate.textContent = "";
    if (!reservationDate) {
      errorDate.textContent = "予約日を選択してください。";
      isValid = false;
    }

    // 予約時間バリデーション
    const errorTime = document.getElementById("errorTime");
    errorTime.textContent = "";
    if (!reservationTime) {
      errorTime.textContent = "予約時間を選択してください。";
      isValid = false;
    }

    // バリデーションが通った場合、確認メッセージを表示
    if (isValid) {
      alert(
        "予約が完了しました。\n" +
          "会員番号: " +
          memberNumber +
          "\n" +
          "氏名: " +
          fullName +
          "\n" +
          "予約日: " +
          reservationDate +
          "\n" +
          "予約時間: " +
          reservationTime
      );
    }
  });
