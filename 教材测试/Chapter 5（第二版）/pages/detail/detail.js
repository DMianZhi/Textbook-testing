// pages/detail/detail.js
let history = []; // 历史记录数组
let update = {}; // 当前详情页数据
Page({
  data: {
    id: 1, // 详情页的 id 值
    detailArr: {}, // 详情数据
    commentList: [], // 评论列表
  },
  onLoad(options) {
    this.data.id = options.id; // 获取 URL 中的参数 id
    this.getComment(); // 获取评论列表
    wx.showLoading({ // 显示加载提示框
      title: '加载中...',
      success(){
        console.log(11);
      }
    });
    this.getDetail().then(() => { // 获取详情数据，并在获取成功后继续执行下一步操作
      return this.getHistory();
    }).then(() => {
      return this.addHistory();
    }).then(() => { // 执行完所有异步操作之后，隐藏加载提示框
      wx.hideLoading();
    }).catch((error) => { // 错误处理
      console.log('failed to update history:', error);
    });
  },

  getDetail() {
    return new Promise((resolve, reject) => { // 封装异步操作，返回 Promise 对象
      wx.request({
        url: 'http://jsonplaceholder.typicode.com/posts/' + this.data.id, // 请求的 API 地址，携带参数 id
        success: (res) => { // 请求成功时的回调函数
          this.setData({
            detailArr: res.data // 更新页面的详情数据
          });
          update = res.data; // 保存当前详情数据到全局变量 update 中
          resolve(); // 返回 Promise 对象，成功时执行下一步操作
        },
        fail: () => { // 请求失败时的回调函数
          reject('failed to get detail'); // 返回错误信息
        }
      })
    });
  },

  getHistory() {
    return new Promise((resolve, reject) => { // 封装异步操作，返回 Promise 对象
      wx.getStorage({
        key: 'history',
        success(res) { // 获取历史记录数组成功时的回调函数
          history = res.data || []; // 将历史记录保存到全局变量 history 中
          resolve(); // 返回 Promise 对象，成功时执行下一步操作
        },
        fail() { // 获取历史记录数组失败时的回调函数
          resolve(); // 直接返回，继续执行下一步操作
        }
      });
    });
  },

  async addHistory() { // 使用 async/await 简化异步操作
    try {
      const index = history.findIndex(item => item.id === update.id); // 查找当前详情在历史记录数组中的索引
      if (index !== -1) {
        history.splice(index, 1); // 如果已存在，则先删除该项
      }
      if (history.length >= 10) {
        history.pop(); // 如果历史记录长度超过了 10，则删除最后一项
      }
      history.unshift(update); // 将当前详情插入到历史记录数组的开头
      await wx.setStorage({ // 将更新后的历史记录数组保存到本地存储中
        key: 'history',
        data: history,
      });
    } catch (error) {
      console.log('failed to add history:', error);
    }
  },

  getComment() {
    wx.request({
      url: 'http://jsonplaceholder.typicode.com/posts/' + this.data.id + '/comments', // 请求 API 地址，携带参数 id
      success: ({ data }) => { // 请求成功时的回调函数
        this.setData({
          commentList: data // 更新页面的评论列表数据
        });
      },
      fail() {
        console.log('failed to get comments.') // 获取评论列表失败时的回调函数
      },
      complete() {
        wx.hideLoading(); // 隐藏加载提示框
      }
    })
  },
})