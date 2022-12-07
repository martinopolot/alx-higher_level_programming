#!/usr/bin/python3
def search_replace(my_list, search, replace):
    if my_list is not None:
        return [m if m != search else replace for m in my_list]
    return None
