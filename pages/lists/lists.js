//lists.js
Page({
    data: {
        lsitArray: [{
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
    onLoad: function() {
        //初始化页面的时候 向后台请求数据   异步加载数据 不会阻塞页面
        this.getAllinfo();
    },


    //事件处理函数
    viewTap: function() {

    },

    // 下拉刷新
    onReachBottom: function() {
        // 加载等待
        this.loading();
        var addlist = {
            "lsitVideoSrc": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
            "lsitTitleText": "风景照",
            "userImgSrc": '../image/1.jpg',
            "userName": "梦魇",
            "heartImgSrc": "../image/heart.png",
            "heartNumber": "9922",
        };

        this.setData({
            "lsitArray": this.data.lsitArray.concat(addlist),
        });

        setTimeout(function() {
            wx.hideLoading(); //关闭加载等待提示框
        }, 1000);
    },
    // 加载等待
    loading: function() {
        wx.showLoading({
            mask: true
        })
    },
    // 异步请求 获取数据
    getAllinfo: function() {

    }

})