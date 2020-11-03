$(document).ready(function() {
    var oTable = $('#manage_nav_menu').dataTable({
        "bProcessing": true,
        "bServerSide": true,
        "sAjaxSource": 'admin/nav-menu/manage/',
        "sPaginationType": "bootstrap",
        "iDisplayStart ": 20,
        "oLanguage": {
        },
        "fnInitComplete": function() {
            $('.tooltip-top a').tooltip();
        },
        'fnServerData': function(sSource, aoData, fnCallback)
        {
            $.ajax
                    ({
                        'dataType': 'json',
                        'type': 'POST',
                        'url': sSource,
                        'data': aoData,
                        'success': fnCallback
                    });
        }
    });

    $(document).on("click", ".remove-menu", function(event) {
        event.preventDefault();
        var ts = $(this);
        cid = ts.attr("data-menu-id");
        var url = 'admin/nav-menu/remove/';
        var $target = $(this).closest('tr'); // Add Reference </tr> of Link
        
        $.post(url, {id: cid}, function(ajaxdata) {
            if (ajaxdata.status == "ok") {
                $.gritter.add({
                    title: ajaxdata.heading,
                    text: ajaxdata.message,
                    class_name: 'gritter-light'
                });
                ts.closest("li").remove();
            }
            oTable.fnDeleteRow($target); // Deletes Row
        }, "json");
        
        
        
    });
    $(document).on("click", "#menu_submit", function(event) {
        event.preventDefault();
        ordering = $("#nestable_list_1_output").val();
        var url = 'admin/nav-menu/ordering/';
        $(this).val("Please wait...");
        $.post(url, {data: ordering}, function(ajaxdata) {
            if (ajaxdata.status == "ok") {
                $.gritter.add({
                    title: ajaxdata.heading,
                    text: ajaxdata.message,
                    class_name: 'gritter-light'
                });
            }
            $("#menu_submit").val("Save Menu");
        }, "json");
        return false;
    });

});