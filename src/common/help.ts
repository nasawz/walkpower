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

/**
 * 登录
 */
export const goLogin = () => {
  let backUrl = window.location.href;
  window.location.href = `/front/web/login.html?backUrl=${backUrl}`;
};
/**
 * 去入会
 */
export const goVipJoin = activityId => {
  let backUrl = window.location.href;
  window.location.href = `/front/web/initiation/vip_join.html?activityId=${activityId}&backUrl=${backUrl}`;
};
