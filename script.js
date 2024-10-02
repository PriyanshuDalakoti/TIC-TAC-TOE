let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
]

let turn0=true;
boxes.forEach((val)=>{
    val.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turn0){
            val.innerText="O"
            val.style.color="#52B2CF"
            turn0=false
        }
        else{
            val.innerText="X"
            turn0=true
            val.style.color="#D4AFB9"
        }
        val.disabled=true;
        checkWinner();
    }) 
})

const checkWinner =()=>{
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("Winner!",pos2Val)
                showWinner(pos2Val);
                disableboxes();
            }
        }
    }
}

const showWinner=(w)=>{
    msg.innerText=`Congratulations, Winner Is ${w}`;
    msgContainer.classList.remove("hide");
    
}

const disableboxes=()=>{
    for(let b of boxes){
        b.disabled=true;
    }
}

const enableboxes=()=>{
    for(let b of boxes){
        b.disabled=false;
        b.innerText=""
    }
}

const resetGame=()=>{
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);