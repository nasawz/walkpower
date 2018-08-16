// import { h, render, Component } from 'preact';
import './style/app.less';
import { tiles_event, run_plan } from './common/tiles';
import Game from './an/game';
import EventProxy from './utils/eventproxy';
let game = new Game();
import SelectModal from './an/selectModal';
let selectModal = new SelectModal();

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
        if (event && event.type == 'award') {
          console.log('奖励------');
        }
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

window.gameReady = () => {
  // console.log('gameReady');
  // testmove('plan_2', -1, 0);
  // setTimeout(() => {
  //   testmove('plan_2', 0, 1);
  // }, 7000);
  // setTimeout(() => {
  //   testmove('plan_2', 1, 2);
  // }, 20000);
};

let showSelectModal = () => {
  Zepto('#select_modal').show();
  window.selectModal_mc.visible = true;
};

window.onSelectPeo = peo => {
  console.log(peo);
};

window.closeModals = () => {
  Zepto('.modals').hide();
};

Zepto(function($: any) {
  var ep = EventProxy.create();
  ep.all('game', 'selectModal', (game, selectModal) => {
    showSelectModal();
  });
  game.init(ep);
  selectModal.init(ep);
});
