document.getElementById("codePostale").setAttribute("value", "yaTout");

var max_chars = 5;

document.getElementById("codePostale").keydown(function (e) {
  if ($(this).val().length >= max_chars) {
    $(this).val($(this).val().substr(0, max_chars));
  }
});

document.getElementById("codePostale").keyup(function (e) {
  if ($(this).val().length >= max_chars) {
    $(this).val($(this).val().substr(0, max_chars));
  }
});
