export const onShare = channel => {
  // TODO share
	let shareUrl = window.location.href;
    let shareTitle = '拼步数，赢流量，最高2G哦';
    let burl = window.location.href.split("index")[0];
    let picUrl = burl + '/images/share100.png';
    let shareDesc = '';
	if (channel == 'web') {
		Zepto('#zhezhao').show();
		Zepto('#soshid').show(); //显示隐藏分享模块
		sosh('#soshid', {
			url: shareUrl, // 分享的链接
			title: shareTitle, // 分享的标题
			digest: shareDesc, // 分享的摘要
			pic: picUrl, // 分享的图片
			sites: ['weixin', 'weibo', 'qq', 'qzone']
		});
	}else if (channel == 'app'){
		leadeon.shareMessage({
            debug: false,
            title: shareTitle,    //分享标题
            link: shareUrl,  //分享链接,参数中如果有中文，需要对参数进行编码
            imgUrl: picUrl,     //分享图标
            content: shareDesc,        //分享内容
            type: '',       //分享类型,music、video或link，不填默认为link
            dataUrl: '',     //如果type是music或video，则要提供数据链接，默认为空
            funCode:'', // 功能编码-V3.8新加   不需要填写
            stepId:'',   // 步骤ID-V3.8新加   不需要填写
            success: function(res) {   //没有回调
            },
            error: function(res) {
            }
        });
	}else {
		Zepto('#zhezhao').show();
		Zepto('#soshm').show(); //显示隐藏分享模块
		soshm('#soshm', {
			url: shareUrl, // 分享的链接
			title: shareTitle, // 分享的标题
			digest: shareDesc, // 分享的摘要
			pic: picUrl, // 分享的图片
			sites: ['weixin', 'weibo', 'qq', 'qzone']
		});
	}
	
	Zepto('#zhezhao').one('click',function () {
		Zepto('#zhezhao').hide();	
		if (channel == 'web') {
			Zepto('#soshid').hide();
			Zepto('.sosh-pop').removeClass("sosh-pop-show");
		}else if (channel == 'touch' || channel == 'weChat'){
			Zepto('#soshm').hide();
			Zepto('.sosh-pop').removeClass("sosh-pop-show");
		}
	})

};
