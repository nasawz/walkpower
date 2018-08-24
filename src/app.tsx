// import { h, render, Component } from 'preact';
import './style/app.less';
import Game from './an/game';
import SelectModal from './an/selectModal';
let selectModal = new SelectModal();

import CommonModal from './an/commonModal';
let commonModal = new CommonModal();

import GetAwardModal from './an/getAwardModal';
let getAwardModal = new GetAwardModal();

import IntroduceModal from './an/introduceModal';
let introduceModal = new IntroduceModal();

import RuleModal from './an/ruleModal';
let ruleModal = new RuleModal();

import SuccessModal from './an/successModal';
let successModal = new SuccessModal();

import WardsModal from './an/wardsModal';
let wardsModal = new WardsModal();

import ShareModal from './an/shareModal';
let shareModal = new ShareModal();

import KnowledgeModal from './an/knowledgeModal';
let knowledgeModal = new KnowledgeModal();

import LiuliangModal from './an/liuliangModal';
let liuliangModal = new LiuliangModal();

import SanfangModal from './an/sanfangModal';
let sanfangModal = new SanfangModal();

import EventProxy from './utils/eventproxy';
import './utils/scroll-container';
let game = new Game();

let activityId = 364;
let channel = 'web';
let surplusCount = 0;

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
let showCommonModal = type => {
  window.commonModal_mc.visible = true;
  window.commonModal_mc.gotoAndStop(type);
};

/**
 * 显示活动规则
 */
let showRuleModal = () => {
  window.ruleModal_mc.visible = true;
};
let wards_scroll = null;
/**
 * 显示我的奖品
 */
let showWardsModal = () => {
  walk_myGifts(`${activityId},363`)
    .then(res => {
      // console.log('显示我的奖品', res.data);
      window.wardsModal_mc.visible = true;
      window.wardsModal_mc.removeChild(window.wardsModal_mc.ward_item);
      if (wards_scroll) {
        window.wardsModal_mc.removeChild(wards_scroll);
      }
      if (res.data.ResInfo.length == 0) {
        window.wardsModal_mc.noneward.visible = true;
      } else {
        window.wardsModal_mc.noneward.visible = false;
        let count = res.data.ResInfo.length;
        let canvas = document.querySelector('body');
        let scroll = new createjs.ScrollContainer(canvas);
        scroll.x = 250;
        scroll.y = 305;
        scroll.setBounds(0, 0, 710, 285);
        scroll.contentSize = {
          width: 650,
          height: count * 60 + 10
        };
        window.wardsModal_mc.addChild(scroll);
        wards_scroll = scroll;
        let lib = AdobeAn.getComposition('824F95CBF0034282B51DDEB46BD9BBA6').getLibrary();
        for (let index = 0; index < count; index++) {
          const element = res.data.ResInfo[index];
          let ward_item = new lib.ward_item();
          ward_item.gift.text = element.giftName;

          if (element.giftType == 0) {
            ward_item.lq_btn.visible = false;
          } else {
            ward_item.lq_btn.addEventListener('click', () => {
              window.open(element.url);
            });
          }

          ward_item.parent = scroll;
          ward_item.setTransform(20, 10 + index * 60, 1, 0.861, 0, 0, 0, 0, 0.1);
          scroll.addChild(ward_item);
        }
      }

      //.ward_item

      // window.wardsModal_mc

      // TODO 控制wardsModal_mc 展示的文字以及按钮的状态
      // console.log(window.noneWard);
      // console.log(window.wardText);
      // let resCode = res.data.ResCode;
      // let resInfo = res.data.ResInfo;
      // switch (resCode) {
      //   case '100': //未登陆
      //     noLogin();
      //     break;
      //   case '105': //没有奖品
      //     window.wardText[0].visible = false;
      //     window.wardText[1].visible = false;
      //     window.wardText[2].visible = false;
      //     window.wardText[3].visible = false;
      //     console.log(window.wardText[0].visible);
      //     window.noneWard.visible = true;
      //     break;
      //   case '000': //显示奖品
      //     window.wardText[0].visible = true;
      //     window.wardText[0].children[2].text = resInfo[0].giftName;
      //     window.wardText[1].visible = false;
      //     window.wardText[2].visible = false;
      //     window.wardText[3].visible = false;
      //     console.log(window.wardText[0].visible);
      //     window.noneWard.visible = false;
      //     break;
      //   default:
      //     console.log('不正确的code:', resCode);
      //     break;
      // }
    })
    .catch(err => {
      iAlert('请求超时，请稍后重试！', '确定', () => {});
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
  locationPeo(channel, '27');

  window.successModal_mc.visible = true;
};

/**
 * 显示奖品弹窗
 */
let showSanfangModal = gifts => {
  window.sanfangModal_mc.initGifts(gifts);
  window.sanfangModal_mc.visible = true;
};

let onLingqu = (window.onLingqu = (gift: { giftName: string; giftUrl: string }) => {
  window.open(gift.giftUrl);
});

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
let showLiuliangModal = (window.showLiuliangModal = type => {
  window.liuliangModal_mc.visible = true;
  window.liuliangModal_mc.gotoAndStop(type);
});

/**
 * 分享方法
 */
window.onShare = () => {
  window.shareModal_mc.visible = false;
  walk_share(activityId, channel)
    .then(res => {
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
        // case '02': //系统异常
        // case '03': //渠道错误
        default:
          iAlert('分享失败，请稍后重试！', '确定', () => {});
          console.log(res.data.message);
          break;
      }
    })
    .catch(err => {
      console.log(err);
      iAlert('请求超时，请稍后重试！', '确定', () => {});
    });
  onShare(channel);
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
  locationPeo(channel, walkIndex);

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
  setCount(parseInt(diceCount));
  //type:0=知识点 1=奖品点 2=花园增加掷骰子次数 3=白点
  if (end == 'Y') {
    showSuccessModal();
  } else {
    if (type == '0') {
      //knowledgeName: lq/tsg/yyt
      showKnowledgeModal(knowledgeName);
    } else if (type == '1') {
      // console.log(`到达奖品点: 礼物名称：${giftList}`);
      // var gifts = JSON.parse(giftList);
      showSanfangModal(giftList);
    } else if (type == '2') {
      console.log('到达花园增加掷骰子次数:', garden);
      showCommonModal('add_chance');
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
  walk_dice(activityId, channel)
    .then(res => {
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
          iAlert('请先加入中国移动客户俱乐部会员', '确定', () => {
            goVipJoin(activityId, channel);
          });
          break;
        case '09': //已完成
          showSuccessModal();
          break;
        default:
          //不正确的code
          iAlert('请求超时，请稍后重试！', '确定', () => {});
          break;
      }
    })
    .catch(err => {
      console.log(err);
      iAlert('请求超时，请稍后重试！', '确定', () => {});
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
  walk_userInfo()
    .then(res => {
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
    })
    .catch(err => {
      console.log(err);
      iAlert('请求超时，请稍后重试！', '确定', () => {});
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
  walk_putRole(sel, 'web')
    .then(res => {
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
    })
    .catch(err => {
      console.log(err);
      iAlert('请求超时，请稍后重试！', '确定', () => {});
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
    'sanfangModal',
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
      liuliangModal,
      sanfangModal
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
      game.addChild(sanfangModal);
      setTimeout(() => {
        playLotterys(activityId, channel);
        userWalkInfo();
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
    sanfangModal.init(ep);
  });
});
