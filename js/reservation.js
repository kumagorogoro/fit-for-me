const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const memberNumber = document.getElementById("memberNumber").value;
  const fullName = document.getElementById("fullName").value;
  const reservationDate = document.getElementById("reservationDate").value;
  const reservationTime = document.getElementById("reservationTime").value;

  const errors = [];

  const errorNumber = document.getElementById("errorNumber");
  errorNumber.textContent = "";
  if (!/^\d+$/.test(memberNumber)) {
    errorNumber.textContent = "会員番号は数字のみで入力してください。";
    errors.push("会員番号は数字のみで入力してください。");
  } else if (memberNumber.length !== 8) {
    errorNumber.textContent = "会員番号は8桁で入力してください。";
    errors.push("会員番号は8桁で入力してください。");
  }

  const errorName = document.getElementById("errorName");
  errorName.textContent = "";
  if (!fullName.trim()) {
    errorName.textContent = "氏名を入力してください。";
    errors.push("氏名を入力してください。");
  }

  const errorDate = document.getElementById("errorDate");
  errorDate.textContent = "";
  if (!reservationDate) {
    errorDate.textContent = "予約日を選択してください。";
    errors.push("予約日を選択してください。");
  }

  const errorTime = document.getElementById("errorTime");
  errorTime.textContent = "";
  if (!reservationTime) {
    errorTime.textContent = "予約時間を選択してください。";
    errors.push("予約時間を選択してください。");
  }

  if (errors.length === 0) {
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
