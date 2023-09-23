# CS - Pointers to Children

Every node is a record containing the information necessary to access *info* and their
parent and/or children

However, the number of children is limited. In fact, if <mark>every node *x* has degree *k*
at most</mark>, it is possible to keep a pointer to each possible k children of x.

We will implement the version with k = 2, which represents a binary tree.

Example:

![CSPC Tree](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/CSPC-Tree.jpg?raw=TRUE)

## Data - k = 2

The structure of a node is a record composed of:

* **x.p**, pointer to the parent
* **x.left**, pointer to left child
* **x.right**, pointer to right child
* **x.key**, the information contained within the node

**Spatial Complexity**: S(n) = Θ(k*n)

* If k is constant S(n) = Θ(n)

## Parent

We can immediately find the father thanks to the new structure

```python
parent(Tree t, Node v)
    return v.p;
```

Final Time Complexity: <mark>T(n) = O(1)</mark>

## Children

It is very easy to find children by using this structure with k=2

```python
children(Tree t, Node v)
    l = create_list();
    if(v.left != NULL):
        insert(v.left, l);
    if(v.right != NULL):
        insert(v.right, l);
    return l;
```

Final Time Complexity: <mark>T(n) = O(1)</mark>

* Specific for a binary tree

# Attention

In the exam for the course,
this will be used to represent Binary Trees, unless anything else is specified
