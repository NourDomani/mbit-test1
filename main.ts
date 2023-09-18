//  this is the maine programme for the ir remote controlle
makerbit.onIrButton(IrButton.NUM8, IrButtonAction.Pressed, function on_ir_button_num8_pressed() {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinRight)
})
makerbit.onIrButton(IrButton.NUM6, IrButtonAction.Pressed, function on_ir_button_num6_pressed() {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinLeft)
})
makerbit.onIrButton(IrButton.NUM3, IrButtonAction.Pressed, function on_ir_button_num3_pressed() {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.TLeft, IrButtonAction.Pressed, function on_ir_button_tleft_pressed() {
    mbit_Robot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Black))
})
makerbit.onIrButton(IrButton.Light, IrButtonAction.Pressed, function on_ir_button_light_pressed() {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
})
makerbit.onIrButton(IrButton.NUM9, IrButtonAction.Pressed, function on_ir_button_num9_pressed() {
    mbit_Robot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
})
makerbit.onIrButton(IrButton.NUM7, IrButtonAction.Pressed, function on_ir_button_num7_pressed() {
    mbit_Music.Buzzer(DigitalPin.P0, mbit_Music.enBuzzer.Beep)
    mbit_Robot.Music_Car(mbit_Robot.enMusic.dadadum)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function on_ir_button_right_pressed() {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 103)
    basic.pause(200)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function on_ir_button_left_pressed() {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 103)
    basic.pause(200)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Minus, IrButtonAction.Pressed, function on_ir_button_minus_pressed() {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function on_ir_button_down_pressed() {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 103)
    basic.pause(1000)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.NUM4, IrButtonAction.Pressed, function on_ir_button_num4_pressed() {
    mbit_Robot.RGB_Car_Program().showBarGraph(9, 98)
})
makerbit.onIrButton(IrButton.NUM2, IrButtonAction.Pressed, function on_ir_button_num2_pressed() {
    mbit_Robot.RGB_Car_Program().showRainbow(1, 360)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function on_ir_button_up_pressed() {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 103)
    basic.pause(2000)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.NUM5, IrButtonAction.Pressed, function on_ir_button_num5_pressed() {
    basic.showIcon(IconNames.Happy)
})
makerbit.onIrButton(IrButton.Power, IrButtonAction.Pressed, function on_ir_button_power_pressed() {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
})
input.onLogoEvent(TouchButtonEvent.Touched, function on_logo_touched() {
    basic.showNumber(input.temperature())
})
makerbit.onIrButton(IrButton.NUM1, IrButtonAction.Pressed, function on_ir_button_num1_pressed() {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
})
makerbit.onIrButton(IrButton.NUM0, IrButtonAction.Pressed, function on_ir_button_num0_pressed() {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
})
makerbit.onIrButton(IrButton.BEEP, IrButtonAction.Pressed, function on_ir_button_beep_pressed() {
    mbit_Music.Buzzer(DigitalPin.P0, mbit_Music.enBuzzer.Beep)
    mbit_Robot.Music_Car(mbit_Robot.enMusic.ringtone)
})
makerbit.onIrButton(IrButton.TRight, IrButtonAction.Pressed, function on_ir_button_tright_pressed() {
    mbit_Robot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
})
makerbit.onIrButton(IrButton.Plus, IrButtonAction.Pressed, function on_ir_button_plus_pressed() {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
})
makerbit.connectIrReceiver(DigitalPin.P8)
