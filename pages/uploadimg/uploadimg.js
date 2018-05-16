//uploadimg.js

Page({
    data: {
        casArray: ["", '搞笑', '英语', '音乐', '减肥'], //下拉选项
        casIndex: 0,
        condition: true,
        icosrc: "../image/plus.png",
        mode: 'scaleToFill',
        uploadText: "添加图片",
        anonymous: true, //匿名
        titletext: "", //视频标题
        describe: "", //描述信息
        btnloading: false, //loading 图标 
        btntext: "上传视频",
        imgIist: [] //图片地址
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
    uploadfile: function() {
        var _this = this;
        var nowCount = _this.data.imgIist.length; //获取当前已上传图片总数;
        var surplusCount = 9 - _this.data.imgIist.length //剩余上传图片次数

        if (nowCount == 9) {
            wx.showToast({
                title: '最多上传9张图片',
                icon: 'loading',
                duration: 3000
            });
        } else {
            //选择图片
            wx.chooseImage({
                count: 9, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function(res) {
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    var tempFilePaths = res.tempFilePaths;

                    _this.setData({
                        condition: false,
                    });
                    //循环次数
                    var loopCount = (surplusCount < tempFilePaths.length) ? surplusCount : tempFilePaths.length;

                    for (let i = 0; i < loopCount; i++) {
                        var imgsrcs = {
                            "imgsrc": tempFilePaths[i]
                        }
                        _this.setData({
                            "imgIist": _this.data.imgIist.concat(imgsrcs),
                        })
                    };
                }
            });
        }
    },
    //清楚图片
    close: function(e) {
        var nowCount = this.data.imgIist.length; //获取当前已上传图片总数;
        if (nowCount == 1) {
            this.setData({
                condition: true,
            });
        } else {
            var imgindex = e.currentTarget.dataset.index;
            this.data.imgIist.splice(imgindex, 1);

            this.setData({
                "imgIist": this.data.imgIist,
            });
        }
    },


    // 是否匿名
    switchChange: function(e) {
        this.setData({
            anonymous: e.detail.value
        })
    },

    //上传
    uploadBtn: function() {



    }

})