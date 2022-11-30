#!/usr/bin/python3
def remove_char_at(str, n):
    newstr = ""
    for j, c in enumerate(str):
        if j != n:
            newstr += c
    return newstr
