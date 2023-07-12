Page({
  //页面的初始数据
  data: {
    account: '',              //账号输入框的值
    password: '',             //密码输入框的值
    canSubmit: false,         //表单是否可以提交
    lastLoginTime: '',        //上次登录时间
    currentUser: {},          //当前用户信息
    isUserLoggedIn: true      //用户是否已经登录
  },

  //监听页面加载
  onLoad: function (options) {
    wx.getStorage({           //从本地存储中读取用户信息
      key: 'userinfo',
      success: (e) => {
        console.log(e);
        const currentUser = e.data
        if (currentUser) {    //如果找到用户信息，自动填充账号密码
          this.setData({
            currentUser,
            account: currentUser.account,
            password: currentUser.password,
            canSubmit: true,
          })
        }
      }
    })
  },

  //监听账号输入框变化
  handleAccountInput(e) {
    const value = e.detail.value.trim();
    this.setData({
      account: value,
      canSubmit: value.length && this.data.password.length
    });
  },

  //监听密码输入框变化
  handlePasswordInput(e) {
    const value = e.detail.value.trim();
    this.setData({
      password: value,
      canSubmit: value.length && this.data.account.length
    });
  },

  //点击登录按钮事件
  handleLoginFormSubmit(e) {
    const { account, password } = this.data;
    const currentTime = new Date().toLocaleString();   //获取当前时间
    let currentUser = {
      account,
      password,
      currentTime
    };
    this.setData({
      lastLoginTime: currentTime,   //更新上次登录时间
      currentUser,
      isUserLoggedIn: false,        //用户已经登录
      canSubmit: false,
      account: '',
      password: ''
    });
    wx.setStorage({                 //将用户信息存储到本地缓存中
      key: 'userinfo',
      data: currentUser
    });
    wx.showToast({                  //提示用户登录成功
      title: '登录成功',
      icon: 'success',
      duration: 1000
    });
  },

  //点击退出按钮事件
  handleLogoutButtonClick() {
    wx.removeStorage({              //清空本地缓存中的用户信息，相当于退出登录
      key: 'userinfo'
    });
    let currentUser = {
      currentTime: this.data.currentUser.currentTime,
    };
    this.setData({
      isUserLoggedIn: true,
      currentUser
    });
    wx.showToast({                  //提示用户退出登录成功
      title: '已退出登录',
      icon: "none"
    })
  }
});
