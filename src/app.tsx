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

import EventProxy from './utils/eventproxy';
let game = new Game();

import { walk_dice, walk_share, walk_userInfo, walk_putRole } from './api';
import { shake, setCount, stopAt, setDiscBtn, setLab } from './common/disc';

declare let window: any;

window.gameReady = () => {};

window.closeModals = () => {
  Zepto('.modals').hide();
};

/**
 * 显示活动介绍
 */
let showIntroduceModal = () => {
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

window.onSelectPeo = peo => {
  console.log('当前选择是', peo);
  if (peo == 'boy') {
    window.boy.visible = true;
    window.peo_target = window.boy;
  }
  if (peo == 'girl') {
    window.girl.visible = true;
    window.peo_target = window.girl;
  }
  initGame();
};

/**
 * 首次初始化game
 */
let initGame = () => {
  setCount(6);

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
      end: 'N'
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
      end: 'N'
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
      end: 'N'
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
      end: 'N'
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
      end: 'N'
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
      end: 'N'
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
      end: 'Y'
    }
  }
];
/**
 * 行走
 */
let movePeo = (nextWalk, index, type, end, giftName, giftUrl) => {
  // TODO 行走
  console.log('走啊走');
  var tiles_xy = window.tiles_xy;
  let to = index + nextWalk;
  console.log('to--', to);
  //到达终点
  if (end == 'Y') to = 27;

  //定位小人到当前位置
  if (index > 0) {
    window.boy.x = tiles_xy[index - 1][0];
    window.boy.y = tiles_xy[index - 1][1];
  }

  function move() {
    createjs.Tween.get(window.peo_target)
      .wait(500)
      .to({ x: tiles_xy[index][0], y: tiles_xy[index][1] }, 1000)
      .call(() => {
        index++;
        if (index < to) {
          move();
        } else {
          setDiscBtn(true);
          setCount(5);
          //type:0=知识点 1=奖品点 2=花园增加掷骰子次数 3=白点
          if (end == 'Y') {
            showSuccessModal();
          } else {
            if (type == '0') {
              console.log('到达知识点');
              showCommonModal();
            } else if (type == '1') {
              console.log('到达奖品点');
              showGetAwardModal();
            } else if (type == '2') {
              console.log('到达花园增加掷骰子次数');
            }
          }
        }
      });
  }
  move();
};

/**
 * 点击骰子
 */
let mockindex = 0; //模拟获取Mock中的数据
let doShake = () => {
  setDiscBtn(false);
  let obj: any = mock[mockindex];
  //{"resCode":"00","message":"掷骰子成功","resInfo":{"nextWalk":"6","index":"1","giftName":"京东满减券","spacing":"0","type":"1","giftUrl":"www.baidu.com","end":"N"}}
  shake(parseInt(obj.resInfo.nextWalk), () => {
    // TODO 位移
    movePeo(
      parseInt(obj.resInfo.nextWalk),
      parseInt(obj.resInfo.index),
      obj.resInfo.type,
      obj.resInfo.end,
      0,
      0
    );
  });
  mockindex++;
};

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
    (
      game,
      selectModal,
      commonModal,
      successModal,
      getAwardModal,
      ruleModal,
      introduceModal,
      wardsModal
    ) => {
      game.addChild(selectModal);
      game.addChild(commonModal);
      game.addChild(successModal);
      game.addChild(getAwardModal);
      game.addChild(ruleModal);
      game.addChild(introduceModal);
      game.addChild(wardsModal);
      // console.log(game);
      // console.log(selectModal);
      // console.log(selectModal);
      // selectModal.visible = true;
      // showSelectModal();
      setTimeout(() => {
        showSelectModal();
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
  });
});
