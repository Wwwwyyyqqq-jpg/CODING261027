// 记录页：最短路径第 2 步（纯前端假交互，不保存真实数据）
const POOL = [
  { emoji: '🌸', bg: 'linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)' },
  { emoji: '🌈', bg: 'linear-gradient(135deg, #A18CD1 0%, #FBC2EB 100%)' },
  { emoji: '🍰', bg: 'linear-gradient(135deg, #FF9A8B 0%, #FAD0C4 100%)' },
  { emoji: '🌿', bg: 'linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)' },
  { emoji: '🐶', bg: 'linear-gradient(135deg, #F6D365 0%, #FDA085 100%)' },
  { emoji: '✨', bg: 'linear-gradient(135deg, #89F7FE 0%, #66A6FF 100%)' }
]

Page({
  data: {
    title: '',
    text: '',
    photos: [POOL[0], POOL[1], POOL[2]],
    video: null
  },

  onTitle(e) {
    this.setData({ title: e.detail.value })
  },

  onText(e) {
    this.setData({ text: e.detail.value })
  },

  addPhoto() {
    wx.showActionSheet({
      itemList: ['拍摄', '从相册选择'],
      success: (res) => {
        if (res.tapIndex === 0 || res.tapIndex === 1) {
          if (this.data.photos.length >= 9) {
            wx.showToast({ title: '最多 9 张哦', icon: 'none' })
            return
          }
          const next = POOL[this.data.photos.length % POOL.length]
          this.setData({ photos: this.data.photos.concat(next) })
        }
      }
    })
  },

  addVideo() {
    // 假交互：直接显示一个假视频封面
    this.setData({
      video: { emoji: '🎬', bg: 'linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)', duration: '0:45' }
    })
  },

  save() {
    const { title, text } = this.data
    if (!title) {
      wx.showToast({ title: '起个标题吧', icon: 'none' })
      return
    }
    if (text.length < 10) {
      wx.showToast({ title: '再写一点点吧，至少 10 个字', icon: 'none' })
      return
    }
    wx.showToast({ title: '已存入宝藏库 ✨', icon: 'none' })
    setTimeout(() => {
      wx.redirectTo({ url: '/pages/treasure/treasure' })
    }, 600)
  }
})
