import eel
from led import *
import sys
sys.path.append("..")
eel.init("htmls")

@eel.expose
def process(p):
    if p == 1:
        onLed()
    else:
        offLed()

eel.start("index.html", size=(400,200))

