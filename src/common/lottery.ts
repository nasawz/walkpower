declare let KinerLottery: any;
declare let window: any;
import { walk_lottery } from '../api';
import { iAlert, goLogin, goVipJoin } from '../common/help';

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
            randomFun((deg)=>{
				this.goKinerLottery(deg);
            });
        },
        KinerLotteryHandler: function(deg) { //抽奖结束回调
        	setTimeout(() => {
        		whichAward(deg);
	        	Zepto('#zhezhao').toggle();
				Zepto('.lottery-case').toggle();
		    }, 1000);
			
        }
    });

    /**
     * 根据转盘旋转角度判断获得什么奖品
     * @param deg
     * @returns {*}
     */
    var whichAward = function(deg) {
        if (deg > 0 && deg <= 45) {
            // return "2G流量";
            window.showLiuliangModal(4);
        } else if (deg > 45 && deg <= 90) {
            // return "1G流量";
            window.showLiuliangModal(3);
        } else if (deg > 90 && deg <= 135) {
            // return "500M流量";
            window.showLiuliangModal(2);
        } else if (deg > 135 && deg <= 180) {
            // return "100M流量";
            window.showLiuliangModal(1);
        } else if (deg > 180 && deg <= 225) {
            // return "2G流量";
            window.showLiuliangModal(4);
        } else if (deg > 225 && deg <= 270) {
            // return "1G流量";
            window.showLiuliangModal(3);
        } else if (deg > 270 && deg <= 315) {
            // return "500M流量";
            window.showLiuliangModal(2);
        } else if (deg > 315 && deg <= 360) {
            // return "100M流量";
            window.showLiuliangModal(1);
        }
    };

    function randomFun(cb) {
    	let activityId = 363;
    	walk_lottery(activityId,channel).then(res => {
		    let resCode = res.data.resCode;
		    let resInfo = res.data.resInfo;
		    let randomDeg = 0;
		    switch (resCode) {
		    	case '00':
		        	if (resInfo.giftName == '2G') {
		        		randomDeg = Math.floor(Math.random() * 45+135);
		        	}	
		        	else if (resInfo.giftName == '1G') {
		        		randomDeg = Math.floor(Math.random() * 45+90);
		        	}
		        	else if (resInfo.giftName == '500M') {
			            randomDeg = Math.floor(Math.random() * 45+45);
			        }
			        else if (resInfo.giftName == '100M') {
			            randomDeg = Math.floor(Math.random() * 45+1);
			        }
		        	break;
		    	case '01':
			        iAlert('请先登录', '确定', () => {
			            goLogin();
			        });
		        	break;
		        case '02':
		        	iAlert('请先加入中国移动客户俱乐部会员', '确定', () => {
                        let activityId = 364;
		        		goVipJoin(activityId,channel);
			        });
		        	break;
		    	case '11':
			        iAlert('不在活动时间内哦', '确定', () => {
			        });
		        	break;
		        case '12':
		        case '13':
		        case '14':
		        	iAlert('您目前没有抽奖机会哦', '确定', () => {
			        });
		        	break;
		    	case '17':
			        iAlert('奖品已发放完，明天记得来抽奖哦', '确定', () => {
			        });
		        	break;				      
		    	default:
		    		iAlert('请求超时，请稍后重试', '确定', () => {
			        });
		        	break;
		    }
		    if (randomDeg != 0) {
		    	cb(randomDeg)
		    }
		});
    }
          

};
