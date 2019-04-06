// pages/shake/shake.js
Page({
  
  data: {
    shakeInfo: {
      gravityModalHidden: true,
      num: 0,
      enabled: false
    },
    shakeData: {
      x: 0,
      y: 0,
      z: 0
    }
  },

  // 摇一摇
  shake: function () {
    var that = this;
    // 启动摇一摇
    this.gravityModalConfirm(true);

    wx.onAccelerometerChange(function (res) {
      // 判断手机晃动程度
      var x = res.x.toFixed(4),
        y = res.y.toFixed(4),
        z = res.z.toFixed(4);

      var flagX = that.getDelFlag(x, that.data.shakeData.x),
        flagY = that.getDelFlag(y, that.data.shakeData.y),
        flagZ = that.getDelFlag(z, that.data.shakeData.z);

      that.data.shakeData = {
        x: res.x.toFixed(4),
        y: res.y.toFixed(4),
        z: res.z.toFixed(4)
      };
      if (flagX && flagY || flagZ && flagY || flagZ && flagX) {
        // 晃得足够大才成功
        if (that.data.shakeInfo.enabled) {
          that.data.shakeInfo.enabled = false;
          that.playShakeAudio();
        }
      }
    });
  },

  // 启动或停用摇一摇功能
  gravityModalConfirm: function (flag) {
    if (flag !== true) {
      flag = false;
    }
    var that = this;
    this.setData({
      shakeInfo: {
        gravityModalHidden: !that.data.shakeInfo.gravityModalHidden,
        num: 0,
        enabled: flag
      }
    })
  },

  // 偏移量
  getDelFlag: function (val1, val2) {
    return (Math.abs(val1 - val2) >= 1);
  },

  //摇一摇成功
  playShakeAudio: function () {
    var that = this;
    wx.playBackgroundAudio({
      dataUrl: 'http://isure.stream.qqmusic.qq.com/C400004Hqctl1qPU8j.m4a?vkey=4BBCF22B1D6F0E7979966B5E2B86D4BECAAACAB554F0BD0589B335B0EE4D4BFCCC4C028D555C4B9A949714689635EDE2A6C0FD38DF0EF4D3&amp;guid=210130760&amp;uin=0&amp;fromtag=66',
      title: '',
      coverImgUrl: ''
    });
    wx.onBackgroundAudioStop(function () {
      that.data.shakeInfo.num++;
      that.setData({
        shakeInfo: {
          num: that.data.shakeInfo.num,
          enabled: true,
          gravityModalHidden: false
        }
      })
    });
  }
})