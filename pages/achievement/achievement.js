// pages/achievement/achievement.js
const Storage = require('../../utils/storage.js')

const ACHIEVEMENTS = [
  { id: 'first_task', name: '初次冒险', icon: '🌟', description: '完成第一个任务', condition: (u) => u.totalTasksCompleted >= 1, rewardGold: 10 },
  { id: 'task_10', name: '勤快小帮手', icon: '💪', description: '累计完成10个任务', condition: (u) => u.totalTasksCompleted >= 10, rewardGold: 30 },
  { id: 'task_50', name: '家务小达人', icon: '🏅', description: '累计完成50个任务', condition: (u) => u.totalTasksCompleted >= 50, rewardGold: 80 },
  { id: 'task_100', name: '森林传奇', icon: '👑', description: '累计完成100个任务', condition: (u) => u.totalTasksCompleted >= 100, rewardGold: 150 },
  { id: 'level_5', name: '冒险新星', icon: '⭐', description: '达到5级', condition: (u) => u.level >= 5, rewardGold: 20 },
  { id: 'level_10', name: '资深冒险家', icon: '🌠', description: '达到10级', condition: (u) => u.level >= 10, rewardGold: 50 },
  { id: 'level_20', name: '森林守护者', icon: '🛡️', description: '达到20级', condition: (u) => u.level >= 20, rewardGold: 100 },
  { id: 'collect_5', name: '初露锋芒', icon: '📇', description: '收集5张角色卡', condition: (u) => u.collectedCount >= 5, rewardGold: 25 },
  { id: 'collect_15', name: '收藏达人', icon: '🎴', description: '收集15张角色卡', condition: (u) => u.collectedCount >= 15, rewardGold: 50 },
  { id: 'collect_all', name: '图鉴大师', icon: '📚', description: '收集全部角色卡', condition: (u) => u.collectedCount >= 30, rewardGold: 200 },
  { id: 'gold_100', name: '小富翁', icon: '💰', description: '累计获得100金币', condition: (u) => u.totalGoldEarned >= 100, rewardGold: 20 },
  { id: 'gold_500', name: '大富翁', icon: '🤑', description: '累计获得500金币', condition: (u) => u.totalGoldEarned >= 500, rewardGold: 80 },
  { id: 'streak_3', name: '坚持不懈', icon: '🔥', description: '连续3天完成任务', condition: (u) => u.dailyStreak >= 3, rewardGold: 20 },
  { id: 'streak_7', name: '一周达人', icon: '🌈', description: '连续7天完成任务', condition: (u) => u.dailyStreak >= 7, rewardGold: 50 },
  { id: 'streak_30', name: '月度传奇', icon: '💎', description: '连续30天完成任务', condition: (u) => u.dailyStreak >= 30, rewardGold: 150 },
  { id: 'first_shop', name: '初次购物', icon: '🛒', description: '在商店兑换第一次奖励', condition: (u) => u.totalRedeemed >= 1, rewardGold: 15 },
  { id: 'sr_pull', name: '欧皇降临', icon: '🌟', description: '抽到第一张SR卡', condition: (u) => u.srPulls >= 1, rewardGold: 30 },
  { id: 'all_age_groups', name: '全能冒险家', icon: '🎭', description: '完成三个年龄段的所有角色任务', condition: (u) => u.hasLittle && u.hasStandard && u.hasLeader, rewardGold: 100 }
]

Page({
  data: {
    totalAchievements: [],
    unlockedAchievements: [],
    unlockedCount: 0
  },

  onLoad() {
    this.loadAchievements()
  },

  onShow() {
    this.loadAchievements()
  },

  loadAchievements() {
    const userData = Storage.getUserData()
    const unlocked = Storage.getUnlockedAchievements()
    const userDataExtended = {
      ...userData,
      collectedCount: Object.keys(Storage.getCollectedCards()).length
    }

    const totalAchievements = ACHIEVEMENTS.map(a => ({
      ...a,
      unlocked: unlocked.includes(a.id)
    }))

    const unlockedCount = totalAchievements.filter(a => a.unlocked).length
    const total = totalAchievements.length
    const progressPercent = Math.round((unlockedCount / total) * 100)

    this.setData({
      totalAchievements,
      unlockedCount,
      progressPercent
    })

    // Check for newly unlocked achievements
    this.checkNewAchievements(userDataExtended, unlocked)
  },

  checkNewAchievements(userData, unlocked) {
    let newUnlocks = []
    ACHIEVEMENTS.forEach(a => {
      if (!unlocked.includes(a.id) && a.condition(userData)) {
        newUnlocks.push(a)
      }
    })

    if (newUnlocks.length > 0) {
      const newIds = newUnlocks.map(a => a.id)
      const updated = [...unlocked, ...newIds]
      Storage.saveUnlockedAchievements(updated)

      // Award gold bonus
      const bonusGold = newUnlocks.reduce((sum, a) => sum + a.rewardGold, 0)
      const currentData = Storage.getUserData()
      Storage.saveUserData({
        ...currentData,
        gold: (currentData.gold || 0) + bonusGold,
        totalGoldEarned: (currentData.totalGoldEarned || 0) + bonusGold
      })

      wx.showToast({
        title: `成就解锁！+${bonusGold}🪙`,
        icon: 'success',
        duration: 2500
      })

      // Refresh after toast
      setTimeout(() => this.loadAchievements(), 2600)
    }
  }
})
