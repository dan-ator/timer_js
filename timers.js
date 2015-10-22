  var resetButton = document.querySelector("#reset");
  var startButton = document.querySelector("#start");
  var pauseButton = document.querySelector("#pause");
  var stopWatch = document.querySelector("#timer");
  var timerRunning = false;
  var seconds = 0;

  function updateTime() {
    stopWatch.innerHTML = ("Time Elapsed: " + seconds++);
  };


  startButton.addEventListener("click", function(){
    if (timerRunning === false) {
      timerId = setInterval(updateTime, 1000);
      timerRunning = true;
    }
  });

  pauseButton.addEventListener("click", function (){
    clearInterval(timerId);
    timerRunning = false;
  });

  resetButton.addEventListener("click", function (){
    clearInterval(timerId);
    stopWatch.innerHTML = "Stop Watch";
    seconds = 0;
    timerRunning = false;
  });
