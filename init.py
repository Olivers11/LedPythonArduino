from led import *
import eel
import sys
sys.path.append("..")
eel.init("htmls")

@eel.expose
def process(p):
    if(p == 1):
        onLed()
    else:
        offLed()

eel.start("index.html", size=(400,200))
print("no se encontro")


