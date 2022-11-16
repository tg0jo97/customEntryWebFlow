var oldValue = "";
// listen for "input" event, since that handles all keypresses as well as cut/paste
document
  .getElementById("codePostale")
  .addEventListener("input", function (event) {
    var input = event.target;
    if (validateInput(input.value)) {
      // update old value with new value
      oldValue = input.value;
    } else {
      // set value to last known valid value
      input.value = oldValue;
    }
  });

function validateInput(str) {
  // check length, if is a number, if is whole number, if no periods
  return /^[0-9]{0,5}$/.test(str);
}
