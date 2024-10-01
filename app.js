

var day = ["Sun","Mon","Tue","Wed","Thru","Fri","Sat"];

var hourspan = document.getElementById('hour')
// console.log(hourspan)
// console.log(hourspan.innerText)
var minutesspan = document.getElementById('min')
// console.log(minutesspan)
var secondspan = document.getElementById('sec')
// console.log(secondspan)

setInterval(()=>{
  
  var time = new Date()
  hourspan.innerText = time.getHours();
  minutesspan.innerText = time.getMinutes();
  secondspan.innerText = time.getSeconds();


  var b = time.getDay();
  document.getElementById("day").innerText = day[b];




  var a=12;

  if (time.getHours()>12 && time.getHours()<24) {
    document.getElementById("duration").innerText= "PM"
  } else {
    document.getElementById("duration").innerText= "AM"
  }

  if (time.getHours()===0 ) {
  hourspan.innerText = 12;  
  } else if(time.getHours()>12 && time.getHours()<24) {
    hourspan.innerText = time.getHours()-a;
  }

  
},1000)