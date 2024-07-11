let mainBox = document.querySelector("#main");
const hit = document.getElementById("hit");
let score =0;

let timer = 60;

let audio =  document.getElementById("audio");
let getRandom=()=>{
    mainBox.innerHTML="";
    
    for(let i =0 ; i<=200; i++){
        const btn = document.createElement("input");
        btn.className="options"
        btn.value = Math.floor((Math.random()*100)/4)
        mainBox.appendChild(btn);
        
        btn.addEventListener("click",function(e){
            
            getRandom();
            if(btn.value==hit.value){
                hit.value=Math.floor((Math.random()*100)/4);
                score += 10;
                document.querySelector("#score").innerText = score;
                document.querySelector("#total").innerText=score;
            }else{
                score -= 5;
                document.querySelector("#score").innerText = score;
            }
        }
        )
    }
}
hit.value=Math.floor((Math.random()*100)/4);
getRandom();
var interval=setInterval(
    ()=>{
        timer--;
        if(timer===0){
            audio.pause();
            document.getElementById("timer").value=timer;
            document.getElementById("container").style.display="none";
            document.getElementById("gameOver").style.display="block";
            clearInterval(interval);
        }else if(timer<=10){
            audio.play();
            document.getElementById("timer").style.color="#b90000";
            document.getElementById("timer").style.fontWeight="500";
            document.getElementById("timer").value=timer;
        }
        else{
            document.getElementById("timer").value=timer;
        }
    },1000
)
document.getElementById("retry").addEventListener("click",function(){
    location.reload();
})
