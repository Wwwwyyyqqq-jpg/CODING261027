// 宝藏库：最短路径第 3 步（假数据列表，从新到旧）
const mock = require('../../utils/mock.js')

Page({
  data: {
    list: []
  },

  onLoad() {
    // 卡片缩略图只展示前 3 张（PRD FR-03）
    const list = mock.records.map((r) => ({
      ...r,
      thumbs: r.photos.slice(0, 3)
    }))
    this.setData({ list })
  },

  goRecord() {
    wx.navigateTo({ url: '/pages/record/record' })
  },

  goDetail(e) {
    wx.navigateTo({ url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id })
  },

  onMenu() {
    wx.showActionSheet({
      itemList: ['回收站 (' + mock.deletedRecords.length + ')'],
      success: (res) => {
        if (res.tapIndex === 0) {
          wx.navigateTo({ url: '/pages/recycle/recycle' })
        }
      }
    })
  }
})
