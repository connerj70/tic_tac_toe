let player1 = window.prompt("Please enter player #1's name")
let player2 = window.prompt("Please enter player #2's name")

var turn = 'O'
let player1Wins = 0
let player2Wins = 0
let tiesNum = 0

let noti = document.getElementById('notification')
let p1Wins = document.getElementById('1-win')
let p2Wins = document.getElementById('2-win')
let ties = document.getElementById('ties')

var happyAudio = new Audio('happy.mp3');
var sadAudio = new Audio('sad.mp3');


p1Wins.innerText = `${player1} wins: ${player1Wins}`
p2Wins.innerText = `${player2} wins: ${player2Wins}`
ties.innerText = `${tiesNum}`

noti.innerText = `It's ${player1}'s turn`

function clicked(id) {

    if(turn == "END") {
        alert("This game is over. Refresh the page to play again.")
        return
    }

    let el = document.getElementById(id);
    let o = occupied(el)

    if (o === true) {
        alert('You cannot move on an already occupied square!')
        return
    }
    n = document.createElement('div')

    if(turn === 'X') {
        n.classList.add("x")
        n.textContent = 'X'
        el.appendChild(n)
        turn = 'O'
        noti.innerText = `It's ${player1}'s turn`

    } else {
        n.classList.add("o")
        n.textContent = 'O'
        el.appendChild(n)
        turn = 'X'
        noti.innerText = `It's ${player2}'s turn`
    }

    let end = checkEnd()

    if(end[0]) {
        turn = "END"
        if (end[1] === 'o') {
            noti.innerText = `congrats to ${player1}, they won!`
            player1Wins++
            p1Wins.innerText = `${player1} wins: ${player1Wins}`
            happyAudio.play();

        } else if (end[1] === 'x') {
            noti.innerText = `congrats to ${player2}, they won!`
            player2Wins++
            p2Wins.innerText = `${player2} wins: ${player2Wins}`
            happyAudio.play();
        } else {
            noti.innerText = `It's a tie!`
            tiesNum++
            ties.innerText = `${tiesNum}`
            sadAudio.play();
        }
        playAgainBtn = document.createElement('button')
        playAgainBtn.innerText = "Play Again?"
        playAgainBtn.onclick = function() {
            happyAudio.pause()
            happyAudio.currentTime = 0
            sadAudio.pause()
            sadAudio.currentTime = 0
            turn = 'o'
            noti.innerText = `It's ${player1}'s turn`
            let els = getEls()
            
            els.forEach((el) => {
                if(el.childNodes.length > 0){
                    el.removeChild(el.childNodes[0])
                }
            })
        }
        noti.appendChild(playAgainBtn)
    }
}

function occupied(el) {
   if (el.firstChild) {
       return true
   }
   return false
}

function checkEnd() {
    let els = getEls()
    console.log(els)

    let endR = checkRows(els)
    let endC = checkCols(els)
    let endD = checkDiags(els)

    if(endR[0]) {
        return endR
    }
    if(endC[0]) {
        return endC
    }
    if(endD[0]) {
        return endD
    }

    let tie = checkTie(els)
    if (tie) {
        return [true, 'TIE']
    }

    return [false]
}

function getEls() {
    let els = [];
    for(var i=1; i < 10; i++) {
        let el = document.getElementById(i.toString())
        els.push(el)
    }
    return els
}

function checkTie(els) {
    for(var i=0; i < els.length; i++) {
        if (!els[i].firstChild) {
            return false
        }
    }
    return true
}

