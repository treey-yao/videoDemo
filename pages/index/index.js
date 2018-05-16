//index.js
//获取应用实例

var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
    data: {
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true, //是否显示面板指示点
        autoplay: false, //是否自动切换
        interval: 5000, //自动切换时间间隔
        duration: 500, //滑动动画时长
        hotVideoSrc: " http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
        toView: 'red',
        scrollTop: 100,
        heartImgSrc: '../image/heart.png',
        recommendhidden: true, //loading图片
        reArray: [{
            "reVideoSrc": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
            "reTitleText": "一个简单的模型制作",
            "userImgSrc": '../image/1.jpg',
            "userName": "梦魇",
            "heartImgSrc": "../image/heart.png",
            "heartNumber": 1122,
            "iltemId": 0,
            "zan": false, //是否点赞
        }],
        iltemId: 0


    },
    // 初始化页面
    onLoad: function() {
        //初始化页面的时候 向后台请求数据   异步加载数据 不会阻塞页面
        this.getAllinfo();
    },

    showvideo: function() {
        //跳转到视频详情
        wx.navigateTo({
            url: '../showvideo/showvideo',
        })
    },

    // 下拉刷新
    onReachBottom: function() {
        // 加载等待
        var addlist = {
            "reVideoSrc": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
            "reTitleText": "风景照",
            "userImgSrc": '../image/1.jpg',
            "userName": "梦魇",
            "heartImgSrc": "../image/heart.png",
            "heartNumber": 9922,
            "iltemId": ++this.data.iltemId
        };

        this.setData({
            "reArray": this.data.reArray.concat(addlist),
        });

    },
    //点赞
    heartHove: function(e) {

        //获取当前列数
        var iltemId = e.currentTarget.dataset.id;

        if (this.data.reArray[iltemId].zan) {
            this.setData({
                ['reArray[' + iltemId + '].heartImgSrc']: "../image/heart.png",
                ['reArray[' + iltemId + '].heartNumber']: --this.data.reArray[iltemId].heartNumber,
                ['reArray[' + iltemId + '].zan']: false,

            });
        } else {
            this.setData({
                ['reArray[' + iltemId + '].heartImgSrc']: "../image/heart_hove.png",
                ['reArray[' + iltemId + '].heartNumber']: ++this.data.reArray[iltemId].heartNumber,
                ['reArray[' + iltemId + '].zan']: true,
            });
        }
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