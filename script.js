const DaysE1=document.getElementById('days');
const HoursE1=document.getElementById('hours');
const MinutesE1=document.getElementById('mins');
const SecondsE1=document.getElementById('seconds');

const newYearsDate="1 Jan 2022";
function Countdown(){
    newyears=new Date(newYearsDate);
    let todayDate=new Date();

    var totalSeconds=Math.floor((newyears-todayDate)/1000);
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    DaysE1.innerText=formatTime(days);
    HoursE1.innerHTML=formatTime(hours);
    MinutesE1.innerHTML=formatTime(mins);
    SecondsE1.innerText=formatTime(seconds);
};

function formatTime(time){
    if(time<10){
        time=`0${time}`;
    }
    return time;
}
Countdown();

setInterval(Countdown,1000);

