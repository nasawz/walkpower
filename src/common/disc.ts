declare var window: any;

export const shake = (num, cb) => {
  window.dice_mc.ss.gotoAndStop('huangdong');
  setTimeout(() => {
    window.dice_mc.ss.gotoAndStop(num + 1);
    cb();
  }, 2000);
};

export const stopAt = num => {
  window.dice_mc.ss.gotoAndStop(num + 1);
};

export const setCount = count => {
	if (count > 9) {
		window.dice_mc.dice_label.gotoAndStop(10);
	} else{
		window.dice_mc.dice_label.gotoAndStop(count + 1);
	}
};

export const setDiscBtn = enb => {
  window.dice_mc.btn.visible = enb;
};

export const setLab = enb => {
  window.dice_mc.dice_label.visible = enb;
};
