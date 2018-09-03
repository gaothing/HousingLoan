var t={
calculate:function(style,classy,value,rate,year){
    var value=value*10000;
    var mr=rate/1200;
    var tm=year*12;
    var ss=1+mr;
    var rr=Math.pow(ss,tm);
    if(style=="a"){
      var w=(value*mr*rr)/(rr-1);
      var tq=w*tm;
      var tr=tq-value;
    }else{
       var w=((value/tm)+value*mr);
       var reduce=value/tm*mr;
       var tr=(value*tm-(value*(tm-1))/2)*mr;
       var tq=tr+value;
        reduce=reduce.toFixed(2);
    }
      w=w.toFixed(2)
      tq=tq.toFixed(2)
      tr=tr.toFixed(2);
    var info={"w":w,"tq":tq,"tr":tr,"reduce":reduce};
       return info;
  }
}
module.exports=t;