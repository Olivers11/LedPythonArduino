from led import *
import eel
import sys
sys.path.append("..")
eel.init("htmls")

@eel.expose
def turnOnLed():
    onLed()


def turnOffLed():
    offLed()

eel.start("index.html", size=(400,200))

