<?php 

    if($this->tank_auth->get_role_id() == '0'):

       redirect(ROOT_URL.'index');

    endif;

    $data = array();



	$this->load->view('includes_user/header', $data);

	$this->load->view($main_content, $data);

	$this->load->view('includes_user/footer', $data);

	

?>



