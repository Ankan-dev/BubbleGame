var timecount=60;
var score=0;
var num=0;
var tm=document.querySelector(".time");
var pbtm=document.querySelector(".btmpnl");
function generate() {
    let bub = "";
    for (i = 1; i <= 126; i++) {
        let rn = Math.floor(Math.random() * 10);
        bub += `<div id="bubble">${rn}</div>`;
    }

    let pnl = document.querySelector(".btmpnl");
    pnl.innerHTML = bub;
}

function hit(){
    num=Math.floor(Math.random()*10);
    document.querySelector(".hitin").innerHTML=num;
}

function timer(){
    
    var timeint=setInterval(function(){
        if(timecount>0){
            timecount--;
            
        }
        else{
            tm.style.color="red";
            clearInterval(timeint);
            pbtm.innerHTML="";
            pbtm.innerHTML=`<div>GAME OVER<br><br>SCORE : ${score}</div>`
        }
        tm.innerHTML=timecount;
    },1000)
}

function scoreIncrease(){
    score=score+10;
    document.querySelector(".inscr").innerHTML=score;
}

var button=document.querySelector("#btn");
button.addEventListener("click",function(){
    button.style.display="none";
    generate();
    hit();
    timer();
    start();
})

function start(){
    pbtm.addEventListener("click",function(dets){
        if(Number(dets.target.textContent)===num){
            scoreIncrease();
            generate();
            hit();
        };
    })
}