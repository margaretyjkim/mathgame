// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.

//testing out setInterval
	function simpleMessage() {
		alert("10 secs up!")
	}

	setInterval(simpleMessage, 10000);
//testing end
var counter = 10;
var t;
var isTimerOn = false;

function timeLimit()
{
	for ( var questionSet = 1; questionSet < 11; questionSet++  ) {
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


// $(window).load(function () {
// 	startMe;
// });