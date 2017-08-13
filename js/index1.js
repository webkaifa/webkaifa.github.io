function open_win(){
  window.open("http://www.people.com.cn/")
}
function open_win1(){
  window.open("http://www.xinhuanet.com/")
}
function open_win2(){
  window.open("http://www.cctv.com/")
}
function open_win3(){
  window.open("http://www.cri.cn/")
}
function open_win4(){
  window.open("http://cn.chinadaily.com.cn/")
}
function open_win5(){
  window.open("http://www.china.com.cn/")
}
function open_win6(){
  window.open("http://www.ce.cn/")
}
function open_win7(){
  window.open("http://www.gmw.cn/")
}
function open_win8(){
  window.open("http://www.cac.gov.cn/")
}
function open_win9(){
  window.open("http://www.qstheory.cn/")
}
function open_win10(){
  window.open("http://www.youth.cn/")
}
//++++++++++++++++++++++++
function checkHttps () {
  BaiduHttps.useHttps();
};
function baiduWithHttps (formname) {
  var data = BaiduHttps.useHttps();
  if (data.s === 0) {
    return true;
  }
  else {
    formname.action = 'https://www.baidu.com/baidu' + '?ssl_s=1&ssl_c' + data.ssl_code;
    return true;
  }
};
