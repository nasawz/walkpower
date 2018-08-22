// import { h, render, Component } from 'preact';
import './style/app.less';
import Game from './an/game';
import SelectModal from './an/selectModal';
import CommonModal from './an/commonModal';
import GetAwardModal from './an/getAwardModal';
import IntroduceModal from './an/introduceModal';
import SuccessModal from './an/successModal';
import RuleModal from './an/ruleModal';
import WardsModal from './an/wardsModal';
import ShareModal from './an/shareModal';
import KnowledgeModal from './an/knowledgeModal';
import LiuliangModal from './an/liuliangModal';
import EventProxy from './utils/eventproxy';

let selectModal = new SelectModal();
let commonModal = new CommonModal();
let getAwardModal = new GetAwardModal();
let introduceModal = new IntroduceModal();
let ruleModal = new RuleModal();
let successModal = new SuccessModal();
let wardsModal = new WardsModal();
let shareModal = new ShareModal();
let knowledgeModal = new KnowledgeModal();
let liuliangModal = new LiuliangModal();

let game = new Game();

let activityId = 364;
let channel = 'web';
// let channel = getChannel();
// function getChannel() {
//   var ua = window.navigator.userAgent.toLowerCase();
//   if (ua.match(/MicroMessenger/i) == 'micromessenger') {
//     Zepto('head').prepend("<Meta name='WT.plat' content='TOUCH'>");
//     return 'weChat';
//   } else if (ua.match(/leadeon/i) == 'leadeon') {
//     Zepto('head').prepend("<Meta name='WT.plat' content='APP'>");
//     return 'app';
//   } else {
//     Zepto('head').prepend("<Meta name='WT.plat' content='TOUCH'>");
//     return 'touch';
//   }
// }
import {
  walk_dice,
  walk_share,
  walk_userInfo,
  walk_putRole,
  walk_lottery,
  walk_myGifts,
  walk_memberLotterys
} from './api';
import { shake, setCount, stopAt, setDiscBtn, setLab } from './common/disc';
import { playLotterys } from './common/lotterys';
import { locationPeo, movePeo } from './common/peo';

import { onShare } from './common/share';
import { onLottery } from './common/lottery';
import { iAlert, goLogin, goVipJoin } from './common/help';

declare let window: any;

window.gameReady = () => {};

window.closeModals = () => {
  Zepto('.modals').hide();
};

/**
 * 显示活动介绍
 */
let showIntroduceModal = isLogin => {
  if (!isLogin) {
    window.introduceModal_mc.login_btn.visible = true;
    window.introduceModal_mc.togame_btn.visible = false;
  } else {
    window.introduceModal_mc.login_btn.visible = false;
    window.introduceModal_mc.togame_btn.visible = true;
  }

  window.introduceModal_mc.visible = true;
};

/**
 * 显示人物选择
 */
let showSelectModal = () => {
  window.selectModal_mc.visible = true;
};

/**
 * 显示通用弹窗
 */
let showCommonModal = () => {
  window.commonModal_mc.visible = true;
};

/**
 * 显示活动规则
 */
let showRuleModal = () => {
  window.ruleModal_mc.visible = true;
};

/**
 * 显示我的奖品
 */
let showWardsModal = () => {
  walk_myGifts(activityId)
    .then(res => {
      console.log('显示我的奖品', res.data);
      window.wardsModal_mc.visible = true;
      // TODO 控制wardsModal_mc 展示的文字以及按钮的状态
      console.log(window.noneWard);
      console.log(window.wardText);
      let resCode = res.data.ResCode;
      let resInfo = res.data.ResInfo;
      switch (resCode) {
        case '100': //未登陆
          noLogin();
          break;
        case '105': //没有奖品
          window.wardText[0].visible = false;
          window.wardText[1].visible = false;
          window.wardText[2].visible = false;
          window.wardText[3].visible = false;
          console.log(window.wardText[0].visible);
          window.noneWard.visible = true;
          break;
        case '000': //显示奖品
          window.wardText[0].visible = true;
          window.wardText[0].children[2].text = resInfo[0].giftName;
          window.wardText[1].visible = false;
          window.wardText[2].visible = false;
          window.wardText[3].visible = false;
          console.log(window.wardText[0].visible);
          window.noneWard.visible = false;
          break;
        default:
          console.log('不正确的code:', resCode);
          break;
      }
    })
    .catch(err => {
      console.log(err);
    });
};

/**
 * 闯关成功
 */
