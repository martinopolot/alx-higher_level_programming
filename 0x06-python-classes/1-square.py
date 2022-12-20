#!/usr/bin/python3
# 1-square.py
# martin Opolot - @github - martinopolot
""" Define a class with Private instance attribute: size."""


class Square:
    """square"""
    def __init__(self, size):
        """
        initialize square attributes
        Args:
        size (int): size of square
        Returns:
        None
        """

        self.__size = size
