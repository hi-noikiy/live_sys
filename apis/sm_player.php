<?phpheader("Expires: Mon, 26 Jul 1997 05:00:00 GMT");header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GMT");header("Pragma: no-cache");$_COOKIE['HFCOOKIE']=$_GET['cookie'];include('../include/header.inc.php');include_once($app_path."include/aes.func.php");include_once($app_path."include/level.func.php");include_once($app_path.'include/login.func.php');if($_REQUEST['userid'] && $_REQUEST['token']){		//$auth = md5($_REQUEST['userid'].LOGIN_THIRD_KEY);		//if($auth==strtolower($_REQUEST['token'])){			$userinfo=$db->GetRow("select * from user where accountfrom='$partnerid' and snsid='{$_REQUEST['userid']}'");			if(!!$userinfo){				$token=logincookie($userinfo);				setcookie("HFCOOKIE",$token,time()+3600,'/',_COOKIE_DOMAIN_);				//var_dump($userinfo);			}			else{				$token=register_by_opensns($partnerid,$_REQUEST['userid'],$_REQUEST['userid'],"");			}			$data['flashvars']="chat=1&online=1&fn=&roomnumber=&showid=&token=".$token;					//}		//else{		//	echo("The state does not match. You may be a victim of CSRF.==");		//}		echo $_REQUEST['callback']."(".json_encode($data).");";}include('../include/footer.inc.php');