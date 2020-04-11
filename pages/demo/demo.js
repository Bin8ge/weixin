// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  clickFun: function (evt) {
    var name = evt.currentTarget.dataset.name;
    console.log(name)

    var { name } = evt.currentTarget.dataset;
    console.log(evt)

  },

 
  

})