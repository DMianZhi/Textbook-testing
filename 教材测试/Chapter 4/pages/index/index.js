Page({
  data: {
    // 定义页面数据
    firstCourse: ['非常满意', '满意', '一般', '不满意', '非常不满意'],
    firstCourseIndex: 0, // 第一个下拉框的选中项，默认为第一个，即“非常满意”
    teacherTeachingMethod: '', // 教师授课方法的填写内容
    textAreaValue: '', // 意见与建议的填写内容
    evaluationMethods: [], // 授课方式选择的内容，可能有多项，初始为空数组
    isJoinActivities: false, // 是否参加课外活动的选中状态，默认为不参加
    summaryValue: '' // 结语的填写内容
  },

  // 第一个下拉框的选项改变事件
  handleFirstCourseChange(e) {
    this.setData({
      firstCourseIndex: e.detail.value // 更新选中项的索引值
    })
  },
  // 教师授课方法评价的改变事件
  handleTeacherTeachingMethodChange(e) {
    console.log(e);
    this.setData({
      teacherTeachingMethod: e.detail.value // 更新选中的授课方式
    })
  },
  // 意见与建议文本框的输入事件
  handleTextAreaInput(e) {
    this.setData({
      textAreaValue: e.detail.value // 更新输入的内容
    })
  },

  // 评估方式的多选框选择事件
  handleEvaluationMethodChange(e) {
    this.setData({
      evaluationMethods: e.detail.value // 更新选中的评估方式列表
    })
  },
  // 是否参加竞赛活动的开关状态改变事件
  handleSwitchChange(e) {
    this.setData({
      isJoinActivities: e.detail.value // 更新是否参加竞赛活动的选中状态
    })
  },
  // 结语的文本框输入事件
  handleSummaryInput(e) {
    this.setData({
      summaryValue: e.detail.value // 更新输入的内容
    })
  },

  // 当点击提交按钮时执行的函数
  handleSubmitClick() {
    // 检查必填项是否已填写
    if (this.data.firstCourseIndex === undefined || this.data.teacherTeachingMethod === '' || this.data.textAreaValue.trim() === '' || this.data.evaluationMethods.length === 0 || !this.data.isJoinActivities) {
      wx.showToast({
        title: '请填写完整信息', // 提示信息：请填写完整信息
        icon: 'none' // 显示为无图标
      })
      return;
    }

    // 如果所有必填项都已经填写，则将所有数据保存到反馈数据对象中
    let firstCourseEvaluate = this.data.firstCourse[this.data.firstCourseIndex]
    const feedbackData = {
      firstCourse: firstCourseEvaluate,
      teacherTeachingMethod: this.data.teacherTeachingMethod,
      textAreaValue: this.data.textAreaValue,
      evaluationMethods: this.data.evaluationMethods.join('、'),
      isJoinActivities: this.data.isJoinActivities ? '是' : '否',
      summaryValue: this.data.summaryValue
    }

    console.log(feedbackData)
    // 提交数据给服务器并进行相应处理
    wx.navigateTo({
      url: '/pages/result/result', // 跳转到结果页
      success(res) {
        console.log('页面跳转成功', res); // 在控制台输出页面跳转成功的信息
      },
      fail(err) {
        console.log('页面跳转失败', err); // 在控制台输出页面跳转失败的信息
      }
    });
  }
})
