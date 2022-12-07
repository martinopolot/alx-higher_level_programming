#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    if matrix is not None:
        return list(map(
            lambda row: list(map(
                lambda m: m ** 2, row
            )),
            matrix
        ))
    return None
