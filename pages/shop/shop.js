// pages/shop/shop.js
const Storage = require('../../utils/storage.js')

Page({
  data: {
    gold: 0,
    shopItems: [],
    redeemedItems: [],
    showConfirm: false,
    confirmItem: null
  },

  onLoad() {
    this.loadShop()
  },

  onShow() {
    this.loadShop()
  },

  loadShop() {
    const userData = Storage.getUserData()
    const redeemed = Storage.getRedeemedItems()

    const shopItems = [
      { id: 'extra_play', name: '额外游戏时间', icon: '🎮', description: '30分钟额外游戏/平板时间', cost: 50 },
      { id: 'snack_choice', name: '零食自选', icon: '🍪', description: '今天可以自己选一样小零食', cost: 30 },
      { id: 'movie_night', name: '家庭电影夜', icon: '🎬', description: '今晚选一部全家一起看的电影', cost: 80 },
      { id: 'stay_up_late', name: '晚睡30分钟', icon: '🌙', description: '今晚可以晚睡30分钟', cost: 40 },
      { id: 'park_trip', name: '公园游玩', icon: '🎠', description: '周末去一次公园或游乐场', cost: 100 },
      { id: 'small_gift', name: '小礼物兑换', icon: '🎁', description: '挑选一件50元以内的小礼物', cost: 120 },
      { id: 'cook_together', name: '一起做饭', icon: '👨‍🍳', description: '和爸爸妈妈一起准备一顿晚餐', cost: 60 },
      { id: 'friend_visit', name: '邀请小伙伴', icon: '👫', description: '邀请一个好朋友来家里玩', cost: 90 },
      { id: 'nature_walk', name: '自然探险', icon: '🌿', description: '全家一起去公园或郊外探险', cost: 70 },
      { id: 'story_night', name: '特别睡前故事', icon: '📖', description: '今晚多讲两个故事', cost: 35 },
      { id: 'art_project', name: '手工创意时间', icon: '🎨', description: '一起做个手工或画画', cost: 45 },
      { id: 'photo_shoot', name: '家庭拍照日', icon: '📸', description: '全家一起去拍照留念', cost: 110 }
    ]

    this.setData({
      gold: userData.gold || 0,
      shopItems: shopItems,
      redeemedItems: redeemed
    })
  },

  buyItem(e) {
    const item = e.currentTarget.dataset.item
    if (this.data.gold < item.cost) {
      wx.showToast({
        title: '金币不足！继续完成任务吧',
        icon: 'none',
        duration: 2000
      })
      return
    }

    this.setData({
      showConfirm: true,
      confirmItem: item
    })
  },

  cancelBuy() {
    this.setData({
      showConfirm: false,
      confirmItem: null
    })
  },

  confirmBuy() {
    const item = this.data.confirmItem
    const userData = Storage.getUserData()

    if (userData.gold < item.cost) {
      wx.showToast({ title: '金币不足！', icon: 'none' })
      this.setData({ showConfirm: false, confirmItem: null })
      return
    }

    // Deduct gold
    const newGold = userData.gold - item.cost
    Storage.saveUserData({
      ...userData,
      gold: newGold
    })

    // Save redeemed item
    const redeemed = Storage.getRedeededItems()
    redeemed.unshift({
      id: item.id + '_' + Date.now(),
      name: item.name,
      icon: item.icon,
      time: this.formatTime(new Date())
    })
    Storage.saveRedeemedItems(redeemed)

    // Update display
    this.setData({
      gold: newGold,
      showConfirm: false,
      confirmItem: null,
      redeemedItems: redeemed
    })

    wx.showToast({
      title: '兑换成功！🎉',
      icon: 'success',
      duration: 2000
    })
  },

  formatTime(date) {
    const m = date.getMonth() + 1
    const d = date.getDate()
    const h = date.getHours()
    const min = date.getMinutes()
    return `${m}月${d}日 ${h}:${min < 10 ? '0' : ''}${min}`
  }
})
