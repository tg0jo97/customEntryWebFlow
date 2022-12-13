Webflow.push(function() {
    $('#email-form').submit(function() {
      setTimeout(function() {
        location.href = 'https://calendly.com/huggydev?hide_landing_page_details=1&hide_gdpr_banner=1?&email=' + $('#Email').val() + '&full_name=' + $('#Nom').val() + '&=question_0' + $('#UUID').val(); }, 100);
    });
  });
