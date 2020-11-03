<?php
$login = array(
    'name' => 'login',
    'id' => 'login',
    'placeholder' => 'Email or Username...',
    'class' => 'form-username form-control',
    'value' => set_value('login'),
    'maxlength' => 80,
    'size' => 30,
);

if ($login_by_username AND $login_by_email) {
    $login_label = 'Email or login';
} else if ($login_by_username) {
    $login_label = 'Login';
} else {
    $login_label = 'Email';
}
$password = array(
    'name' => 'password',
    'id' => 'form-password',
    'placeholder' => 'Password...',
    'class' => 'form-password form-control',
    'size' => 30,
);
$remember = array(
    'name' => 'remember',
    'id' => 'remember',
    'value' => 1,
    'checked' => set_value('remember'),
    'style' => 'margin:0;padding:0',
);
$captcha = array(
    'name' => 'captcha',
    'id' => 'captcha',
      'class' => 'form-control',
    'maxlength' => 8,
);
?>




<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Test</title>
                <link rel="shortcut icon" href="<?php echo ROOT_URL; ?>common-assets/images/favicon_icon.png">

        <link href='http://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="<?php echo ROOT_URL; ?>common-assets/login/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="<?php echo ROOT_URL; ?>common-assets/login/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="<?php echo ROOT_URL; ?>common-assets/login/css/form-elements.css">
        <link rel="stylesheet" href="<?php echo ROOT_URL; ?>common-assets/login/css/style.css">
 <link rel="stylesheet" href="<?php echo ROOT_URL; ?>dist/css/styles.css">
  <link rel="stylesheet" href="<?php echo ROOT_URL; ?>dist/css/AdminLTE.min.css">

        <link rel="shortcut icon" href="<?php echo ROOT_URL; ?>common-assets/images/favicon_icon.png">
    </head>
  <div class="container h-100">
    <div class="d-flex justify-content-center h-100">
      <div class="user_card">
        <div class="d-flex justify-content-center">
          <div class="brand_logo_container">
            <img src="<?php echo ROOT_URL; ?>dist/img/logo1.jpg" class="brand_logo" alt="Logo">
          </div>
        </div>
        <div class="d-flex justify-content-center form_container">




                 <form role="form" action="<?php echo base_url('auth/login'); ?>" method="post" class="login-form">


            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fa fa-user"></i></span>
              </div>

            <label class="sr-only" for="form-username"><?php echo form_label($login_label, $login['id']); ?></label>
                                        <?php echo form_input($login); ?>
                                        <?php echo isset($errors[$login['name']]) ? '<p class="text-danger">' . $errors[$login['name']] . '</p>' : ''; ?>

            </div>
            <div class="input-group mb-2">
              <div class="input-group-append">
                <span class="input-group-text iconpad"><i class="fa fa-key"></i></span>
              </div>
                         <?php echo form_password($password); ?>
                                        <?php echo isset($errors[$password['name']]) ? '<p class="text-danger">' . $errors[$password['name']] . '</p>' : ''; ?>
            </div>


                                                                <?php if ($show_captcha) { ?>
                                    
                                        <p>Enter the code exactly as it appears:</p>
                                
                                        <div class="form-group">
                                            <label class="sr-only" for="form-password">Enter Confirmation Code</label>
                                            
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <?php echo $captcha_html; ?>
                                                </div>
                                                <div class="col-md-6">
                                                    <?php echo form_input($captcha); ?>
                                                </div>
                                                <div class="col-md-12 text-danger text-right">
                                                    <?php echo form_error($captcha['name']); ?>
                                                </div>
                                            </div>
                                            
                                        </div>
                                
                                    <?php } ?>
                                    


            <div class="form-group">
              <div class="custom-control custom-checkbox">
                  <?php echo form_checkbox($remember); ?>
                <label class="custom-control-label" for="customControlInline">Remember me</label>
              </div>
            </div>


        </div>
        <div class="d-flex justify-content-center mt-3 login_container">
        
                                    <div class="hidden">

                                    </div>
                                    <button type="submit" class="btn">Sign in!</button>
                                    <?php echo form_error($login['name']); ?>
                                    <?php echo form_error($password['name']); ?>
                                </form>
        </div>
      </div>
    </div>
  </div>





 <!--
                            <div class="forgot">
                                <a href="<?php echo base_url('/auth/forgot_password/'); ?>">Forgot your password?</a>
                            </div>
                        -->

                            


         


        <script>
            var BASE_URL = '<?php echo base_url(''); ?>';
        </script>

        <script src="<?php echo ROOT_URL; ?>common-assets/login/js/jquery-1.11.1.min.js"></script>
        <script src="<?php echo ROOT_URL; ?>common-assets/login/bootstrap/js/bootstrap.min.js"></script>
        <script src="<?php echo ROOT_URL; ?>common-assets/login/js/scripts.js"></script>
<script src="<?php echo ROOT_URL; ?>assets/jquery/dist/jquery.min.js"></script>
<script src="<?php echo ROOT_URL; ?>assets/bootstrap/dist/js/bootstrap.min.js"></script>

 


    </body>
</html>


<?php include 'disable.php';?>