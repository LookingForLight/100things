//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },
  getUserLocation: function(cb){

      var that = this
      if (this.globalData.location) {
        typeof cb == "function" && cb(this.globalData.location)
      } else {
        wx.getLocation({
          success: function(res) {
            that.globalData.location = res
            console.log(that.globalData)
            typeof cd == "function" && cb(that.globalData.location)
        },
      })
      }
  },
  //加载page1的缓存数据
  globalData: {
    userInfo: null,
    location: null
  }
})
