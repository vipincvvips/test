<?php



if (!defined('BASEPATH'))

    exit('No direct script access allowed');



class Launch extends CI_Controller {


    function index() {
        $this->load->view('launchform');

    }



}

