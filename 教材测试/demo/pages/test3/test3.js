// success.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: {
      title: '签到成功',
      name: '张三',
      time: '2023-06-01 09:10',
      meeting: '会议',
      id: 1
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.data.result.id = options.id
    this.data.result.meeting = this.data.result.meeting + options.id
    this.data.result.name = app.globalData.userInfo.name
    const result = this.data.result
    this.setData({
      result
    })
  },

})