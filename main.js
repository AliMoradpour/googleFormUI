$(document).ready(function () {
  $(".input-field").focusout(function () {
    var inputValid = $(this).val();
    if (inputValid === "") {
      $(this).removeClass("has-value");
    } else {
      $(this).addClass("has-value");
    }
  });
});
