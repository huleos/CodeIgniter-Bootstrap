<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Homepage extends CI_Controller {

	public function index()
	{
		$data['title'] = 'My Title Page';
		$data['description'] = 'Here is the description pleeeeeeeese!';
		$data['content'] = 'pages/homepage';

		$this->load->view('layout/main', $data);
	}

}