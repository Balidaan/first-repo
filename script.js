let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  displayTime.innerHTML = h + ":" + m + ":" + s;
}

function start() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

function stop() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}

function lap() {
  var list = document.getElementById("list");
  if(hours<10){
    h="0"+hours;
  }
  if(minutes<10){
    m="0"+minutes;
  }
  if(seconds<10){
    s="0"+seconds;
  }

  list.append(h + " : " + m + " : " + s);

  document.getElementById("list").innerHTML += "<br>";
}
