var utils=require("../../utils/utils.js");
Page({
  data:{
    classy:"商业贷款",
    rate:"4.75",
    year:5,
    inputContent: {},
    inputValue: '',
    w:"0.00",
    tq:"0.00",
    tr:"0.00",
    value:0 ,
    style:"a",
    reduce:0.00
  },
  bindHideKeyboard: function(e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var rate=this.data.rate;
    var year=this.data.year;
    var classy=this.data.classy;
    var style=this.data.style;
    var u= utils.calculate(style,classy,value,rate,year)
    this.setData({
      value:value,
      w:u.w,
      tq:u.tq,
      tr:u.tr,
      reduce:u.reduce
    })
   },
    class:function(){
      var self=this
      var value = this.data.value
      var rate=this.data.rate;
      var year=this.data.year;
      var style=this.data.style;
      wx.showActionSheet({
          itemList:['商业贷款','公积金贷款','组合贷款'],
          success:function(e){
            if(e.tapIndex===0){
              var classy="商业贷款";
              var rate=4.75
              var u= utils.calculate(style,classy,value,rate,year)
              self.setData({
                value:value,
                w:u.w,
                tq:u.tq,
                tr:u.tr,
                rate:4.75,
                classy:"商业贷款",
                  reduce:u.reduce
                })
            }else if(e.tapIndex===1){
                var classy="公积金贷款"
                if(year==5){
                  var rate=2.75;
                }else if(year>=10){
                  var rate=3.25
                }
                 var u= utils.calculate(style,classy,value,rate,year)
                  self.setData({
                    value:value,
                    w:u.w,
                    tq:u.tq,
                    tr:u.tr,
                    rate:rate,
                    classy:"公积金贷款",
                     reduce:u.reduce
                    })
            }else if(e.tapIndex===2){
                var classy="组合贷款"
                var u= utils.calculate(style,classy,value,rate,year)
                  self.setData({
                    value:value,
                    w:u.w,
                    tq:u.tq,
                    tr:u.tr,
                    classy:"组和贷款",
                    reduce:u.reduce
                    })
            }
        } 
    })
  },
  rate:function(){
      var self=this
      var value = self.data.value
      var year=self.data.year;
      var classy=self.data.classy;
      var style=this.data.style;
      if(classy==="商业贷款"){
         wx.showActionSheet({
         itemList:['基准利率','7利率','8折利率','8.3折利率'],
          success:function(e){
          if(e.tapIndex===0){
          var rate=4.74
          var u= utils.calculate(style,classy,value,rate,year)
            self.setData({
                w:u.w,
                tq:u.tq,
                tr:u.tr,
                rate:4.74,
                 reduce:u.reduce
              })
        }else if(e.tapIndex===1){
            var rate=3.32
            var u= utils.calculate(style,classy,value,rate,year)
            self.setData({
                w:u.w,
                tq:u.tq,
                tr:u.tr,
                rate:3.32,
                reduce:u.reduce
              })
        }else if(e.tapIndex===2){
          var rate=3.80
          var u= utils.calculate(style,classy,value,rate,year)
            self.setData({
                w:u.w,
                tq:u.tq,
                tr:u.tr,
                rate:3.80,
                reduce:u.reduce
              })
        }else if(e.tapIndex===3){
            var rate=3.94
            var u= utils.calculate(style,classy,value,rate,year)
            self.setData({
                w:u.w,
                tq:u.tq,
                tr:u.tr,
                rate:3.94,
                reduce:u.reduce
            })
          }  
        }
    })
      }else if(classy=="公积金贷款"){
        wx.showActionSheet({
        itemList:['基准利率','1.1倍利率'],
        success:function(e){
            if(e.tapIndex===0){
                if(year==5){
                  var rate=2.75;
                }else if(year>10){
                  var rate=3.25
                }
            var classy="公积金贷款"
             var u= utils.calculate(style,classy,value,rate,year)
            self.setData({
                w:u.w,
                tq:u.tq,
                tr:u.tr,
                rate:rate,
                reduce:u.reduce
              })
            }else if(e.tapIndex===1){
               if(year==5){
                  var rate=3.03;
                }else if(year>=10){
                  var rate=3.58
                }
              var classy="公积金贷款"
              var u= utils.calculate(style,classy,value,rate,year)
              self.setData({
                  w:u.w,
                  tq:u.tq,
                  tr:u.tr,
                  rate:rate,
                  reduce:u.reduce
                })
              }
            }
       })
     }
   
  },
   deadine:function(){
      var self=this
      var value = self.data.value
      var rate=self.data.rate;
      var classy=self.data.classy;
      var style=this.data.style;
     wx.showActionSheet({
          itemList:['5','10','15','20','25','30'],
          success:function(e){
             if(e.tapIndex===0){
               var year=5
               if(classy=="商业贷款"){
                 rate=4.75;
               }else if(classy=="公积金贷款"){
                  rate=2.75;
               }
              var u= utils.calculate(style,classy,value,rate,year)
                self.setData({
                    w:u.w,
                    tq:u.tq,
                    tr:u.tr,
                    year:5,
                    rate:rate,
                    reduce:u.reduce
                 })
            }else if(e.tapIndex===1){
               var year=10
               if(classy=="商业贷款"){
                 rate=4.90;
               }else if(classy=="公积金贷款"){
                  rate=3.25;
               }
               var u= utils.calculate(style,classy,value,rate,year)
                self.setData({
                    w:u.w,
                    tq:u.tq,
                    tr:u.tr,
                    year:10,
                    rate:rate,
                    reduce:u.reduce
                 })
            }else if(e.tapIndex===2){
              var year=15
              if(classy=="商业贷款"){
                 rate=4.90;
               }else if(classy=="公积金贷款"){
                  rate=3.25;
               }
               var u= utils.calculate(style,classy,value,rate,year)
                self.setData({
                    w:u.w,
                    tq:u.tq,
                    tr:u.tr,
                    year:15,
                    reduce:u.reduce,
                    rate:rate
                 })
            }else if(e.tapIndex===3){
               var year=20
               if(classy=="商业贷款"){
                 rate=4.90;
               }else if(classy=="公积金贷款"){
                  rate=3.25;
               }
               var u= utils.calculate(style,classy,value,rate,year)
                self.setData({
                    w:u.w,
                    tq:u.tq,
                    tr:u.tr,
                    year:20,
                    rate:rate,
                    reduce:u.reduce
                 })
            }else if(e.tapIndex===4){
                var year=25
                if(classy=="商业贷款"){
                 rate=4.90;
               }else if(classy=="公积金贷款"){
                  rate=3.25;
               }
              var u= utils.calculate(style,classy,value,rate,year)
    
                self.setData({
                    w:u.w,
                    tq:u.tq,
                    tr:u.tr,
                    year:25,
                    rate:rate,
                    reduce:u.reduce
                 })
            }else if(e.tapIndex===5){
               var year=30
               if(classy=="商业贷款"){
                 rate=4.90;
               }else if(classy=="公积金贷款"){
                  rate=3.25;
               }
               var u= utils.calculate(style,classy,value,rate,year)
                self.setData({
                    w:u.w,
                    tq:u.tq,
                    tr:u.tr,
                    year:30,
                    rate:rate,
                    reduce:u.reduce
                 })
            }      
         }
    })
  },
  lunt:function(){
    var classy=this.data.classy;
    var value=this.data.value;
    var rate=this.data.rate;
    var year=this.data.year;
    var style="b";
    var u= utils.calculate(style,classy,value,rate,year)
    this.setData({
      active:"lunact",
        style:"b",
        w:u.w,
        tq:u.tq,
        tr:u.tr,
        reduce:u.reduce
    })
  },
    lun:function(){
      var classy=this.data.classy;
      var value=this.data.value;
      var rate=this.data.rate;
      var year=this.data.year;
      var style="a";
      var u= utils.calculate(style,classy,value,rate,year)
      this.setData({
        style:"a",
        active:"",
        w:u.w,
        tq:u.tq,
        tr:u.tr, 
        reduce:u.reduce
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
   
  },
  onReady:function(){
    // 页面渲染完成
   
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
  
  }
})