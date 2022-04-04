jQuery(document).ready(function ($) {
  console.log("hello@arabic-keybord.com");
  $textarea = $("#formControlTextarea");
  $("button.key").on("mousedown", function (e) {
    e.preventDefault();

    console.log("click");
    $key_value = $(this).data("value");

    if ($key_value == "del" || $key_value == "delete") {
      var temp = $textarea.val().substring(0, $textarea.val().length - 1);
      $textarea.val(temp);
       $textarea.focus();
    } else {
      $textarea.val($textarea.val() + $key_value);
      $textarea.focus();
    }
  });

  $("#delete_text").click(function (e) {
      $textarea.val("");
      e.preventDefault();
  });

  /**Open Google */
  $("#openGoogle").click(function (e) {
    var text = $("#formControlTextarea").val();
    var q = "https://www.google.com/search?q=" + text;

    if (text != "") {
      window.open(q);
    } else {
      alert("لم تكتب شيأ بعد !");
      e.preventDefault();
    }
  });
  /**Open Youtube */
  $("#openYoutube").click(function (e) {
    var text = $("#formControlTextarea").val();
    var q = "https://www.youtube.com/results?search_query=" + text;

    if (text != "") {
      window.open(q);
    } else {
      alert("لم تكتب شيأ بعد !");
      e.preventDefault();
    }
  });
  /**Open Translate to en  */
  $("#openTranslateEn").click(function (e) {
    var text = $("#formControlTextarea").val();
    var q =
      "https://translate.google.com/#view=home&op=translate&sl=ar&tl=en&text=" +
      text;

    if (text != "") {
      window.open(q);
    } else {
      alert("لم تكتب شيأ بعد !");
      e.preventDefault();
    }
  });

  /**Open Translate to en  */
  $("#openTranslateFr").click(function (e) {
    var text = $("#formControlTextarea").val();
    var q =
      "https://translate.google.com/#view=home&op=translate&sl=ar&tl=fr&text=" +
      text;

    if (text != "") {
      window.open(q);
    } else {
      alert("لم تكتب شيأ بعد !");
      e.preventDefault();
    }
  });

  $("#reverseText").on("click", function () {
    var input = $("#formControlTextarea");
    var backway = input.val().split("").reverse().join("");
    input.val(backway);
  });

  /*Slect and copy */
  $("#copy").on("click", function (e) {
    var input = $("#formControlTextarea");
    if (input.val() != "") {
      input.focus();
      input.select();
      document.execCommand("copy");
      alert("تم النسخ !");
    } else {
      alert("لم تكتب شيأ بعد !");
      e.preventDefault();
    }
  });

  // Space bar click
});
