//my.js

Page({
    data: {
        src: "../image/1.jpg",
    },
    //事件处理函数
    viewTap: function() {
        //跳转到上传视屏页面
        wx.navigateTo({
            url: '../uploadview/uploadview',
        })
    },
    imgTap: function() {
        //跳转到上传图片页面
        wx.navigateTo({
            url: '../uploadimg/uploadimg',
        })
    },
    toMyvideo: function() {
        //跳转到我的视频
        wx.navigateTo({
            url: '../myvideo/myvideo?userid=1',
        })
    },
    toMyImg: function() {
        //跳转到我的图片
        wx.navigateTo({
            url: '../myvideo/myvideo?userid=2',
        })
    }

})