def print_num(i,n):
    if i>n:
        return 
    else:
        print(i)
        print_num(i+1,n)

def main():
    print_num(1,5)

main()