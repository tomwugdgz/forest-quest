// 数据存储工具模块
// 管理玩家数据（等级、经验值、金币、角色卡收集等）

const STORAGE_PREFIX = 'forest_quest_'

function getUserData() {
  const key = STORAGE_PREFIX + 'user_' + (getCurrentChildKey())
  const data = wx.getStorageSync(key)
  if (!data) {
    const newData = {
      level: 1,
      currentXp: 0,
      totalXp: 0,
      gold: 0,
      totalGoldEarned: 0,
      ageGroup: 'little',
      dailyTaskCount: 2,
      goldMultiplier: 1,
      totalTasksCompleted: 0,
      dailyStreak: 0,
      lastActiveDate: null,
      totalRedeemed: 0,
      srPulls: 0,
      hasLittle: false,
      hasStandard: false,
      hasLeader: false
    }
    wx.setStorageSync(key, newData)
    return newData
  }
  return data
}

function saveUserData(data) {
  const key = STORAGE_PREFIX + 'user_' + getCurrentChildKey()
  wx.setStorageSync(key, data)
}

function getCollectedCards() {
  const key = STORAGE_PREFIX + 'collected_' + getCurrentChildKey()
  return wx.getStorageSync(key) || {}
}

function saveCollectedCards(cards) {
  const key = STORAGE_PREFIX + 'collected_' + getCurrentChildKey()
  wx.setStorageSync(key, cards)
}

function getTodayTasks() {
  const key = STORAGE_PREFIX + 'today_tasks_' + getCurrentChildKey()
  return wx.getStorageSync(key) || []
}

function saveTodayTasks(tasks) {
  const key = STORAGE_PREFIX + 'today_tasks_' + getCurrentChildKey()
  wx.setStorageSync(key, tasks)
}

function getUnlockedAchievements() {
  const key = STORAGE_PREFIX + 'achievements_' + getCurrentChildKey()
  return wx.getStorageSync(key) || []
}

function saveUnlockedAchievements(achievements) {
  const key = STORAGE_PREFIX + 'achievements_' + getCurrentChildKey()
  wx.setStorageSync(key, achievements)
}

function getRedeemedItems() {
  const key = STORAGE_PREFIX + 'redeemed_' + getCurrentChildKey()
  return wx.getStorageSync(key) || []
}

function saveRedeemedItems(items) {
  const key = STORAGE_PREFIX + 'redeemed_' + getCurrentChildKey()
  wx.setStorageSync(key, items)
}

function getParentPassword() {
  return wx.getStorageSync(STORAGE_PREFIX + 'parent_pwd') || '1234'
}

function saveParentPassword(pwd) {
  wx.setStorageSync(STORAGE_PREFIX + 'parent_pwd', pwd)
}

function getCurrentChildKey() {
  return wx.getStorageSync(STORAGE_PREFIX + 'current_child') || 'child1'
}

function setCurrentChild(childKey) {
  wx.setStorageSync(STORAGE_PREFIX + 'current_child', childKey)
}

function clearTodayTasks() {
  saveTodayTasks([])
}

function resetAllData() {
  const keys = ['user_child1', 'user_child2', 'collected_child1', 'collected_child2',
    'today_tasks_child1', 'today_tasks_child2', 'achievements_child1', 'achievements_child2',
    'redeemed_child1', 'redeemed_child2']
  keys.forEach(k => wx.removeStorageSync(STORAGE_PREFIX + k))
  wx.removeStorageSync(STORAGE_PREFIX + 'current_child')
  getUserData() // re-init default
}

module.exports = {
  getUserData,
  saveUserData,
  getCollectedCards,
  saveCollectedCards,
  getTodayTasks,
  saveTodayTasks,
  getUnlockedAchievements,
  saveUnlockedAchievements,
  getRedeemedItems,
  saveRedeemedItems,
  getParentPassword,
  saveParentPassword,
  getCurrentChildKey,
  setCurrentChild,
  clearTodayTasks,
  resetAllData
}
