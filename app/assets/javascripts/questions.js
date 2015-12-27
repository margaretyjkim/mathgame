// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.

var counter = 10;
var t;
var isTimerOn = false;

function timeLimit()
{
	for ( var questionSet = 1; questionSet < 11; questionSet++ ) {
		console.log(questionSet);
	}

}


function countdown()
{
	document.getElementById("txt").value = counter;
	counter--;
	t = setTimeout("countdown();", 1000);
}

function stopMe()
{
	isTimerOn = false;
	clearTimeout(t);
}

function startMe()
{
	if ( !isTimerOn )
	{
		isTimeOn = true;
		countdown();
	}
}

//testing out setInterval
	var timerOut = document.getElementById("timerOut");

	function simpleMessage() {
		alert("10 secs up!");
	}

	var intervalHandle = setInterval(simpleMessage, 3000);
//testing out onclick
	// function myFunction() {
	// 	document.getElementById("hello").style.color = "red";
	// }
//testing out end

//clearInterval does not work right now
	function timerOver() {
	 	clearInterval(intervalHandle);
	}

//testing end


// $(window).load(function () {
// 	startMe;
// });