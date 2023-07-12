Page({
  data: {
    scrollTop: 0,
    animation: true
  },
  onScrollToUpper: function() {
    this.setData({
      scrollTop: 0
    });
  },
  onScrollToLower: function() {
    this.setData({
      scrollTop: 9999 // 滚动到底部，9999为一个比较大的数
    });
  },
  onToggleAnimation: function() {
    this.setData({
      animation: !this.data.animation
    });
  }
});
