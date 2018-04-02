//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '很高兴遇见你',
    userInfo: {},
    location:{latitude:0,longitude:0},
    view:"WEBVIEW",
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    count: 1,
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    items:[
      { name: '2221', value: '美国',checked:false },
      { name: '2', value: '中国', checked:false },
      { name: '3', value: '巴西', checked: false },
      { name: '4', value: '日本', checked: false},
      { name: '5', value: '英国', checked: false},
      { name: '6', value: '法国', checked: false}
    ],
    choosedData:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickMe: function(){
    console.log("3333")
    this.setData({ things: "Hello World" })
    console.log(app.globalData)
  },
  clickLocationInfo: function () {
    var that = this
    app.getUserLocation(function (location) {
      console.log("1")
      that.setData({
        location: location
      })
      console.log("2")
      console.log(location.latitude)
      console.log(location.longitude)
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      console.log(userInfo.nickName)
      console.log(userInfo.motto)
    })
  },
  add: function (e) {
    this.setData({
      count: this.data.count + 1
    })
  },

  checkboxChange: function (e) {
    var choosedData = e.detail.value
    var that = this
    try{
      wx.setStorageSync("choosed", choosedData)
    }catch (e){

    }
    // console.log(choosedData)
    // that.setData({
    //   "choosedData": choosedData
    // })
    // console.log(that.data.choosedData)
    this.getLocalInfo()
  },
  getLocalInfo:function(){
    var that = this
    var originData = that.data.items
    var storageData= wx.getStorageSync("choosed")
    console.log("被选中的长度:" + storageData.length)
    console.log("源数据的长度:" + originData.length)
    if (storageData.length == 0){
      console.log("长度为0")
      return false
    }
    console.log("长度为不为0")
    for (var i = 0; i < originData.length;i++){
      for (var j = 0; j < storageData.length;j++){

        if (originData[i].name == storageData[j]){

          originData[i].checked = true
          console.log(originData[j].value+":"+originData[j].checked)
          break
        }else{
          originData[i].checked = false
        }
      }
    }
    // originData.forEach(function(e){console.log(e)})
    // console.log("before")
    that.setData({

      items: originData
    })
    // console.log("after")

  }
})
