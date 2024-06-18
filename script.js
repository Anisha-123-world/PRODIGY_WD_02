const min=document.getElementById('min');
const sec=document.getElementById('sec');
const ms=document.getElementById('ms');
const start=document.getElementById('start');
const reset=document.getElementById('reset');
const pause=document.getElementById('pause');
const list=document.getElementById('list')
const lap=document.getElementById('lap');
var laps=1;
var seconds=0;
var mili=1;
var minutes=0;
var timer;
function start_watch(){
    if(mili<10){
        ms.innerText="0"+mili;
    }
    else if(mili==100){
        ms.innerText="00";
        mili=0;
        seconds+=1;
        if(seconds<10){
            sec.innerText="0"+seconds;
        }
        else if(seconds==60){
            sec.innerText="00";
            seconds=0;
            minutes+=1;
            if(minutes<10){
                min.innerText="0"+minutes;
            }
            else{
                min.innerText=minutes;
            }
        }
        else{
            sec.innerText=seconds;
        }
    }
    else{
        ms.innerText=mili;
    }
    mili+=1;

};

start.addEventListener('click',function(){
    start.style.display="none";
    pause.style.display="inline-block";
    lap.style.display="inline-block";
    timer=setInterval(start_watch,10);

})
pause.addEventListener('click',function(){
    start.style.display="inline-block";
    pause.style.display="none";
    clearInterval(timer);
    clearInterval(milisec_timer);

})
reset.addEventListener('click',function(){
    mili=1;
    seconds=0;
    minutes=0;
    laps=1;
    list.innerHTML="";
    min.innerText="00";
    sec.innerText="00";
    ms.innerText="00";
    start.style.display="inline-block";
    pause.style.display="none";
    lap.style.display="none";
    clearInterval(timer);
    clearInterval(milisec_timer);

})
lap.addEventListener('click',function(){
    const li=document.createElement('li');
    var lap_mili;
    var lap_sec;
    var lap_min;
    if(mili<10){
        lap_mili="0"+(mili-1);
    }
    else{
        lap_mili=(mili-1);
    }
    if(seconds<10){
        lap_sec="0"+seconds;
    }
    else{
        lap_sec=seconds;
    }
    if(minutes<10){
        lap_min="0"+minutes;
    }
    else{
        lap_min=minutes;
    }
    li.innerHTML=`
    LAP (${laps}) &nbsp; &nbsp; &nbsp;  ${lap_min}:${lap_sec}:${lap_mili}
    `;
    list.append(li);
    laps+=1;
})
