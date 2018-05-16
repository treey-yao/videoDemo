//classify.js

Page({
    data: {
        claArray: [{
            "claColor": "EAD5B8",
            "claText": "搞笑",
            "classId": 1
        }, {
            "claColor": "F8EAD1",
            "claText": "英语",
            "classId": 2
        }, {
            "claColor": "D0A071",
            "claText": "图片",
            "classId": 3
        }]

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