// import { h, render, Component } from 'preact';
import './style/app.less';
import { tiles_event, run_plan } from './common/tiles';
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

import { shake, setCount, stopAt, setDiscBtn, setLab } from './common/disc';

declare let window: any;

//每一步轨迹的类型（award：奖励 knowledge：知识点弹框  addtime:增加次数弹框  destination：终点 ）
let tiles_events = tiles_event('');

//行走方案 plan_1、plan_2、plan_3不需要分享 plan_4、plan_5、plan_6需要分享
let run_plans = run_plan('');

function testmove(plan_key, current_index, next_index) {
  var target = window.boy;
  var tiles_xy = window.tiles_xy;
  //获取方案的数组
  let plan: any = run_plans[plan_key];
  //计算需要走到第几个方块
  let to = plan.reduce(function(pre, cur, index, arr) {
    if (index > next_index) {
      return pre + 0;
    }
    return pre + cur;
  });

  //计算当前在第几个方块
  let current = to - plan[next_index];
  console.log('current--', current, 'to----', to);
  //定位小人到当前位置
  if (current > 0) {
    window.boy.x = tiles_xy[current - 1][0];
    window.boy.y = tiles_xy[current - 1][1];
  }

  function move() {
    createjs.Tween.get(target)
      .wait(500)
      .to({ x: tiles_xy[current][0], y: tiles_xy[current][1] }, 1000)
      .call(() => {
        let event: any = tiles_events[current];
        if (event && event.type == 'destination') {
          alert('恭喜到达终点');
        }
        if (event && event.type == 'award') {
          console.log('奖励------');
          alert('恭喜获得奖励');
        }

        console.log('[[[[[[[[object]]]]]]]]');
        current++;
        console.log('current--', current);
        if (current < to) {
          console.log('-----');
          move();
        }
      });
  }
  move();
}
window.testmove = testmove;
function yao(plan_key, next_index) {
  //获取方案的数组
  let plan: any = run_plans[plan_key];
  return plan[next_index];
}

let next_index = 0;
// let current_index = -1;
document.getElementById('yao')!.addEventListener('click', function() {
  let number = yao('plan_1', next_index);
  console.log('number', number);
  testmove('plan_1', next_index - 1, next_index);
  // setTimeout(() => {
  //   testmove('plan_1', next_index - 1, next_index);
  //   next_index++;
  // }, 1000);
});

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

let mock = [];
/**
 * 行走
 */
let movePeo = (nextWalk, index, giftName, giftUrl) => {
  // TODO 行走
  console.log('走啊走');
  setTimeout(() => {
    setDiscBtn(true);
    setCount(5);
    showCommonModal();
  }, 1000);
};

/**
 * 点击骰子
 */
let doShake = () => {
  setDiscBtn(false);
  // {"resCode":"00","message":"掷骰子成功","resInfo":{"nextWalk":"2","index":"7","giftName":"京东小金库现金红包","spacing":"2","giftUrl":"www.baidu.com"}}
  shake(3, () => {
    // TODO 位移
    movePeo(0, 0, 0, 0);
    console.log('TODO 位移');
  });
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
