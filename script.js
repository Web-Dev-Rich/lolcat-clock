var time = new Date().getHours();
var messageText, image;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function() {
  if (time == partyTime) {
    messageText = "IZ PARTEE TIME!!";
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
  } else if (time == napTime) {
    messageText = "IZ NAP TIME…";
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  } else if (time == lunchTime) {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
  } else if (time == wakeupTime) {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
  } else if (time < noon) {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good morning!";
  } else if (time > evening) {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good Evening!";
  } else {
    image =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  var msg = document.getElementById("timeEvent");
  msg.innerHTML = messageText;

  var lolcat = document.getElementById("lolcat");
  lolcat.src = image;

  showCurrentTime();
}; //updateClock()

var showCurrentTime = function() {
  // display the string on the webpage
  var clock = document.getElementById("clock");

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set hours
  if (hours >= noon) {
    meridian = "PM";
  }
  if (hours > noon) {
    hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  // put together the string that displays the time
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
}; //showCurrentTime()

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function() {
  if (isPartyTime === false) {
    isPartyTime = true;
    time = partyTime;

    partyTimeButton.innerText = "Party Over";
    // color of the button should be "#0A8DAB" (bonus!
    partyTimeButton.style.backgroundColor = "#0A8DAB";
  } else {
    isPartyTime = false;
    time = new Date().getHours();
    // text in the button should read "PARTY TIME!"
    partyTimeButton.innerText = "PARTY TIME!";
    // color of the button should be "#222" (bonus!)
    partyTimeButton.style.backgroundColor = "#222";
  }
};

partyTimeButton.addEventListener("click", partyEvent);

var wakeUpEvent = function() {
  wakeUpTime = wakeUpTimeSelector.value;
};

var lunchEvent = function() {
  lunchTime = lunchTimeSelector.value;
};

var napEvent = function() {
  napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);
