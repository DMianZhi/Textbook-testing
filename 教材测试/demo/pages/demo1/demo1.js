// // pages/demo1/demo1.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad(options) {

//   },
//   onHobbyChange(e){
//     console.log(e);
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady() {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow() {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide() {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload() {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh() {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom() {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage() {

//   }
// })

// switch
// Page({
//   data: {
//     switchChecked: false,  // 初始化开关状态为关闭
//   },
//   switchChange(event) {
//     const isChecked = event.detail.value; //获取开关状态
//     console.log(`Switch checked: ${isChecked}`);
//   }
// })


// button
// Page({
//   data: {
//     isLoading: false,  // 初始化加载状态为未加载
//     isDisabled: false,  // 初始化禁用状态为未禁用
//   },
//   onButtonClick() {
//     this.setData({ isLoading: true, isDisabled: true });  // 设置加载状态和禁用状态
//     console.log('Button clicked');
//     setTimeout(() => {
//       this.setData({ isLoading: false, isDisabled: false });  // 模拟接口调用后恢复状态
//     }, 2000);
//   }
// })
// Page({
//   data: {
//     isChecked: false,
//   },
//   onCheckboxClick: function(event) {
//     this.setData({isChecked: !this.data.isChecked});
//     console.log('Checkbox clicked, isChecked=' + this.data.isChecked);
//   }
// })
// Page({
//   handleRadioChange: function(event) {
//     this.setData({gender: event.detail.value});
//     console.log('Gender changed, value=' + event.detail.value);
//   }
// })
// Page({
//   data: {
//     isPushOn: false,  // 默认关闭
//   },
//   handleSwitchChange(e) {
//     console.log(e); // 输出查看
//     this.setData({
//       isPushOn: e.detail.value, // 更新isPushOn状态
//     })
//   },
// })


