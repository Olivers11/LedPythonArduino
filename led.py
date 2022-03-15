import pyfirmata

PORT="/dev/ttyUSB0"
BOARD = pyfirmata.Arduino(PORT)


def onLed():
    BOARD.digital[13].write(1)

def offLed():
    BOARD.digital[13].write(0)


