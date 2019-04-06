var cartArr = [];
var arr1 = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:"",
    idx: 0,
    arr: [],
    imgsrc:"../../images/icon/tab_activity.png",
    //_imgsrc:
    color: 'white',
    imgArr:[],
    currentBar: 0,
    cartArr: ["休闲零食", "糖果·巧克力", "饼干·糕点", "果冻·布丁", "坚果·炒货", "膨化·薯片"],
    tabBar: [
      {
        "cat_name": "休闲零食"
      },
      {
        "cat_name": "糖果·巧克力"
      },
      {
        "cat_name": "饼干·糕点"
      },
      {
        "cat_name": "果冻·布丁"
      },
      {
        "cat_name": "坚果·炒货"
      },
      {
        "cat_name": "膨化·薯片"
      }
    ],
    categortyContent: [
      {
        "busines": {
          "business_id": 1,
          "business_name": "休闲零食"
        },
        "cart": [
          {
            "CategoryId": "1",
            "GoodsName": "坚果夹心海苔",
            "GoodsPrice": 66,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_one_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "卤汁牛肉",
            "GoodsPrice": 88,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_one_2.jpg"
          },
          {
            "CategoryId": "3",
            "GoodsName": "青豌豆",
            "GoodsPrice": 8,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_one_3.jpg"
          },
          {
            "CategoryId": "4",
            "GoodsName": "薯条脆",
            "GoodsPrice": 12,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_one_4.jpg"
          },
          {
            "CategoryId": "5",
            "GoodsName": "小米锅巴",
            "GoodsPrice": 50,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_one_5.jpg"
          },
          {
            "CategoryId": "6",
            "GoodsName": "碳烤牛肉",
            "GoodsPrice": 80,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_one_6.jpg"
          },
        ],

      },
      {
        "busines": {
          "business_id": 2,
          "business_name": "糖果巧克力"
        },
        "cart": [
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
            "GoodsImage": "../../images/goods/home_floor_two_2.jpg"
          },
          {
            "CategoryId": "3",
            "GoodsName": "冲绳黑糖",
            "GoodsPrice": 18,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_two_3.jpg"
          },
          {
            "CategoryId": "4",
            "GoodsName": "牛奶抹茶糖",
            "GoodsPrice": 22,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_two_4.jpg"
          },
          {
            "CategoryId": "5",
            "GoodsName": "苹果味糖果",
            "GoodsPrice": 59,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_two_5.jpg"
          },
          {
            "CategoryId": "6",
            "GoodsName": "松露巧克力",
            "GoodsPrice": 59,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_two_6.jpg"
          },

        ],

      },
      {
        "busines": {
          "business_id": 3,
          "business_name": "饼干糕点"
        },
        "cart": [
          {
            "CategoryId": "1",
            "GoodsName": "苏打饼干 ",
            "GoodsInfo": "单果重约150g-180g 新鲜水果",
            "GoodsPrice": 61,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_three_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "可可威化饼干",
            "GoodsInfo": "12个 约80mm 总重约2.6kg 新鲜水果 ",
            "GoodsPrice": "22",
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_three_2.jpg"
          }
        ],

      },
      {
        "busines": {
          "business_id": 4,
          "business_name": "果冻布丁"
        },
        "cart": [
          {
            "CategoryId": "1",
            "GoodsName": "粒粒鲜果冻 ",
            "GoodsInfo": "一整箱送女友礼盒 74包休闲麻辣零食礼包美味小吃 粉girl1320g",
            "GoodsPrice": 59,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_four_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "葡萄果汁软糖",
            "GoodsInfo": "特产约辣辣条200g/盒 ",
            "GoodsPrice": 9,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_four_2.jpg"
          }
        ],

      },
      {
        "busines": {
          "business_id": 5,
          "business_name": "坚果炒货"
        },
        "cart": [
          {
            "CategoryId": "1",
            "GoodsName": "夏威夷果",
            "GoodsInfo": "微压蒸汽阀 24小时智能预约 黄晶内胆3L电饭锅MB-WFS3018Q 11.11好货提前抢",
            "GoodsPrice": 189,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_five_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "坚果混合",
            "GoodsInfo": "坚果混合",
            "GoodsPrice": 9,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_five_2.jpg"
          }
        ],

      },
      {
        "busines": {
          "business_id": 6,
          "business_name": "膨化薯片"
        },
        "cart": [
          {
            "CategoryId": "1",
            "GoodsName": "风味虾片 ",
            "GoodsInfo": "爽肤水乳液眼霜面霜 (补水保湿鲜活水嫩 护肤化妆品女护肤套装） ",
            "GoodsPrice": 199,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_six_1.jpg"
          },
          {
            "CategoryId": "2",
            "GoodsName": "大胡子烧烤味薯片",
            "GoodsInfo": "大胡子烧烤味薯片",
            "GoodsPrice": 28,
            "GoodsNum": 1,
            "GoodsImage": "../../images/goods/home_floor_six_2.jpg"
          }

        ],

      }
    ],
    categoryList: []
    
  },

  onLoad: function (options) {
    console.log(this.data);
    let arr = new Array(6);
    arr.fill(true);
    arr[0] = false;
    console.log(arr);

    this.setData({
      arr: arr
    })
    
     wx.getSystemInfo({
      success: function(res) {
        console.log(res.windowHeight)
        this.setData({
          height: res.windowHeight
        })
      }.bind(this),
    })
  },

  /*
   *点击左便导航栏获取索引值
   */
  click: function (e) {
    let arr = new Array(6);
    // console.log(e.currentTarget.dataset.id);
    // console.log(e);
    let index = e.currentTarget.dataset.id;
    let newArr = this.data.arr;
    newArr.fill(true)
    newArr[index] = false;
    // console.log(newArr)
    this.setData({
      arr: newArr
    })
  },
  //点击跳转到详情界面
  choosedetail (e) {
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
    wx.setStorage({
      key: 'detail',
      data: e.currentTarget.dataset.detail
    })
    // console.log(e.currentTarget.dataset.detail)
  },
  //点击购物车事件
  choose: function (e) {
    console.log(e.target.dataset.name);
    console.log(e)
    let name = e.currentTarget.dataset.name.GoodsName;
    arr1.push(e.currentTarget.dataset.name);
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
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 2000
    })
    wx.setStorage({
      key: 'cartArr',
      data: cartArr
    })

    this.setData({
      //imgsrc: "../../images/icon/tab_activity_select.png",

    })
  }
})