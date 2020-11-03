<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

function check_role() {
    $CI = & get_instance();
    
    if ($CI->session->userdata('id') && $CI->session->userdata('id') > 0) {
        $user_role = $CI->session->userdata('role_id');
        $already_login = $CI->router->fetch_class();
        $domanin_name = $CI->config->item("root_url");
        
        if ($user_role != '') {
            $url = $domanin_name . 'posss';
//            redirect($url);
        }
        
    } else {
        $already_login = $CI->router->fetch_class();
        
        if (($already_login == "already_login")) {
            redirect('');
        }
    }
    
}

?>