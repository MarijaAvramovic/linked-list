You will need two classes or factories:


Build the following functions in your linked list class / factory:

append(value) adds a new node containing value to the end of the list.
prepend(value) adds a new node containing value to the start of the list.
size() returns the total number of nodes in the list.
head() should return the value of the first node in the list. If the list is empty, it should return undefined.
tail() should return the value of the final node in the list. If the list is empty, it should return undefined.
at(index) should return the value of the node at the given index. If there’s no node at the given index, it should return undefined.
pop() should remove the head node from the list and return its value. If it’s used on an empty list, it should just return undefined.
contains(value) returns true if the passed in value is in the list and otherwise returns false.
findIndex(value) returns the index of the node containing the given value. If the value can’t be found in the list, it should return -1. If more than one node has a value matching the given value, it should return the index of the first node with the matching value.
toString() represents your LinkedList objects as strings, so you can print them out and preview them in the console. If the list is empty, it should return an empty string. The format should be: ( value ) -> ( value ) -> ( value ) -> null.