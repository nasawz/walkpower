/*网站统计*/
$("head").prepend("<Meta name='WT.plat' content='PC'>");
document.write("<script src='/front/interactive/walkpower/pub/web/lib/webTrends/webtrends_web.load.js"+"'><\/script>");
$.post("/portal/currentMobile",{ timestamp: new Date().getTime()},function(data) {
	if(data.mobile!="0"){
		$("head").prepend("<Meta name='WT.mobile' content='"+data.mobile+"'>");
	}
});
