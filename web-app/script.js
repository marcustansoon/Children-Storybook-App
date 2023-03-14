const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.parentNode.querySelector('.image');

    if (entry.isIntersecting) {
      square.classList.add('slide-animation');
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('slide-animation');
  });
});

// Add image zoom-out animation on view
document.querySelectorAll('.body').forEach(elem => observer.observe(elem));

function openFullscreen() {
  let docElm = document.documentElement;
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  } else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  } else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  } else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  }
  document.querySelector(".fullscreen-icon").hidden = true;
}

// Enter fullscreen handler
document.querySelector(".fullscreen-icon").addEventListener("click", ev => {
  openFullscreen();
})

// Exit fullscreen handler
document.addEventListener("fullscreenchange", e => {
  document.querySelector(".fullscreen-icon").hidden = !!document.fullscreenElement;
})

// Subtitle
let subtitleSequences = [
	// Image #1
	["no-1", "..."],
	// Image #2
	["no-2", "Once upon a time, there was a small girl named Lily"],
	["no-2", "She had long, curly hair and big brown eyes that sparkled in the sun"],
	["no-2", "Lily lived in an orphanage with many other children, but she always felt a little bit lonely"],
	["no-2", "However, she had a pretty flower that she treasured, and all she wanted was to give it to someone she loved"],
	// Image #3
	["no-3", "One day, Lily was walking down the street, holding her flower tightly"],
	["no-3", "She saw an old lady walking towards her, and without hesitation, she walked up to her and held out her flower"],
	["no-3", "The old lady smiled and patted her head, \"That's a beautiful flower, dear"],
	["no-3", "But you should keep it. It will make you happy"],
	["no-3", "Lily smiled at the old lady and kept walking, feeling a little bit disappointed"],
	["no-3", "She wanted to give her flower away, but the old lady didn't want it"],
	["no-3", "As she continued walking, Lily saw a little boy sitting on a bench, crying his eyes out"],
	// Image #4
	["no-4", "Without hesitation, she walked up to him and held out her flower"],
	["no-4", "\"Don't cry,\" she said softly. \"Take this flower. It will make you feel better"],
	["no-4", "The little boy stopped crying for a moment, but then he started again"],
	["no-4", "He looked at Lily and said, \"I don't want your stupid flower"],
	["no-4", "I just want my mommy"],
	["no-4", "And with that, he continued to cry"],
	// Image #5
	["no-5", "Lily's smile began to waver as she thought about how she just couldn't seem to give her flower away"],
	["no-5", "She started to feel a little bit discouraged and wished she had someone to talk to"],
	["no-5", "Finally, Lily arrived back at the orphanage"],
	["no-5", "She walked into her room, sat down on her bed, and looked at her flower"],
	["no-5", "She loved it so much, but she just couldn't seem to find anyone to give it to"],
	// Image #6
	["no-6", "That night, as she lay in bed, Lily began to cry"],
	["no-6", "She wanted a family more than anything in the world"],
	["no-6", "She wanted someone to love and someone to love her back"],
	["no-6", "The next day, Lily woke up feeling a little bit better"],
	["no-6", "She decided to take her flower with her everywhere she went, just in case she found someone to give it to"],
	["no-6", "As she walked down the street, Lily saw a man, looking sad"],
	["no-6", "Without hesitation, she walked up to him and held out her flower"],
	["no-6", "\"Here,\" she said softly. \"Take this flower. It will make you feel better.\""],
	// Image #7
	["no-7", "The man looked up at Lily and smiled"],
	["no-7", "\"Thank you, little one,\" he said"],
	["no-7", "\"This flower is beautiful. It's just what I needed today.\""],
	["no-7", "Lily smiled back at him, feeling a warm feeling in her chest"],
	["no-7", "She had finally found someone to give her flower to, and it had made him happy"],
	// Image #8
	["no-8", "As Lily walked back to the orphanage, she realized that giving her flower away had made her happy too"],
	["no-8", "She didn't need a family to be happy"],
	["no-8", "All she needed was to make someone else happy"],
	["no-8", "Years went by, and Lily grew up"],
	["no-8", "She eventually left the orphanage and started a family of her own"],
	// Image #9
	["no-9", "But she never forgot about her flower and how it had taught her to love and be loved"],
	["no-9", "Lily's flower-giving became a tradition among her family and friends"],
	["no-9", "And in a small way, Lily's flower-giving had brought a little bit of love and joy to the world"],
	["no-9", "reminding everyone who received a flower that they were loved and cherished"],
	["no-9", "And in that way, Lily's simple act of kindness had changed the world, one flower at a time"],
	// Image #10
	["no-10", "...END..."],
], currentSubtitleIndex = 0, currentView = "no-1", prevSubtitleIndex = "";

document.querySelector(".arrow-right").addEventListener("click", ev => {
	prevSubtitleIndex = currentSubtitleIndex;
	currentSubtitleIndex = (currentSubtitleIndex + 1) % subtitleSequences.length;
	document.querySelector(".subtitle").innerHTML = subtitleSequences[currentSubtitleIndex][1];
	if(currentView !== subtitleSequences[currentSubtitleIndex][0]){
    		document.querySelector("." + subtitleSequences[prevSubtitleIndex][0]).classList.remove('slide-animation');
		currentView = subtitleSequences[currentSubtitleIndex][0];
		window.scrollTo(0, document.querySelector("." + currentView).parentElement.parentElement.offsetTop)
	}
});
document.querySelector(".arrow-left").addEventListener("click", ev => {
	prevSubtitleIndex = currentSubtitleIndex;
	currentSubtitleIndex = (currentSubtitleIndex - 1) < 0 ? subtitleSequences.length - 1 : (currentSubtitleIndex - 1);
	document.querySelector(".subtitle").innerHTML = subtitleSequences[currentSubtitleIndex][1];
	if(currentView !== subtitleSequences[currentSubtitleIndex][0]){
    		document.querySelector("." + subtitleSequences[prevSubtitleIndex][0]).classList.remove('slide-animation');
		currentView = subtitleSequences[currentSubtitleIndex][0];
		window.scrollTo(0, document.querySelector("." + currentView).parentElement.parentElement.offsetTop)
	}
});

