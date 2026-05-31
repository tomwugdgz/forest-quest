// app.js
App({
  onLaunch() {
    // 检查玩家数据是否存在
    const { getPlayerData, checkCheckIn } = require('./utils/storage.js');
    const data = getPlayerData();
    
    // 每日签到检查
    const result = checkCheckIn();
    console.log('Check-in result:', result);
  },

  onShow() {
    // 每次前台展示时检查签到
    const { checkCheckIn } = require('./utils/storage.js');
    checkCheckIn();
  },

  globalData: {
    userInfo: null
  }
});
