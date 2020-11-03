<?php 

    $data = array();
	$this->load->view('includes_reg/header', $data);

	$this->load->view($main_content, $data);

	$this->load->view('includes_reg/footer', $data);

	

?>



