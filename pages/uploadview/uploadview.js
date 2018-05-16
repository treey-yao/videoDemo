//uploadview.js

Page({
    data: {
        casArray: ["", '搞笑', '英语', '音乐', '减肥'], //下拉选项
        casIndex: 0,
        condition: true, //视频的显示判断
        icosrc: "../image/plus.png",
        mode: 'scaleToFill',
        uploadText: "添加视频",
        videoSrc: "", //视频地址
        anonymous: true, //匿名
        titletext: "", //视频标题
        describe: "", //描述信息
        btnloading: false, //loading 图标 
        btntext: "上传视频",
        againBtn: false,

    },

    //事件处理函数


    //下拉选项
    bindCasPickerChange: function(e) {
        console.log(this.data.casArray[e.detail.value])
        this.setData({
            casIndex: e.detail.value
        })
    },
    //视频标题
    titleInput: function(e) {
        this.setData({
            titletext: e.detail.value
        })
    },
    // 描述信息
    describeInput: function(e) {
        this.setData({
            describe: e.detail.value
        })
    },
    uploadfile: function() { //选择视频或者拍摄视频
        var _this = this;
        wx.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: 'back',
            success: function(res) {
                console.log(res);
                //判断视频大小---小于10M
                if (res.duration > 10240) {
                    wx.showToast({
                        title: '请上传小于10M的视频',
                        duration: 2000
                    })
                } else {
                    _this.setData({
                        videoSrc: res.tempFilePath,
                        condition: false,
                        againBtn: true,

                    })
                }
            },
            fail: function(res) {
                console.log(res);
            }
        })

    },
    // 是否匿名
    switchChange: function(e) {
        this.setData({
            anonymous: e.detail.value
        })
    },
    //重新选择视频
    againUploadBtn: function() {
        this.setData({
            videoSrc: "",
            condition: true,
            againBtn: false,
        })
    },

    //上传
    uploadBtn: function() {

        if (this.data.casIndex == 0) {
            wx.showToast({
                title: '请选择发布到地方',
                duration: 2000
            })
        } else if (this.data.videoSrc == "") {
            wx.showToast({
                title: '请上传视频',
                duration: 2000
            })
        } else {
            const uploadTask = wx.uploadFile({
                url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
                filePath: this.data.videoSrc,
                name: 'file',
                formData: {
                    'classify': this.data.casIndex,
                    'anonymous': this.data.anonymous,
                    'describe': this.data.describe,
                    'titletext': this.data.titletext,
                },
                success: function(res) { //上传成功
                    var data = res.data
                        //do something
                },
                fail: function() { //上传失败

                }
            });

            downloadTask.onProgressUpdate((res) => {
                console.log('下载进度', res.progress);
                console.log('已经下载的数据长度', res.totalBytesWritten);
                console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);

            });

        }

    }

})