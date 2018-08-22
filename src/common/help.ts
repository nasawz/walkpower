
declare let window: any;
/**
 * 通用提示弹窗
 */
export const iAlert = (content, ok_txt, cb) => {
	layer.open({
	    style: 'width:40%;',
	    content: content,
	    btn: ok_txt,
	    shadeClose: false,
	    yes: function() {
	      layer.close(0);
	      cb();
	    }
	});
};

/**
 * 登录
 */
export const goLogin = () => {
	let backUrl = window.location.href;
	window.location.href = `/front/web/login.html?backUrl=${backUrl}`;
};