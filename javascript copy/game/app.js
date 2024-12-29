let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
});

function gameFlash(btn){
   btn.classList.add("gameflash");
   setTimeout(function(){
    btn.classList.remove("gameflash");
   },400);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
     btn.classList.remove("userflash");
    },400);
 }
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

     let randomIdx=Math.floor(Math.random()*3);
     let randomColor=btns[randomIdx];
     let randombtn=document.querySelector(`.${randomColor}`);
    //  console.log(randomColor);
    //  console.log(randomIdx);
    //  console.log(randombtn);
    gameseq.push(randomColor);
    console.log(gameseq)
    gameFlash(randombtn);
}
function checkAns(idx){
    //let idx=level-1;
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
       h2.innerHTML=`game over! your score was <br>${level}</br><br> press any key to start.`; 
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
       },150)
       reset();
    }
}

function btnPress() {
    console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}