
 


var lianjie= "Setupiks-suaidn1.6.zip";// 下载跳转修改

        // 定义点击事件处理函数
        function tiaoz() {
 // alert('极速下载快连客服端，维护中');
   
window.location.href = lianjie;
		   
        }	
	
var xz = lianjie;

var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("href")) {
        links[i].href = xz;
    }
} 
	
	


        // 获取所有的<a>标签
        var links = document.getElementsByTagName('a');

        // 遍历所有的<a>标签并添加点击事件
        for (var i = 0; i < links.length; i++) {
            links[i].setAttribute('onclick', 'tiaoz()');
        }	
		
		
	
	
	        // 定义点击事件处理函数
        function kehu() {
 // alert('客服链接');
   
window.location.href = "https://t.me/traneasy_tg";
		   
        }	