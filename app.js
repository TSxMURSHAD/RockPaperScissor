function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Expected output: 0, 1 or 2
computerTurn = getRandomInt(3);
let h1 = document.querySelector("h1");
let buttons = document.querySelectorAll(".RPS");
let player=document.querySelector("#player");
let computer=document.querySelector("#computer");
buttons.forEach((button,i) => {
  button.addEventListener("click", () => {
    player.innerText=button.innerText;
    computer.innerText=buttons[computerTurn].innerText;
    buttons.forEach(btn=>{btn.disabled=true;});
    if(i===computerTurn){
        h1.innerText="Tie, want to play again?";
    }
    else if(i===0 && computerTurn===1 || i===1 && computerTurn===2 || i===2 && computerTurn===0){
        h1.innerText="Computer Wins, Better Luck Next Time";
    }
    else{
        h1.innerText="Player Wins, Congratulations!";
    }
  });
});

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  window.location.reload();
})