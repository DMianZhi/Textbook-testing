// const { Component } = require("XrFrame/xrFrameSystem")

// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    listArr: [] // 列表数组
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // pages/test/test.js
    /* 生命周期函数--监听页面加载 */
    onLoad: function (options) {
      // 在页面加载时，通过 getList 函数获取列表数据并更新 data 中的 listArr 变量
      this.getList()
    },
    getList() {
      wx.request({
        url: 'http://jsonplaceholder.typicode.com/posts', // 请求的 API 地址
        success: (res) => { // 请求成功后的回调函数
          console.log(res);
          this.setData({
            listArr: res.data // 将返回的结果更新到列表数组中
          })
        }
      })
    },
    goDetail(e) {
      // 在点击事件处理函数中获取当前列表项的 id 值，并跳转到详情页
      let id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + id, // 跳转到详情页，携带参数 id
      })
    },
  }
})

