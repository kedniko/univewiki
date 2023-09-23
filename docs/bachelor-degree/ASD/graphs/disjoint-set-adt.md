# Disjoint Sets - Advanced Data Structures

A disjoint-set data structure maintains a collection S={S(1), S(2), ..., S(K)} of disjoint dynamic sets

* We identify each set by a **representative**, which is **some member of the set**.

Ex:

```python
{2,4,6,7,10}    -> 6 
{3,5}           -> 3        
{1,8,11}        -> 11
```

Here we find the primitive operations for this ADT.

## Make_Set(x)

Creates a new set whose only member (and thus representative) is x.

* Since the sets are disjoint, we require that **x not already** be **in some other set**.

`make_set(x) -> {x}`

## Union(x,y)

Unites the dynamic sets that contain x and y, say Sx and Sy, into a
new set that is the union of these two sets.

* We assume that the **two sets are disjoint** prior to the operation.

The representative of the resulting set is any member of **{Sx U Sy}**

`union(x,y) -> {Sx U Sy}`

## Find_Set(X)

Returns **a pointer to the representative** of the (unique) set containing x.

`find_set(x) -> representative(x)`

We can trivially demonstrate through a general algorithm how this ADT with its primitive operations, can
come handy when we are using it to represent graphs.

Let's say we want to look for all the connected components of a graph G.

### Connected-Components

This procedure, initially places each vertex  in its own set.
Then, for each edge (u,v) it unites the sets containing u and v

```python
connected_componets(G)
    for(vertex v in G.V):
        make_set(v);
    for(edge (u,v) in G.E):
        if(find_set(u)!= find_set(v)):
            union(u,v);
```

### Same-Component

```python
same_component(u,v)
    if(find_set(u)==find_set(v)):
        return true;
    else:
        return false;
```

## Efficiency Issue

However, from a T(n) point of view, we know sets like these are not the fastest way to our goal.

What we can do here is using trees to represent the sets.

![ex adt trees](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/exsetadt.png?raw=TRUE)

This means having a data structure where

* Tree
  * Balanced Trees
  * Root is the representative
* Operations
  * Make-Set -> Create a new tree with one element
  * Union -> Create a new tree where the one tree's root points to the other's root.
  * Find-Set -> From the node containing the key k, we go upwards until we find the root.
