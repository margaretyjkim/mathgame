// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
$(function() {
	var counter = 5;
	var t;
	var isTimerOn = false;
	var timerOut = document.getElementById("timerOut");
	var intervalHandle = setInterval(5000);
	var startBtn = $("#start-button");
	var stopBtn = $("#stop-button");

	window.onload = intervalHandle;

	function startMe() {
		if ( !isTimerOn ) {
			isTimerOn = true;
			countdown();
		}
	}

	function countdown() {
		setTimeout(resetPage(), 5000);
	}

	function resetPage() {
		if(isTimerOn == false){
			return;
		}
		location.reload();
		countdown();
	}

	function stopMe() {
		isTimerOn = false;
	}

	function timerOver() {
		clearInterval(intervalHandle);
		resetPage();
	}

	startBtn.on('click', function() {
		startMe();
	});

	stopBtn.on('click', function(){
		stopMe();
	});

});