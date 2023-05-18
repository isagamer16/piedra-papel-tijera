input.onButtonPressed(Button.A, function () {
    tool = randint(1, 1)
    basic.showIcon(IconNames.SmallSquare)
})
input.onButtonPressed(Button.AB, function () {
    tool = randint(3, 3)
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    tool = randint(2, 2)
    basic.showIcon(IconNames.Square)
})
let tool = 0
radio.setGroup(107)
basic.forever(function () {
	
})
