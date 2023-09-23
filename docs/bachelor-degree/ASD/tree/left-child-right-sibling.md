# CS - Left Child, Right Sibling

CS is an implementation of tree having the same premise as the structure
[LCP Tree](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/2%20-%20Tree/4.2%20-%20CONNECTED%20STRUCTURES.md)

Constraints:

* **Binarized**: has only two pointers
* Used for: _General Tree_ implementation

Example:

![LCRS](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/LCRS-Tree.jpg?raw=TRUE)

## Data

Every **node** of the tree is composed of:

* x.key, info
* x.p, pointer to parent
* **x.left_child**, pointer to leftmost child
  * If it is leaf node, x.left_child = NULL
* **x.right_sibling**, pointer to the first sibling on the right (of a node x).
  * If it is the leftmost node, x.right_sibling = NULL

We can iterate through siblings or parents.

## Parent

Same as LCP Tree.

## Children

```python
children(Tree t, Node v)
    l = create_list();
    iter = v.left_child;
    while(iter != NULL):
        insert(iter, l);
        iter = iter.right_sibling;
    return l;
```

**Final Time Complexity**: T(n) = <mark>Θ(degree(𝑣))</mark>

* Suppose that insertion and deletion occur in O(1), since a node will be inserted and extracted once

# Attention

In the exam for the course, this will be used to represent General Trees,
unless anything else is specified.
In fact, when deleting and adding elements the CS structures are the most efficient ones covered in class.
