#ptint all the divisors via mathematical way
import math
n=36
#in quotient and reminder will become same the stop the loop

#1/32 = 32 then 32/32 =1

def divisors():
    divs=[]
    for i in range(math.sqrt(n)):
        if i