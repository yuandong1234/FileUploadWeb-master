<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>文件上传</title>
<script type="text/javascript" src="js/AjaxRequest.js"></script>
<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
</head>
<script type="text/javascript">
	function onSuccess() {
		alert("Success!");
		document.getElementById("showResult").innerHTML = this.ajaxRuest.responseText;
	}

	function onFailed() {
		alert("Failed");
	}
	function upload() {
		var file = document.getElementById("ajaxFile");
		var params = new FormData();
		params.append("file",file.files[0]);
		sendRequst("FileUploadServlet", "POST", onFailed, onSuccess, params);
	}
</script>
<body align="center">
	<form action="${pageContext.request.contextPath}/FileUploadServlet"
		enctype="multipart/form-data" method="post">
		上传用户：<input type="text" name="username"><br /> 上传文件1：<input
			type="file" name="file1"><br /> 上传文件2：<input type="file"
			name="file2"><br /> <input type="submit" value="提交">
	</form>

	上传文件3:
	<input type="file" name="file3" id="ajaxFile" >
	<br>
	<input type="button" name="upload" value="Ajax上传" onclick="upload()">
</body>
</html>