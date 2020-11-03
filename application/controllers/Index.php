<?php



if (!defined('BASEPATH'))

    exit('No direct script access allowed');



class Index extends CI_Controller {



    function __construct() {

        parent::__construct();

        if (!$this->tank_auth->is_logged_in()) {

            redirect('auth/login/');

        }



        $this->load->model('Common');

    }



    function index() {

        $data = array();

        $data['main_content'] = 'dashboard';

        $this->load->view('main_content', $data);

    }



}

