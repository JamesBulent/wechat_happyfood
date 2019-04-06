Page({

  /**
   * 页面的初始数据
   */
  data: {
	 
	  cartArr:[],
	  totalPrice:0

  },
  
  onLoad: function (e) {
	 
	  wx.getStorage({
		  key: 'totalPrice',
		  success: function (res) {
		  	console.log(res.data);
			this.setData({
				totalPrice: res.data
			})
		  }.bind(this)
	 
  })
  },
//   支付
	submit:function(e){
	  wx.navigateTo({
		  url: '/pages/pay1/pay1',
	  })
  },

	//取消
  cancel: function(e){
	  wx.switchTab({
		  url: '/pages/cart/cart',
	  })
  }
 

})