function checkRows(els) {
    if ((els[0].firstChild && els[0].firstChild.classList[0] === 'o') && (els[1].firstChild && els[1].firstChild.classList[0] === 'o') && (els[2].firstChild && els[2].firstChild.classList[0] === 'o')) {
        return [true, 'o']
    }
    if ((els[3].firstChild && els[3].firstChild.classList[0] === 'o') && (els[4].firstChild && els[4].firstChild.classList[0] === 'o') && (els[5].firstChild && els[5].firstChild.classList[0] === 'o')) {
        return [true, 'o']
    }
    if ((els[6].firstChild && els[6].firstChild.classList[0] === 'o') && (els[7].firstChild && els[7].firstChild.classList[0] === 'o') && (els[8].firstChild && els[8].firstChild.classList[0] === 'o')) {
        return [true, 'o']
    }

    if ((els[0].firstChild && els[0].firstChild.classList[0] === 'x') && (els[1].firstChild && els[1].firstChild.classList[0] === 'x') && (els[2].firstChild && els[2].firstChild.classList[0] === 'x')) {
        return [true, 'x']
    }
    if ((els[3].firstChild && els[3].firstChild.classList[0] === 'x') && (els[4].firstChild && els[4].firstChild.classList[0] === 'x') && (els[5].firstChild && els[5].firstChild.classList[0] === 'x')) {
        return [true, 'x']
    }
    if ((els[6].firstChild && els[6].firstChild.classList[0] === 'x') && (els[7].firstChild && els[7].firstChild.classList[0] === 'x') && (els[8].firstChild && els[8].firstChild.classList[0] === 'x')) {
        return [true, 'x']
    }
    return false
}

function checkCols(els) {
    if ((els[0].firstChild && els[0].firstChild.classList[0] === 'o') && (els[3].firstChild && els[3].firstChild.classList[0] === 'o') && (els[6].firstChild && els[6].firstChild.classList[0] === 'o')) {
        return [true, 'o']
    }
    if ((els[1].firstChild && els[1].firstChild.classList[0] === 'o') && (els[4].firstChild && els[4].firstChild.classList[0] === 'o') && (els[7].firstChild && els[7].firstChild.classList[0] === 'o')) {
        return [true, 'o']
    }
    if ((els[2].firstChild && els[2].firstChild.classList[0] === 'o') && (els[5].firstChild && els[5].firstChild.classList[0] === 'o') && (els[8].firstChild && els[8].firstChild.classList[0] === 'o')) {
        return [true, 'o']
    }

    if ((els[0].firstChild && els[0].firstChild.classList[0] === 'x') && (els[3].firstChild && els[3].firstChild.classList[0] === 'x') && (els[6].firstChild && els[6].firstChild.classList[0] === 'x')) {
        return [true, 'x']
    }
    if ((els[1].firstChild && els[1].firstChild.classList[0] === 'x') && (els[4].firstChild && els[4].firstChild.classList[0] === 'x') && (els[7].firstChild && els[7].firstChild.classList[0] === 'x')) {
        return [true, 'x']
    }
    if ((els[2].firstChild && els[2].firstChild.classList[0] === 'x') && (els[5].firstChild && els[5].firstChild.classList[0] === 'x') && (els[8].firstChild && els[8].firstChild.classList[0] === 'x')) {
        return [true, 'x']
    }
    return false
}

function checkDiags(els) {
    if ((els[0].firstChild && els[0].firstChild.classList[0] === 'o') && (els[4].firstChild && els[4].firstChild.classList[0] === 'o') && (els[8].firstChild && els[8].firstChild.classList[0] === 'o')) {
        return [true, 'o']
    }
    if ((els[2].firstChild && els[2].firstChild.classList[0] === 'o') && (els[4].firstChild && els[4].firstChild.classList[0] === 'o') && (els[6].firstChild && els[6].firstChild.classList[0] === 'o')) {
        return [true, 'o']
    }
    if ((els[0].firstChild && els[0].firstChild.classList[0] === 'x') && (els[4].firstChild && els[4].firstChild.classList[0] === 'x') && (els[8].firstChild && els[8].firstChild.classList[0] === 'x')) {
        return [true, 'x']
    }
    if ((els[2].firstChild && els[2].firstChild.classList[0] === 'x') && (els[4].firstChild && els[4].firstChild.classList[0] === 'x') && (els[6].firstChild && els[6].firstChild.classList[0] === 'x')) {
        return [true, 'x']
    }
    return false
}