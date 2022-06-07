const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score p label');
const gameOver = document.querySelector('.game-over');

const jump = () => {
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500)
}


//Score do jogo
let scorePoint = 0;
const pointsLoop = setInterval(() => {
  const pipePostition = pipe.offsetLeft;
  if (pipePostition) {
    scorePoint++;
    score.innerHTML = scorePoint
    lastPipePosition = pipePostition;
  }
  if(window.getComputedStyle(gameOver).display != 'none'){
    clearInterval(pointsLoop);
  }
  
  console.log(scorePoint);


}, 100)


//verify jump
const verifyPipe = () =>{
  const pipePostition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  // console.log(pipePostition)
  if (pipePostition <= 120 && pipePostition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePostition}px`

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`
    
    gameOver.style.display = 'inherit';
    mario.src = './images/game-over.png'
    mario.style.width = '75px';
    mario.style.marginLeft = '50px'


    clearInterval(loop);
  }
}

let loop = setInterval(verifyPipe, 10)

const reset = () => {
  if(window.getComputedStyle(gameOver).display != 'none'){
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    pipe.style.left = ``;
    pipe.style.right = `-80px`;
  
    mario.style = '';
    // mario.style.bottom = `0px`
    
    gameOver.style.display = 'none';
    mario.src = './images/mario.gif'
    mario.style.width = '150px';
    mario.style.marginLeft = '0'
    loop = setInterval(verifyPipe, 10)
  }  
}


document.addEventListener('keydown', jump);
document.addEventListener('keydown', reset);