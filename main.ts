let 거리 = 0
let 파 = 0
let 초 = 0
let 빨 = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB_RGB)
basic.forever(function () {
    basic.showIcon(IconNames.Skull)
})
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
basic.forever(function () {
    빨 = 0
    초 = 0
    파 = 255
    strip.showColor(neopixel.rgb(빨, 초, 파))
    basic.pause(1)
    for (let index = 0; index < 255; index++) {
        빨 += -1
        초 += 1
    }
    for (let index = 0; index < 255; index++) {
        파 += 1
        초 += -1
        strip.showColor(neopixel.rgb(빨, 초, 파))
        basic.pause(1)
    }
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    거리 = 340 * (pins.pulseIn(DigitalPin.P2, PulseValue.High) / 5000)
    basic.pause(100)
    if (거리 >= 30) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
        basic.pause(10)
    }
    if (거리 < 28) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 40)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 40)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 40)
        basic.pause(500)
    }
})
