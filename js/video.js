var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
		
var vol = 1;
var speed = 1;

document.querySelector("#play").addEventListener("click", playVid);
document.querySelector("#pause").addEventListener("click", pauseVid);
document.querySelector("#slower").addEventListener("click", slowVid);
document.querySelector("#faster").addEventListener("click", speedVid);
document.querySelector("#skip").addEventListener("click", skipVid);
document.querySelector("#mute").addEventListener("click", muteVid);
document.querySelector("#vintage").addEventListener("click", vintageClass);
document.querySelector("#orig").addEventListener("click", origClass);





function playVid() { 
	var myVideo = document.querySelector("video"); 
	myVideo.play(); 
	console.log("Play Video");
	var volPerc = vol*(100);
	document.getElementById("volume").innerHTML = volPerc + "%";
} 

		function pauseVid() {
			var myVideo = document.querySelector("video"); 
			myVideo.pause(); 
			console.log("Pause Video");
		}
		function slowVid() {
			var myVideo = document.querySelector("video"); 
			speed = speed * 0.95;
			myVideo.playbackRate = speed;
			console.log("New speed is " + speed);
		} 
		function speedVid() {
			var myVideo = document.querySelector("video"); 
			speed = speed / 0.95;
			myVideo.playbackRate = speed;
			console.log("New speed is " + speed);
		} 
		function skipVid() {
			var myVideo = document.querySelector("video"); 
			var currTime = myVideo.currentTime;

			var newTime = currTime + 15
			if (newTime <= myVideo.duration) {
				myVideo.currentTime = newTime;
				console.log("Original location " + currTime);
				console.log("New location " + newTime);
			} else {
				
				console.log("Original location " + currTime)
				console.log("Going back to beginning");
				console.log("New location 0");
				myVideo.currentTime = 0;
			}			
		} 
		function muteVid() {
			var myVideo = document.querySelector("video"); 
			if (document.getElementById("mute").innerHTML == "Mute") {
				myVideo.muted = true;
				document.getElementById("mute").innerHTML = "Unmute";
			} else {
				myVideo.muted = false;
				document.getElementById("mute").innerHTML = "Mute";
			}
		} 
		var slid = document.getElementById("slider");
		var output = document.getElementById("volume");


		slid.onchange = function() {	
			output.innerHTML = slid.value;
			var myVideo = document.querySelector("video"); 
			var tempVol = this.value / 100;
			vol = tempVol;
			myVideo.volume = vol;
			output.innerHTML =  this.value + "%";
			console.log(myVideo.volume);
		}

		function vintageClass() {
			document.querySelector("video").classList.add("oldSchool");
		}

		function origClass() {
			document.querySelector("video").classList.remove("oldSchool");
		}
