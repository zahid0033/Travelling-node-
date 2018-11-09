
$(function()
{
	$("#username_error_message").hide();
	$("#phone_number_error_message").hide();
	$("#email_error_message").hide();
	$("#password_error_message").hide();
	$("#retype_password_error_message").hide();
	$("#address_error_message").hide();

	var error_username = false;
	var error_phone_number = false;
	var error_email= false;
	var error_password=false;
	var error_retype_password=false;
	var error_address=false;



	$("#form_username").focusout(function()
	{
		check_username();
		//alert("test");
	});

	$("#form_phone_number").focusout(function()
	{
		check_phone_number();
	});

	$("#form_email").focusout(function()
	{
		check_email();
	});

	$("#form_password").focusout(function()
	{
		check_password();
	});
	$("#form_retype_password").focusout(function()
	{
		check_retype_password();
	});
	$("#form_address").focusout(function()
	{
		check_address();
	});

	function check_username()
	{
		var username_length = $("#form_username").val().length;

		if(username_length < 5 || username_length >20)
		{
			$("#username_error_message").html("Should be between 5-20 characters");
			$("#username_error_message").css("color","red");
			$("#username_error_message").show();
			error_username=true;

		}
		else
		{
			$("#username_error_message").hide();
		}
		
	}

	function check_address()
	{
		var address_length = $("#form_address").val().length;

		if(address_length < 5)
		{
			$("#address_error_message").html("Insert a valid  address");
			$("#address_error_message").css("color","red");
			$("#address_error_message").show();
			error_address=true;
		}
		else
		{
			$("#address_error_message").hide();
		}
	}

function check_phone_number()
{
	var pattern = /^\d{10}$/;

	if(pattern.test($("#form_phone_number").val()))
	{
		$("#phone_number_error_message").hide();
	}
	else
	{
		
		$("#phone_number_error_message").html("Invalid Phone Number");
		$("#phone_number_error_message").css("color","red");
		$("#phone_number_error_message").show();
		error_phone_number=true;
	}

}


	function check_email()
	{
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

		if(pattern.test($("#form_email").val()))
		{
			$("#email_error_message").hide();
		}
		else
		{
			$("#email_error_message").html("Invalid Email Address");
			$("#email_error_message").css("color","red");
			$("#email_error_message").show();
			error_email=true;

		}
	}

	function check_password()
	{
		var password_length = $("#form_password").val().length;

		if(password_length <8)
		{
			$("#password_error_message").html("At least 8 characters");
			$("#password_error_message").css("color","red");
			$("#password_error_message").show();
			error_password=true;

		}
		else
		{
			$("#password_error_message").hide();
		}
	}

/*
function check_retype_password()
{
	var password =$("#form_password").val();
	var retype_password =$("#form_retype_password").val();

	if(password != retype_password)
	{
		$("#retype_password_error_message").html("password doesn't match");
		$("#retype_password_error_message").show();
		error_retype_password = true;
	}
	else
	{
		$("#retype_password_error_message").hide();
	}
}
*/
});
