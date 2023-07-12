// pages/user/user.js
Page({
  data: {
    imgUrl: '', // 用户头像地址
    historyItem: [], // 历史记录数组
    headState: false, // 是否存在用户头像
    browseState: true // 是否存在浏览记录
  },

  onLoad(options) {
    this.onTabItemTap();
  },

  onTabItemTap() { // 监听 TabBar 切换点击事件
    wx.getStorage({
      key: 'head',
      success: (res) => { // 获取头像地址成功时的回调函数
        this.setData({
          imgUrl: res.data, // 更新页面的头像地址变量
          headState: true // 将头像状态标记为 true，表示存在头像图片
        })
      }
    })
    wx.getStorage({
      key: 'history',
      success: (res) => { // 获取历史记录数组成功时的回调函数
        this.setData({
          historyItem: res.data, // 更新页面的历史记录数组变量
          browseState: false // 将浏览记录状态标记为 false，表示存在浏览历史记录
        })
      }
    })
  },

  chooseHead() { // 点击更换头像按钮时触发的事件处理函数
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success: (res) => {
        this.setData({
          imgUrl: res.tempFiles[0].tempFilePath, // 更新页面的头像地址变量
          headState: true // 将头像状态标记为 true，表示存在头像图片
        })
        let imgUrl = res.tempFiles[0].tempFilePath;
        wx.setStorage({ // 将新的头像地址保存到本地存储中
          key: "head",
          data: imgUrl,
        });
      }
    })
  },
})
