//输出时间
function fn() {
    var time = new Date();
    var str = "";
    var div = document.getElementById("time");
    //年、月、日、时、分、秒、星期
    var year = time.getFullYear();
    var mon = time.getMonth() + 1;
    var day = time.getDate();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var week = time.getDay();
    switch (week) {
        case 0:
            week = "日";
            break;
        case 1:
            week = "一";
            break;
        case 2:
            week = "二";
            break;
        case 3:
            week = "三";
            break;
        case 4:
            week = "四";
            break;
        case 5:
            week = "五";
            break;
        case 6:
            week = "六";
            break;
    }
    str = year + "年" + totwo(mon) + "月" + totwo(day) + "日" + "&nbsp;" + totwo(h) + ":" + totwo(m) + ":" + totwo(s) + "&nbsp;" + "星期" + week;

    // str = year +"年"+mon+"月"+day+"日"+"&nbsp;"+h+":"+m+":"+s+"&nbsp;"+"星期"+week;

    div.innerHTML = str;
}

fn();

//设置每秒刷新一次日期
setInterval(fn, 1000);

//当月份或者日期是一位数的时候显示前面加一个0 比如2020年08月04日 18:20:53 星期二
function totwo(n) {
    if (n <= 9) {
        return n = "0" + n;
    } else {
        return n = "" + n;
    }
}