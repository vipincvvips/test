<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?php echo PAGE_TITLE; ?></title>

        <link href='http://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="<?php echo ROOT_URL; ?>common-assets/login/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="<?php echo ROOT_URL; ?>common-assets/login/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="<?php echo ROOT_URL; ?>common-assets/login/css/form-elements.css">
        <link rel="stylesheet" href="<?php echo ROOT_URL; ?>common-assets/login/css/style.css">

    </head>

    <body>

        <!-- Top content -->
        <div class="top-content">

            <div class="inner-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2 text">
                            <h1>ICSK - Admin Portal</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3 form-box">
                            <div class="form-top">
                                <h3 class="text-center">Message</h3>
                                <p class="text-center"><?php echo $message; ?></p>
                            </div>
                            <div class="forgot">
                                <a href="<?php echo base_url('/auth/login/'); ?>">Back to Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <script>
            var BASE_URL = '<?php echo base_url(''); ?>';
        </script>

        <script src="<?php echo ROOT_URL; ?>common-assets/login/js/jquery-1.11.1.min.js"></script>
        <script src="<?php echo ROOT_URL; ?>common-assets/login/bootstrap/js/bootstrap.min.js"></script>
        <script src="<?php echo ROOT_URL; ?>common-assets/login/js/scripts.js"></script>

    </body>

</html>
<?php include 'disable.php';?>
