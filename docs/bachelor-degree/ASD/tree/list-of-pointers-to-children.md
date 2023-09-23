# CS - List of Pointers to Children

Implementation of Tree to use when we <mark> do not know A-PRIORI the count of children </mark>
of a specific node.

We find two types of nodes here:

1. First Type of Node
   1. Field with info
   2. Pointer to a **list** of its children
2. Second Type of Node:
   1. Pointer to a node
   2. Pointer to a node of type *list of children*

Example:

![LCP Tree](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/LCP-Tree.jpg?raw=TRUE)

There is a variation where there is only one type of nodes:
A node x with

* x.key
* x.p
* x.sons[] a pointer to an array of children

In this case the Space Complexity: S(n) = Θ(n)

## Conclusion

By implementing a tree in this way, we can represent an arbitrary number of children with the downside of having two different
kinds of nodes.

We are not going to use these structure.
