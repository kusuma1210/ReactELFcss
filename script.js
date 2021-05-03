// slecting all revired elements
const selectBox=document.querySelector(".select-box"),
selectXBtn=selectBox.querySelector(".playerX"),
 selectOBtn=selectBox.querySelector(".playerO"),
 playBoard=document.querySelector(".play-board"),
allBox=document.querySelectorAll("selection span"),
 players=document.querySelector(".players"),
 resultBox=document.querySelector(".result-Box"),
 wonText=resultBox.querySelector(".won-text"),
 replayBtn=resultBox.querySelector("button");
 

 window.onload=()=>{
 for(let i=0;i<allBox.length;i++){
     allBox[i].setAttribute("onclick","clickedBox(this)");

 }




selectXBtn.onclick=()=>{
  selectBox.classList.add("hide"); //hide the select box on playerX buttonx clicked
 playBoard.classList.add("show");

}
selectOBtn.onclick=()=>{
selectBox.classList.add("hide"); //hide the select box on playerX buttonx clicked
playBoard.classList.add("show");
players.setAttribute("class","players active player");

}
}

let playerXIcon="fas fa-times";
 let playerOIcon="far fa-circle";
let playerSign="X";
let runBot=true;

 function clickedBox(element){
  //  console.log(element);
  if(players.classList.contains("player")){
    playerSign="O";
element.innerHTML=`<i class="${playerOIcon}"></i>`;
players.classList.add("active");
playerSign="O";
element.setAttribute("id",playerSign);
}else{
  element.innerHTML=`<i class="${playerXIcon}"></i>`;
  players.classList.add("active");
  element.setAttribute("id",playerSign);
}
selectWinner();
playBoard.style.pointerEvents="none";
element.style.pointerEvents="none";
let randomDelayTime=((Math.random()*1000) + 200).toFixed();



setTimeout(()=>{
  bot(runBot); 
},randomDelayTime);

 }

 function bot(runBot){
   if(runBot){
   playerSign="O";
   let array=[];
   for(let i=0 ; i<allBox.length; i++){
     if(allBox[i].childElementCount==0){
       array.push(i);
      //  console.log(i+""+"has no children");
     }

   }
   let randomBox=array[Math.floor(Math.random()*array.length)];
  console.log(randomBox);
  if(array.length>0){
    if(players.classList.contains("player")){
      allBox[randomBox].innerHTML=`<i class="${playerXIcon}"></i>`;
      players.classList.remove("active");
      playerSign="X";
      allBox[randomBox].setAttribute("id",playerSign);
           }else{
        allBox[randomBox].innerHTML=`<i class="${playerOIcon}"></i>`;
        players.classList.remove("active");
        allBox[randomBox].setAttribute("id",playerSign);
      }
      selectWinner();
   // allBox[randomBox].innerHTML=
  }
  allBox[randomBox].style.pointerEvents="none";
  playBoard.style.pointerEvents="auto";
  playerSign="X";
 }
}
function getclass(idname){
  return document.querySelector(".box" + idname).id;

}
function checkClass(val1,val2,val3,sign){
  if(getclass(val1)== sign && getclass(val2)== sign && getclass(val3)== sign){
    return true;
  }
}
  


function selectWinner(){
    if(checkClass(1,2,3,playerSign) || (checkClass(4,5,6,playerSign)||(checkClass(6,playerSign)||(checkClass(1,4,7,playerSign)||(checkClasses(2,5,8,playerSign)||(checkClasses(3,6,9,playerSign)||(checkClasse(1,5,9,playerSign)||(checkClasses(1,2,3,playerSign)))))))));
   console.log(playerSign + " " +"is the winner");
   runBot=false;
   bot(runBot);
   setTimeout(()=>{
playBoard.classList.remove("show");
playBoard.classList.add("show");
   },700);
   wonText.innerHTML=`player <p>${playerSign}</p> won the game!`;
  }
  else
  {
    if(getClass(1)!="" && getClass(2)!="" && getClass(3)!="" && getClass(4)!="" && getClass(5)!="" && getClass(6)!="" && getClass(7)!="" && getClass(8)!="" && getClass(9)!="")
    runBot=false;
   bot(runBot);
   setTimeout(()=>{
playBoard.classList.remove("show");
playBoard.classList.add("show");
   },700);
   wonText.textContent=`Match has been drawn!`;
  
}


replayBtn.onclick=()=>{
  window.location.reload();
}

