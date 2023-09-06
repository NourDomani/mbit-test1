makerbit.onIrButton(IrButton.NUM3, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Light, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 103)
    basic.pause(200)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 103)
    basic.pause(200)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Minus, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 103)
    basic.pause(1000)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.NUM2, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Program().showRainbow(1, 360)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 103)
    basic.pause(2000)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
})
makerbit.onIrButton(IrButton.NUM1, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
})
makerbit.onIrButton(IrButton.NUM0, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
})
makerbit.onIrButton(IrButton.BEEP, IrButtonAction.Pressed, function () {
    mbit_Music.Buzzer(DigitalPin.P2, mbit_Music.enBuzzer.Beep)
})
makerbit.onIrButton(IrButton.Plus, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
})
makerbit.connectIrReceiver(DigitalPin.P8)
