def printNum(i,n):
    if i>n :
        return
    else:
        print(n)
        printNum(i-1,n)

def main():
    printNum(1,5)