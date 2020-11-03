function get_updated_datatable(){
    
    $('#add_edit_form').slideUp(500,function(){
       $('#display_update_form').html(''); 
    });
    
    if ($(".dataTables_paginate li.active a").length > 0)
        $(".dataTables_paginate li.active a").trigger("click");
    else
        $(".dataTable th:eq(0)").trigger("click");
}

$(document).ready(function () {

    $(document).on("click", ".btn.open_my_form_form", function (event) {

        var data_id = $(this).attr('data-id');
        var controller = $(this).attr('data-control');
        var mathod  = $(this).attr('data-mathod');
        if (typeof mathod !== typeof undefined && mathod !== false) {
            var $url = mathod;
            if(data_id > 0){ $url = $url+'/'+data_id; }
        }else{
            var $url = 'add';
            if(data_id > 0){ $url = 'edit/'+data_id; }
        }
        
        
        $.ajax({
            type: 'POST',
            url: controller+'/'+$url,
            async: false,
            data: 'pstdata=1',
            dataType: 'html',
            beforeSend: function () {
                $('#display_update_form').html('<h2 class="text-center">Please wait..!</h2>');
                $('#add_edit_form').show();
            },
            success: function (returnData) {
                $('#display_update_form').html(returnData);

                if ($("#section_start_time").length > 0) {
                    $("#section_start_time, #section_end_time").timepicker({
                        timeFormat: 'h:mm p',
                        interval: 05,
                        minTime: '6',
                        maxTime: '11:00 PM',
                        startTime: '6:00 AM',
                        dynamic: false,
                        dropdown: true,
                        scrollbar: true
                    });
                }
                
                $("#display_update_form :file").filestyle({buttonText: "&nbsp; Upload", buttonName: "btn-primary", placeholder: "No file selected", buttonBefore: true});
                
                $('#display_update_form select').select2();
                
                $('.load_hide').hide();
                
                $('.its_date_field').daterangepicker({
                    singleDatePicker: true,
                    format: 'DD-MM-YYYY',
                    calender_style: "picker_1",
//                    startDate: '03/05/2017',
                    showDropdowns: true
                }, function (start, end, label) {

                });
                
//                $('input.its_time_field').timepicker({});

                if ($(".js-switch")[0]) {
                    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
                    elems.forEach(function (html) {
                        var switchery = new Switchery(html, {
                            color: '#26B99A'
                        });
                    });
                }
                
                $('.its_time_field').timepicker({
                    timeFormat: 'h:mm p',
                    interval: 05,
                    minTime: '6',
                    maxTime: '11:00 PM',
//                    defaultTime: '6',
                    startTime: '6:00 AM',
                    dynamic: false,
                    dropdown: true,
                    scrollbar: true
                });


                
            },
            error: function (xhr, textStatus, errorThrown) {
                new PNotify({ title: 'Error', text: 'There was an unknown error that occurred. You will need to refresh the page to continue working.', type: 'error', styling: 'bootstrap3' });
            },
            complete: function () {
            }
        });
        
        return false;
            
    });
    


    
    $(document).on("click", "button[type='reset']", function (event) {
        $('#add_edit_form').slideUp('slow');
    });
    
    $(document).on("click", ".btn.delete_btn", function (event) {
        
        $('a.remove_clicked').removeClass('remove_clicked')
        $(this).addClass('remove_clicked');
        var $ts = $(this);
        $.alert.open('confirm', 'Are you sure you want to delete this?', function(button) {
            if (button == 'yes') {
                                           
                            var data_id = $ts.attr('data-id');
                            var method = $ts.attr('data-method');
                            var $url = 'remove/'+method;
                            $.ajax({
                                type: 'POST',
                                url: $url,
                                async: false,
                                data: {id: data_id},
                                dataType: 'json',
                                beforeSend: function () {
                                    $('.dataTables_processing').css('visibility','visible');
                                },
                                success: function (returnData) {
                                    if(returnData.status == 'ok'){
                                        $.alert.open({type: 'info', content: returnData.message});
                                        $ts.closest( "tr" ).remove();
                                    }else{
                                        $.alert.open({type: 'error', content: returnData.message});
}
                                },
                                error: function (xhr, textStatus, errorThrown) {
                                    new PNotify({title: 'Error', text: 'There was an unknown error that occurred. You will need to refresh the page to continue working.', type: 'error', styling: 'bootstrap3'});
                                },
                                complete: function () {
                                    $('.dataTables_processing').css('visibility','hidden');
                                    
                                }
                            });
                                
            } 
        });
        return false;

    });
    

});
