
declare let KinerLottery: any;
import { walk_lottery } from '../api';
import { iAlert, goLogin } from '../common/help';
/**
 * 点击抽奖
 * @param activityId
 * @param channel
 */
export const onLottery = (activityId, channel) => {
  // TODO lottrey
  	Zepto('#zhezhao').toggle();
	Zepto('.lottery-case').toggle(); //显示隐藏抽奖转盘模块
    var kinerLottery = new KinerLottery({
        rotateNum: 8, //转盘转动圈数
        body: "#lotteryBox", //大转盘整体的选择符或zepto对象
        direction: 0, //0为顺时针转动,1为逆时针转动
        disabledHandler: function(key) { //禁止抽奖时回调
            switch (key) {
                case "noStart":
                    alert("活动尚未开始");
                    break;
                case "completed":
                    alert("活动已结束");
                    break;
            }
        },
        clickCallback: function() { //点击抽奖按钮,再次回调中实现访问后台获取抽奖结果,拿到抽奖结果后显示抽奖画面
            //此处访问接口获取奖品
            function random() {
            	let activityId = 363;
            	walk_lottery(activityId,channel).then(res => {
				    let resCode = res.data.resCode;
				    let resInfo = res.data.resInfo;
				    console.log(resCode);
				    console.log(resInfo);
				    switch (resCode) {
				    	case '00':
				        	console.log('成功中奖');
				        	break;
				    	case '01':
				    		console.log('未登录');
					        iAlert('请先登录', '确认', () => {
					            goLogin();
					        });
				        	break;
				        case '02':
				        	console.log('非会员');
				        	break;
				    	case '03':
				    		console.log('activityId参数错误');
				        	break;
				        case '10':
				        	console.log('channel参数错误');
				        	break;
				    	case '11':
					          console.log('非活动抽奖时间');
				        	break;
				    	case '12':
				    		console.log('去分享增加抽奖机会');
				        	break;
				        case '13':
				        	console.log('抽奖机会用完了');
				        	break;
				    	case '14':
					        console.log('已经中过奖了');
				        	break;
				    	case '15':
				    		console.log('很遗憾，没中奖');
				        	break;
				        case '16':
				        	console.log('系统繁忙，请稍后再试');
				        	break;
				    	case '17':
					        console.log('没有奖品了');
				        	break;
				      
				    	default:
				        	break;
				    }
				 });
                return Math.floor(Math.random() * 360);
            }
            this.goKinerLottery(random());
        },
        KinerLotteryHandler: function(deg) { //抽奖结束回调
            alert("恭喜您获得:" + whichAward(deg));
        }
    });

    /**
     * 根据转盘旋转角度判断获得什么奖品
     * @param deg
     * @returns {*}
     */
    var whichAward = function(deg) {
        if ((deg > 0 && deg <= 45)) {
            return "2G流量";
        } else if ((deg > 45 && deg <= 90)) {
            return "1G流量";
        } else if (deg > 90 && deg <= 135) {
            return "500M流量";
        } else if (deg > 135 && deg <= 180) {
            return "100M流量";
        } else if (deg > 180 && deg <= 225) {
            return "2G流量";
        } else if (deg > 225 && deg <= 270) {
            return "1G流量";
        } else if (deg > 270 && deg <= 315) {
            return "500M流量";
        } else if (deg > 315 && deg <= 360) {
            return "100M流量";
        }
    };

};
