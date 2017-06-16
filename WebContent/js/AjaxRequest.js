/**
 * 初始化Ajax
 * @returns
 */
function initsAjaxRequest(){
	var request = false;
	if(window.XMLHttpRequest){//非IE浏览器
		request=new XMLHttpRequest();//创建XMLHttpRequest
		if (request.overrideMimeType) {
			request.overrideMimeType('text/xml');
		}
	}else if(window.ActiveXObject){
		try {//IE浏览器
			request = new ActiveXObject("Msxml2.XMLHTTP");//创建XMLHttpRequest
		} catch (e) {
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");//创建XMLHttpRequest
			} catch (e) {}
		}
	}
	if(!request){
		alert("Create request error!");
		return false;
	}
	return request;
}
/**
 * Ajax 请求
 * @param url
 * @param method
 * @param params
 * @param onError
 * @param onSuccess
 * @returns
 */
var ajaxRuest;
function sendRequst(url,method,onError,onSuccess,params){
	this.error=(onError)?onError:defaultError;
	this.success=onSuccess;
	if(!method){
		method="GET";
	}
	ajaxRuest=initsAjaxRequest();
	if(ajaxRuest){
		try{
			ajaxRuest.onreadystatechange =onAjaxReadyState;
			ajaxRuest.open(method,url,true);
			if(method=="POST"){
				ajaxRuest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");	
			}	
			ajaxRuest.send(params);
		}catch(e){
			this.error();
		}

	}
}
/**
 * Ajax 请求状态回调
 * @param callback 回调方法
 * @returns
 */
function onAjaxReadyState(){
	var loader=this;
	var ready=ajaxRuest.readyState;//0未初始化，1已初始化，2发送请求，3开始接收结果，4接收结果完毕
	if(ready==4){
		if(ajaxRuest.status==200){//成功
			//alert(ajaxRuest.status);
			self.success();
		}else{
			self.error();
		}
	}
}

/**
 * 默认错误回调
 */
function  defaultError(){
	alert("错误数据\n\n回调状态:"+ajaxRuest.readyState+"\n状态:"+ajaxRuest.status);
}









