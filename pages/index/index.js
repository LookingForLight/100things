//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    listOne:[
      { name: '1', value: '美国',checked:false,show:true },
      { name: '2', value: '中国', checked: false, show: true },
      { name: '3', value: '巴西', checked: false, show: true},
      { name: '4', value: '日本', checked: false, show: true},
      { name: '5', value: '英国', checked: false, show: true},
      { name: '6', value: '法国', checked: false, show: true},
      { name: '7', value: '美国1', checked: false, show: false },
      { name: '8', value: '中国1', checked: false, show: false},
      { name: '9', value: '巴西1', checked: false, show: false},
      { name: '10', value: '日本1', checked: false, show: false},
      { name: '11', value: '英国1', checked: false, show: false},
      { name: '12', value: '法国1', checked: false, show: false}
    ],
    show:{
      page1:true,
      page2:true
    },
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

  },
  switchPage:function(){
    var that=this
    var pageTwo = that.data.listOne
    for (var i=6;i<12;i++){
      pageTwo[i].show = true
    }
    that.setData({
      listOne: pageTwo
    })
  }
})
