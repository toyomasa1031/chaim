radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        角度 = 90
        pins.servoWritePin(AnalogPin.P0, 角度)
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            # # . . .
            # # . . .
            `)
        角度 = 0
        pins.servoWritePin(AnalogPin.P0, 角度)
    }
    if (receivedNumber == 1) {
        角度 = 90
        pins.servoWritePin(AnalogPin.P2, 角度)
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . . . # #
            . . . # #
            `)
        角度 = 0
        pins.servoWritePin(AnalogPin.P2, 角度)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(100)
    for (let index = 0; index < 11; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(200)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(200)
        strip.showRainbow(1, 360)
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
input.onButtonPressed(Button.B, function () {
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(100)
    for (let index = 0; index < 11; index++) {
        strip.rotate(-1)
        strip.show()
        basic.pause(200)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
let strip: neopixel.Strip = null
let 角度 = 0
radio.setGroup(2)
角度 = 0
strip = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
pins.servoWritePin(AnalogPin.P0, 角度)
pins.servoWritePin(AnalogPin.P2, 角度)
