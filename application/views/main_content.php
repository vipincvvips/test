<?php 

    if($this->tank_auth->get_role_id() != '0'):

       redirect(ROOT_URL.'userprofile');

    endif;

    $data = array();



	$this->load->view('includes/header', $data);

	$this->load->view($main_content, $data);

	$this->load->view('includes/footer', $data);

	

?>



