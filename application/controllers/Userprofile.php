<?php



if (!defined('BASEPATH'))

    exit('No direct script access allowed');



class Userprofile extends CI_Controller {



    function __construct() {

        parent::__construct();

        if (!$this->tank_auth->is_logged_in()) {

            redirect('auth/login/');

        }



        $this->load->model('Common');

    }



    function index() {

        $data = array();
$userid = $this->tank_auth->get_user_id();
 $data['api_data'] = $this->Common->fetch_apicontent($userid);
        $data['main_content'] = 'user_dashboard';

        $this->load->view('user_content', $data);

    }



}

