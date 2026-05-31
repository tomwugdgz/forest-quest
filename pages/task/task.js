// pages/task/task.js
const { getPlayerData, completeTask } = require('../../utils/storage.js');
const { charSets } = require('../../data/charData.js');

Page({
  data: {
    tasks: [],
    completedCount: 0,
    totalXP: 0,
    totalGold: 0,
    progress: 0,
    currentDate: '',
    history: []
  },

  onShow() {
    this.loadTodayTasks();
    this.loadHistory();
  },

  // 加载今日任务（从本地存储读取已抽取的角色卡）
  loadTodayTasks() {
    const today = new Date().toDateString();
    const todayTasks = wx.getStorageSync('todayTasks');
    
    if (todayTasks && todayTasks.date === today && todayTasks.tasks.length > 0) {
      this.setData({
        tasks: todayTasks.tasks,
        completedCount: todayTasks.tasks.filter(t => t.completed).length,
        totalXP: todayTasks.tasks.reduce((sum, t) => sum + (t.completed ? t.xp : 0), 0),
        totalGold: todayTasks.tasks.reduce((sum, t) => sum + (t.completed ? t.gold : 0), 0),
        progress: todayTasks.tasks.length > 0 
          ? Math.round((todayTasks.tasks.filter(t => t.completed).length / todayTasks.tasks.length) * 100) 
          : 0
      });
    } else {
      this.setData({ tasks: [] });
    }
  },

  // 切换任务完成状态
  toggleTask(e) {
    const id = e.currentTarget.dataset.id;
    const tasks = this.data.tasks.map(t => {
      if (t.id === id) {
        const completed = !t.completed;
        if (completed) {
          completeTask(t);
        }
        return { ...t, completed };
      }
      return t;
    });

    const completedCount = tasks.filter(t => t.completed).length;
    const totalXP = tasks.reduce((sum, t) => sum + (t.completed ? t.xp : 0), 0);
    const totalGold = tasks.reduce((sum, t) => sum + (t.completed ? t.gold : 0), 0);
    const progress = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

    // 保存今日任务状态
    const today = new Date().toDateString();
    wx.setStorageSync('todayTasks', { date: today, tasks });

    this.setData({ tasks, completedCount, totalXP, totalGold, progress });

    if (completedCount === tasks.length && tasks.length > 0) {
      wx.showToast({ title: '全部完成！太棒了！', icon: 'success' });
    }
  },

  // 去抽取
  goToDraw() {
    wx.switchTab({ url: '/pages/index/index' });
  },

  // 加载历史记录
  loadHistory() {
    const history = wx.getStorageSync('taskHistory') || [];
    const today = new Date().toDateString();
    this.setData({ currentDate: today, isToday: true, history });
  },

  prevDay() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    this.setData({ currentDate: date.toDateString(), isToday: false });
  },

  nextDay() {
    this.setData({ currentDate: new Date().toDateString(), isToday: true });
  }
});
