//Functions

function startStop() {

    if(!flag){
      clearInterval(stopFirst);
      flag = true;
    }else{
      stopFirst = setInterval(function() {
          a = a + 0.01;
          time.text(a.toFixed(2));
        },10);
      flag = false;
  };
};

function reset() {
    a = 0;
    time.text(a.toFixed(2));
};

function record() {
  recordTime.prepend(`<p>${a.toFixed(2)}</p>`)
};

//Global variables

var time = $('.time');
var startStopButton = $('.start_stop');
var resetButton = $('.reset');
var recordButton = $('.record_time');
var recordTime = $('.record_table');
var flag = true;
var a = 0;
var stopFirst;

//Events
$(document).ready(function functionName(){

  startStopButton.click(startStop);

  resetButton.click(reset);

  recordButton.click(record);

  $(document).keypress(function(e) {
      //s key
      if(e.which == 115) {
          startStop();
      // t key
      }else if(e.which == 116){
          reset();
      //r key
      }else if(e.which == 114){
        record();
      }
  });
})
