  Webflow.push(function() {
    $('#email-form').submit(function() {
      setTimeout(function() {
          checkedBox();
        }, 100);
    });
  });


function checkedBox(){
    console.log('COOL');
}
