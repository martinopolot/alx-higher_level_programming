#!/usr/bin/python3
"""
writeto a file
"""


def write_file(filename="", text=""):
    """
    write and encoding operation
    """
    with open(filename, "w", encoding="utf-8") as f:
        f.write(text)
    return len(text)
