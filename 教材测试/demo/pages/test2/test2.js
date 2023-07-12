// detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 会议详情页数据
    meetings: [
      {
        id: '001',
        name: '会议1',
        time: '2023-06-01 09:00',
        location: 'A会议室',
        activity: '报告',
        plan: '讨论',
        attendees: [
          { name: '张三', status: '未签到' },
          { name: '李四', status: '未签到' },
          { name: '王五', status: '未签到' }
        ]
      },
      {
        id: '002', name: '会议2', time: '2023-06-02 14:00', location: 'B会议室',
        activity: '报告',
        plan: '讨论',
        attendees: [
          { name: '张三', status: '未签到' },
          { name: '李四', status: '未签到' },
          { name: '王五', status: '未签到' }
        ]
      },
      {
        id: '003', name: '会议3', time: '2023-06-03 10:00', location: 'C会议室',
        activity: '报告',
        plan: '讨论',
        attendees: [
          { name: '张三', status: '未签到' },
          { name: '李四', status: '未签到' },
          { name: '王五', status: '未签到' }
        ]
      }
    ],
    meeting: {
      name: '会议1',
      time: '2023-06-01 09:00',
      location: 'A会议室',
      activity: '报告',
      plan: '讨论',
      attendees: [
        { name: '张三', status: '未签到' },
        { name: '李四', status: '未签到' },
        { name: '王五', status: '未签到' }
      ]
    },
    id: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const id = options.id
    this.data.id = id
    let userName = app.globalData.userInfo.name
    let arr = this.data.meetings

    switch (id) {
      case '001':
        let state1 = app.globalData.status[0]
        this.data.meetings[0].attendees.forEach(attendant => {
          if (attendant.name === '张三') {
            attendant.name = userName
            attendant.status = state1
          }
        })
        this.setData({
          meeting: arr[0]
        })
        break;
      case '002':
        let state2 = app.globalData.status[1]
        this.data.meetings[1].attendees.forEach(attendant => {
          if (attendant.name === '张三') {
            attendant.name = userName
            attendant.status = state2
          }
        })

        this.setData({
          meeting: arr[1]
        })
        break;
      case '003':
        let state3 = app.globalData.status[2]
        this.data.meetings[2].attendees.forEach(attendant => {
          if (attendant.name === '张三') {
            attendant.name = userName
            attendant.status = state3
          }
        })
        this.setData({
          meeting: arr[2]
        })
        break;
    }
  },
  gotoSuccess() {
    const id = parseInt(this.data.id)
    app.globalData.status[id - 1] = '已签到'
    setTimeout(() => {
      wx.navigateTo({
        url: "/pages/test3/test3?id="+id
      })
    }, 1000)

  },
})