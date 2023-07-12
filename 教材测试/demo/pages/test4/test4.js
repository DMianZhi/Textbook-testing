// user.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      name: '张三',
      phone: '13812345678',
      email: 'zhangsan@example.com',
    }
    , modalVisible: false, // 弹框是否可见
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },
  // 显示弹框
  showModal() {
    this.setData({
      modalVisible: true,
    });
  },
  // 隐藏弹框
  hideModal() {
    this.setData({
      modalVisible: false,
    });
  },

  // 提交表单
  handleSubmit(event) {
    const user = event.detail.value;
    const { name, phone, email } = event.detail.value;
    console.log(event.detail.value);
    if (name == '' | phone == '' | email == '') {
      console.log(1);
      wx.showToast({
        title: "信息不能为空"
      })
      return
    }
    // 将修改后的数据提交到后端，并更新页面展示数据
    this.setData({
      user
    })
    wx.showToast({
      title: '保存成功',
    });
    this.hideModal();
    app.globalData.userInfo = user
  },
})