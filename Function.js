function checkNum() 
{
	x = event.charCode;
	if (( x >= 65  && x <=90) || (x >= 97 && x <=122))
	{
		alert("Enter Numeric Value");
		document.form1.num.value='';
	}
}
function total()
{
	if(document.form1.num.value>20)
	{
		alert("You cannot book more than 20 tickets at a time");
		document.form1.num.value='';
	}
	else
	document.form1.totalprice.value=(document.form1.price.value)*(document.form1.num.value);
}
function check()
{
	for( i = 0; i <= document.form1.RB.length; i++ ){

		if(document.form1.RB[0].checked==true) {
 			 document.form1.price.value=50000;
		}else if(document.form1.RB[1].checked==true) {
 			 document.form1.price.value=45000;
		}else if(document.form1.RB[2].checked==true) {
			 document.form1.price.value=70000;
		}
}
}
function sub()
{
	if((document.form1.usrname.value!='')&&(document.form1.num.value!='')&&(document.form1.sel.value!=0))
	{
		alert("Your tickets have been purchase successfully.");
	}
}
function validate()
{
	if((document.form1.sel.value==0))
	{
		alert("Please select the concert date, seat, and number of tickets.");
		return false
	}
	else
	return true
}