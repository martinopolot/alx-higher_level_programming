#!/usr/bin/python3
"""
reading file
"""


def read_file(filename=""):
    """
    reading operation
    """
    with open(filename, "r", encoding="utf-8") as f:
        print(f.read(), end="")
