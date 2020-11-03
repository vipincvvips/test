function confirm_reset() {
   // return confirm("Are you sure you wish to reset the form? You will loose the data and this action is not reversible.");

  if(confirm("Are you sure you wish to reset the form? You will loose the data and this action is not reversible.")){
  $('#dummy').attr('src', '');
        $("#dummy").addClass('hidden');
        $('#imgpath').val('');
 $(selector)[0].reset();
    }
    else{
        return false;
    }

}

$(document).ready(function () {



    $('.its_date_field').daterangepicker({
        singleDatePicker: true,
        format: 'DD-MM-YYYY',
        calender_style: "picker_1",
        showDropdowns: true
    }, function (start, end, label) {
        $('#student_dob').parent().addClass('is-focused').remove('is-empty');
    });


  $('#country').parents().removeClass('is-empty');
    $('#subscription').parents().removeClass('is-empty');
      $('#user_emailid').parents().removeClass('is-empty');
        $('#user_pass').parents().removeClass('is-empty');





    $(".submit-button").on("click", function () {
        $("form.common_data_form").submit();
    });
    $(document).on("submit", "form.common_data_form", function (event) {

        var formData = new FormData($(this)[0]);
        var $controller = $(this).attr('data-url');
        var $ts = $(this);
        $.ajax({
            type: 'POST',
            url: $controller,
            data: formData,
            dataType: 'json',
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function () {
                $('#display-error').html("");
                $('small.error-span').remove();
                $('.alert.alert-danger').slideUp(500).remove();
                  $('.submit-button').val('Please wait..!').attr('disabled', 'disabled');
                   $('.previwedit').val('Please wait..!').attr('disabled', 'disabled');
            },
            success: function (returnData) {
                if (returnData.status == "ok") {
                    $("#student-information").html(returnData.html);
                   
      
                } else {
                    if (typeof returnData.error != "undefined") {
                        var $first = 0;
                        $.each(returnData.error, function (idx, err) {
                            if ($('[name="' + idx + '"]').length > 0) {
                                if ($first == 0) {
                                    $('html, body').animate({
                                        scrollTop: $('[name="' + idx + '"]').offset().top - 50},
                                            'slow', function () {
                                                $('[name="' + idx + '"]').focus();
                                            });
                                    $first++;
                                }
                                $('[id="' + idx + '"]').parent().append('<small class="error-span text-danger">' + err + '</small>');
//                                $('<span class="error-span">'+err+'</span>').insertAfter($('name="'+idx+'"')); 
                            } else {
                                $('.alert.alert-danger').append(err + '<br>');
                            }
                        });

                        if ($('.alert.alert-danger').text() !== "") {
                            $('.alert.alert-danger').slideDown(500, function () { });
                        }

                    } else {
                        $('#display-error').html("<p class='text-danger lead text-center'>" + returnData.message + "</p>");
                    }
                  //  $('#captcha_image').html(returnData.captcha);
                }

  $('#country').parents().removeClass('is-empty');
    $('#subscription').parents().removeClass('is-empty');
      $('#user_emailid').parents().removeClass('is-empty');
        $('#user_pass').parents().removeClass('is-empty');

    
            },
            error: function (xhr, textStatus, errorThrown) {
                $('#display-error').html("<p class='text-danger lead text-center'>There was an unknown error that occurred. You will need to refresh the page to continue working.</p>");
            },
            complete: function () {
            //    $('input[type="submit"]').val('Save Info').removeAttr('disabled');
              $('.submit-button').val('REGISTER').removeAttr('disabled'); 
             
            }
        });

        return false;

    });

});



