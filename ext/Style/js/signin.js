
$(function()
{
	$("#email_signin_error_message").hide();
	
	$("#password_error_message").hide();

	var error_email = false;
	
	var error_password=false;
	


	$("#form_signin_email").focusout(function()
	{
		check_email();
		//alert("test");
	});

	

	$("#form_signin_password").focusout(function()
	{
		check_password();
	});
	

	function check_email()
	{
		var email_length = $("#form_signin_email").val().length;

		if(email_length < 5 || email_length >20)
		{
			$("#email_signin_error_message").html("Should be between 5-20 characters").css("border-color","white");;
			$("#email_signin_error_message").show();
			error_email=true;

		}
		else
		{
			$("#email_signin_error_message").hide();
		}
		
	}

	function check_password()
	{
		var address_length =$("#form_address").val().length;

		if( address_length=" " ||address_length<5)
		{
			$("#address_error_message").html("Insert a valid  address");
			$("#address_error_message").show();
			error_address=true;
		}
		else
		{
			$("address_error_message").hide();
		}
	}

/*function check_phone_number()
{
	//var phone_pattern = ner RegExp( /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/);
	var pattern new RegExp(^\d{3}-\d{3}-\d{4}$);

	if(pattern.test($("#form_phone_number").val()))
	{
		$("#phone_number_error_message").hide();
	}
	else
	{
		
		$("#phone_number_error_message").html("Invalid Phone Number");
		$("#phone_number_error_message").show();
		error_phone_number=true;
	}

}
*/

function check_email()

{
	var email_length = $("#form_signin_email").val().length;
	var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

	
	if(pattern.test($("#form_email").val()))
	{
		$("#email_error_message").hide();
	}
	else
	{
		$("#email_error_message").html("Invalid Email Address");
			$("#email_error_message").show();
			error_email=true;

	
}

}

function check_password()
{
	var password_length = $("#form_signin_password").val().length;

	if(password_length <8)
	{
		$("#password_error_message").html("At least 8 characters");
			$("#password_error_message").show();
			error_password=true;

	}
	else
	{
		$("password_error_message").hide();
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
