//myvideo.js

Page({
    data: {
        src: "../image/ghost.png",
        mode: 'scaleToFill',
        text: '不发布视频的土豪不是好逗比',
        showlist: true, //判断是否有数据
        showlistArray: [{
            "lsitVideoSrc": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
            "lsitTitleText": "一个简单的模型制作",
            "userImgSrc": '../image/1.jpg',
            "userName": "梦魇",
            "heartImgSrc": "../image/heart.png",
            "heartNumber": "1122",
        }, {
            "lsitVideoSrc": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
            "lsitTitleText": "一个简单的模型制作",
            "userImgSrc": '../image/1.jpg',
            "userName": "梦魇",
            "heartImgSrc": "../image/heart.png",
            "heartNumber": "1122",
        }, {
            "lsitVideoSrc": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
            "lsitTitleText": "一个简单的模型制作",
            "userImgSrc": '../image/1.jpg',
            "userName": "梦魇",
            "heartImgSrc": "../image/heart.png",
            "heartNumber": "1122",
        }]
    },
    // 初始化页面
    onLoad(options) {
        // 获取用户Id
        var userId = options.userid;
        if (userId == 1) {
            this.setData({
                showlist: true,
            })
        } else {
            this.setData({
                showlist: false,
            })
        }
    },
    //事件处理函数
    viewTap: function() {
        //跳转到上传视屏页面
        wx.navigateTo({
            url: '../uploadview/uploadview',
        })
    },

})