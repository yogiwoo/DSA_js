# the number have exactly 2 factors 1 or itself
import math
def prime(n):
    cnt=0
    for i in range(1, int(math.sqrt(n)+1)):
        if n%i==0:
            cnt=cnt+1
            if n//i != i:
                cnt=cnt+1
    if cnt==2:
        return True
    else:
        return False

print(prime(12))        
    