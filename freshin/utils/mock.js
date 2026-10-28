// 假数据：仅用于静态原型展示 UI，不连接任何真实数据
const records = [
  {
    id: 'r1',
    title: '楼下的晚霞',
    text: '下班路上抬头看到粉紫色的晚霞，整条街的人都停下来拍照。风很软，忽然觉得生活挺好的。',
    createdAt: '2026-10-27 18:42',
    timeLabel: '刚刚',
    photos: [
      { emoji: '🌇', bg: 'linear-gradient(135deg, #FF9A8B 0%, #FF6A88 100%)' },
      { emoji: '🌆', bg: 'linear-gradient(135deg, #A18CD1 0%, #FBC2EB 100%)' },
      { emoji: '🌬️', bg: 'linear-gradient(135deg, #89F7FE 0%, #66A6FF 100%)' }
    ],
    video: null
  },
  {
    id: 'r2',
    title: '第一次手冲成功',
    text: '按上次记的参数冲了一壶，居然比店里的还好喝！再记一遍防忘：15g 豆、92°C、粉水比 1:16、两分钟萃取。开心到转圈圈。',
    createdAt: '2026-10-26 09:15',
    timeLabel: '昨天',
    photos: [
      { emoji: '☕', bg: 'linear-gradient(135deg, #F6D365 0%, #FDA085 100%)' },
      { emoji: '🫘', bg: 'linear-gradient(135deg, #FF9A8B 0%, #FAD0C4 100%)' }
    ],
    video: { emoji: '🎬', bg: 'linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)', duration: '0:48' }
  },
  {
    id: 'r3',
    title: '小猫主动蹭我了',
    text: '小区里那只高冷的三花，今天竟然主动过来蹭我的裤腿，还打呼噜。蹲在原地陪它十分钟，腿麻了也值。',
    createdAt: '2026-10-24 21:03',
    timeLabel: '10月24日',
    photos: [],
    video: null
  },
  {
    id: 'r4',
    title: '和爸妈视频通话',
    text: '妈妈学会了新表情包，全程给我发小猫跳舞。爸爸在旁边偷偷入镜被发现后又跑掉。笑到肚子疼，挂了电话还在笑。',
    createdAt: '2026-10-20 20:30',
    timeLabel: '10月20日',
    photos: [
      { emoji: '😺', bg: 'linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)' },
      { emoji: '📞', bg: 'linear-gradient(135deg, #A1C4FD 0%, #C2E9FB 100%)' },
      { emoji: '🏠', bg: 'linear-gradient(135deg, #FBC2EB 0%, #A6C1EE 100%)' }
    ],
    video: null
  }
]

const deletedRecords = [
  {
    id: 'd1',
    title: '随手记的碎碎念',
    summary: '今天有点累，但是奶茶很好喝，三分糖刚刚好…',
    deletedAt: '2026-10-27 10:12 删除',
    remain: '剩 2 天 3 小时'
  },
  {
    id: 'd2',
    title: '一条测试记录',
    summary: '删除试试回收站好不好用，看起来是好用的…',
    deletedAt: '2026-10-26 22:40 删除',
    remain: '剩 1 天 6 小时'
  }
]

module.exports = { records, deletedRecords }
