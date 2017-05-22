// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",onDeviceReady, false);
	
});

function onDeviceReady(){
	
	$('#posicion').on('click',function(){
		getPosition();
	});
	
	$('#watch').on('click',function(){
		watchPosition();
	});
	
}

function getPosition(){
	
	var options={
		enableHighAccuracy:true,
		maximumAge:3600000
	}
	
	var watchID=navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	
	function onSuccess(position){
	  
	  alert('Latitude:'         +position.coords.latitud       +'\n'+
	  'Longitude:'            +position.coords.longitude      +'\n'+
	  'Altitude:'            +position.coords.altittude      +'\n'+
	  'Accuracy:'             +position.coords.accuracy       +'\n'+
	  'Altitude Accuracy:' +position.coords.altitudeaccuracy +'\n'+
	  'Heading:'         +position.coords.heading         +'\n'+
	  'Speed:'          +position.coords.speed           +'\n'+
	  'Timestamp:'        +position.timestamp             +'\n');
	};
	
	function onError(error){
		alert('code:' +error.code+'\n'+'massage:'+error.massage+'\n');
	}
}

function watchPosition(){
	
	var options={
		maximumAge:3600000,
		timeout:3000,
		enableHighAccuracy:true,
	}
	
	var watchID=navigator.geolocation.watchPosition(onSuccess, onError, options);
	
	function onSuccess(position){
		
		$('#latitud').html(position.coord.latitude);
		$('#longitud').html(position.coord.longitude);
	    $('#altitud').html(position.coord.altitude);
		$('#accuracy').html(position.coord.accuracy);
		$('#aaccuracy').html(position.coord.altitudeAccuracy);
		$('#headingg').html(position.coord.headingg);
		$('#speed').html(position.coord.speed);
		$('#timestamp').html(position.timestamp);
	};
	
	function onError(error){
		alert('code:'  +error.code  +'\n'+ 'message:'+error.message+'\n');
	}
}
	
		

