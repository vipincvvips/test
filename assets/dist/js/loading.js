(function ($) {

    $.fn.jmspinner = function (value) {
        var small = 'small';
        var custom = 'custom';
        var large = 'large';
        var div_bounces = '';
        var div = document.createElement('div');
        var plc = $(div).prop('class', 'spin_loading');
        var inner = document.createElement('div');
        var center_loading = $(inner).prop('class', 'spinner');
        var made = $(plc).html(center_loading);
        var bce1 = document.createElement('div');
        var bce2 = document.createElement('div');
        var bce3 = document.createElement('div');
        var div_btn_1 = $(bce1).prop('class', 'bounce1');
        var div_btn_2 = $(bce2).prop('class', 'bounce2');
        var div_btn_3 = $(bce3).prop('class', 'bounce3');
        // returning the bounce divs to the template

        //var div_inner_bounces = $(div_bounces).html(div_btn);
        var divs_bts;
        var index = 0;
        var loading = [];
        loading.push(div_btn_1, div_btn_2, div_btn_3);


        $.each(loading, function (i, index) {

            divs_bts = $(center_loading).append(index);

        });

        if (value == 'small') {
            var small = $(divs_bts).addClass('small');
            this.html(small);
            return this;
        }
        if (value == 'large') {
            var large = $(divs_bts).addClass('large');
            this.html(large);
            return this;
        }
        if (value == null) {
            var detf = $(divs_bts).addClass('default');
            this.html(detf);
            return this;
        }

        if (value == false) {
            this.find('.spinner').remove();
            return this;
        }

    }

}(jQuery));

$(document).ready(function () {

    var CURRENT_URL = window.location.href.split('?')[0], $SIDEBAR_MENU = $('.sidebar-menu');

    $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('active');

    $SIDEBAR_MENU.find('a').filter(function () {
        return this.href == CURRENT_URL;
    }).parent('li').addClass('active').parents('ul').slideDown(function () {
    }).parent().addClass('active');
    
    $(document).on("submit", '.sidebar-form' , function (event) {
        return false;
    });

    $(document).on("keyup", '.sidebar-form input[type="text"]', function (event) {

        var input, filter, table, tr, td, i, tr2, td2;
        input = $(this);
        filter = input.val().toUpperCase();
        table = $('ul.sidebar-menu');
        tr = $('ul.sidebar-menu li');
        tr2 = $('ul.treeview-menu li');

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("a")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }

        for (i = 0; i < tr2.length; i++) {
            td2 = tr2[i].getElementsByTagName("a")[0];
            if (td2) {
                if (td2.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr2[i].classList.add('its_display');
                    tr2[i].style.display = "";
                } else {
                    tr2[i].classList.remove('its_display');
                    tr2[i].style.display = "none";
                }
            }
        }
        
        $('ul.treeview-menu li.its_display').each(function(){
            $(this).parents('li').addClass('menu-open').show();
            $(this).parents('ul').slideDown();
        });

    });

});
