$(document).ready(function(){

$("button").click(function(){
	

	$.ajax({
		url:"/home/getData",
		method:"post",
		data:{
			name:$('#nam').val()
		},
		success:function(res){
			$("#par").html("<table border='1'><tr><th>ID</th><th>Employee Name</th><th>Contact No</th><th>User Name</th><th>Password</th></tr><tr><td>"+res.id+"</td> <td>"+res.ename+"</td> <td>"+res.contact+"</td> <td>"+res.username+"</td> <td>"+res.password+"</td></tr></table>");
			//document.write(res);
		}
	});
});


});