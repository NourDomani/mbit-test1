#this is test
def on_ir_button_num8_pressed():
    mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_SPINRIGHT)
makerbit.on_ir_button(IrButton.NUM8,
    IrButtonAction.PRESSED,
    on_ir_button_num8_pressed)

def on_ir_button_num6_pressed():
    mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_SPINLEFT)
makerbit.on_ir_button(IrButton.NUM6,
    IrButtonAction.PRESSED,
    on_ir_button_num6_pressed)

def on_ir_button_num3_pressed():
    mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_STOP)
makerbit.on_ir_button(IrButton.NUM3,
    IrButtonAction.PRESSED,
    on_ir_button_num3_pressed)

def on_ir_button_light_pressed():
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.PINKISH)
makerbit.on_ir_button(IrButton.LIGHT,
    IrButtonAction.PRESSED,
    on_ir_button_light_pressed)

def on_ir_button_num9_pressed():
    mbit_Robot.RGB_Car_Program().show_color(neopixel.colors(NeoPixelColors.RED))
makerbit.on_ir_button(IrButton.NUM9,
    IrButtonAction.PRESSED,
    on_ir_button_num9_pressed)

def on_ir_button_num7_pressed():
    basic.show_number(7)
makerbit.on_ir_button(IrButton.NUM7,
    IrButtonAction.PRESSED,
    on_ir_button_num7_pressed)

def on_ir_button_right_pressed():
    mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_RIGHT, 103)
    basic.pause(200)
    mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_STOP)
makerbit.on_ir_button(IrButton.RIGHT,
    IrButtonAction.PRESSED,
    on_ir_button_right_pressed)

def on_ir_button_left_pressed():
    mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_LEFT, 103)
    basic.pause(200)
    mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_STOP)
makerbit.on_ir_button(IrButton.LEFT,
    IrButtonAction.PRESSED,
    on_ir_button_left_pressed)

def on_ir_button_minus_pressed():
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.WHITE)
makerbit.on_ir_button(IrButton.MINUS,
    IrButtonAction.PRESSED,
    on_ir_button_minus_pressed)

def on_ir_button_down_pressed():
    mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_BACK, 103)
    basic.pause(1000)
    mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_STOP)
makerbit.on_ir_button(IrButton.DOWN,
    IrButtonAction.PRESSED,
    on_ir_button_down_pressed)

def on_ir_button_num4_pressed():
    mbit_Robot.RGB_Car_Program().show_bar_graph(9, 98)
makerbit.on_ir_button(IrButton.NUM4,
    IrButtonAction.PRESSED,
    on_ir_button_num4_pressed)

def on_ir_button_num2_pressed():
    mbit_Robot.RGB_Car_Program().show_rainbow(1, 360)
makerbit.on_ir_button(IrButton.NUM2,
    IrButtonAction.PRESSED,
    on_ir_button_num2_pressed)

def on_ir_button_up_pressed():
    mbit_Robot.car_ctrl_speed(mbit_Robot.CarState.CAR_RUN, 103)
    basic.pause(2000)
    mbit_Robot.car_ctrl(mbit_Robot.CarState.CAR_STOP)
makerbit.on_ir_button(IrButton.UP, IrButtonAction.PRESSED, on_ir_button_up_pressed)

def on_ir_button_num5_pressed():
    basic.show_icon(IconNames.HAPPY)
makerbit.on_ir_button(IrButton.NUM5,
    IrButtonAction.PRESSED,
    on_ir_button_num5_pressed)

def on_ir_button_power_pressed():
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
makerbit.on_ir_button(IrButton.POWER,
    IrButtonAction.PRESSED,
    on_ir_button_power_pressed)

def on_logo_touched():
    basic.show_number(input.temperature())
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def on_ir_button_num1_pressed():
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.BLUE)
makerbit.on_ir_button(IrButton.NUM1,
    IrButtonAction.PRESSED,
    on_ir_button_num1_pressed)

def on_ir_button_num0_pressed():
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.CYAN)
makerbit.on_ir_button(IrButton.NUM0,
    IrButtonAction.PRESSED,
    on_ir_button_num0_pressed)

def on_ir_button_beep_pressed():
    mbit_Music.buzzer(DigitalPin.P0, mbit_Music.enBuzzer.BEEP)
    mbit_Robot.Music_Car(mbit_Robot.enMusic.RINGTONE)
makerbit.on_ir_button(IrButton.BEEP,
    IrButtonAction.PRESSED,
    on_ir_button_beep_pressed)

def on_ir_button_tright_pressed():
    mbit_Robot.RGB_Car_Program().show_color(neopixel.colors(NeoPixelColors.GREEN))
makerbit.on_ir_button(IrButton.TRIGHT,
    IrButtonAction.PRESSED,
    on_ir_button_tright_pressed)

def on_ir_button_plus_pressed():
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.GREEN)
makerbit.on_ir_button(IrButton.PLUS,
    IrButtonAction.PRESSED,
    on_ir_button_plus_pressed)

makerbit.connect_ir_receiver(DigitalPin.P8)