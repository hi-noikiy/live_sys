define(function(b,a,c){var d=null;c.exports={orderDoc:null,xmlUrl:"assets/backLoad.xml",loadDelay:1000*10,init:function(){d=this},startBackLoad:function(){console.log("startBackLoad");d.loadXMLDoc(d.xmlUrl)},loadXMLDoc:function(e){xmlhttp=null;if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest()}else{if(window.ActiveXObject){xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")}}if(xmlhttp!=null){xmlhttp.onreadystatechange=d.onLoadXmlResponse;xmlhttp.open("GET",e,true);xmlhttp.send(null)}else{alert("Your browser does not support XMLHTTP.")}},onLoadXmlResponse:function(){if(xmlhttp.readyState!=4){return}if(xmlhttp.status!=200){alert("Problem retrieving XML data");return}orderDoc=xmlhttp.responseXML;var e=orderDoc.getElementsByTagName("list");for(i=0;i<e.length;i++){d.loadSwfByImage(e[i].textContent)}},loadSwfByImage:function(f){var e=new window.Image();e.src=f;e.onload=d.onLoadSwfComplete(f)},onLoadSwfComplete:function(e){console.log(e)}}});