define(function(c,a,d){var b=c("./anchor-tools");d.exports={init:function(){var f=this;$(".live-info").on("click","#setting",function(){$("#pop").show();$("#pop").css("z-index","999");$("#shadow").css("display","block");$("#setting").css("background","#ffab03");UIF.handler.getNotice({},function(h){h=jQuery.parseJSON(h);if(h!=null&&h.id!=undefined){$("#id").val(h.id);$("#roomNotice").val(h.notice)}})});$("#save").click(function(){var i=$("#roomNotice").val();var h=$("#id").val();UIF.handler.sendNotice({id:h,notice:i},function(j){if(jQuery.parseJSON(j).resultStatus==200){$("#close").click();b.dialog("\u516C\u544A\u4FDD\u5B58\u6210\u529F!")}})});$("#close").click(function(){$("#pop").hide();$("#shadow").hide();$("#setting").css("background","#ffab03")});$("#noti_mana_song a").on("click",function(){$(this).addClass("active").siblings().removeClass("active");$("#info >div").hide();$("#info >div").eq($(this).index()).show()});var g=$("#noti_mana_song a");var e=$("#info >div");g.eq(1).click(function(){g.removeClass("active");$(this).addClass("active");e.hide();e.eq($(this).index()).show();f.getRoomMan()});g.eq(2).click(function(){g.removeClass("active");$(this).addClass("active");e.hide();e.eq($(this).index()).show();f.getSongList()});$("#add_btn").click(function(){$("#mana_shadow").css("display","block");$("#search_btn").show()});$("#add_user").click(function(){$("#mana_shadow").css("display","block");$("#search_btn").css("display","block")});$("#mana_close").click(function(){$("#appear").css("display","none");$("#mana_shadow").css("display","none")});$("#search_btn").click(function(){var h=$("#userId").val();UIF.handler.getUser({userid:h},function(i){i=jQuery.parseJSON(i);if(i!=null&&i.userid!=undefined){$("#idNum").html(i.userid);$("#userName").html(decodeURIComponent(i.nickName));$("#userImg").attr("src","/apis/avatar.php?uid="+i.userid)}$("#appear").css("display","block");$("#search_btn").css("display","none")})});$("#user_add").click(function(){var h=$("#idNum").html();UIF.handler.roomManagers({toIds:h,drives:"adds"},function(i){i=jQuery.parseJSON(i);if(i!=null&&i.resultMessage=="success"){$("#mana_shadow").css("display","none");f.getRoomMan()}$("#userId").val("");$("#search_btn").css("display","block");$("#appear").css("display","none")})});$("#songsSave").click(function(){var h=$("#songsName").val();UIF.handler.saveSongs({singer:"",songname:h},function(i){i=jQuery.parseJSON(i);if(i!=null&&i.resultMessage=="success"){f.getSongList()}$("#songsName").val("");$("#songsName").focus()})});$(".added_list").on("click",".clearFix .fl",function(k){var j="";var h=$(this);var i=$(this).attr("class");if(i!=null&&i.split(" ").length>0){j=i.split(" ")[2]}UIF.handler.roomManagers({toIds:j,drives:"dels"},function(l){l=jQuery.parseJSON(l);if(l!=null&&l.resultMessage=="success"){h.parent().remove()}})});$(".song_detail").on("click",".clearFix .fl",function(k){var j="";var h=$(this);var i=$(this).attr("class");if(i!=null&&i.split(" ").length>0){j=i.split(" ")[2]}UIF.handler.delSongs({songid:j},function(l){l=jQuery.parseJSON(l);if(l!=null&&l.resultMessage=="success"){h.parent().remove()}})});$("#skin_info").on("click",".sk-useit",function(){var i=$(this).attr("data-sk");var h={roomNumber:UIF.handler.roomNumber,skid:i};b.dialog("确定使用新皮肤并重新开播吗?",function(){$.post("/ajax/roomSettings.php",h,function(j){if(j=="success"){window.location.reload()}})},function(j){return})})},getRoomMan:function(){UIF.handler.getRoomMan({},function(f){f=jQuery.parseJSON(f);var e="";if(f!=null&&f.length>0){$("#add_user").css("display","block");$("#no_added").hide();$("#added").show();$.each(f,function(h,g){e+='<li class="clearFix"> <span class="num fl">'+(h+1)+'</span> <span class="level-bg fl"></span> <span class="name fl">'+decodeURIComponent(g.nickName)+'</span> <a href="javascript:;" class="delete fl '+g.userid+'">\u5220\u9664</a> </li>'})}$("#added_list").html(e)})},getSongList:function(){UIF.handler.songsListDetails({},function(f){f=jQuery.parseJSON(f);var e="";if(f!=null&&f.length>0){$("#add_user").css("display","block");$.each(f,function(h,g){e+='<li class="clearFix"> <span class="fl num">'+(h+1)+'</span><span class="fl item">'+g.songname+'</span> <a href="javascript:;" class="delete fl '+g.songid+'">\u5220\u9664</a> </li>'})}$("#song_detail").html(e)})}}});