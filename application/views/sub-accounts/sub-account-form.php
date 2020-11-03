<?php




$firstname = array(
    'name' => 'firstname',
    'id' => 'firstname',
    'value' => (isset($emp_info) && $emp_info->firstname != "") ? $emp_info->firstname : set_value('firstname'),
    'maxlength' => 80,
     'required' => 'required',
    'size' => 40,
    'class' => "form-control col-md-7 col-xs-12",

);
$lastname = array(
    'name' => 'lastname',
    'id' => 'lastname',
    'value' => (isset($emp_info) && $emp_info->lastname != "") ? $emp_info->lastname : set_value('lastname'),
    'maxlength' => 80,
     'required' => 'required',
    'size' => 40,
    'class' => "form-control col-md-7 col-xs-12",

);

$phonenumber = array(
    'name' => 'phonenumber',
    'id' => 'phonenumber',
    'value' => (isset($emp_info) && $emp_info->phonenumber != "") ? $emp_info->phonenumber : set_value('phonenumber'),
    'maxlength' => 80,
     'required' => 'required',
    'size' => 40,
    'class' => "form-control col-md-7 col-xs-12",

);

$dateofbirthz = array(
    'name' => 'dateofbirthz',
    'id' => 'dateofbirthz',
    
        'value' => (isset($emp_info) && $emp_info->dateofbirth != "") ? $emp_info->dateofbirth : set_value('dateofbirthz'),
    'maxlength' => 80,
     'required' => 'required',
    'size' => 40,
    'class' => "form-control col-md-7 col-xs-12  its_date_field",
    'type' => "text",

);


$email = array(
    'name' => 'email',
    'id' => 'email',
    'value' => (isset($emp_info) && $emp_info->email != "") ? $emp_info->email : set_value('email'),
    'maxlength' => 80,
     'required' => 'required',
    'size' => 40,
    'class' => "form-control col-md-7 col-xs-12",

);


$password = array(
    'name' => 'password',
    'id' => 'password',
    'value' => '',
    'maxlength' => 80,
    'size' => 40,
    'class' => "form-control col-md-7 col-xs-12",
     'autocomplete' => "off",
);


$submit_btn = array(
    'name' => 'employee_submit',
    'id' => 'employee_submit',
    'value' => 'Submit',
    'class' => 'btn btn-primary',
);

$reset_btn = array(
    'name' => 'cancel_btn',
    'id' => 'cancel_btn',
    'content' => 'Cancel',
    'type' => 'reset',
    'class' => 'btn btn-default',

);

$form_attr = array(
    'class' => 'cmxform form-horizontal',
    'id' => 'employee_form',
);


if (isset($emp_info) && $emp_info->id > 0) {

    $id = array(

        'name' => 'id',

        'id' => 'id',

        'value' => (isset($emp_info) && $emp_info->id > 0) ? $emp_info->id : "",

      'type' => 'hidden',

    );

}

?>





<?php echo box_heading(((isset($emp_info)) ? 'Edit ' : 'Add New ').' Employee Details '.((isset($emp_info->full_name)) ? ' :: ' . $emp_info->full_name : '')); ?>



<div class="box-body">

<div class="ln_solid"></div>

    <form action="<?php echo base_url('accounts/submit-form'); ?>" enctype="multipart/form-data" method="post" class="form-horizontal form-label-left common_data_form">

        

       <?php echo (isset($emp_info) && $emp_info->id > 0) ? form_input($id) : ''; ?>





        <div class="col-md-12 col-sm-12 col-xs-12">

            <div class="col-md-6">


                <div class="form-group">

                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="aaaa"> First Name <span class="required">*</span></label>

                    <div class="col-md-9 col-sm-9 col-xs-12">

                        <?php echo form_input($firstname); ?>

                    </div>

                </div>



               

                <div class="form-group">

                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="aaa"> Last Name  <span class="required">*</span></label>

                    <div class="col-md-9 col-sm-9 col-xs-12">

                        <?php echo form_input($lastname); ?>

                    </div>

                </div>

            

               <div class="form-group">

                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="aaa"> Contact No <span class="required">&nbsp;</span>

                    </label>

                    <div class="col-md-9 col-sm-9 col-xs-12">

                        <?php echo form_input($phonenumber); ?>

                    </div>

                </div>

 <div class="form-group">

                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="aaa">Email<span class="required">&nbsp;</span>

                    </label>

                    <div class="col-md-9 col-sm-9 col-xs-12">

                        <?php echo form_input($email); ?>

                    </div>

                </div>




 <div class="form-group">

                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="aaa">DOB<span class="required">&nbsp;</span>

                    </label>

                    <div class="col-md-9 col-sm-9 col-xs-12">

                        <?php echo form_input($dateofbirthz); ?>

                    </div>

                </div>













            </div>

            <div class="col-md-6">

                  





                            <div class="form-group">

                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="branch_id">Subscription <span class="required">*</span></label>

                    <div class="col-md-9 col-sm-9 col-xs-12">




                                               <?php 

                                               echo form_dropdown('subscription', array("" => "Choose a subscription")+array('story' => 'story', 'comment' => 'comment', 'poll' => 'poll'),(isset($emp_info)) ? $emp_info->subscription : "", ' class="form-control col-md-7 col-xs-12" id="subscription"'); ?>



                     

                    </div>

                </div>

                <div class="form-group">

                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="gender">Country <span class="required">*</span></label>

                    <div class="col-md-9 col-sm-9 col-xs-12">


<?php 

                                               echo form_dropdown('country', array("" => "Choose a country")+array('India' => 'India', 'USA' => 'USA', 'UK' => 'UK', 'England' => 'England'), (isset($emp_info)) ? $emp_info->country : "", ' class="form-control col-md-7 col-xs-12" id="country"'); ?>



                    </div>

                </div>








 





                <div class="form-group">

                    <label for="aaa" class="control-label col-md-3 col-sm-3 col-xs-12"> Password <span class="required">&nbsp;</span></label>

                    <div class="col-md-9 col-sm-9 col-xs-12">

                        <?php echo form_password($password); ?>

                         <small> Leave it blank if you do not wish to change the password. </small>

                    </div>

                </div>


                <div class="form-group">

                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="gender">Active <span class="required">*</span></label>

                    <div class="col-md-9 col-sm-9 col-xs-12">


<?php 

                                               echo form_dropdown('is_active',array('inactive' => 'inactive', 'active' => 'active'), (isset($emp_info)) ? $emp_info->is_active : "", ' class="form-control col-md-7 col-xs-12" id="is_active"'); ?>



                    </div>

                </div>
       

                 



            </div>



        </div>

       



        

        <div class="col-md-12 col-sm-12 col-xs-12">

            <div class="col-md-6 col-xs-12 col-sm-12">

                <div class="form-group">

                    <label class="control-label col-md-3 col-sm-3 col-xs-12"></label>

                    <div class="col-md-9 col-sm-6 col-xs-12 ">

                        <button type="submit" class="btn btn-success">SUBMIT</button>

                        <button type="reset" class="btn btn-primary">CANCEL</button>

                    </div>

                </div>  

            </div>

        </div>



 

    </form>

</div>

