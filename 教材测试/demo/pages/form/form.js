/* pages/demo/demo.js */
Page({
  // 页面初始数据
  data: {
    userInfo: {},
    genderList: ['男', '女'],
    genderIndex: 0,
    hobbyList: [
      { value: 1, name: '音乐' },
      { value: 2, name: '电影' },
      { value: 3, name: '阅读' }
    ]
  },

  // 处理性别选择变化
  onGenderChange: function (e) {
    this.setData({
      genderIndex: e.detail.value
    });
  },

  // 提交表单
  submitForm: function (e) {
    const { name, gender, hobby } = e.detail.value; // 这里使用了ex6的新语法解构赋值
    let newhobby = hobby.map((item) => {
      return this.data.hobbyList[item - 1].name
    })
    const userInfo = {
      name,
      gender: this.data.genderList[gender],
      hobby: newhobby
    };

    this.setData({ userInfo });
  }
});