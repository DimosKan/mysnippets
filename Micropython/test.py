from machine import Pin
import utime

B = Pin(8 , Pin.OUT)
G = Pin(9 , Pin.OUT)
A = Pin(10 , Pin.OUT)
C = Pin(11 , Pin.OUT)
D = Pin(2 , Pin.OUT)
E = Pin(4 , Pin.OUT)
F = Pin(13 , Pin.OUT)
D1 = Pin(0 , Pin.OUT)
D2 = Pin(1 , Pin.OUT)
D3 = Pin(5 , Pin.OUT)
D4 = Pin(7 , Pin.OUT)
DEC = Pin(6 , Pin.OUT)
anokato = Pin(3 , Pin.OUT)

E.value(1)
F.value(1)
A.value(1)
D3.value(1)

sleep(10000)
D3.value(0)
D4.value(1)


