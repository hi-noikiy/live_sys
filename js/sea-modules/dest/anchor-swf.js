define(function(b,a,c){c.exports={init:function(){swfobject.embedSWF("/js/sea-modules/swf/MultyGiftNotice.swf?20140218","MultyGiftNoticeSwf","640","360","10.0","",{mtadd:UIF.handler.flash},{wmode:"transparent",allowScriptAccess:"always"});swfobject.embedSWF("/js/sea-modules/swf/CustomGift.swf?20140218","CustomGiftSwf","640","360","10.0","",{mtadd:UIF.handler.flash},{wmode:"transparent",allowScriptAccess:"always"});swfobject.embedSWF("/js/sea-modules/swf/LevelUpPlayer.swf?20140218","LevelUpPlayerSwf","640","360","10.0","",{mtadd:UIF.handler.flash},{wmode:"transparent",allowScriptAccess:"always"});swfobject.embedSWF("/js/sea-modules/swf/EffectPlayer.swf?v=102403","EffectPlayerSwf",940,500,"10.0","",{mtadd:UIF.handler.flash},{wmode:"transparent",allowScriptAccess:"always"});swfobject.embedSWF("/js/sea-modules/swf/PetNew.swf?v=102403","PetSwf",440,320,"10.0","",{mtadd:UIF.handler.flash},{wmode:"transparent",allowScriptAccess:"always"});swfobject.embedSWF("/js/sea-modules/swf/treasureBox.swf","treasureBox_swf",100,100,"10.0","",{mtadd:UIF.handler.flash},{wmode:"transparent",allowScriptAccess:"always"})},close:function(d){try{$("#"+d.elements).css("z-index","0");$("#"+d.elements).css("pointer-events","none");swfobject.getObjectById("EffectPlayerSwf").style.visibility="hidden"}catch(f){setTimeout(function(){},5*1000)}},hideSuc:function(){alert("hide success")},filDescribe:"\u8C6A\u534E\u793C\u7269",fil:function(f){if(UIF.handler.effect){try{$("#EffectPlayerSwf").css("z-index","3000");swfobject.getObjectById("EffectPlayerSwf").style.visibility="visible";var d="/files/showGift/"+f.giftId+".swf";swfobject.getObjectById("EffectPlayerSwf").jsNewGift(d,f.number,f.car,f.nickname,f.carName,f.needAddFlag)}catch(g){UIF.log(g)}}},figDescribe:"\u6570\u7EC4\u793C\u7269",fig:function(d){if(UIF.handler.effect){try{$("#EffectPlayerSwf").css("z-index","3000");swfobject.getObjectById("EffectPlayerSwf").style.visibility="visible";swfobject.getObjectById("EffectPlayerSwf").jsRun("/files/showGift/"+d.image,d.shape)}catch(f){UIF.log(f)}}},cusDescribe:"\u968F\u673A\u793C\u7269",cus:function(d){if(UIF.handler.effect){try{$("#CustomGiftSwf").css("z-index","3000");swfobject.getObjectById("CustomGiftSwf").style.visibility="visible";swfobject.getObjectById("CustomGiftSwf").jsRun("/files/showGift/"+d.image+".png",d.number)}catch(f){UIF.log(f)}}},mulDescribe:"\u8FDE\u9001\u793C\u7269",mul:function(d){if(UIF.handler.effect){try{$("#MultyGiftNoticeSwf").css("z-index","3000");swfobject.getObjectById("MultyGiftNoticeSwf").style.visibility="visible";swfobject.getObjectById("MultyGiftNoticeSwf").showMultyGift(d.uid,d.user,d.number,d.sendNum,d.headImg,"/files/showGift/"+d.giftImg+".png")}catch(f){UIF.log(f)}}},actDescribe:"\u6D3B\u8DC3\u5347\u7EA7",act:function(d){if(UIF.handler.effect){try{$("#LevelUpPlayerSwf").css("z-index","3000");$("#LevelUpPlayerSwf").css("pointer-events","auto");swfobject.getObjectById("LevelUpPlayerSwf").style.visibility="visible";swfobject.getObjectById("LevelUpPlayerSwf").showActivityLevelup(d.headImg,d.actlevel)}catch(f){UIF.log(f)}}},cohDescribe:"\u4EB2\u5BC6\u5347\u7EA7",coh:function(d){if(UIF.handler.effect){try{$("#LevelUpPlayerSwf").css("z-index","3000");$("#LevelUpPlayerSwf").css("pointer-events","auto");swfobject.getObjectById("LevelUpPlayerSwf").style.visibility="visible";swfobject.getObjectById("LevelUpPlayerSwf").showIntimacyLevelup(d.headImg,d.cohlevel,d.anhimg)}catch(f){UIF.log(f)}}},speDescribe:"\u7235\u4F4D\u5347\u7EA7",spe:function(d){if(UIF.handler.effect){try{$("#LevelUpPlayerSwf").css("z-index","3000");$("#LevelUpPlayerSwf").css("pointer-events","auto");swfobject.getObjectById("LevelUpPlayerSwf").style.visibility="visible";swfobject.getObjectById("LevelUpPlayerSwf").showUserLevelup(d.nickname,d.speimg)}catch(f){UIF.log(f)}}},guardLevelupDescribe:"用户守护升级特效",guardLevelup:function(d){if(UIF.handler.effect){try{$("#LevelUpPlayerSwf").css("z-index","3000");$("#LevelUpPlayerSwf").css("pointer-events","auto");swfobject.getObjectById("LevelUpPlayerSwf").style.visibility="visible";swfobject.getObjectById("LevelUpPlayerSwf").showGuardLevelup(d.guardLevel,d.nickname)}catch(f){UIF.log(f)}}},censorDescribe:"\u5173\u95ED\u76F4\u64AD\u95F4",censor:function(d){if("stop"==d.resultMessage){if(UIF.currentUserID==d.userId){self.location="/html/100.html"}}else{self.location="/html/102.html"}},anchorPK:function(e){UIF.log("主播pk信息："+e.roomIds);var f=UIF.currentRoomNumber;var d=e.roomIds[0];if(f==d){d=e.roomIds[1]}swfobject.getObjectById("player").pkStart(d)},petPlayAction:function(e){var d=e;swfobject.getObjectById("PetSwf").playAction(d)},petUpdateData:function(f){var e=f.imageId;var h=f.level;var d=f.levelGap;var g=f.randomMovieGap;swfobject.getObjectById("PetSwf").updateData(e,h,d,g)},changeTreasureBoxState:function(d){swfobject.getObjectById("treasureBox_swf").updateState(d)}}});