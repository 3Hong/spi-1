let Mastereceive = 0
let data = 0
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
pins.digitalWritePin(DigitalPin.P12, 1)
pins.spiPins(DigitalPin.P15, DigitalPin.P14, DigitalPin.P13)
pins.spiFormat(8, 3)
pins.spiFrequency(1000000)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    Mastereceive = pins.spiWrite(data++)
    // if (Mastereceive == 1) {
    // serial.writeNumber(Mastereceive)
    // }
    basic.pause(1000)
})
