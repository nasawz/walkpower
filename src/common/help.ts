declare let window: any;
/**
 * 通用提示弹窗
 */
export const iAlert = (content, ok_txt, cb) => {
  layer.open({
    style: 'width:60%;',
    content: content,
    btn: ok_txt,
    shadeClose: false,
    yes: function() {
      layer.closeAll();
      cb();
    }
  });
};

let url = window.location.href.split("/")[0]+"//"+window.location.href.split("/")[2];
let production ='http://club.10086.cn';
let port = window.location.port;
let backUrl = window.location.href;
/**
 * 登录
 */
export const goLogin = () => {
  if(port == '9098'){
      window.location.href = 'https://actest.10086.cn/?channelID=12011&backUrl='+backUrl;
  }else if(url == production){
      window.location.href = 'http://login.10086.cn/?channelID=12011&backUrl='+backUrl;
  }else{
      window.location.href = `/front/web/login.html`;
  }
};
/**
 * 去入会
 */
export const goVipJoin = (activityId, channel) => {
  if (channel == 'web') {
    window.location.href = `/front/web/initiation/vip_join.html?activityId=${activityId}&backUrl=${backUrl}`;
  }else{
    if(url == production){
        window.location.href = `/front/touch_new/other/joinClub/joinDouble.html?come=${activityId}`;
    }else{
        window.location.href = `/front/touch_v1.0.1/other/joinClub/joinDouble.html?come=${activityId}`;
    }
  }
  
};

/**
 * 判断渠道
 */
export const getChannel = () => {
  let ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return 'weChat';
  } else if (ua.match(/leadeon/i) == 'leadeon') {
    return 'app';
  } else {
    return 'touch';
  }
};
