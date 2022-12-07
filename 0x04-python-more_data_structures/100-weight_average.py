#!/usr/bin/python3
def weight_average(my_list=[]):
    if my_list:
        return sum((i * k for i, k in my_list)) / sum((k for _, k in my_list))
    if my_list == []:
        return 0
    return None
