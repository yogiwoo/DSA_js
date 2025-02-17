#print any string 5 times

def printStr(n):
    x=n
    if x>0:
        print("hello")
        printStr(n-1)
printStr(5)