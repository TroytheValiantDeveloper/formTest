document.theform.myname.onfocus=function() {
	document.getElementById('mynamehint').innerHTML = "(Enter last name, then first)";
}

document.theform.myname.onblur=function() {
	document.getElementById('mynamehint').innerHTML = "";
}

document.theform.myurl.onblur=function() {
	if(document.theform.myurl.value==="") {
		document.getElementById("formerror").innerHTML = "The URL field is required";
	} //url empty

	if(document.theform.myurl.value==="http://") {
		document.getElementById("formerror").innerHTML = "Please add a valid URL";
	} //url empty


} //onblur

document.theform.myurl.onchange=function() {
	var theURL = document.theform.myurl.value;

	if (theURL.indexOf("http://")) {
		document.getElementById('formerror').innerHTML = "URLs must begin with http://";

		document.theform.myurl.value = "http://"+document.theform.myurl.value;
	}// doesn't have http://

} //onchange


document.theform.reference.onchange = function() {
	var id = document.theform.reference.selectedIndex;
	var url = document.theform.referecen[id].value;
	window.location.href = url;
}