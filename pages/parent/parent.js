// pages/parent/parent.js
const Storage = require('../../utils/storage.js')

Page({
  data: {
    isLoggedIn: false,
    password: '',
    currentChild: 'child1',
    userData: { ageGroup: 'little' },
    dailyTaskCount: 2,
    goldMultiplier: 1,
    newPassword: '',
    stats: {
      level: 1,
      totalTasks: 0,
      collected: 0,
      streak: 0
    }
  },

  onLoad() {
    this.setData({ isLoggedIn: false })
  },

  onPasswordInput(e) {
    this.setData({ password: e.detail.value })
  },

  onNewPasswordInput(e) {
    this.setData({ newPassword: e.detail.value })
  },

  login() {
    const password = Storage.getParentPassword()
    if (this.data.password === password) {
      const userData = Storage.getUserData()
      this.setData({
        isLoggedIn: true,
        userData: userData,
        dailyTaskCount: userData.dailyTaskCount || 2,
        goldMultiplier: userData.goldMultiplier || 1
      })
      this.loadStats()
    } else {
      wx.showToast({ title: '密码错误', icon: 'none' })
    }
  },

  logout() {
    this.setData({ isLoggedIn: false, password: '' })
  },

  loadStats() {
    const userData = Storage.getUserData()
    const collected = Storage.getCollectedCards()
    this.setData({
      stats: {
        level: userData.level || 1,
        totalTasks: userData.totalTasksCompleted || 0,
        collected: Object.keys(collected).length,
        streak: userData.dailyStreak || 0
      }
    })
  },

  switchChild(e) {
    const child = e.currentTarget.dataset.child
    this.setData({ currentChild: child })
    Storage.setCurrentChild(child)
    const userData = Storage.getUserData()
    this.setData({
      userData: userData,
      dailyTaskCount: userData.dailyTaskCount || 2,
      goldMultiplier: userData.goldMultiplier || 1
    })
    this.loadStats()
  },

  setAgeGroup(e) {
    const age = e.currentTarget.dataset.age
    const userData = Storage.getUserData()
    const updated = { ...userData, ageGroup: age }
    Storage.saveUserData(updated)
    this.setData({ userData: updated })
    wx.showToast({ title: '年龄段已切换', icon: 'success' })
  },

  onTaskCountChange(e) {
    const count = e.detail.value
    const userData = Storage.getUserData()
    const updated = { ...userData, dailyTaskCount: count }
    Storage.saveUserData(updated)
    this.setData({
      dailyTaskCount: count,
      userData: updated
    })
  },

  setMultiplier(e) {
    const mult = parseFloat(e.currentTarget.dataset.mult)
    const userData = Storage.getUserData()
    const updated = { ...userData, goldMultiplier: mult }
    Storage.saveUserData(updated)
    this.setData({
      goldMultiplier: mult,
      userData: updated
    })
    wx.showToast({ title: '金币倍率已更新', icon: 'success' })
  },

  changePassword() {
    const newPwd = this.data.newPassword
    if (newPwd.length !== 4 || isNaN(newPwd)) {
      wx.showToast({ title: '请输入4位数字密码', icon: 'none' })
      return
    }
    Storage.saveParentPassword(newPwd)
    this.setData({ newPassword: '' })
    wx.showToast({ title: '密码已修改', icon: 'success' })
  },

  resetDaily() {
    wx.showModal({
      title: '重置今日任务',
      content: '确认清除今日的任务和进度？',
      success: (res) => {
        if (res.confirm) {
          Storage.clearTodayTasks()
          wx.showToast({ title: '已重置今日任务', icon: 'success' })
        }
      }
    })
  },

  resetAll() {
    wx.showModal({
      title: '⚠️ 重置全部进度',
      content: '此操作将清除所有游戏数据，包括等级、金币、收集进度。确定要重置吗？',
      confirmColor: '#FF5722',
      success: (res) => {
        if (res.confirm) {
          wx.showModal({
            title: '再次确认',
            content: '真的要删除所有进度吗？不可恢复！',
            confirmColor: '#FF5722',
            success: (res2) => {
              if (res2.confirm) {
                Storage.resetAllData()
                this.setData({ isLoggedIn: false })
                wx.showToast({ title: '已重置所有数据', icon: 'success' })
              }
            }
          })
        }
      }
    })
  }
})
