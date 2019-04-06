// pages/cart/cart.js
Page({
	data: {
		height: 0,               //高度
		cartArr: [],               // 购物车列表
		hasList: false,          // 列表是否有数据
		totalPrice: 0,               // 总价，初始为0
		selectAllStatus: true    // 全选状态，默认全选

	},
	onShow: function (options) {
		// 获取数据
		wx.getStorage({
			key: 'cartArr',
			success: function (res) {
				console.log(res.data);
				this.setData({
					cartArr: res.data,
				})

			}.bind(this)
			
		})
		// 获取视口高度
		var system_info = wx.getSystemInfoSync();
		// 获取高度
		var height = system_info.windowHeight;
		// 设置高度
		this.setData({
			height: height
		})
	},
	onReady:function() {
		let cartArr = this.data.cartArr;  
		wx.setStorage({
			key: "cartArr",
			data: this.data.cartArr
		})
		console.log(cartArr)
	},
	// 计算总价
	getTotalPrice() {
		let cartArr = this.data.cartArr;                  // 获取购物车列表
		let total = 0;
		for (let i = 0; i < cartArr.length; i++) {         // 循环列表得到每个数据
			if (cartArr[i].selected) {                   // 判断选中才会计算价格
				total += cartArr[i].GoodsNum * cartArr[i].GoodsPrice;     // 所有价格加起来
			}
		}
		this.setData({                                // 最后赋值到data中渲染到页面
			cartArr: cartArr,
			totalPrice: total.toFixed(2)
		});
	},

	//单选
	selectList: function(e) {
		console.log(e);
		let index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
		let cartArr = this.data.cartArr;                    // 获取购物车列表
		let selected = cartArr[index].selected;         // 获取当前商品的选中状态
		cartArr[index].selected = !selected;              // 改变状态
		this.setData({
			cartArr: cartArr
		});
		this.getTotalPrice();                           // 重新获取总价
	},

	//全选
	selectAll: function(e) {
		let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
		selectAllStatus = !selectAllStatus;
		let cartArr = this.data.cartArr;

		for (let i = 0; i < cartArr.length; i++) {
			cartArr[i].selected = selectAllStatus;            // 改变所有商品状态
		}
		this.setData({
			selectAllStatus: selectAllStatus,
			cartArr: cartArr
		});
		this.getTotalPrice();                               // 重新获取总价
	},

	// 增加数量
	plus: function(e) {
		let index = e.currentTarget.dataset.index;
		let cartArr = this.data.cartArr;
		let GoodsNum = cartArr[index].GoodsNum;
		GoodsNum = GoodsNum + 1;
		cartArr[index].GoodsNum = GoodsNum;
		this.setData({
			cartArr: cartArr
		});
		this.getTotalPrice();
	},
	// 减少数量
	minus:function(e) {
		let index = e.currentTarget.dataset.index;
		let cartArr = this.data.cartArr;
		let GoodsNum = cartArr[index].GoodsNum;
		if (GoodsNum <= 1) {
			return false;
		}
		GoodsNum = GoodsNum - 1;
		cartArr[index].GoodsNum = GoodsNum;
		this.setData({
			cartArr: cartArr
		});
		this.getTotalPrice();
	},
	// 删除商品
	deleteList:function(e) {
		let index = e.currentTarget.dataset.index;
		let cartArr = this.data.cartArr;
		cartArr.splice(index, 1);              // 删除购物车列表里这个商品
		this.setData({
			cartArr: cartArr
		});
		if (!cartArr.length) {                  // 如果购物车为空
			this.setData({
				hasList: false              // 修改标识为false，显示购物车为空页面
			});
		} else {                              // 如果不为空
			this.getTotalPrice();           // 重新计算总价格
		}
	},
	//付款
	payment: function (e) {
		console.log(e)
		wx.setStorage({
			key: "totalPrice",
			data: this.data.totalPrice
		})
		console.log(this.data.totalPrice)
		wx.navigateTo({
			url: '/pages/pay/pay',
		})
	},

})