<style type="text/css">
    .astrick{
        color: red;
    padding-top: 1px;
    }
</style>
<form class="common_data_form" action="<?php echo base_url('registration/submit-form/'); ?>" data-url="<?php echo base_url('registration/submit-form/'); ?>" id="common_data_form" method="post" enctype="multipart/form-data">

                <div id="student-information">

                    <div class="tab-content">
                        <div class="tab-pane1 pt45" >
                            <div class="row">
                        
                                <div class="error_display"></div>
                                <div class="">
                                   
                                  





                                    <h4 class="info-text"> User Information</h4>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group col-md-4">
                                                <div class="form-group label-floating">
                                                    <label class="control-label">First Name<span class="astrick"> * </span></label>
                                                    <input id="first_name" name="first_name" type="text" class="form-control">
                                                </div>
                                            </div>
                                
                                            <div class="form-group col-md-4">
                                                <div class="form-group label-floating">
                                                    <label class="control-label">Last Name<span class="astrick"> * </span></label>
                                                    <input id="last_name" name="last_name" type="text" class="form-control">
                                                </div>
                                            </div>

                                            <div class="form-group  col-md-3">
                                                <div class="form-group label-static">
                                                    <label class="control-label"> Date of Birth <span class="astrick"> * </span></label>
                                                    <input id="dob" name="dob" type="text" class="form-control its_date_field" readonly autocomplete="off">
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">

                                

                                            

      <div class="form-group col-md-4">
                                                    <div class="form-group label-floating">
                                                            <label class="control-label"> Contact Number <span class="astrick"> * </span></label>
                                                            <input id="contact_no" name="contact_no" type="text" class="form-control">
                                                    </div>

<i>07222 555555
(07222) 555555
+44 7222 555 555</i>
                                                </div>
                                   

                                          <div class="form-group col-md-4">
                                                    <div class="form-group label-floating">
                                                        <label class="control-label">Email <span class="astrick"> * </span></label>
                                                        <input autocomplete="off" id="user_emailid" name="user_emailid" type="email" class="form-control" >
                                                    </div>
                                                </div> 

  <div class="form-group col-md-4">
                                                    <div class="form-group label-floating">
                                                        <label class="control-label">Password <span class="astrick"> * </span></label>
                                                        <input  autocomplete="off" id="user_pass" name="user_pass" type="password" class="form-control">
                                                    </div>
                                                </div> 


                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                   
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                     

                                            <div class="form-group col-md-4">
                                                <div class="form-group label-static">
                                                    <label class="control-label">Country<span class="astrick"> * </span></label>

                                               <?php 

                                               echo form_dropdown('country', array("" => "Choose a country")+array('India' => 'India', 'USA' => 'USA', 'UK' => 'UK', 'England' => 'England'), 'UK', ' class="form-control col-md-7 col-xs-12" id="country"'); ?>
                                                   
                                                </div>
                                            </div>

                           
                                      <div class="form-group col-md-4">
                                                <div class="form-group label-static">
                                                    <label class="control-label">Subscription<span class="astrick"> * </span></label>

                                               <?php 

                                               echo form_dropdown('subscription', array("" => "Choose a subscription")+array('story' => 'story', 'comment' => 'comment', 'poll' => 'poll'), '', ' class="form-control col-md-7 col-xs-12" id="subscription"'); ?>
                                                   
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                             
              
                              
 
                                </div>
                        </div>
                    </div>
                    <div class="display hiddenx">
                        <div id="display-error" class="wizard-footer"></div>
                        <div class="wizard-footer">
                            <div class="">
                                <input type='reset' class='btn btn-danger btn-wd' onclick="return confirm_reset();" name='next' value='Reset' />
                                
                           

                                 <input type='button' class='btn  btn-fill btn-success btn-wd pull-right submit-button' name='finish' value='REGISTER' />
                            </div>
                       
                            <div class="clearfix"></div>
                        </div>
                       
                    </div>
                </div>
            </form>
        </div>
</form>


/*
http://hn.algolia.com/api/v1/search?query=foo&tags=story&hitsPerPage=10
http://hn.algolia.com/api/v1/search?query=bar&tags=comment&hitsPerPage=10
http://hn.algolia.com/api/v1/search_by_date?tags=poll&hitsPerPage=10
*/





</body>
</html>