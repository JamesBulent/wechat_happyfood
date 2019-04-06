// pages/credit/credit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  submit: function(e) {
    console.log(e);
    var data = e.detail.value;
    wx.setStorage({
      key: 'userinfo',
      data: data,
      success: function() {
        wx.navigateTo({
          url: '/pages/credit1/credit1'
        });
      }
    }); 
  },
  onLoad: function() {
    var data = wx.getStorageSync("userinfo");
    this.setData(data);
  }
})