let showSuccessModal = () => {
  setDiscBtn(false);
  setLab(false);
  if (gameState.sex == '0') {
    window.boy.visible = true;
    window.peo_target = window.boy;
  }
  if (gameState.sex == '1') {
    window.girl.visible = true;
    window.peo_target = window.girl;
  }
  locationPeo('27');

  window.successModal_mc.visible = true;
};

/**
 * 显示奖品弹窗
 */
let showGetAwardModal = () => {
  window.getAwardModal_mc.visible = true;
};

/**
 * 显示分享弹窗
 */
let showShareModal = () => {
  window.shareModal_mc.visible = true;
};

/**
 * 显示知识点弹窗
 */
let showKnowledgeModal = type => {
  window.knowledgeModal_mc.visible = true;
  window.knowledgeModal_mc.gotoAndStop(type);
};

/**
 * 显示抽奖流量弹窗
 */
let showLiuliangModal = type => {
  window.liuliangModal_mc.visible = true;
  window.liuliangModal_mc.gotoAndStop(type);
};
/**
 * 分享方法
 */
window.onShare = info => {
  window.shareModal_mc.visible = false;
  walk_share(activityId, channel).then(res => {
    let resCode = res.data.resCode;
    let resInfo = res.data.resInfo;
    switch (resCode) {
      case '00': //分享成功
        console.log('分享成功');
        // 机会+1
        setDiscBtn(true);
        setCount(parseInt(resInfo.diceCount));
        break;
      case '01': //未登录
        noLogin();
        break;
      case '02': //系统异常
      case '03': //渠道错误
      default:
        iAlert('请求超时，请稍后重试！', '确定', () => {});
        console.log(res.data.message);
        break;
    }
  });
  onShare(info);
};

/**
 * 抽奖方法
 */
window.onLottery = (activityId, channel) => {
  onLottery(activityId, channel);
};

/**
 * 提示弹窗方法
 */
window.iAlert = (content, ok_txt, cb) => {
  iAlert(content, ok_txt, cb);
};

/**
 * 登录方法
 */
window.goLogin = () => {
  goLogin();
};

/**
 * 初始化game
 */
let initGame = (walkIndex, sex, isEuccess, diceCount) => {
  if (sex == '0') {
    window.boy.visible = true;
    window.peo_target = window.boy;
  }
  if (sex == '1') {
    window.girl.visible = true;
    window.peo_target = window.girl;
  }
  setLab(true);
  setCount(parseInt(diceCount));

  console.log(walkIndex, sex, isEuccess, diceCount);
  if (isEuccess == 'Y') walkIndex = 27;
  locationPeo(walkIndex);

  window.dice_mc.btn.addEventListener('click', doShake);
};

/**
 * 小人移动完成执行回调函数
 * @param type 类型 0=知识点 1=奖品点 2=花园增加掷骰子次数 3=白点
 * @param end 是否是最后一步
 * @param giftName 礼物名称
 * @param giftUrl 礼物地址
 * @param knowledge 知识点内容
 * @param garden  花园
 * @param diceCount  剩余次数
 */
let moveFinish = (type, end, giftList, knowledgeName, garden, diceCount) => {
  setDiscBtn(true);
  //如果到小花园增加一次机会
  // if (type == '2') {
  //   setCount(parseInt(diceCount) + 1);
  // } else {
  //   setCount(parseInt(diceCount));
  // }
  setCount(parseInt(diceCount));
  //type:0=知识点 1=奖品点 2=花园增加掷骰子次数 3=白点
  if (end == 'Y') {
    showSuccessModal();
  } else {
    if (type == '0') {
      //knowledgeName: lq/tsg/yyt
      showKnowledgeModal(knowledgeName);
    } else if (type == '1') {
      console.log(`到达奖品点: 礼物名称：${giftList}`);
      showGetAwardModal();
    } else if (type == '2') {
      console.log('到达花园增加掷骰子次数:', garden);
      iAlert('恭喜您，增加一次摇骰子机会哦！', '确定', () => {});
    }
  }
};
//未登录弹框提示去登陆
let noLogin = () => {
  iAlert('未登录', '去登录', () => {
    goLogin();
  });
};
/**
 * 点击骰子
 *
 */
