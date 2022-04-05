let userPoints=document.querySelector("#userPoints");
let compPoints=document.querySelector("#compPoints");
let choices=document.querySelectorAll(".choices");
let userResult=document.querySelector("#userResult");
let  resultText=document.querySelector("#resultText");
let compResult = document.querySelector("#compResult");
let userwin=0;
let compwin=0;
choices.forEach((choose,UserChoose)=>{
    choose.addEventListener("click",()=>{
        userResult.innerHTML=`${choose.innerHTML}
        <h3>User</h3>`;
        let computerChoose=Math.floor(Math.random() * 3);
       // console.log(computerChoose);
       if(computerChoose===0){
           compResult.innerHTML=`<i class="fas fa-hand-rock"></i>
           <h3>Comp</h3>`;
       }
       else if(computerChoose===1){
           compResult.innerHTML=`<i class="fas fa-hand-paper"></i>
           <h3>Comp</h3>`;
       }
       else if(computerChoose===2){
           compResult.innerHTML=`<i class="fas fa-hand-Scissors"></i>
           <h3>Comp</h3>`;
       }
       if(UserChoose===computerChoose){
           resultText.innerText=`Draw`;
       }
       else if(UserChoose===0 && computerChoose===1){
           compWin +=1;
           resultText.innerText=`Loss`;
       }
       else if(UserChoose===1 && computerChoose===2){
        compWin+=1;
        resultText.innerText=`Loss`;
    }
    else if(UserChoose===2 && computerChoose===0){
        compwin+=1;
        resultText.innerText=`Loss`;
    }
    else {
        userwin+=1;
        resultText.innerText=`Win`;
    }
    userPoints.innerText= userwin;
    compPoints.innerText= compwin;
    })
})