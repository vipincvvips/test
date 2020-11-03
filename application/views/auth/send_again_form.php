<style>
    /** notifications **/
.notify {
  display: block;
  background: #fff;
  padding: 12px 18px;
  max-width: 400px;
  margin: 100px auto;
  cursor: pointer;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px;
  text-align: center;
  font-family: arial;
  font-size: 13px;
}

.notify h1 { margin-bottom: 6px; }

.successbox h1 { color: #678361; }
.errorbox h1 { color: #6f423b; }

.successbox h1:before, .successbox h1:after { background: #cad8a9; }
.errorbox h1:before, .errorbox h1:after { background: #d6b8b7; }

.notify .alerticon { 
  display: block;
  text-align: center;
  margin-bottom: 10px;
}
</style>
<div class="notify errorbox">
    <h1>Account Deactivated!</h1>
    <p>Your account was deactivated, Please verify your emailid.</p>
<?php     session_destroy(); ?>
<br>
    <a href=" <?php echo ROOT_URL.'index'; ?> ">
  <button type="button" class="btn login_btn">Back to Login</button>
  </a>


</div>

