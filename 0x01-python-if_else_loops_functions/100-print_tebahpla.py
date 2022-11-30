#!/usr/bin/python3
for j in range(25, -1, -1):
    c = j + ord('A')
    if j % 2 == 1:
        c += 32
    print("{:c}".format(c), end="")
