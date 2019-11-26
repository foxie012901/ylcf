import { inferredPredicate } from "@babel/types";

class DateUtil {
    /**
     * 例如:2017-06-28 10:48:46转成date类,
     * 可把- replace成/
     * @param dateString
     * @return Date
     */
    static parserDateString(dateString) {
      if (dateString) {
        let regEx = new RegExp('\\-', 'gi');
        let validDateStr = dateString.replace(regEx, '/');
        let milliseconds = Date.parse(validDateStr);
        return new Date(milliseconds);
      }
    }
    
    // timestamp时间戳  formater时间格式
    static formatDate(timestamp, formater) {
      let date = new Date();
      date.setTime(parseInt(timestamp));
      formater = formater != null ? formater : 'yyyy-MM-dd hh:mm';
      Date.prototype.Format = function(fmt) {
        var o = {
          'M+': this.getMonth() + 1, //月
          'd+': this.getDate(), //日
          'h+': this.getHours(), //小时
          'm+': this.getMinutes(), //分
          's+': this.getSeconds(), //秒
          'q+': Math.floor((this.getMonth() + 3) / 3), //季度
          'S': this.getMilliseconds(), //毫秒
          'w':this.getUTCDay(),
        };
  
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            (this.getFullYear() + '').substr(4 - RegExp.$1.length),
          );
        }
        for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length == 1
                ? o[k]
                : ('00' + o[k]).substr(('' + o[k]).length),
            );
          }
        }
        return fmt;
      };
      return date.Format(formater);
    }
    static getBeforeDayDate(day) {
      var date = new Date(),
        timestamp;
      timestamp = date.getTime();
      // 获取day天前的日期
      return new Date(timestamp - day * 24 * 3600 * 1000);
    }
  
    static getAfterDayDate(day) {
      var date = new Date(),
        timestamp;
      timestamp = date.getTime();
      // 获取day天之后的日期
      return new Date(timestamp + day * 24 * 3600 * 1000);
    }
    //判断时间是否在两个时间点之间 时间格式 hh:mm:ss
    static time_range (beginTime, endTime, nowTime) {
      var strb = beginTime.split (":");
      if (strb.length != 2) {
        return false;
      }
     
      var stre = endTime.split (":");
      if (stre.length != 2) {
        return false;
      }
     
      var strn = nowTime.split (":");
      if (stre.length != 2) {
        return false;
      }
      var b = new Date ();
      var e = new Date ();
      var n = new Date ();
     
      b.setHours (strb[0]);
      b.setMinutes (strb[1]);
      e.setHours (stre[0]);
      e.setMinutes (stre[1]);
      n.setHours (strn[0]);
      n.setMinutes (strn[1]);
     
      if (n.getTime () - b.getTime () > 0 && n.getTime () - e.getTime () < 0) {
        return true;
      } else {
       
        return false;
      }
    }
   
  }

  




 /* String format = "HH:mm:ss";
SimpleDateFormat sf = new SimpleDateFormat("HH:mm:ss");
String now = sf.format(new Date());
now = "16:59:59";
Date nowTime;
try {
nowTime = new SimpleDateFormat(format).parse(now);
Date startTime = new SimpleDateFormat(format).parse("09:00:00");
Date endTime = new SimpleDateFormat(format).parse("17:00:00");
if (isEffectiveDate(nowTime, startTime, endTime)) {
runFlag = true;
logger.info("系统时间在早上9点到下午17点之间.");
} else {
runFlag = false;
logger.info("系统时间不在早上9点到下午17点之间.");
}
} catch (java.text.ParseException e) {
// TODO Auto-generated catch block
e.printStackTrace();
}*/
  export default DateUtil;
  