#ptint all the divisors via mathematical way
import math

#in quotient and reminder will become same the stop the loop

#1/32 = 32 then 32/32 =1
#time complexity O(n log n) n is the number of factors

def divisors(n):
    divs=[]
    for i in range(1,int(math.sqrt(n))+1):
        if n%i==0:
            divs.append(i)
            if (n//i) !=i:
                divs.append(n//i)
    return divs

ans=divisors(36)
print(ans)