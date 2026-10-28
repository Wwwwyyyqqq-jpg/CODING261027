// 详情页：支撑页（假数据查详情；删除 = 确认后提示移入回收站）
const mock = require('../../utils/mock.js')

Page({
  data: {
    record: {}
  },

  onLoad(options) {
    const record = mock.records.find((r) => r.id === options.id) || mock.records[0]
    this.setData({ record })
  },

  onMenu() {
    wx.showActionSheet({
      itemList: ['移入回收站'],
      success: () => {
        wx.showModal({
          title: '删除确认',
          content: '删除后将进入回收站，保留 3 天，期间可随时恢复',
          confirmText: '移入回收站',
          confirmColor: '#FF6E7A',
          success: (res) => {
            if (res.confirm) {
              wx.showToast({ title: '已移入回收站', icon: 'none' })
              setTimeout(() => wx.navigateBack(), 600)
            }
          }
        })
      }
    })
  }
})
