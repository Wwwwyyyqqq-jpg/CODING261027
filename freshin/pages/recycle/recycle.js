// 回收站：支撑页（假数据，恢复/彻底删除仅做本地列表变化演示）
const mock = require('../../utils/mock.js')

Page({
  data: {
    list: []
  },

  onLoad() {
    this.setData({ list: mock.deletedRecords })
  },

  restore(e) {
    const id = e.currentTarget.dataset.id
    this.setData({ list: this.data.list.filter((r) => r.id !== id) })
    wx.showToast({ title: '已恢复', icon: 'success' })
  },

  destroy(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '彻底删除确认',
      content: '彻底删除后无法恢复，确定吗？',
      confirmText: '彻底删除',
      confirmColor: '#FF6E7A',
      success: (res) => {
        if (res.confirm) {
          this.setData({ list: this.data.list.filter((r) => r.id !== id) })
          wx.showToast({ title: '已彻底删除', icon: 'none' })
        }
      }
    })
  }
})
