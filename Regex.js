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
  var inputn = event.target;
  if (validateNom(inputn.value)) {
    // update old value with new value
    oldValueNom = inputn.value;
  } else {
    // set value to last known valid value
    inputn.value = oldValueNom;
  }
});

// code Prénom
var oldValuePrenom = "";
// listen for "input" event, since that handles all keypresses as well as cut/paste
document.getElementById("Prenom-2").addEventListener("input", function (event) {
  var inputp = event.target;
  if (validatePrenom(inputp.value)) {
    // update old value with new value
    oldValuePrenom = inputp.value;
  } else {
    // set value to last known valid value
    inputp.value = oldValuePrenom;
  }
});

// code Email
var oldValueEmail = "";
// listen for "input" event, since that handles all keypresses as well as cut/paste
document.getElementById("Email").addEventListener("input", function (event) {
  var inpute = event.target;
  if (validateEmail(inpute.value)) {
    // update old value with new value
    oldValueEmail = inpute.value;
  } else {
    // set value to last known valid value
    inpute.value = oldValueEmail;
  }
});

// code Phone
var oldValuePhone = "";
// listen for "input" event, since that handles all keypresses as well as cut/paste
document
  .getElementById("Telephone")
  .addEventListener("input", function (event) {
    var inputc = event.target;
    if (validatePhone(inputc.value)) {
      // update old value with new value
      oldValuePhone = inputc.value;
    } else {
      // set value to last known valid value
      inputc.value = oldValuePhone;
    }
  });

function validateCodePostale(str) {
  // check length, if is a number, if is whole number, if no periods
  return /^\d{5}$/.test(str);
}
function validateNom(str) {
  // check length, if is a number, if is whole number, if no periods
  return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/.test(str);
}
function validatePrenom(str) {
  // check length, if is a number, if is whole number, if no periods
  return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð-]+$/.test(str);
}
function validateEmail(str) {
  // check length, if is a number, if is whole number, if no periods
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    str
  );
}
function validatePhone(str) {
  // check length, if is a number, if is whole number, if no periods
  return /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(
    str
  );
}
