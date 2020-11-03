<!DOCTYPE html>

<html lang="en">

    <head>



        <base href="<?php echo base_url(); ?>admin" />

        <meta charset="utf-8">

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <title>Test</title>

       <!--  <link rel="shortcut icon" href="<?php echo ROOT_URL; ?>common-assets/dist/img/logo2.png"> -->



        <link href="<?php echo ASSETS_URL; ?>bootstrap/dist/css/bootstrap.min.css" id="bootstrap_css" rel="stylesheet">

        <link href="<?php echo ASSETS_URL; ?>font-awesome/css/font-awesome.min.css" rel="stylesheet">

        <link href="<?php echo ASSETS_URL; ?>Ionicons/css/ionicons.min.css" rel="stylesheet">

        <link href="<?php echo ASSETS_URL; ?>iCheck/all.css" rel="stylesheet">

        <link href="<?php echo ASSETS_URL; ?>dist/fonts/font.css" rel="stylesheet">



        <link href="<?php echo ROOT_URL; ?>common-assets/vendors/iCheck/skins/flat/green.css" rel="stylesheet">

        <link href="<?php echo ROOT_URL; ?>common-assets/vendors/switchery/dist/switchery.css" rel="stylesheet">

        <link href="<?php echo ROOT_URL; ?>common-assets/vendors/select2/dist/css/select2.min.css" rel="stylesheet">



        <link href="<?php echo ROOT_URL; ?>common-assets/vendors/datatables.net-bs/css/dataTables.bootstrap.min.css" rel="stylesheet">

        <link href="<?php echo ROOT_URL; ?>common-assets/vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css" rel="stylesheet">

        <link href="<?php echo ROOT_URL; ?>common-assets/vendors/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css" rel="stylesheet">

        <link href="<?php echo ROOT_URL; ?>common-assets/vendors/datatables.net-responsive-bs/css/responsive.bootstrap.min.css" rel="stylesheet">

        <link href="<?php echo ROOT_URL; ?>common-assets/vendors/datatables.net-scroller-bs/css/scroller.bootstrap.min.css" rel="stylesheet">



        <link href="<?php echo ROOT_URL; ?>common-assets/alert/css/alert.min.css" rel="stylesheet" />

        <link href="<?php echo ASSETS_URL; ?>custom/css/date-picket.css" rel="stylesheet" />

        <link href="<?php echo ROOT_URL; ?>common-assets/vendors/pnotify/dist/pnotify.css" rel="stylesheet">

        <link href="<?php echo ROOT_URL; ?>common-assets/vendors/pnotify/dist/pnotify.buttons.css" rel="stylesheet">

        <link href="<?php echo ROOT_URL; ?>common-assets/vendors/pnotify/dist/pnotify.nonblock.css" rel="stylesheet">

        

        <link href="<?php echo ROOT_URL; ?>common-assets/alert/css/alert.min.css" rel="stylesheet" />

        <link href="<?php echo ROOT_URL; ?>common-assets/alert/themes/default/theme.min.css" rel="stylesheet" />

        

        <link href="<?php echo ROOT_URL; ?>common-assets/css/bootstrap-timepicker.css" rel="stylesheet">

        <link href="<?php echo ROOT_URL; ?>common-assets/css/jquery.timepicker.css" rel="stylesheet">

        <link href="<?php echo ASSETS_URL; ?>morris.js/morris.css" rel="stylesheet">

        <link href="<?php echo ASSETS_URL; ?>dist/css/theme-main.css" rel="stylesheet">

        <link href="<?php echo ROOT_URL; ?>common-assets/dist/css/skins/_all-skins.min.css" rel="stylesheet">

        <link href="<?php echo ROOT_URL; ?>common-assets/dist/css/AdminLTE.min.css" rel="stylesheet">

        <link href="<?php echo ASSETS_URL; ?>dist/css/loading.css" rel="stylesheet">                  









        <script type="text/javascript">

            var BASEURL = "<?php echo base_url(); ?>";

        

        </script>



        <?php

        if (isset($extra_css) && is_array($extra_css) && count($extra_css) > 0) {

            foreach ($extra_css as $css) {

                echo '<link href="' . base_url() . 'assets/custom/css/' . $css . '.css" rel="stylesheet"/>';

            }

        }

        ?>

        <script src="<?php echo ROOT_URL; ?>common-assets/js/jquery-1.10.2.min.js"></script>

        <script src="<?php echo ROOT_URL; ?>common-assets/js/jquery-ui.min.js"></script>

        

        <?php if(isset($ckeditor) && $ckeditor>0): ?>

            <script src="<?php echo ASSETS_URL; ?>ckeditor/ckeditor.js"></script>

            <script src="<?php echo ASSETS_URL; ?>ckeditor/ckeditor-setting.js"></script>

        <?php endif; ?>

        

        <script src="<?php echo ASSETS_URL; ?>raphael/raphael.min.js"></script>

        <script src="<?php echo ASSETS_URL; ?>morris.js/morris.js"></script>

        <script src="<?php echo ASSETS_URL; ?>dist/js/ac.js"></script>

        <script src="<?php echo ASSETS_URL; ?>dist/js/loading.js"></script>

        

    </head>

      <body class="hold-transition skin-blue sidebar-mini sidebar-collapse" style="height: auto; min-height: 100%;">

        <div class="wrapper">



            <header class="main-header">

                <a href="javascript:" class="logo">

                 Test

                </a>

                <nav class="navbar navbar-static-top">




                    

                    <div class="navbar-custom-menu">

                        <ul class="nav navbar-nav">

    



                            <li class="dropdown user user-menu">

                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">

                                    <img src="<?php echo ROOT_URL; ?>common-assets/images/img.jpg" class="user-image" alt="User Image">

                                    <span class="hidden-xs"><?php echo $this->tank_auth->get_full_name(); ?></span>

                                </a>

                                <ul class="dropdown-menu">

                                    <!-- User image -->

                                    <li class="user-header">

                                        <?php

//                                        exists_avtar($my_profile->student_profile_image, 'student', '');

                                        ?>

                                        <img src="<?php echo ROOT_URL; ?>common-assets/images/img.jpg" class="img-circle" alt="User Image">



                                        <p>

                                         <?php echo $this->tank_auth->get_full_name(); ?>

                                    

                                        </p>

                                        

                                    </li>

                                    <li class="user-footer">

                                        <div class="pull-left">

                                        <!--    <a href="<?php echo base_url('auth/change-password'); ?>" class="btn btn-default btn-flat">Change Password</a> -->

                                        </div>

                                        <div class="pull-right">

                                            <a href="<?php echo base_url('auth/logout'); ?>" class="btn btn-default btn-flat">Sign out</a>

                                        </div>

                                    </li>

                                </ul>

                            </li>

                            <?php  ?>

                   

                            <?php  ?>

                        </ul>

                    </div>

                </nav>

            </header>



            <?php //include 'sidebar.php'; ?>



            <div class="content-wrapper">

          