radio.onReceivedNumber(function (receivedNumber) {
    let mi_jugada = 0
    if (receivedNumber == 1) {
        if (mi_jugada == 1) {
            basic.showString("EMPATE")
        }
    } else if (receivedNumber == 1) {
        if (mi_jugada == 2) {
            basic.showString("PERDEDOR")
        }
    } else if (receivedNumber == 1) {
        if (mi_jugada == 3) {
            basic.showString("GANADOR")
        }
    } else {
        if (receivedNumber == 2) {
            if (mi_jugada == 1) {
                basic.showString("PERDEDOR")
            }
        } else if (receivedNumber == 2) {
            if (mi_jugada == 2) {
                basic.showString("EMPATE")
            }
        } else if (receivedNumber == 2) {
            if (mi_jugada == 3) {
                basic.showString("GANADOR")
            }
        }
        if (receivedNumber == 3) {
            if (mi_jugada == 1) {
                basic.showString("PERDEDOR")
            }
        } else if (receivedNumber == 3) {
            if (mi_jugada == 2) {
                basic.showString("GANADOR")
            }
        } else if (receivedNumber == 3) {
            if (mi_jugada == 3) {
                basic.showString("EMPATE")
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallSquare)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Square)
    radio.sendNumber(2)
})
radio.setGroup(107)
basic.forever(function () {
	
})
