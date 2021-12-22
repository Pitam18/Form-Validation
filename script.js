function validation() 
{
	var user = document.getElementById('user').value
    var pass = document.getElementById('pass').value
	var conpass = document.getElementById('conpass').value
	var mobileNumber = document.getElementById('mobileNumber').value
	var emails = document.getElementById('emails').value

	if (user == "")
	{
		document.getElementById('username').innerHTML =" ** Please fill the Username";
		return false;
	}
	if ((user.length <=2) || (user.lemgth >20))
	{
		document.getElementById('username').innerHTML =" ** Username must be between 3 and 20";
		return false;
	}
	if (!isNaN(user))
	{
		document.getElementById('username').innerHTML =" ** Username must be Character";
		return false;
	}



	if (pass == "")
	{
		document.getElementById('passwords').innerHTML =" ** Please fill the Password";
		return false;
	}
	if ((pass.length <=5) || (pass.length >20))
	{
		document.getElementById('passwords').innerHTML =" ** Password length must be between 6 and 20";
		return false;
	}

     


	if (conpass == "")
	{
		document.getElementById('confrmpass').innerHTML =" ** Please fill the Confirm Password";
		return false;
	}
	if(pass!=conpass)
	{
		document.getElementById('confrmpass').innerHTML =" ** Password are not matching";
		return false;
	}




	if (mobileNumber == "")
	{
		document.getElementById('mobileno').innerHTML =" ** Please fill the Mobile Number";
		return false;
	}
	if (isNaN(mobileNumber))
	{
		document.getElementById('mobileno').innerHTML =" ** Please enter Valid Number";
		return false;
	}
	if (mobileNumber.length!=10)
	{

		document.getElementById('mobileno').innerHTML =" ** Please enter Valid 10-Digit Mobile Number";
		return false;
	}



	if (emails == "")
	{
		document.getElementById('emailids').innerHTML =" ** Please fill the Email Id";
		return false;
	}
	if (emails.indexOf('@') <=0)
	{
		document.getElementById('emailids').innerHTML =" ** @ invalid Position";
		return false;
	}
	if ((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.'))
	{
		document.getElementById('emailids').innerHTML =" ** . invalid Position";
		return false;
	}

}