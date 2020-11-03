                            
                            </div>
                        </div> <!-- wizard container -->
                    </div>
                </div><!-- end row -->
            </div> <!--  big container -->

            <div class="footer">
                <div class="container text-center">
                    &copy; <?php echo date('Y'); ?> <a target="http://vipincv.com/">vipincv</a>.
                </div>
            </div>
        </div>


        <script src="<?php echo base_url(); ?>reg/js/jquery-2.2.4.min.js" type="text/javascript"></script>
        <script src="<?php echo base_url(); ?>reg/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="<?php echo base_url(); ?>reg/js/jquery.bootstrap.js" type="text/javascript"></script>
        <script src="<?php echo base_url(); ?>reg/js/loading.js" type="text/javascript"></script>
        <script src="<?php echo base_url(); ?>reg/js/theme.js"></script>
        
        <?php
        if (isset($extra_js) && is_array($extra_js) && count($extra_js) > 0) {
            foreach ($extra_js as $js) {
                echo '<script src="' . base_url() . 'reg/js/' . $js . '.js?'.time().'" ></script>';
            }
        }
        ?>
        

        <script src="<?php echo ROOT_URL; ?>reg/js/moment.min.js"></script>
<script src="<?php echo ROOT_URL; ?>reg/js/bootstrap-timepicker.js"></script>
<script src="<?php echo ROOT_URL; ?>reg/js/daterangepicker.js"></script>
<script src="<?php echo base_url(); ?>reg/js/jquery.validate.min.js"></script>
<script src="<?php echo base_url(); ?>reg/js/custom.js?<?php echo time(); ?>"></script>

    </body>
</html>
