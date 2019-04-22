var flag = false;
var currentTabId;
var switches=false;

// var title;

chrome.browserAction.onClicked.addListener(function(tab) {
	switches = true;
	setTimeout(function(){
		switches = false;
	},165000)
    counter = 40;
    console.log('Turning ' + tab.url);
	flag = true;
	setTimeout(function(){
		flag = false;
	},40000)
    currentTabId = tab.id;
    console.log('test listener');                                                                                                                                                                                                                                                                                                                                                                                              
    chrome.tabs.getSelected(null, function(tab) {
		console.log(tab);
		sendMsg(tab.id);
    });
});
var title
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	if(request.greeting=="stop"){
		switches = false;
		return switches
	}
	// if(request.greeting=="title"){
	// 	title=request.title
	// }
	console.log(request)
    console.log('收到来自content-script的消息：');
    console.log(request, sender, sendResponse);
    sendResponse(switches);
});
// console.log(title);
var s;
var a;
chrome.webNavigation.onCompleted.addListener(function( tab ){
	console.log('加载完成***' + tab.tabId );
	console.log(flag)
	if( flag=true ){
		console.log(tab);
		console.log('chrome cookies========');
		chrome.cookies.getAll({"url":"https://sycm.taobao.com/"}, function(cookies){	
			console.log(tab)
			var cookie
			if(tab.url.startsWith('https://sycm.taobao.com/bda/items/effect/item_effect.htm')){
				// a=JSON.stringify(cookies)
				s=cookies
				// console.log(cookie)
				// cookie=cookies.map(item=>item.name+'='+item.value).join('; ');
				// var coo={}
				console.log(s)
				// sendMsg(s)
				chrome.tabs.getSelected(null, function(tab) {
					console.log(tab);
					sendCookie(tab.id,s);
				});
				// $.ajax({
				// 	type:"post",
				// 	url:"https://dev.xpxiong.com/api/collection/cookie",
				// 	data:{
				// 		data:a
				// 	},
				// 	async:true,
				// 	success:function(res){
				// 		console.log(res)
				// 	}
				// });
			}
		});
	}
});

function sendSku2Info(colores){
	chrome.tabs.query({
		active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {"cmd":"ok", "sku": colores}, 
			function(response) {
				// console.log(response);  
		}); });
}


function sendCookie(tabid,s){
	chrome.tabs.sendMessage(tabid,{s:s,greeting:"cookie"}, function(response) {
		// console.log(response);
	});
}
function sendMsg( tabid){
	// console.log(tabid + "--sendMsg()----eventPage.js");
	chrome.tabs.sendMessage(tabid, {greeting: "start", switches:switches}, function(response) {
		// console.log(response);
	});
}
