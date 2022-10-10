radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else {
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.No)
    }
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
radio.setGroup(1)
