//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    listOne:[
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
  onLoad: function () {
    console.log('onLoad')
    this.getLocalInfo()
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
    var originData = that.data.listOne
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

      listOne: originData
    })
    // console.log("after")

  }
})
