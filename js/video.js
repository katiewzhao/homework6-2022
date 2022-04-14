var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("The current volume is " + video.volume)
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate = video.playbackRate*0.95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate = video.playbackRate/0.95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	console.log("The value of mute is " + video.muted)
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 < video.duration){
		video.currentTime += 15
	}
	else {
		video.currentTime = 0
	}
	console.log(video.currentTime)
});
