let ENVIIIIIIIIIIIIIIIIIIIIIIIIIADO = 0
radio.onReceivedNumber(function (receivedNumber) {
    while (ENVIIIIIIIIIIIIIIIIIIIIIIIIIADO == 0) {
        basic.pause(100)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    radio.sendNumber(2)
    basic.pause(100)
    ENVIIIIIIIIIIIIIIIIIIIIIIIIIADO = 2
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        `)
    radio.sendNumber(3)
    basic.pause(100)
    ENVIIIIIIIIIIIIIIIIIIIIIIIIIADO = 3
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    radio.sendNumber(1)
    basic.pause(100)
    ENVIIIIIIIIIIIIIIIIIIIIIIIIIADO = 1
})
basic.forever(function () {
    radio.setGroup(33)
    radio.sendNumber(33)
})
