// pages/collection/collection.js
const Storage = require('../../utils/storage.js')
const CHAR_DATA = require('../../data/charData.js')

Page({
  data: {
    allCards: [],
    filteredCards: [],
    collectedCards: {},
    currentFilter: 'all',
    rarityFilter: 'all',
    collectedCount: 0,
    totalCount: 0,
    showDetail: false,
    detailCard: null
  },

  onLoad() {
    this.loadCollection()
  },

  onShow() {
    this.loadCollection()
  },

  loadCollection() {
    const collectedCards = Storage.getCollectedCards()
    const allCards = CHAR_DATA.getAllCards()

    this.setData({
      allCards: allCards,
      collectedCards: collectedCards,
      totalCount: allCards.length,
      collectedCount: Object.keys(collectedCards).length,
      filteredCards: this.applyFilters(allCards, collectedCards)
    })
  },

  applyFilters(cards, collected) {
    let result = cards

    // Age filter
    if (this.data.currentFilter !== 'all') {
      result = result.filter(c => c.ageGroup === this.data.currentFilter)
    }

    // Rarity filter
    if (this.data.rarityFilter !== 'all') {
      result = result.filter(c => c.rarity === this.data.rarityFilter)
    }

    // Map collected status
    return result.map(c => ({
      ...c,
      collected: !!collected[c.id]
    }))
  },

  filterAge(e) {
    const filter = e.currentTarget.dataset.filter
    this.setData({ currentFilter: filter })

    const filtered = this.applyFilters(this.data.allCards, this.data.collectedCards)
    this.setData({ filteredCards: filtered })
  },

  filterRarity(e) {
    const rarity = e.currentTarget.dataset.rarity
    this.setData({ rarityFilter: rarity })

    const filtered = this.applyFilters(this.data.allCards, this.data.collectedCards)
    this.setData({ filteredCards: filtered })
  },

  showCardDetail(e) {
    const card = e.currentTarget.dataset.card
    this.setData({
      showDetail: true,
      detailCard: card
    })
  },

  closeDetail() {
    this.setData({
      showDetail: false,
      detailCard: null
    })
  }
})
