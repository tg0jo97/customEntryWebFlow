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
  return /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/.test(str);
}
function validatePrenom(str) {
  // check length, if is a number, if is whole number, if no periods
  return /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/.test(str);
}
function validateEmail(str) {
  // check length, if is a number, if is whole number, if no periods
  return /^([a-zA-z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(
    str
  );
}
function validatePhone(str) {
  // check length, if is a number, if is whole number, if no periods
  return /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(
    str
  );
}
