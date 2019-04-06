//index.js
var cartArr = [];
var arr1 = [];
Page({
  data: {
    imgurls:[
      "/images/goods/swipe_1.jpg",
      "/images/goods/swipe_2.jpg",
      "/images/goods/swipe_3.jpg"
    ],
    productList: [
      {
        "GoodsName": "坚果夹心海苔",
        "GoodsPrice": 9,
        "GoodsNum": 1,
        "GoodsImage": "/images/goods/home_floor_one_1.jpg",
        "addCartImg": "../../images/icon/shop_addCart.png"
      },
      {
        "GoodsName": "卤汁牛肉",
        "GoodsPrice": 32,
        "GoodsNum": 1,
        "GoodsImage": "../../images/goods/home_floor_one_2.jpg"
      },
      {
        "CategoryId": "1",
        "GoodsName": "乐奈牛奶燕麦巧克力 ",
        "GoodsPrice": 78,
        "GoodsNum": 1,
        "GoodsImage": "../../images/goods/home_floor_two_1.jpg"
      },
      {
        "CategoryId": "2",
        "GoodsName": "牛轧糖",
        "GoodsPrice": 59,
        "GoodsNum": 1,
        "GoodsImage": "../../images/goods/home_floor_two_2.jpg",
        // "addCartImg": "../../images/icon/tab_activity_select.png"
        "addCartImg": "../../images/icon/shop_addCart.png"
      },
      {
        "CategoryId": "1",
        "GoodsName": "夏威夷果",
        "GoodsPrice": 189,
        "GoodsNum": 1,
        "GoodsImage": "../../images/goods/home_floor_five_1.jpg"
      },
      {
        "CategoryId": "2",
        "GoodsName": "坚果混合",
        "GoodsPrice": 9,
        "GoodsNum": 1,
        "GoodsImage": "../../images/goods/home_floor_five_2.jpg"
      },
      {
        "CategoryId": "1",
        "GoodsName": "风味虾片 ",
        "GoodsPrice": 199,
        "GoodsNum": 1,
        "GoodsImage": "../../images/goods/home_floor_six_1.jpg"
      },
      {
        "CategoryId": "2",
        "GoodsName": "大胡子烧烤味薯片",
        "GoodsPrice": 28,
        "GoodsNum": 1,
        "GoodsImage": "../../images/goods/home_floor_six_2.jpg"
      },
      {
        "GoodsName": "卤汁牛肉",
        "GoodsPrice": 32,
        "GoodsNum": 1,
        "GoodsImage": "../../images/goods/home_floor_one_2.jpg"
      },
      {
        "CategoryId": "1",
        "GoodsName": "乐奈牛奶燕麦巧克力 ",
        "GoodsPrice": 78,
        "GoodsNum": 1,
        "GoodsImage": "../../images/goods/home_floor_two_1.jpg"
      }     
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    indicatorDotsColor: "grey",
    indicatorDotsActiveColor: "black",
    addCartImg: "../../images/icon/shop_addCart.png"
  },
  onDetail: function(e) {
    // console.log(e)
    wx.setStorage({
      key: 'detail',
      data: e.currentTarget.dataset.goods
    })
    wx.navigateTo({
      url: '../../pages/detail/detail'
    })
  },
 
  onAddCart: function(e) {
    var name = e.currentTarget.dataset.carts.GoodsName;
    arr1.push(e.currentTarget.dataset.carts)
    console.log(e)
    for (var i = 0; i < arr1.length; i++) {
      　　var flag = true;
      　　for (var j = 0; j < cartArr.length; j++) {
          if (arr1[i].GoodsName == cartArr[j].GoodsName) {
          　　　　　　flag = false;
        　　　　};
      　　};
      　　if (flag) {
        　　　　cartArr.push(arr1[i]);
      　　};
    }
    console.log(cartArr) 
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 2000
    });

    wx.setStorage({
      key: 'cartArr',
      data: cartArr
    })
  }
})
