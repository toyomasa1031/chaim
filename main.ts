radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . . . #
            # # # # .
            `)
    }
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
	
})
radio.setGroup(1)
