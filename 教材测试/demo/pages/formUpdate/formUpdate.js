
Page({
  // 页面的初始数据
  data: {
    // 第一门课程的评分选项
    firstCourse: ['非常满意', '满意', '一般', '不满意', '非常不满意'],
    // 第一门课程评分选项的默认值为 0
    firstCourseIndex: 0,
    // 教师讲解方式等方面的认同程度
    teacherTeachingMethod: '',
    // 文本框输入的值
    textAreaValue: '',
    // 选择的评估方式
    evaluationMethods: [],
    // 是否愿意参加学校举办的各类学科竞赛和活动
    isJoinActivities: false,
    // 总结性留言
    summaryValue: ''
  },

  // 处理第一门课程的评分变化事件
  handleFirstCourseChange(e) {
    console.log(e);
    this.setData({
      firstCourseIndex: e.detail.value
    })
  },

  // 处理教师讲解方式等方面的认同程度的变化事件
  handleTeacherTeachingMethodChange(e) {
    this.setData({
      teacherTeachingMethod: e.detail.value
    })
  },

  // 处理文本框输入的变化事件
  handleTextAreaInput(e) {
    this.setData({
      textAreaValue: e.detail.value
    })
  },

  // 处理选择评估方式的变化事件
  handleEvaluationMethodChange(e) {
    this.setData({
      evaluationMethods: e.detail.value
    })
  },

  // 处理是否愿意参加学校举办的各类学科竞赛和活动的变化事件
  handleSwitchChange(e) {
    this.setData({
      isJoinActivities: e.detail.value
    })
  },

  // 处理总结性留言文本框的输入变化事件
  handleSummaryInput(e) {
    this.setData({
      summaryValue: e.detail.value
    })
  },

  // 处理表单提交事件
  handleSubmitClick() {
    // 获取表单提交的数据
    const feedbackData = {
      firstCourse: this.data.firstCourse,
      teacherTeachingMethod: this.data.teacherTeachingMethod,
      textAreaValue: this.data.textAreaValue,
      evaluationMethods: this.data.evaluationMethods,
      isJoinActivities: this.data.isJoinActivities,
      summaryValue: this.data.summaryValue
    }
    console.log(feedbackData)
  }
})