$(document).ready(function(){
	$('.header-notice').on('click',function(){
		window.location.href = "/centeros/notice";
	});
	notice();
});

function notice(){
	$.ajax({
		type:'post',
		url:'/kedo.php?c=centeros&m=noticeAPI',
		data:{'userId':userId},
		dataType:'json',
		success:function(data){
			//console.log(data);
			//data.state = 1;
			if (data.state == 0) {
				//console.log("no unread news");
				$('.header-notice').hover(function(){
					$(this).css('background','url(/public/centeros/images/header_notice_hover.png) no-repeat');
				},function(){
					$(this).css('background','url(/public/centeros/images/header_notice.png) no-repeat');
				});	
			}else{
				//console.log('有未读消息');
				$('.header-notice').css({'background':'url(/public/centeros/images/icon_xiaoxi.png) no-repeat','margin-top':'17px'});
				shine = setInterval("blink()",500);
				if (typeof clearB === 'function') {
					clearB();
				}
			}
		},
		error:function(xhr){
			//console.log(xhr);
		}
	});
}
function blink(){
	if (!flag) {
		//$('.header-notice').css('background','url()');
		$('.header-notice').css('opacity',0);
		flag =1;
	}else{
		$('.header-notice').css('opacity',1);
		//$('.header-notice').css('background','url(/static_data/images_css/icon_xiaoxi-tishi.png) no-repeat');
		flag =0;
	}
}