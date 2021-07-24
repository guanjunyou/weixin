// pages/index3/index3.js
var diaoyong=-1;
var panduan;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:0,
    output:"等待抽奖",
  },
  kaishi: function ()//抽奖函数
  {
    this.setData({output:"等待开奖"});
    if (diaoyong == -1)
    {
      console.log("抽奖开始")
      var that = this;	/*setInterval(  ){    }内的this.setData({  })的作用域
      不包括page({  })里的this.setData({  })
      要在setInterval(  ){    }之前将this赋值给一个新的方法———var that=this;*/
      diaoyong = setInterval(function ()	/*diaoyong变量一定要在全局声明，
      否则定时器可能会出现无法停止的情况*/
      {
        var suiji = Math.ceil(Math.random() * 10);
        that.setData
        ({
          title: suiji,
          })
          panduan=suiji;
        console.log(panduan);
      }, 50)//50是生成随机数的时间间隔（毫秒）
    }
  },
    jieshu : function () {
    console.log("抽奖结束");
    clearInterval(diaoyong);
      diaoyong = -1;
      if (panduan == 8 ||panduan == 6) {
         this.setData({output:"恭喜中奖！"});
      }else{
          this.setData({output:"很遗憾没中奖"});//要用this.setData才能修改data里的值
      }
    },
    
 
error(e) {
    console.log(e.detail)
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})