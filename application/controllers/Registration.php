<?php



if (!defined('BASEPATH'))

    exit('No direct script access allowed');



class Registration extends CI_Controller {



    function __construct() {

        parent::__construct();
        $this->load->model('Common');

    }



    function index() {

        $data = array();

        $data['main_content'] = 'registration';

        $this->load->view('reg_content', $data);

    }

    function verify_email($id,$hash) {
   $verify_email = $this->Common->check_verify_email($id,$hash);
if( $verify_email >0){
    $this->Common->update_info($id);
    echo "thank you u have successfully verified your email, pls login";
    }else{
     echo "Link verification failed";    
    }
    echo "<br>";
    echo '<a href="'.ROOT_URL.'">back to site</a>';
}


    


       public function check_dob_exist($dob) {

         if(!empty($dob)) {
          if (date('Y-m-d', strtotime($dob)) <= date('Y-m-d')) {
                 return TRUE;
            } else {
                  $this->form_validation->set_message('check_dob_exist',"Please enter valid Date of Birth");
                return FALSE;
            }
        }
}

      public function check_email_exist($email) {
         if(!empty($email)) {
                $email = $this->Common->check_email($email);
            if (isset($email) && $email == 0) {
                 return TRUE;
            } else {
                 $this->form_validation->set_message('check_email_exist',"Sorry email id already in our DB");
                return FALSE;
            }
        }
}

      public function check_uk_phone($phoneno) {
         if(!empty($phoneno)) {

$pattern = "/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/";
$match = preg_match($pattern,$phoneno);
if ($match != false) {
    return TRUE;
} else {
    $this->form_validation->set_message('check_uk_phone',"Invalid Phone number");
}
}
}



    function submit_form() {




    
        if ($this->input->post()) {
            $response = array("status" => "error", "heading" => "Opps", "message" => "Something went wrong, Please try again!");
            $error_element = error_elements();

            $class_name = '';

           $this->form_validation


                    ->set_rules('first_name', 'First Name', 'trim|required')
                    ->set_rules('last_name', 'Last Name', 'trim|required')
        ->set_rules('dob',  'Date of Birth', 'trim|required|callback_check_dob_exist')
        ->set_rules('contact_no', 'Contact Number', 'trim|required|callback_check_uk_phone')
        ->set_rules('user_emailid', 'Email id', 'trim|required|valid_email|callback_check_email_exist')
                    ->set_rules('user_pass', 'Password', 'trim|required')
                    ->set_rules('country', 'Country', 'trim|required')
                    ->set_rules('subscription', 'subscription',  'trim|required');

                  
            if ($this->form_validation->run()) {
           


                        $hasher = new PasswordHash(
                                $this->config->item('phpass_hash_strength', 'tank_auth'), $this->config->item('phpass_hash_portable', 'tank_auth'));
                        $hashed_password = $hasher->HashPassword($this->input->post('user_pass'));

                      




 $emailhash = md5(rand(5000,999999));
            
                    $post_data = array(
                        'role_id' => '1',
                        'role_name' => 'user',
                        'email' => $this->input->post('user_emailid'),
                        'full_name' => $this->input->post('first_name').$this->input->post('last_name'),
                        'firstname' => $this->input->post('first_name'),
                        "lastname" => $this->input->post('last_name'),
                        "phonenumber" => $this->input->post('contact_no'),
                        "dateofbirth" => $this->input->post('dob'),
                        "country" => $this->input->post('country'),
                        "subscription" => $this->input->post('subscription'),
                        "username" => $this->input->post('user_emailid'),
                        "password" => $hashed_password,
                        "is_active" => "inactive",
                        "emailhash" => $emailhash
                    );
 //print_r($post_data); die();
                          if ($id = $this->Common->add_info($post_data)):

$subscription  = $this->input->post('subscription');
$email  = $this->input->post('user_emailid');
$subscription  = $this->input->post('subscription');

                            $response = file_get_contents("http://hn.algolia.com/api/v1/search?tags=".$subscription."&hitsPerPage=10");
$jsarray =  json_decode($response, true);
foreach ($jsarray["hits"] as $key => $jsy) {
$api_data = array(
                        'title' => $jsy['title'],
                        'author' => $jsy['author'],
                        'points' => $jsy['points'],
                        'story_text' => $jsy['story_text'],
                         'userid' => $id,
                    );
$this->Common->add_info($api_data, TBL_APIDATA);
}

 $message = ROOT_URL."registration/verify_email/".$id."/".$emailhash; 
$file_info ="";
self::__send_email($email,'verification_email', $message, $file_info);

                            $data = array();
                            $response = array("status" => "ok",
                            'path' => "",
                            'file_name' => "",
                            "html" => $this->load->view('success', $data, true),
                        );

                                else:
                        $response = array("status" => "error", "message" => "Somthing Wrong. Please Try Again.");
                    endif;



             
            } else {
                $errors = $this->form_validation->error_array();
                $response['error'] = $errors;
            }

            //  $response['captcha'] = $this->_create_captcha();

            echo json_encode($response);
            die;
        }
    




}



    private function __send_email($to, $subject, $content, $attachments){
        $this->load->library("PhpMailerLib");
        $mail = $this->phpmailerlib->load();
        try {
            //Server settings
            $mail->SMTPDebug = 0;                                 // Enable verbose debug output
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'smtp.gmail.com';                       // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = SMTP_SEND_EMAIL_ID;              // SMTP username
            $mail->Password = SMTP_EMAIL_PASSWORD;                    // SMTP password
            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 587;                                    // TCP port to connect to
            //Recipients
            $mail->setFrom(SMTP_FROM_EMAIL_ID, SMTP_FROM_NAME);
            $mail->addAddress($to);     // Add a recipient
            $mail->addReplyTo(SMTP_FROM_EMAIL_ID, SMTP_FROM_NAME);
            //Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = $subject;
            $mail->Body    = $content;
            $mail->send();
        } catch (Exception $e) {
//          echo 'Message could not be sent.';
//          echo 'Mailer Error: ' . $mail->ErrorInfo;
        }
        
    }



}