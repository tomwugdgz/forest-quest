// pages/index/index.js
const { charSets, rarityConfig } = require('../../data/charData.js');
const { getPlayerData, checkCheckIn, completeTask } = require('../../utils/storage.js');

Page({
  data: {
    playerData: {},
    selectedAge: 'little',
    isSpinning: false,
    showResult: false,
    selectedCard: null,
    levelTitle: '',
    showCheckInModal: false,
    checkInReward: 0,
    checkInConsecutive: 0
  },

  onLoad() {
    this.loadPlayerData();
    // 检查签到
    const result = checkCheckIn();
    if (!result.checkedIn) {
      this.setData({
        showCheckInModal: true,
        checkInReward: result.reward,
        checkInConsecutive: result.consecutiveDays
      });
    }
    // 初始化轮盘画布
    this.initWheel();
  },

  // 加载玩家数据
  loadPlayerData() {
    const data = getPlayerData();
    const { levelConfig } = require('../../data/charData.js');
    const levelInfo = levelConfig.find(l => l.level === data.level) || levelConfig[0];
    this.setData({
      playerData: data,
      levelTitle: levelInfo.title
    });
  },

  // 选择年龄段
  selectAge(e) {
    const age = e.currentTarget.dataset.age;
    this.setData({ selectedAge: age, showResult: false });
    this.initWheel();
  },

  // 初始化轮盘
  initWheel() {
    const chars = charSets[this.data.selectedAge] || charSets.little;
    const ctx = wx.createCanvasContext('wheelCanvas', this);
    const size = 600;
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 20;
    const segments = chars.length;
    const anglePerSeg = (2 * Math.PI) / segments;

    const colors = ['#EAF3DE', '#C0DD97', '#E6F1FB', '#B5D4F4', '#FAEEDA', '#FAC775'];

    // 清空画布
    ctx.clearRect(0, 0, size, size);

    // 绘制每个扇形
    for (let i = 0; i < segments; i++) {
      const startAngle = i * anglePerSeg;
      const endAngle = startAngle + anglePerSeg;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.setFillStyle(colors[i % colors.length]);
      ctx.fill();
      
      // 绘制边框
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.setStrokeStyle('#FFFFFF');
      ctx.setLineWidth(2);
      ctx.stroke();

      // 绘制 emoji
      const midAngle = startAngle + anglePerSeg / 2;
      const emojiX = centerX + Math.cos(midAngle) * (radius * 0.65);
      const emojiY = centerY + Math.sin(midAngle) * (radius * 0.65);
      ctx.setFontSize(28);
      ctx.setFillStyle('#2C2C2A');
      ctx.setTextAlign('center');
      ctx.setTextBaseline('middle');
      ctx.fillText(chars[i].emoji, emojiX, emojiY);
    }

    // 绘制中心圆
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
    ctx.setFillStyle('#FFFFFF');
    ctx.fill();
    ctx.setStrokeStyle('#639922');
    ctx.setLineWidth(3);
    ctx.stroke();

    ctx.draw();
  },

  // 轮盘抽奖
  spinWheel() {
    if (this.data.isSpinning) return;

    this.setData({ isSpinning: true, showResult: false });
    const chars = charSets[this.data.selectedAge] || charSets.little;
    
    // 根据稀有度概率抽取
    const rarityRoll = Math.random() * 100;
    let targetRarity;
    
    if (this.data.selectedAge === 'little') {
      // 3-6岁: N 90%, R 10%
      targetRarity = rarityRoll < 90 ? 'N' : 'R';
    } else if (this.data.selectedAge === 'leader') {
      // 9-12进阶: N 30%, R 40%, SR 30%
      targetRarity = rarityRoll < 30 ? 'N' : rarityRoll < 70 ? 'R' : 'SR';
    } else {
      // 7-12岁: N 60%, R 30%, SR 10%
      targetRarity = rarityRoll < 60 ? 'N' : rarityRoll < 90 ? 'R' : 'SR';
    }
    
    // 筛选对应稀有度的角色卡
    const candidates = chars.filter(c => c.rarity === targetRarity);
    const selectedCard = candidates[Math.floor(Math.random() * candidates.length)];

    // 模拟转盘旋转动画
    setTimeout(() => {
      this.setData({
        isSpinning: false,
        showResult: true,
        selectedCard: selectedCard
      });
      this.playWinEffect();
    }, 2000);
  },

  // 播放中奖效果
  playWinEffect() {
    const card = this.data.selectedCard;
    if (card.rarity === 'SR') {
      wx.vibrateLong({ type: 'heavy' });
    } else if (card.rarity === 'R') {
      wx.vibrateShort({ type: 'medium' });
    } else {
      wx.vibrateShort({ type: 'light' });
    }
  },

  // 确认任务
  confirmTask() {
    const result = completeTask(this.data.selectedCard);
    
    // 更新玩家数据
    this.loadPlayerData();
    
    wx.showToast({
      title: `任务确认！+${result.xp}经验 +${result.gold}金币`,
      icon: 'success',
      duration: 2000
    });

    // 延迟跳转到任务页面
    setTimeout(() => {
      wx.switchTab({ url: '/pages/task/task' });
    }, 2000);
  },

  // 再抽一次
  redraw() {
    this.setData({
      showResult: false,
      selectedCard: null
    });
  },

  // 关闭签到弹窗
  closeCheckInModal() {
    this.setData({ showCheckInModal: false });
  }
});
