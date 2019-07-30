
var hourHand = document.getElementById("hour"); //Assign variable to the hour hand image
var minuteHand = document.getElementById("minute"); //Assign variable to the minute hand image
var secondHand = document.getElementById("second"); //Assign variable to the second hand image


setInterval(function clockRotation() {
    var currentDate = new Date(); //To get the new current Date
    console.log(currentDate);
    let hour = currentDate.getHours(); //of the current Date, pull out the hour
    let minute = currentDate.getMinutes(); //of the current Date, pull out the minute
    let second = currentDate.getSeconds(); //of the current Date, pull out the second

    let hourHandPosition = hour*30 + ((minute * 6)/12) ; //hour hand moves 30 degrees an hour so just add to minute logic
    console.log(hour*30 + ((minute * 6)/12) ); 
    let minuteHandPosition = (minute * 6) + (second * 6)/60; //rate at which minute hand moves in relation to 
    let secondHandPosition = second * 6; //second hand moves 6 degrees every second

    // console.log(hourHandPosition)

    hourHand.style.transform = "rotate(" + hourHandPosition + "deg)"; //transfor hour css to rotate
    minuteHand.style.transform = "rotate(" + minuteHandPosition + "deg)";//transfor hour css to rotate
    secondHand.style.transform = "rotate(" + secondHandPosition + "deg)";//transfor hour css to rotate


}, 1000) //1 second interval on clock