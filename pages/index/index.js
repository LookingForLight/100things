//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
    listOne:[
      { name: '1', value: '手牵手压马路',checked:false},
      { name: '2', value: '情侣装逛街', checked: false },
      { name: '3', value: '一起寺庙祈福', checked: false},
      { name: '4', value: '去听一场演唱会', checked: false},
      { name: '5', value: '一起坐摩天轮', checked: false},
      { name: '6', value: '一起去教堂', checked: false},
      { name: '7', value: '一起去旅行', checked: false },
      { name: '8', value: '去书店消磨一下午的时光', checked: false},
      { name: '9', value: '互相为对方写一封信', checked: false},
      { name: '10', value: '找个小茶馆喝茶聊天', checked: false},
      { name: '11', value: '一起吃火锅', checked: false },
      { name: '12', value: '去街边撸串', checked: false },
      { name: '13', value: '一次日出 一次日落', checked: false },
      { name: '14', value: '一起去菜场买菜', checked: false },
      { name: '15', value: '为对方做一次早餐', checked: false },
      { name: '16', value: '做晚饭不忘一起洗碗', checked: false },
      { name: '17', value: '一起做顿大餐', checked: false },
      { name: '18', value: '逛一逛花鸟市场', checked: false },
      { name: '19', value: '去看电影', checked: false },
      { name: '20', value: '找一件安静的酒吧', checked: false },

    ],
    listTwo:[
      { name: '21', value: '一起看场烟火', checked: false},
      { name: '22', value: '玩一次蹦极', checked: false},
      { name: '23', value: '去我俩的母校走', checked: false },
      { name: '24', value: '一起跑步', checked: false },
      { name: '25', value: '去田野里走一走', checked: false },
      { name: '26', value: '去一次游乐园', checked: false },
      { name: '27', value: '一起放风筝', checked: false},
      { name: '28', value: '一起滑冰', checked: false},
      { name: '29', value: '一起骑自行车', checked: false},
      { name: '30', value: '朋友圈秀一次恩爱', checked: false},
      { name: '31', value: '微信上换情侣头像', checked: false },
      { name: '32', value: '唱歌给对方听', checked: false },
      { name: '33', value: '分食一个冰淇淋', checked: false },
      { name: '34', value: '一起玩拼图', checked: false },
      { name: '35', value: '完成一个陶器', checked: false },
      { name: '36', value: '为你梳头，为我刮胡子', checked: false },
      { name: '37', value: '学做一个蛋糕', checked: false },
      { name: '38', value: '陪对方做一件他喜欢但自己不感兴趣的事', checked: false },
      { name: '39', value: '一起逛超市', checked: false },
      { name: '40', value: '穿同一件衣服', checked: false }
    ],
    listThree: [
      { name: '41', value: '一起养条小狗', checked: false },
      { name: '42', value: '红薯一人一半', checked: false },
      { name: '43', value: '喝交杯酒的方式喝东西', checked: false },
      { name: '44', value: '背着走一段路', checked: false },
      { name: '45', value: '一起看樱花', checked: false },
      { name: '46', value: '一起去博物馆', checked: false },
      { name: '47', value: '一场马拉松', checked: false },
      { name: '48', value: '做志愿者', checked: false },
      { name: '49', value: '夏天去一次海边', checked: false },
      { name: '50', value: '一个早安吻', checked: false },
      { name: '51', value: '一个晚安吻', checked: false },
      { name: '52', value: '看一场话剧', checked: false },
      { name: '53', value: '为对方准备惊喜', checked: false },
      { name: '54', value: '一起爬山', checked: false },
      { name: '55', value: '堆雪人打雪仗', checked: false },
      { name: '56', value: '泡个温泉', checked: false },
      { name: '57', value: '分别之后再见的一次拥抱', checked: false },
      { name: '58', value: '在公园长椅上，一起听喜欢的歌', checked: false },
      { name: '59', value: '一起淋一场雨', checked: false },
      { name: '60', value: '一起玩游戏', checked: false }
    ],

    show:{
      page1:true,
      page2:false,
      page3: false
    },
    percent:0

  },
  //第一次加载时调用的函数
  onLoad: function () {
    console.log('onLoad')
    this.getStorageInfos("page1")
    this.getStorageInfos("page2")
    this.getStorageInfos("page3")
    this.finishCount()
  },

  //选项改变触发相关事件
  checkboxChange1: function (e) {
    var choosedData = e.detail.value
    this.setStorageInfos("page1", choosedData)
    this.getStorageInfos("page1")
    this.finishCount()
  },
  checkboxChange2: function (e) {
    var choosedData = e.detail.value
    this.setStorageInfos("page2", choosedData)
    this.getStorageInfos("page2")
    this.finishCount()

  },
  checkboxChange3: function (e) {
    var choosedData = e.detail.value
    this.setStorageInfos("page3", choosedData)
    this.getStorageInfos("page3")
    this.finishCount()

  },
  //设置本地缓存
  setStorageInfos: function (page, choosedData){

    try {
      wx.setStorageSync(page, choosedData)
    } catch (e) {

    }
  },
  //获取相关页数对应的缓存并与页面绑定数据
  getStorageInfos: function (page){
    var that = this
    var originData = []
    var storageData = []
    switch (page){

      case "page1":
        
        originData = that.data.listOne
        storageData = wx.getStorageSync("page1") || []
        this.loopData(originData, storageData)
        that.setData({
          listOne: originData
        })
        console.log("endPage1")
        break;

      case "page2":
        originData = that.data.listTwo
        storageData = wx.getStorageSync("page2") || []
        this.loopData(originData, storageData)
        that.setData({
          listTwo: originData
        })
        console.log("endPage2")
        break;
      case "page3":
        originData = that.data.listThree
        storageData = wx.getStorageSync("page3") || []
        this.loopData(originData, storageData)
        that.setData({
          listTwo: originData
        })
        console.log("endPage3")
        break;
    }

  },

  switchPage1: function () {
    var that = this
    that.setData({
      show: {
        page1: true,
        page2: false,
        page3: false
      }
    })
  },
  switchPage2: function () {
    var that = this

    that.setData({
      show: {
        page1: false,
        page2: true,
        page3: false
      }
    })

  },
  switchPage3: function () {
    var that = this

    that.setData({
      show: {
        page1: false,
        page2: false,
        page3: true
      }
    })

  },
  //遍历缓存中与data中的数据
  loopData: function (originData, storageData){
    var that =this
    if (storageData.length == 0) {
      console.log("长度为0")
      return false
    }
    console.log("长度为不为0")
    for (var i = 0; i < originData.length; i++) {
      for (var j = 0; j < storageData.length; j++) {
        if (originData[i].name == storageData[j]) {

          originData[i].checked = true

          break
        } else {
          originData[i].checked = false
        }
      }
    }

  },

  finishCount : function(){
    var that = this
    var page1length = wx.getStorageSync("page1").length || 0
    var page2length = wx.getStorageSync("page2").length ||0
    var finishlength = page1length + page2length

    that.setData({
      percent: finishlength
    })
    console.log(finishlength)
  },

})
