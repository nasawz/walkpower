export const onShare = info => {
  // TODO share
  	Zepto('#zhezhao').toggle();
	Zepto('#soshid').toggle(); //显示隐藏分享模块
	//第一个参数为字符串类型，代表选择器。支持querySelectorAll 所支持的参数类型。第二个参数为对象字面量，配置分享的相关内容。
	sosh('#soshid', {
		url: window.location.href, // 分享的链接，默认使用location.href
		title: '分享标题', // 分享的标题，默认使用document.title
		digest: '分享摘要', // 分享的摘要，默认使用<meta name="description" content="">content的值
		pic: '分享图片', // 分享的图片，默认获取本页面第一个img元素的src
		sites: ['weixin', 'weibo', 'qq', 'qzone']
		// 默认显示的网站为以上四个,支持设置的网站有
		// weixin,qq,yixin,weibo,qzone,tqq,douban,renren,tieba
	});
	Zepto('#zhezhao').one('click',function () {
		Zepto('#zhezhao').hide();
		Zepto('#soshid').hide();
	})

};
