// code Postale
var oldValuePostale = "";
// listen for "input" event, since that handles all keypresses as well as cut/paste
document
  .getElementById("codePostale")
  .addEventListener("input", function (event) {
    var input = event.target;
    if (validateCodePostale(input.value)) {
      // update old value with new value
      oldValuePostale = input.value;
    } else {
      // set value to last known valid value
      input.value = oldValuePostale;
    }
  });

// code Nom
var oldValueNom = "";
// listen for "input" event, since that handles all keypresses as well as cut/paste
document.getElementById("Nom").addEventListener("input", function (event) {
  var input = event.target;
  if (validateNom(input.value)) {
    // update old value with new value
    oldValueNom = input.value;
  } else {
    // set value to last known valid value
    input.value = oldValueNom;
  }
});

// code Prénom
var oldValuePrenom = "";
// listen for "input" event, since that handles all keypresses as well as cut/paste
document.getElementById("Prenom-2").addEventListener("input", function (event) {
  var input = event.target;
  if (validatePrenom(input.value)) {
    // update old value with new value
    oldValuePrenom = input.value;
  } else {
    // set value to last known valid value
    input.value = oldValuePrenom;
  }
});

// code Email
var oldValueEmail = "";
// listen for "input" event, since that handles all keypresses as well as cut/paste
document.getElementById("Email").addEventListener("input", function (event) {
  var input = event.target;
  if (validateEmail(input.value)) {
    // update old value with new value
    oldValueEmail = input.value;
  } else {
    // set value to last known valid value
    input.value = oldValueEmail;
  }
});

// code Phone
var oldValuePhone = "";
// listen for "input" event, since that handles all keypresses as well as cut/paste
document
  .getElementById("Telephone")
  .addEventListener("input", function (event) {
    var input = event.target;
    if (validatePhone(input.value)) {
      // update old value with new value
      oldValuePhone = input.value;
    } else {
      // set value to last known valid value
      input.value = oldValuePhone;
    }
  });

function validateCodePostale(str) {
  // check length, if is a number, if is whole number, if no periods
  return /^[0-9]{0,5}$/.test(str);
}
function validateNom(str) {
  // check length, if is a number, if is whole number, if no periods
  return /^[A-Z][A-Za-z\é\è\ê\-]+$/.test(str);
}
function validatePrenom(str) {
  // check length, if is a number, if is whole number, if no periods
  return /^[A-Z][A-Za-z\é\è\ê\-]+$/.test(str);
}
function validateEmail(str) {
  // check length, if is a number, if is whole number, if no periods
  return /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$/.test(
    str
  );
}
function validatePhone(str) {
  // check length, if is a number, if is whole number, if no periods
  return /^((\+)33|0)[1-9](\d{2}){4}$/.test(
    str
  );
}
