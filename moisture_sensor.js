let moist = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1)//power on
    moist = pins.analogReadPin(AnalogPin.P0)//SIG
    pins.digitalWritePin(DigitalPin.P8, 0)//power off
    let scalelevel = pins.map(moist, 50, 840, 0, 4)
    led.plot(0, scalelevel) // led plot on accordance to moisture level
    basic.pause(1000)
    led.unplot(0, scalelevel)
})
// dry 50 reading
// wet 840 reading
