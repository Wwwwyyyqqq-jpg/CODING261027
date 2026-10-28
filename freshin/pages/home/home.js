// 首屏：最短路径第 1 步（打开小程序，看到文案与「记录」大按钮）
// 原型说明：真实产品里「宝藏库」入口仅在 ≥1 条记录时显示，原型默认展示
Page({
  goRecord() {
    wx.navigateTo({ url: '/pages/record/record' })
  },
  goTreasure() {
    wx.navigateTo({ url: '/pages/treasure/treasure' })
  }
})
