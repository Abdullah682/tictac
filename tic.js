// let a=0;
// const fun1 = () =>{          
//     if(a===0){
//         document.getElementById("a1").innerHTML="X";
//         a=1;
//      }
//      else{
//         document.getElementById("a1").innerHTML="0";
//         a=0;
        
//      }
//      document.getElementById("a1").disabled = true; 
//     }
// const fun2 = () =>{          
//     if(a===0){
//         document.getElementById("a2").innerHTML="X";
//         a=1;
//      }
//      else{
//         document.getElementById("a2").innerHTML="0";
//         a=0;
//      }
//      document.getElementById("a2").disabled = true; 
//     }
// const fun3 = () =>{          
//     if(a===0){
//         document.getElementById("a3").innerHTML="X";
//         a=1;
//      }
//      else{
//         document.getElementById("a3").innerHTML="0";
//         a=0;
//      }
//      document.getElementById("a3").disabled = true; 
//     }
// const fun4 = () =>{          
//     if(a===0){
//         document.getElementById("a4").innerHTML="X";
//         a=1;
//      }
//      else{
//         document.getElementById("a4").innerHTML="0";
//         a=0;
//      }
//      document.getElementById("a4").disabled = true; 
//     }
// const fun5 = () =>{          
//     if(a===0){
//         document.getElementById("a5").innerHTML="X";
//         a=1;
//      }
//      else{
//         document.getElementById("a5").innerHTML="0";
//         a=0;
//      }
//      document.getElementById("a5").disabled = true; 
//     }
// const fun6 = () =>{          
//     if(a===0){
//         document.getElementById("a6").innerHTML="X";
//         a=1;
//      }
//      else{
//         document.getElementById("a6").innerHTML="0";
//         a=0;
//      }
//      document.getElementById("a6").disabled = true; 
//     }
// const fun7 = () =>{          
//     if(a===0){
//         document.getElementById("a7").innerHTML="X";
//         a=1;
//      }
//      else{
//         document.getElementById("a7").innerHTML="0";
//         a=0;
//      }
//      document.getElementById("a7").disabled = true; 
//     }
// const fun8 = () =>{          
//     if(a===0){
//         document.getElementById("a8").innerHTML="X";
//         a=1;
//      }
//      else{
//         document.getElementById("a8").innerHTML="0";
//         a=0;
//      }
//      document.getElementById("a8").disabled = true; 
//     }
// const fun9 = () =>{          
//     if(a===0){
//         document.getElementById("a9").innerHTML="X";
//         a=1;
//      }
//      else{
//         document.getElementById("a9").innerHTML="0";
//         a=0;
//      }
//      document.getElementById("a9").disabled = true; 
//     };

let buttons = document.querySelectorAll(".btn");
let results = document.querySelector("#result");
let winner=false;

let turn = true;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.innerText === "" && !winner) {
            if(turn) {
                btn.innerText = "X";            
                turn = false;
            } else {
                btn.innerText = "O";
                turn = true;
            }
            checkwinner();
        }
    });
});

const checkwinner=()=>{

     let b1 = document.getElementById("a1").innerText;
     let b2 = document.getElementById("a2").innerText;
     let b3 = document.getElementById("a3").innerText;
     let b4 = document.getElementById("a4").innerText;
     let b5 = document.getElementById("a5").innerText;
     let b6 = document.getElementById("a6").innerText;
     let b7 = document.getElementById("a7").innerText;
     let b8 = document.getElementById("a8").innerText;
     let b9 = document.getElementById("a9").innerText;

     if(b1 === b2 && b2 ===b3 && b1 !== ""){
         winner=true;
         document.getElementById("result").style.display="block";
         document.getElementById("new-game").style.display="block";
         results.innerText=" Congraturation, Winner is  " + b1;
     }
     else if (b4 === b5 && b5 === b6 && b4 !==""){
        winner=true;
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText=" Congraturation, Winner is  " + b4;
     }
     else if (b7 === b8 && b8 === b9 && b7 !==""){
        winner=true;
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText=" Congraturation, Winner is  " + b7;
     }
     else if (b1 === b4 && b4 === b7 && b1 !==""){
        winner=true;
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText="Congraturation, Winner is  " + b1;
     }
     else if (b2 === b5 && b5 === b8 && b2 !==""){
        winner=true;
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText=" Congraturation, Winner is  " + b2;
     }
     else if (b3 === b6 && b6 === b9 && b3 !==""){
        winner=true;
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText=" Congraturation, Winner is  " + b3;
     }
     else if (b1 === b5 && b5 === b9 && b1 !==""){
        winner=true;
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText=" Congraturation, Winner is  " + b1;
     }
     else if (b3 === b5 && b5 === b7 && b3 !==""){
        winner=true;
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText=" Congraturation, Winner is  " + b3;
     }
     else if (b1 !== "" && b2 !== "" && b3 !== "" && b4 !== "" && b5 !== "" && b6 !== "" && b7 !== "" && b8 !== "" && b9 !== "" && !winner) {
        document.getElementById("result").style.display="block";
        document.getElementById("new-game").style.display="block";
        results.innerText = "It's a draw!";
     }
};

const reset = () => {
    document.getElementById("new-game").style.display = "none";
    document.getElementById("result").style.display = "none";

  
    buttons.forEach((btn) => {
        btn.innerText = "";
        btn.disabled = false; 
    });

    winner = false; 
    turn = true; 
};
