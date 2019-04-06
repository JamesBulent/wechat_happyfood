// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  transformcost: 8,
  goodsList:"",
  counts: parseInt(Math.random() * 300),
  second_height: 0,
  imgArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getSystemInfo({
    //   success: function (res) {
    //     // console.log('height=' + res.windowHeight);
    //     // console.log('width=' + res.windowWidth);
    //     // 计算主体部分高度,单位为px
    //     this.setData({
         
    //       second_height: res.windowHeight - res.windowWidth / 750 * 500
    //     })
    //   }.bind(this)
    // })

    let arr = new Array(10);
    arr.fill('../../images/foodList/foodlist0')

    this.setData({
      imgArr: arr
    })

    console.log(arr)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getStorage({
      key: 'detail',
      success: function (res) {
        console.log(res.data)
        this.setData({
          goodsList: res.data
        })
      }.bind(this),
    })
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
  
  },
  onIndex: function (e) {
    wx.switchTab({
      url: '../../pages/index/index'
    })
  },
})