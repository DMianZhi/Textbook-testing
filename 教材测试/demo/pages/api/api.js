// 在 api.js 文件中定义一个页面对象 Page
Page({
    // 该页面数据
    data: {
      picData: [] // 定义一个数组用来存储请求到的图片信息
    },
  
    request() {
      wx.request({ // 发送网络请求获取数据
        url: 'http://picsum.photos/v2/list', // 请求地址
        data: { // 请求参数
          page: 3,
          limit: 10
        },
        method: 'GET', // 请求方法
        header: { // 请求头部信息
          'content-type': 'application/json'
        },
        success: res => { 
          console.log(res.data); // 打印响应结果数据
          const data = res.data // 获取响应结果数据（图片信息）
          this.setData({ // 更新当前页面的 picData 数组数据
            picData: data
          })
        },
      })
    },
  })
  