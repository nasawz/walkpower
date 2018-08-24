import { walk_memberLotterys } from '../api';
declare let window: any;
export const playLotterys = (activityId, channel) => {
  activityId = '363,364';
  walk_memberLotterys(activityId, channel)
    .then(res => {
      let list = [
        {
          resCode: '00',
          message: '查询成功',
          resInfo: {
            giftName: '300M',
            mobile: '182****5779'
          }
        },
        {
          resCode: '00',
          message: '查询成功',
          resInfo: {
            giftName: '500M',
            mobile: '123****5779'
          }
        },
        {
          resCode: '00',
          message: '查询成功',
          resInfo: {
            giftName: 'ytre',
            mobile: '1256779'
          }
        },
        {
          resCode: '00',
          message: '查询成功',
          resInfo: {
            giftName: 'jhgsrtgbbnge',
            mobile: '987659'
          }
        },
        {
          resCode: '00',
          message: '查询成功',
          resInfo: {
            giftName: 'mnbcarghjuy',
            mobile: '66423346779'
          }
        }
      ];
      let index = 0;
      window.mingdan_txt.text = `${res.data[index].resInfo.mobile} ${
        res.data[index].resInfo.giftName
      }`;
      let changeMingdan = (window.changeMingdan = () => {
        if (index < res.data.length - 1) {
          index++;
        } else {
          index = 0;
        }
        window.mingdan_txt.text = `${res.data[index].resInfo.mobile} ${
          res.data[index].resInfo.giftName
        }`;
      });
      window.mingdan.play();
    })
    .catch(err => {
      console.log(err);
    });
};
