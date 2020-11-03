<?php



if (!defined('BASEPATH'))

    exit('No direct script access allowed');



class Remove extends CI_Controller {


    function __construct() {

        parent::__construct();

        if (!$this->tank_auth->is_logged_in()) {

            redirect('auth/login/');
        }

        $this->load->model('Account');

        $this->load->model('Common');
    }


   function remove($pid = 0, $where = 'id') {

        $id = ($pid > 0) ? $pid : (($this->input->post('id')) ? $this->input->post('id') : 0);

        if ($id > 0):

            $remove = $this->Account->remove_data($id, 'id', TBL_MASTER);
  $remove = $this->Account->remove_data($id, 'userid', TBL_APIDATA);
            if ($pid > 0):

                return ($remove) ? TRUE : FALSE;

            else:

                $response = ($remove) ? array('status' => 'ok', 'message' => 'Details removed successfully.!') : array('status' => 'ok', 'message' => 'Details not removed successfully.!');

                echo json_encode($response);

            endif;

        endif;
    }

}

