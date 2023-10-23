from machine import Pin, Timer
import utime

timer = Timer()
trigger = Pin(14,Pin.OUT)
echo = Pin (15, Pin.IN)
led = Pin (16, Pin.OUT)
distance = 0

def get_distance(timer):
    global distance
    trigger.high()
    utime.sleep(0.00001)
    trigger.low()
    
    while echo.value() == 0 :
        start = utime.ticks_us()
    while echo.value() == 1 :
        stop = utime.ticks_us()
        
    duration = stop - start
    distance = (duration * 0.0343)/2
    print("Distance:",distance,"cm")
    return distance

timer.init(freq=1, mode = Timer.PERIODIC, callback=get_distance)
while True:
    
    if distance < 5:
        led.value(1)
    else:
        led.value(0)
        