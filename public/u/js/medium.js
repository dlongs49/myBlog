$(function() {
    var pc = '<link rel="stylesheet" type="text/css" href="/u/css/index.css" />'
    var mobile = '<link rel="stylesheet" type="text/css" href="/u/css/mobile.css" />'
    if (navigator.userAgent.match(/IEMobile|BlackBerry|Android|iPod|iPhone|iPad/i)) {
        $("head").append(mobile)
    } else {
        $("head").append(pc)
    }
})