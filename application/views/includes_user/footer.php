</div>

<div class="clearfix"></div>

<footer class="main-footer">

    <div class="pull-right hidden-xs">

        

    </div>

    <strong>Copyright &copy; <?php echo date('Y'); ?> <a href="http://vipincv.com" target="_blank">Vipincv.com</a>.</strong> All rights reserved.

    <div class="clearfix"></div>

</footer>






</div>





<script src="<?php echo ASSETS_URL; ?>bootstrap/dist/js/bootstrap.min.js"></script>

<script src="<?php echo ASSETS_URL; ?>jquery-slimscroll/jquery.slimscroll.min.js"></script>

<script src="<?php echo ASSETS_URL; ?>fastclick/lib/fastclick.js"></script>

<script src="<?php echo ASSETS_URL; ?>dist/js/adminlte.js"></script>

<script src="<?php echo ASSETS_URL; ?>iCheck/icheck.min.js"></script>



<script src="<?php echo ROOT_URL; ?>common-assets/vendors/select2/dist/js/select2.full.min.js"></script>

<script src="<?php echo ROOT_URL; ?>common-assets/vendors/switchery/dist/switchery.min.js"></script>

<script src="<?php echo ROOT_URL; ?>common-assets/vendors/iCheck/icheck.min.js"></script>

<script src="<?php echo ROOT_URL; ?>common-assets/build/js/custom.js"></script>

<script src="<?php echo ROOT_URL; ?>common-assets/js/bootstrap-timepicker.js"></script>



<script src="<?php echo ROOT_URL; ?>common-assets/js/moment/moment.min.js"></script>

<script src="<?php echo ROOT_URL; ?>common-assets/js/datepicker/daterangepicker.js"></script>



<script src="<?php echo ROOT_URL; ?>common-assets/js/data-table/js/jquery.dataTables.min.js"></script>

<script src="<?php echo ROOT_URL; ?>common-assets/js/data-table/js/dataTables.tableTools.min.js"></script>

<script src="<?php echo ROOT_URL; ?>common-assets/js/data-table/js/bootstrap-dataTable.js"></script>



<script src="<?php echo ROOT_URL; ?>common-assets/vendors/pnotify/dist/pnotify.js"></script>

<script src="<?php echo ROOT_URL; ?>common-assets/vendors/pnotify/dist/pnotify.buttons.js"></script>

<script src="<?php echo ROOT_URL; ?>common-assets/vendors/pnotify/dist/pnotify.nonblock.js"></script>



<script src="<?php echo ROOT_URL; ?>common-assets/vendors/switchery/dist/switchery.min.js"></script>





<script src="<?php echo ROOT_URL; ?>common-assets/js/jquery.timepicker.js"></script>

<script src="<?php echo ROOT_URL; ?>common-assets/js/trumbowyg.js"></script>

<script src="<?php echo ROOT_URL; ?>common-assets/js/jquery.trackpad-scroll-emulator.js"></script>

<script src="<?php echo base_url(); ?>assets/custom/js/custom-for-all.js"></script>



<script src="<?php echo base_url(); ?>assets/custom/js/custom-datatable.js"></script>

<script src="<?php echo base_url(); ?>assets/custom/js/bootstrap-filestyle.js"></script>

<script src="<?php echo base_url(); ?>assets/custom/js/jquery.timeago.js"></script>

<?php /* ?>

 * <script src="<?php echo base_url(); ?>assets/custom/js/jquery.bootcomplete.js"></script>

<!--<script src="<?php echo ROOT_URL; ?>common-assets/js/jquery.scrollbar.js"></script>-->

<?php /*/ ?>

<script src="<?php echo ROOT_URL; ?>common-assets/js/dropdown.js"></script>

<script src="<?php echo ROOT_URL; ?>common-assets/alert/js/alert.min.js"></script>

<script src="<?php echo base_url(); ?>assets/custom/js/jquery.nice-number.js"></script>

<?php 

if (isset($extra_js) && is_array($extra_js) && count($extra_js) > 0) {

    foreach ($extra_js as $js) {

        echo '<script src="' . base_url() . 'assets/custom/js/' . $js . '.js" ></script>';

    }

}

?>



</body>

</html>