<?php
defined('BASEPATH') OR exit('No direct script access allowed');
 
/*
| -------------------------------------------------------------------
| EMAIL CONFING
| -------------------------------------------------------------------
| Configuration of outgoing mail server.
| */
$config['protocol'] = 'smtp';
$config['smtp_host'] = 'ssl://smtp.gmail.com'; // Change this
$config['smtp_port'] = '465';
$config['smtp_timeout'] = '30';
$config['smtp_user'] = 'user@gmail.com'; // Change this
$config['smtp_pass'] = 'my_password'; // Chnage this
$config['charset'] = 'utf-8';
$config['mailtype'] = 'html';
$config['wordwrap'] = TRUE;
$config['newline'] = "\r\n";
/* End of file email.php */
/* Location: ./system/application/config/email.php */