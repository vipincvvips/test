$(document).ready(function () {

    $('.its_date_field').daterangepicker({
        singleDatePicker: true,
        format: 'DD-MM-YYYY',
        calender_style: "picker_1",
        showDropdowns: true
    }, function (start, end, label) {

    });

    var $controller = $('#common_datatable').attr('data-control');

    var data_id = $(this).attr('data-id');
    var mathod = $(this).attr('data-mathod');

    if (typeof mathod !== typeof undefined && mathod !== false) {
        var $url = mathod;
        if (data_id > 0) {
            $url = $url + '/' + data_id;
        }
    } else {
        var $url = 'manage';
        if (data_id > 0) {
            $url = 'edit/' + data_id;
        }
    }
 
    var oTable = $('#common_datatable').dataTable({
        "bProcessing": true,
        "bServerSide": true,
        "sAjaxSource": $controller + '/' + $url,
//        "sDom": "<'row'<'col-md-6'l <'toolbar'>><'col-md-6'f>r>t<'row'<'col-md-12'p i>>",
        "bjQueryUI": true,
        "aaSorting": [[0, "desc"]],
        "bAutoWidth": false,
        "aLengthMenu": [[50, 100, 200, 500, -1], [50, 100, 200, 500, "All"]],
        "fnServerParams": function (aoData, fnCallback) {
            aoData.push({"name": "dateStart", "value": $('#dateStart').val()});
            aoData.push({"name": "dateend", "value": $('#dateend').val()});
        },
        "fnInitComplete": function () {
            $('.tooltip-top a').tooltip();
        },
        "oLanguage": {"sLengthMenu": "_MENU_ ", "sInfo": "Showing <b>_START_ to _END_</b> of _TOTAL_ entries"},
    });

    function reintfnDraw() {
        oTable.fnDraw();
    }

    $(document).on("submit", "form.common_data_form", function (event) {

        var formData = new FormData($(this)[0]);
        var $controller = $(this).attr('action');
        $.ajax({
            type: 'POST',
            url: $controller,
            async: false,
            data: formData,
            dataType: 'json',
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function () {
                $('.alert.alert-danger').slideUp(500).remove();
                $('button[type="submit"]').text('Please wait..!').attr('disabled', 'disabled');
            },
            success: function (returnData) {

                if (returnData.status == "ok") {
                    new PNotify({title: returnData.heading, text: returnData.message, type: 'success', styling: 'bootstrap3'});
                    get_updated_datatable();

                } else {
                    if (typeof returnData.error != "undefined") {
                        if ($('.alert.alert-danger').length == 0) {
                            $('<div role="alert" class="alert alert-danger alert-dismissible fade in" style="display:none;"></div>').insertAfter('.ln_solid');
                        }
                        $.each(returnData.error, function (idx, topic) {
                            $('.alert.alert-danger').append(topic + '<br>');
                        });
                        $('.alert.alert-danger').slideDown(500, function () {
                        });
                    } else {
                        new PNotify({title: returnData.heading, text: returnData.message, type: 'error', styling: 'bootstrap3'});
                    }
                }

            },
            error: function (xhr, textStatus, errorThrown) {
                new PNotify({title: 'Error', text: 'There was an unknown error that occurred. You will need to refresh the page to continue working.', type: 'error', styling: 'bootstrap3'});
            },
            complete: function () {
                $('button[type="submit"]').text('Submit').removeAttr('disabled');
            }
        });

        return false;

    });

    $(document).on("click", ".delete-contribution", function (event) {

        var cnt_id = $(this).attr('data-id');
        $.alert.open('confirm', 'Are you sure you want to delete this?', function (button) {
            if (button == 'yes') {
                $.ajax({
                    type: 'POST',
                    url: 'contributions/delete-contribution',
                    async: false,
                    data: 'cnt_id=' + cnt_id,
                    dataType: 'json',
                    beforeSend: function () {
                        //                $(this).text('Please wait..!').attr('disabled', 'disabled');
                    },
                    success: function (returnData) {
                        if (returnData.status == "ok") {
                            toastr_message("success", returnData.heading, returnData.message);
                        } else {
                            toastr_message("error", returnData.heading, returnData.message);
                        }
                        if ($(".dataTables_paginate li.active a").length > 0)
                            $(".dataTables_paginate li.active a").trigger("click");
                        else
                            $(".dataTable th:eq(0)").trigger("click");
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        toastr_message("error", "Error", 'There was an unknown error that occurred. You will need to refresh the page to continue working.');
                    },
                    complete: function () {
                    }
                });
            }
        });
    });

});