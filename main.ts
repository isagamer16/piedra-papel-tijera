radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (mi_jugada == 1) {
            basic.showString("EMPATE")
        }
        if (mi_jugada == 2) {
            basic.showString("PERDEDOR")
        }
        if (mi_jugada == 3) {
            basic.showString("GANADOR")
        }
    } else if (receivedNumber == 2) {
        if (mi_jugada == 1) {
            basic.showString("PERDEDOR")
        }
        if (mi_jugada == 2) {
            basic.showString("EMPATE")
        }
        if (mi_jugada == 3) {
            basic.showString("GANADOR")
        }
    } else if (receivedNumber == 3) {
        if (mi_jugada == 1) {
            basic.showString("PERDEDOR")
        }
        if (mi_jugada == 2) {
            basic.showString("GANADOR")
        }
        if (mi_jugada == 3) {
            basic.showString("EMPATE")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.SmallSquare)
    mi_jugada = 1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    basic.showIcon(IconNames.Scissors)
    mi_jugada = 3
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Square)
    mi_jugada = 2
})
let mi_jugada = 0
radio.setGroup(107)
basic.forever(function () {
	
})
