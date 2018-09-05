declare let window: any;
/**
 * 小人移动
 * @param nextWalk 需要走几步
 * @param index 当前在第几个格子
 * @param end 是否是最后一步
 * @param cb 回调
 */
export const movePeo = (nextWalk, index, end, cb) => {
  var tiles_xy = window.tiles_xy;
  let to = parseInt(index) + parseInt(nextWalk);

  // console.log('to--', to);
  //到达终点
  if (end == 'Y') to = 27;

  function move() {
    createjs.Tween.get(window.peo_target)
      .wait(300)
      .to({ x: tiles_xy[index][0], y: tiles_xy[index][1] }, 500)
      .call(() => {
        index++;
        if (index < to) {
          move();
        } else {
          cb();
        }
      });
  }
  move();
};

/**
 * 小人定位
 * @param sex 当前选择的性别
 * @param index 当前在第几个格子
 */
export const locationPeo = (channel, index) => {
  //   index = 27;
  //定位小人到当前位置
  var tiles_xy = window.tiles_xy;
  index = index >= 27 ? 27 : index;
  if (index > 0) {
    window.peo_target.x = tiles_xy[index - 1][0];
    window.peo_target.y = tiles_xy[index - 1][1];
  } else {
    if (channel == 'web') {
      window.peo_target.x = 74.8;
      window.peo_target.y = 393.05;
    } else {
      window.peo_target.x = 110.15;
      window.peo_target.y = 393.05;
    }
  }
};
