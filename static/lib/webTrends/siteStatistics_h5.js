/*网站统计*/
var yname = location.href.split('//')[0] + '//' + location.href.split('//')[1].split('/')[0];
var production = 'http://club.10086.cn';
var port = window.location.port;
var ua = window.navigator.userAgent.toLowerCase();

document.write("<script src='/front/interactive/walkpower/pub/h5/lib/webTrends/webtrends_h5.load.js"+"'><\/script>");
$.get("/portal/rest/currUser?date=" + new Date().getTime(),function(data) {
	if(data.ResCode == "1"){
		$("head").prepend("<Meta name='WT.mobile' content='"+data.ResInfo.up+"'>");
	}else{
		loginSite();
	}
	channelSite();
});
// 判断渠道
function channelSite() {
    if (ua.match(/leadeon/i) == 'leadeon') {
    	$("head").prepend("<Meta name='WT.plat' content='APP'>");
        // return "app"
    }else{
    	$("head").prepend("<Meta name='WT.plat' content='TOUCH'>");
        // return "touch"
    }
}
function loginSite() {
	if (ua.match(/leadeon/i) == 'leadeon') {
        leadeon.getUserInfo({
			debug: false,
			success: function(res) {
				var cid = res.cid;  //推送标识
				var clientID = res.clientID;  //客户端唯一标识
				var xk = res.xk;  //客户端安全ID
				var ak = res.ak;     //签名字串
				var sn = res.sn;        //设备型号
				var st = res.st;        //系统类型 int
				var sv = res.sv;        //系统版本号
				var version = res.version; //客户端版本号
				var sp = res.sp;        //屏幕分辨率
				var osType = res.osType;      //设备类型 android wp ios
				var channel = res.channel;    //渠道编码
				var province = res.province;  //省编码
				var city = res.city;          //市编码

				var imei = res.imei;          //imei, 3.8 新增
				var sb = res.sb;          //手机品牌, 3.8 新增
				var nt = res.nt;          //上网方式, 3.8 新增      0：2g, 1:3g，2: 4g，3:wifi

				// 登录状态信息：
				var phoneNumber = res.phoneNumber;  //用户电话号码
				var curTime = res.curTime;  //查询时间
				var userBrand = res.userBrand; //用户品牌
				var token = res.token;        //会话信息
				var loginProvince = res.loginProvince; //登录号码归属地省编码
				var loginCity = res.loginCity; //登录号码归属地市编码

				// 向页面部署<meta>标签
				$("head").prepend("<Meta name='WT.cid' content='"+cid+"'>");
				$("head").prepend("<Meta name='WT.clientID' content='"+clientID+"'>");
				$("head").prepend("<Meta name='WT.mobile' content='"+phoneNumber+"'>");
				$("head").prepend("<Meta name='WT.prov' content='"+province+"'>");
				$("head").prepend("<Meta name='WT.city' content='"+city+"'>");
				$("head").prepend("<Meta name='WT.channel' content='"+channel+"'>");
				$("head").prepend("<Meta name='WT.av' content='APP_"+osType+"_"+version+"'>");

				// 获取uid
				function getUid(token) {
					return token.match(/UID=\w+/g)[0];
				}
				if (!!token && isLogin == false) {
					//记录uid
					var UID=getUid(token);
					//登录状态接口（会话校验）
					leadeon.checkSessionIsvalid({
						debug: false,
						success: function(res2) {
							//状态：0 校验失败；1 校验成功。
							if(res2.status==1)
							{
								var urls=window.location.href;//当前页面自己的地址
								var timestamp=new Date().getTime();//时间戳
								window.location.href = "https://login.10086.cn/AppSSO.action?targetChannelID=12011&targetUrl=" + encodeURIComponent(urls)+"&timestamp="+timestamp+"&"+UID+"&TransactionID=CLUB"+timestamp;
							}
							else
							{
								//调用会话超时接口，拉起客户端登录
								leadeon.overTime({
									debug: false,
									success: function(res) {
									},
									error: function(res) {
									}
								});
							}
						},
						error: function(res2) {
						}
					});
				} else if (!token && isLogin == false) {
	              //拉起登录
	              leadeon.showLogin();
	            }

			},
			error: function(res) {

			}
		});

    } else{
        // 统一认证单点
		$('body').append('<iframe src="about:blank" id="ssocheckframe" style="display:none"></iframe>');
		if (port == '9098') {
	       $('#ssocheckframe').attr('src', 'https://actest.10086.cn/SSOCheck.action?channelID=12011&backUrl=http://club.10086.cn:9098/rest/currUser');
	       setTimeout("'"+$.get(window.location.href.split("/")[0]+"//"+window.location.href.split("/")[2]+"/portal/rest/currUser?date="+new Date().getTime())+"'", 3000);
	    } else if (yname == production) {
	       $('#ssocheckframe').attr('src', 'https://login.10086.cn/SSOCheck.action?channelID=12011&backUrl=http://club.10086.cn/rest/currUser');
	       setTimeout("'"+$.get(window.location.href.split("/")[0]+"//"+window.location.href.split("/")[2]+"/portal/rest/currUser?date=" + new Date().getTime())+"'", 3000);
	    }
    }
}
