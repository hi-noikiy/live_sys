<!--main-->
<div class="inmiddle">
    <?php
    $current_page="mportrait";
    include_once('./include/personal_tpl/center-info.php');
    include_once('./include/personal_tpl/menu_left.php');
    ?>

    <div class="center-right">

        <div class="cr_portrait">
            <div class="cr-title">修改头像</div>
            <div class="modify-protrait">
                <div style="padding-top: 50px;padding-left: 50px;">
                    <p id="swfContainer">
                        本组件需要安装Flash Player后才可使用，请从<a href="http://www.adobe.com/go/getflashplayer">这里</a>下载安装。
                    </p>
                    <button type="button" id="upload" style="display:none;margin-top:8px;"></button>
                </div>
            </div>
        </div>
    </div>

    <script src="/js/swfobject.js"></script>
    <script src="/js/fullAvatarEditor.js"></script>
    <script>
        function avatarUploadComplete(){
            $("#personavatar").attr("src","/apis/avatar.php?uid=<?php echo $user['userid']?>&_t="+new Date().getTime());
            window.location.reload();
        }
        $(function(){
            swfobject.addDomLoadEvent(function () {
                var swf = new fullAvatarEditor("/fullAvatarEditor/fullAvatarEditor.swf", "/fullAvatarEditor/expressInstall.swf", "swfContainer", {
                        id : 'uploadavatarbtn',
                        upload_url : '/fullAvatarEditor/upload.php',	//上传接口
                        method : 'post',	//传递到上传接口中的查询参数的提交方式。更改该值时，请注意更改上传接口中的查询参数的接收方式
                        src_upload : 0,		//是否上传原图片的选项，有以下值：0-不上传；1-上传；2-显示复选框由用户选择
                        avatar_box_border_width : 1,
                        avatar_sizes : '120*120',
                        isShowUploadResultIcon:true,
                        avatar_sizes_desc : '120*120像素'
                    }, function (msg) {
                        switch(msg.code)
                        {
                            case 1 : break;//页面成功加载了组件！
                            case 2 : //已成功加载图片到编辑面板。
                                document.getElementById("upload").style.display = "inline";
                                break;
                            case 3 :
                                if(msg.type == 0)
                                {
                                    alert("摄像头已准备就绪且用户已允许使用。");
                                }
                                else if(msg.type == 1)
                                {
                                    alert("摄像头已准备就绪但用户未允许使用！");
                                }
                                else
                                {
                                    alert("摄像头被占用！");
                                }
                                break;
                            case 5 :
                                console.log(msg.content.avatarUrls[0]);
                                avatarUploadComplete();
                                break;
                        }
                    }
                );
                document.getElementById("upload").onclick=function(){
                    swf.call("upload");
                };
            });
        });
    </script></div>
    </div>


<!--main-->

<?php include('tpl_footer.php'); ?>

</body>
</html>