import './style/app.less';
import Game from './an/h5/game';
import SelectModal from './an/h5/selectModal';
import CommonModal from './an/h5/commonModal';
import GetAwardModal from './an/h5/getAwardModal';
import IntroduceModal from './an/h5/introduceModal';
import RuleModal from './an/h5/ruleModal';
import SuccessModal from './an/h5/successModal';
import WardsModal from './an/h5/wardsModal';
import ShareModal from './an/h5/shareModal';

let selectModal = new SelectModal();
let commonModal = new CommonModal();
let getAwardModal = new GetAwardModal();
let introduceModal = new IntroduceModal();
let ruleModal = new RuleModal();
let successModal = new SuccessModal();
let wardsModal = new WardsModal();
let shareModal = new ShareModal();
let game = new Game();

import EventProxy from './utils/eventproxy';
import { walk_dice, walk_share, walk_userInfo, walk_putRole } from './api';
import { shake, setCount, stopAt, setDiscBtn, setLab } from './common/disc';
import { locationPeo, movePeo } from './common/peo';

import { onShare } from './common/share';

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
  window.wardsModal_mc.visible = true;
};

/**
 * 闯关成功
 */
let showSuccessModal = () => {
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

window.onShare = info => {
  onShare(info);
};

/**
 * 分享方法
 */
window.onShare = info => {
  onShare(info);
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
  locationPeo(walkIndex);

  window.dice_mc.btn.addEventListener('click', doShake);
  window.game.btn_intro.addEventListener('click', showRuleModal);
  window.game.btn_wards.addEventListener('click', showWardsModal);
};

//plan_1: [3, 6, 5, 3, 4, 3, 4],
let mock = [
  //教学楼
  {
    resCode: '00',
    message: '掷骰子成功',
    resInfo: {
      nextWalk: '3',
      index: '0',
      giftName: '京东满减券',
      spacing: '0',
      type: '1',
      giftUrl: 'www.baidu.com',
      end: 'N',
      diceCount: 5
    }
  },
  //超市
  {
    resCode: '00',
    message: '掷骰子成功',
    resInfo: {
      nextWalk: '6',
      index: '3',
      giftName: '京东满减券',
      spacing: '0',
      type: '1',
      giftUrl: 'www.baidu.com',
      end: 'N',
      diceCount: 4
    }
  },
  //营业厅
  {
    resCode: '00',
    message: '掷骰子成功',
    resInfo: {
      nextWalk: '5',
      index: '9',
      giftName: '京东满减券',
      spacing: '0',
      type: '0',
      giftUrl: 'www.baidu.com',
      end: 'N',
      diceCount: 3
    }
  },
  //小花园
  {
    resCode: '00',
    message: '掷骰子成功',
    resInfo: {
      nextWalk: '3',
      index: '14',
      giftName: '京东满减券',
      spacing: '0',
      type: '2',
      giftUrl: 'www.baidu.com',
      end: 'N',
      diceCount: 2
    }
  },
  //小礼堂
  {
    resCode: '00',
    message: '掷骰子成功',
    resInfo: {
      nextWalk: '4',
      index: '17',
      giftName: '京东满减券',
      spacing: '0',
      type: '1',
      giftUrl: 'www.baidu.com',
      end: 'N',
      diceCount: 2
    }
  },
  //食堂
  {
    resCode: '00',
    message: '掷骰子成功',
    resInfo: {
      nextWalk: '3',
      index: '21',
      giftName: '京东满减券',
      spacing: '0',
      type: '1',
      giftUrl: 'www.baidu.com',
      end: 'N',
      diceCount: 1
    }
  },
  //终点
  {
    resCode: '00',
    message: '掷骰子成功',
    resInfo: {
      nextWalk: '4',
      index: '24',
      giftName: '京东满减券',
      spacing: '0',
      type: '1',
      giftUrl: 'www.baidu.com',
      end: 'Y',
      diceCount: 0
    }
  }
];
/**
 *小人移动方法
 * @param nextWalk 需要走多少步
 * @param index 当前在第几个方块
 * @param type 类型 0=知识点 1=奖品点 2=花园增加掷骰子次数 3=白点
 * @param end 是否是最后一步
 * @param giftName 礼物名称
 * @param giftUrl 礼物地址
 * @param knowledge 知识点内容
 * @param garden  花园
 * @param diceCount  剩余次数
 */
// let movePeo = (nextWalk, index, type, end, giftName, giftUrl, knowledge, garden, diceCount) => {
//   console.log('走啊走');
//   var tiles_xy = window.tiles_xy;
//   let to = index + nextWalk;
//   console.log('to--', to);
//   //到达终点
//   if (end == 'Y') to = 27;

//   //定位小人到当前位置
//   if (index > 0) {
//     window.boy.x = tiles_xy[index - 1][0];
//     window.boy.y = tiles_xy[index - 1][1];
//   }

//   function move() {
//     createjs.Tween.get(window.peo_target)
//       .wait(500)
//       .to({ x: tiles_xy[index][0], y: tiles_xy[index][1] }, 1000)
//       .call(() => {
//         index++;
//         if (index < to) {
//           move();
//         } else {
//           setDiscBtn(true);
//           console.log('---', diceCount);
//           setCount(diceCount);
//           //type:0=知识点 1=奖品点 2=花园增加掷骰子次数 3=白点
//           if (end == 'Y') {
//             showSuccessModal();
//           } else {
//             if (type == '0') {
//               console.log('到达知识点:', knowledge);
//               showCommonModal();
//             } else if (type == '1') {
//               console.log(`到达奖品点: 礼物名称：${giftName} 领取礼物地址：${giftUrl}`);
//               showGetAwardModal();
//             } else if (type == '2') {
//               console.log('到达花园增加掷骰子次数:', garden);
//             }
//           }
//         }
//       });
//   }
//   move();
// };

/**
 * 点击骰子
 */
let mockindex = 0; //模拟获取Mock中的数据
let doShake = () => {
  setDiscBtn(false);
  let obj: any = mock[mockindex];
  //{"resCode":"00","message":"掷骰子成功","resInfo":{"nextWalk":"6","index":"1","giftName":"京东满减券","spacing":"0","type":"1","giftUrl":"www.baidu.com","end":"N"}}
  // shake(parseInt(obj.resInfo.nextWalk), () => {
  //   movePeo(
  //     parseInt(obj.resInfo.nextWalk),
  //     parseInt(obj.resInfo.index),
  //     obj.resInfo.type,
  //     obj.resInfo.end,
  //     obj.resInfo.giftName,
  //     obj.resInfo.giftUrl,
  //     obj.resInfo.knowledge,
  //     obj.resInfo.garden,
  //     obj.resInfo.diceCount
  //   );
  // });
  mockindex++;
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
    console.log(res.data.resCode);
    let resCode = res.data.resCode;
    console.log(resCode);
    switch (resCode) {
      case '01':
        showIntroduceModal(false);
        break;
      case '03':
        showIntroduceModal(true);
        break;
      case '00':
        showIntroduceModal(true);
        sex = res.data.resInfo.sex;
        gameState = res.data.resInfo;
        console.log(gameState);
        break;
      default:
        break;
    }
  });
};

let goLogin = (window.goLogin = () => {
  let backUrl = window.location.href;
  window.location.href = `login.html?backUrl=${backUrl}`;
});

let sex = '-1';

let goGame = (window.goGame = () => {
  if (sex == '-1') {
    showSelectModal();
  } else {
    initGame(gameState.walkIndex, gameState.sex, gameState.isEuccess, gameState.diceCount);
  }
});

/**
 * 选择人物
 */
let onSelectPeo = (window.onSelectPeo = peo => {
  console.log('当前选择是', peo);
  let sel = '0';

  walk_putRole(sel, 'web').then(res => {
    console.log(res);
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
    (
      game,
      selectModal,
      commonModal,
      successModal,
      getAwardModal,
      ruleModal,
      introduceModal,
      wardsModal,
      shareModal
    ) => {
      game.addChild(selectModal);
      game.addChild(commonModal);
      game.addChild(successModal);
      game.addChild(getAwardModal);
      game.addChild(ruleModal);
      game.addChild(introduceModal);
      game.addChild(wardsModal);
      game.addChild(shareModal);
      userWalkInfo();
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
  });
});