let doShake = () => {
  setDiscBtn(false);
  walk_dice(activityId, channel).then(res => {
    let resCode = res.data.resCode;
    let resInfo = res.data.resInfo;
    switch (resCode) {
      case '00': //掷骰子成功
        shake(parseInt(resInfo.nextWalk), () => {
          movePeo(resInfo.nextWalk, resInfo.index, resInfo.end, () => {
            console.log('移动完成，开始回调');
            moveFinish(
              resInfo.type,
              resInfo.end,
              resInfo.giftList,
              resInfo.name,
              resInfo.garden,
              resInfo.diceCount
            );
          });
        });
        break;
      case '01': //未登陆
        noLogin();
        break;
      case '02': //系统异常
        iAlert('请求超时，请稍后重试！', '确定', () => {});
        break;
      case '03': //没有掷骰子机会
        showShareModal();
        break;
      case '04': //没有选取角色
        showSelectModal();
        break;
      case '06': //活动未开始
      case '07': //活动已结束
        iAlert('不在活动时间内哦！', '确定', () => {});
        break;
      case '08': //非俱乐部会员
        goVipJoin(activityId);
        break;
      case '09': //已完成
        showSuccessModal();
        break;
      default:
        //不正确的code
        iAlert('请求超时，请稍后重试！', '确定', () => {});
        break;
    }
  });
};

interface IGameState {
  walkIndex?: string;
  sex?: string;
  isEuccess?: string;
  diceCount?: string;
}
let gameState: IGameState = {};

let userWalkInfo = () => {
  walk_userInfo().then(res => {
    let resCode = res.data.resCode;
    switch (resCode) {
      case '01':
        showIntroduceModal(false);
        break;
      case '03':
        showIntroduceModal(true);
        break;
      case '00':
        sex = res.data.resInfo.sex;
        gameState = res.data.resInfo;
        if (gameState.isEuccess == 'Y') {
          showSuccessModal();
        } else {
          showIntroduceModal(true);
        }
        break;
      default:
        break;
    }
    window.game.btn_intro.addEventListener('click', showRuleModal);
    window.game.btn_wards.addEventListener('click', showWardsModal);
  });
};

let sex = '-1';

let goGame = (window.goGame = () => {
  if (sex == '-1') {
    showSelectModal();
  } else {
    initGame(gameState.walkIndex, gameState.sex, gameState.isEuccess, gameState.diceCount);
  }
});

/**
 * 显示大转盘
 */
let goLottery = (window.goLottery = () => {
  window.onLottery(activityId, channel);
});

/**
 * 选择人物
 */
let onSelectPeo = (window.onSelectPeo = peo => {
  console.log('当前选择是', peo);
  let sel = '0';
  if (peo == 'girl') {
    sel = '1';
  }
  walk_putRole(sel, 'web').then(res => {
    let resCode = res.data.resCode;
    switch (resCode) {
      case '00':
        console.log(res.data.message);
        initGame('0', sel, 'N', '6');
        break;
      case '01':
        console.log(res.data.message);
        break;
      case '02':
        console.log(res.data.message);
        break;
      case '03':
        console.log(res.data.message);
        break;
      default:
        break;
    }
  });
});

Zepto(function($: any) {
  var ep = EventProxy.create(
    'game',
    'selectModal',
    'commonModal',
    'getAwardModal',
    'introduceModal',
    'ruleModal',
    'successModal',
    'wardsModal',
    'shareModal',
    'knowledgeModal',
    'liuliangModal',
    (
      game,
      selectModal,
      commonModal,
      successModal,
      getAwardModal,
      ruleModal,
      introduceModal,
      wardsModal,
      shareModal,
      knowledgeModal,
      liuliangModal
    ) => {
      game.addChild(selectModal);
      game.addChild(commonModal);
      game.addChild(successModal);
      game.addChild(getAwardModal);
      game.addChild(ruleModal);
      game.addChild(introduceModal);
      game.addChild(wardsModal);
      game.addChild(shareModal);
      game.addChild(knowledgeModal);
      game.addChild(liuliangModal);
      setTimeout(() => {
        playLotterys(activityId, channel);
        userWalkInfo();
        // showLiuliangModal('100m')
        // showGetAwardModal();
      }, 500);
      setTimeout(() => {
        Zepto('#canvas').animate(
          {
            opacity: 1
          },
          500,
          'ease-out'
        );
      }, 500);
    }
  );

  game.init(ep, () => {
    selectModal.init(ep);
    commonModal.init(ep);
    getAwardModal.init(ep);
    introduceModal.init(ep);
    ruleModal.init(ep);
    successModal.init(ep);
    wardsModal.init(ep);
    shareModal.init(ep);
    knowledgeModal.init(ep);
    liuliangModal.init(ep);
  });
});
