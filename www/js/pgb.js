function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
	deviceInfo();
}

function deviceInfo() {

	info =  'Device Model   : '    + device.model + '<br>' + 
			'Device Name    : '     + device.name + '<br>' + 
			'Device Cordova : '  + device.cordova + '<br>' + 
			'Device Platform: ' + device.platform + '<br>' + 
			'Device UUID    : '     + device.uuid + '<br>' + 
			'Device Version : '  + device.version + '<br>';

	document.getElementById("deviceDetails").innerHTML = info;	

	
}
function deviceInfo1() {

	info =  'MONIKA TU NIE CHCE';

	document.getElementById("deviceDetails").innerHTML = info;	

}
function deviceInfo2() {

	info =  'TUTAJ TEŻ NIE';

	document.getElementById("deviceDetails").innerHTML = info;	

}
function deviceInfo3() {

	info =  'MONIKA CHCE W TATRY!!!!!';

	document.getElementById("deviceDetails").innerHTML = info;	

}