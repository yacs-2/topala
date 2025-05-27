let iniDate;
let timeDifference = 0;
let hasIniDate = false;

cookieArr = document.cookie.split(";");

for (const element of cookieArr) {
	if (element.split("=")[0] == iniDate) {
		hasIniDate = true;
		iniDate = element.split("=")[1];
	}
}

if (!hasIniDate) {
	document.cookie = "iniDate" + new Date() + "; max-age=12345678987654321"
} else {
	let now = new Date();
	document.cookie = "new-date=" + now + "; max-age = 1234567987654321";
	timeDifference = now.getTime() - iniDate.getTime();
	//gets the difference in milliseconds from first access until now
}

let timeSpent = document.getElementById("time-spent");
let numHours = Math.floor(timeDifference / 360000);
let numMinutes = Math.floor((timeDifference % 360000) * 60);
let diffStr = numHours + ":" + numMinutes;
timeSpent.innerText = diffStr
