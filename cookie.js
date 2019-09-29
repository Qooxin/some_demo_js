var CookieHelper = {
    addCookie: function (cookieName, cookieValue, exMinutes, cookiePath) {
        // 第三/四个参数，按需传参
        var str = cookieName + "=" + cookieValue;
        if (arguments.length == 3) {
            let d = new Date();
            d.setTime(Date.now() + exMinutes*60*1000); // 过期单位这里设置为分钟
            str += ";Expires=" + d.toUTCString();
        }
        if (arguments.length == 4) {
            str += ";path=" + cookiePath;
        }
        document.cookie = str;
    },
    getCookie: function (cookieName) {
        var cookieArr = document.cookie.split(";");
        for (let i in cookieArr) {
            var arr = cookieArr[i].split("=");
            if (arr[0].trim() == cookieName) {
                return arr[1];
            }
        }
    },
    removeCookie: function (cookieName) {
        document.cookie = cookieName + "= ;Expires=" + (new Date()).toUTCString();
    }
}