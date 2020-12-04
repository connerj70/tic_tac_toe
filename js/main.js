var turn = 'O'

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
        console.log(n)
        console.log('about to append')
        el.appendChild(n)
        turn = 'O'
    } else {
        n.classList.add("o")
        n.textContent = 'O'
        el.appendChild(n)
        turn = 'X'
    }

    let end = checkEnd()

    if(end[0]) {
        turn = "END"
        alert(`congrats to ${end[1]} they won!`)
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