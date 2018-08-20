import axios from 'axios';

/**
 * 摇色子
 * @param activityId 
 * @param channel 
 * 
 1.摇色子
    url: /portal/walk/dice 
    method: get
    param：activityId  channel
    return:
    {"resCode":"01","message":"未登陆","resInfo":{}}
    {"resCode":"02","message":"系统异常","resInfo":{}}
    {"resCode":"03","message":"没有掷骰子机会","resInfo":{}}
    {"resCode":"00","message":"掷骰子成功","resInfo":{"nextWalk":"6","index":"1","giftName":"京东满减券","spacing":"0","type":"1","giftUrl":"www.baidu.com","end":"N"}}
    key:end  
    value Y=终点 N=非终点
    key:type
    value: 0=知识点 1=奖品点 2=花园增加掷骰子次数 3=白点
    key:spacing
    value: 第几步
 */
export const walk_dice = (activityId, channel) => {
  return axios.get(`/portal/walk/dice`, {
    params: {
      activityId,
      channel
    }
  });
};

/**
 * 分享
 * @param activityId
 * @param channel
 * 
 2.分享
    url: /portal/walk/share
    method: get
    param：activityId   channel
    return:
    {"resCode":"00","message":"分享成功","resInfo":{}}
    {"resCode":"01","message":"未登陆","resInfo":{}}
    {"resCode":"02","message":"系统异常","resInfo":{}}
    {"resCode":"03","message":"渠道错误","resInfo":{}}
 */
export const walk_share = (activityId, channel) => {
  return axios.get(`/portal/walk/share`, {
    params: {
      activityId,
      channel
    }
  });
};

/**
 * 信息查询
 * 
 3.信息查询
    url: /portal/walk/userWalkInfo
    method: get
    param：
    return:
    {"resCode":"00","message":"查询成功","resInfo":{"walkIndex":"2","sex":"0","isEuccess":"N","diceCount":"3"}}
    {"resCode":"01","message":"未登陆","resInfo":{}}
    {"resCode":"02","message":"系统异常","resInfo":{}}
 */
export const walk_userInfo = () => {
  return axios.get(`/portal/walk/userWalkInfo`);
};

/**
 * 提交角色
 * @param role 
 * @param channel 
 * 
 4.提交角色
    url: /portal/walk/putWalkRole
    method: get
    param：role 0男1女 channel
    return：
    {"resCode":"00","message":"保存当前用户角色信息成功","resInfo":{}}
    {"resCode":"01","message":"系统异常","resInfo":{}}
    {"resCode":"02","message":"渠道错误","resInfo":{}}
    {"resCode":"03","message":"当前用户已有选取角色","resInfo":{}}
 */
export const walk_putRole = (role, channel) => {
  return axios.get(`/portal/walk/putWalkRole`, {
    params: {
      role,
      channel
    }
  });
};
