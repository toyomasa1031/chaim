radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Happy)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
radio.setGroup(1)
basic.forever(function () {
	
})
