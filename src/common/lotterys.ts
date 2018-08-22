import { walk_memberLotterys } from '../api';
declare let window: any;
export const playLotterys = (activityId, channel) => {
  walk_memberLotterys(activityId, channel)
    .then(res => {
      //   TODO 控制中奖名单
      // console.log(res.data);
      // console.log(window.mingdan);
      // console.log(window.mingdan_txt);
      let changeMingdan = (window.changeMingdan = () => {
        for (let i = 0; i < res.data.length; i++) {
          window.mingdan_txt.text = `${res.data[i].resInfo.mobile} ${res.data[i].resInfo.giftName}`;
        }
      });
      window.mingdan.play();
      changeMingdan();
    })
    .catch(err => {
      console.log(err);
    });
};
