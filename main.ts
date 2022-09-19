let temperatura = 0
basic.forever(function () {
    temperatura = input.temperature()
    if (temperatura == 10) {
        basic.showString("¡Vamos a esquiar!")
    } else if (temperatura == 20) {
        basic.showString("¡Hágamos un picnic!")
    } else if (temperatura == 30) {
        basic.showString("¡Vamos a la playa!")
    } else if (temperatura == 40) {
        basic.showString("Mejor no salgas")
    } else {
        basic.showNumber(temperatura)
    }
})
