// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 40.10251041128149,
    longitude: 116.38314396145992
  },

  //获取经纬度
  getLocation: function(e) {
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        // console.log(res);
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
        // e(res.longitude, res.latitude, res.speed);
      }.bind(this),
    })
  },

  //显示当前位置坐标
  showLocation: function(e) {
    var that = this;
    this.getLocation(function(lon, lat) {
      var lonStr = lon >= 0 ? '东经': '西经';
      var latStr = lon >= 0 ? '北纬' : '南纬';
      lon = lon.toFixed(2);
      lat = lat.toFixed(2);
      lonStr += lon;
      latStr += lat;
      that.showModal('当前位置：' + 'lonStr', 'latStr' )
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})