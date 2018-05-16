//classify.js

Page({
    data: {
        showVideo: true,
        videoSrc: "", //视屏地址
        titleText: "一个简单的视屏",
        userImgSrc: '../image/1.jpg',
        userName: "梦魇",
        heartImgSrc: "../image/heart.png",
        heartNumber: "1122",
        describeText: "nizianasdlasdkfsjdkfwjalsjdxnasdkjlaskdf"
    },
    //事件处理函数

    //跳转页面
    viewTap: function(e) {
        //获取分类Id
        var classid = e.target.id
            //跳转到列表
        wx.navigateTo({
            url: '../lists/lists?id=' + classid,
        })
    }

})