
$(function()
{
	$("#hotelname_error_message").hide();
	$("#area_error_message").hide();
	$("#unit_price_error_message").hide();
	$("#owner_error_message").hide();
	$("#email_error_message").hide();
	$("#password_error_message").hide();
	$("#retype_password_error_message").hide();
	$("#address_error_message").hide();

	var error_hotelname = false;
	var error_area = false;
	var error_unit_price = false;
	var error_owner = false;
	var error_email= false;
	var error_password=false;
	var error_retype_password=false;
	var error_address=false;



	$("#form_hotelname").focusout(function()
	{
		check_hotelname();
		//alert("test");
	});

	$("#form_area").focusout(function()
	{
		check_area();
	});
	$("#form_unit_price").focusout(function()
	{
		check_unit_price();
	});
	$("#form_owner").focusout(function()form_username
	{
		check_owner();
		//alert("test");
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


	function check_hotelname()
	{
		var hotelname_length = $("#form_hotelname").val().length;

		if(hotelname_length < 5 || hotelname_length >20)
		{
			$("#hotelname_error_message").html("Should be between 5-20 characters").css("border-color","white");;
			$("#hotelname_error_message").show();
			error_hotelname=true;

		}
		else
		{
			$("#hotelname_error_message").hide();
			error_hotelname=true;
		}
		
	}

	function check_unit_price()
	{
		var unit_price_length = $("#form_unit_price").val().length;

		if(unit_price_length < 3 || hotelname_length >20)
		{
			$("#unit_price_error_message").html("Price should be included").css("border-color","white");;
			$("#unit_price_error_message").show();
			error_unit_price=true;

		}
		else
		{
			$("#unit_price_error_message").hide();
		}
		
	}

	function check_area()
	{
		var area_length = $("#form_area").val().length;

		if(area_length < 5 || area_length >20)
		{
			$("#area_error_message").html("Should be between 5-20 characters").css("border-color","white");;
			$("#area_error_message").show();
			error_area=true;

		}
		else
		{
			$("#area_error_message").hide();
		}
		
	}

	function check_owner()
	{
		var owner_length = $("#form_owner").val().length;

		if(owner_length < 5 || owner_length >20)
		{
			$("#owner_error_message").html("Should be between 5-20 characters").css("border-color","white");;
			$("#owner_error_message").show();
			error_owner=true;

		}
		else
		{
			$("#owner_error_message").hide();
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
	var password_length = $("#form_password").val().length;

	if(password_length <8 || password_length >25)
	{
		$("#password_error_message").html("At least 8 characters");
			$("#password_error_message").show();
			error_password=true;

	}
	else
	{
		$("password_error_message").hide();
		error_password=true;
	}
}


});
