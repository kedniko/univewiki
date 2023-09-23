# Floyd-Warshall

Floyd-Warshall's Dynamic Programming Bottom-Up algorithm solves the **Multiple-Source, Multiple-Destination**
shortest-paths problem on a weighted, directed graph G=(V,E, w) in the general case
where there could be negative weights, but we assume that there are **no negative-weight cycles**.

So the algorithm finds all the distances for all pairs, also called **all-pairs shortest-path**.

We assume that:

1. Let G = (V,E, `w:E->R`)
2. Each vertex has a number like so V={1,2,...,n}.
3. We accept negative edges
4. No negative-weight cycles
   1. Even though the algorithm can be used to locate negative cycles, We just need to
   look at the **main diagonal**. **If it contains numbers lower than 0**, then there are negative cycles.

Since the algorithm performs operation in a matrix-like data structure, represent the
entry graph as a matrix. The algorithm, takes a matrix W for input and returns a matrix D
in output, which is the <mark>matrix of distances</mark>. Another version of the
algorithm returns the function of predecessors.

It **works with negative-weight cycles, but it is not reliable**.

### Introduction

With the _tools_ we have used until now, can we find a solution for this problem?
We could be design Dijkstra or a BF algorithm for all-pairs like so:

```python
Iterated_Dijkstra(G, w)
    for (u in G.V):
        Dijkstra(G, w, u); 
```

Complexity

| Density \ Algorithm | Iterated_Dijkstra_arr | It_Dijkstra_heap | It_BF  |
|---------------------|-----------------------|------------------|--------|
| Dense               | O(n^2)                | O(n^3*log(n))    | O(n^4) |
| Sparse              | O(n^3)                | O(n^2*log(n))    | O(n^3) |

But can we improve this?

## Data Structures

As stated before, the algorithm performs operation in a matrix-like data structure,
represent the entry graph as a matrix.

**INPUT**: The matrix representing the graph, <mark>**W = D^(k=0), with w(ij) ∈ R(nxn)**</mark> such that:

* **0**, if `i==j`
  * Main diagonal, if `i==j < 0` we found a negative cycle.
* **weight w(i,j)**, if `i!=j AND (i,j)∈E`
  * If there is an edge
* **+inf()**, if `i!=j AND (i,j)∉E`

**OUTPUT**: The matrix, <mark>D = D^(k=n) with d(ij) ∈ R(nxn)</mark> in which we expect **d(ij) = δ(i,j)**

* **_D_(ij) = {p=<x0, ..., xq> | p is a simple path between x0=i and xq=j}**
  * It is _the set of simple paths from i to j_ (it can be empty)
  * We assume this because set of simple SPs is finite
* **Π** The predecessors' matrix with π(ij), but we will not cover this part.
  * **NIL** if i=j or w(ij)=+inf()
  * **i** if i!=j and w(ij)< inf()

The algorithm FW starts from _D_^0 = W, and produces a sequence of matrices: _D_^1, _D_^2, ..., _D_^n

* When _D_^n, namely D, the final matrix represents the real-distances matrix.

How do we compute these matrices? Given the matrix _D_^k-1, how do we compute _D_^k?

* This equals to computing d^k(ij), given d^k-1(ij)!

## Correctness Demonstration

To go from W (or D^0) to D (or D^n), we need to first add some more notions:

1) Intermediate Vertices
2) D k-limited
3) Elementary Set Principle

#### 2 - D k-limited

For any i,j∈V, and k∈{1,...,n}

* _D_^k(ij) = {p∈_D_(ij) | x(l)<= k, ∀l=1, ..., q-1}, **All the paths p from i to j where the intermediate vertices xl numbers are <= k**
  * When **k = 0, d^0(ij) = w(i,j)**
    * A path from vertex i to vertex j with no intermediate vertex numbered higher than 0 has no intermediate vertices at all.
    Such a path has at most one edge.
    * D^0(ij) = W
  * When k = n we found the SP between two vertices, d(ij) = δ(i,j)
* _D_^k(ij) ⊆ _D_^(k+1)(ij)
* When k=n, _D_^n(ij) = _D_(ij)

So if we consider d^k(ij) = min(w(p)| p∈_D_^k(ij))

* If k=n, then the quantity we want to compute is **δ(i,j) = d^n(ij)**
* So computing the real distance equals computing the elements of the matrix _D_

#### 3 - An Elementary Set Principle

Given a set X, how do we determine the minimum element of x?

* Let's partition X into Y and Z, then: min(X) = min(min(Y), min(Z))
* We can recursively partition the partitions and result will not change

### Demonstration

Let **G**=(V,E, w:E-->R) be a directed, edge-weighted graph with no negative-weight cycles included in E.
Let each vertex in V have distinct number associated with it, from 1 to n.
Let W = D^0, be the matrix representing the graph such that d^0(ij) equals:

* **0**, if `i==j`
* **weight w(i,j)**, if `i!=j AND (i,j)∈E`
* **+inf()**, if `i!=j AND (i,j)∉E`

When F.W ends, namely **when k=n, D^k(ij) = D(ij) is the set of ALL-PAIRS SIMPLE SP**

* D^k(ij) = {p∈_D_(ij) | x(l)<= k, ∀l=1, ..., q-1}, with d^k(ij) = min(w(p)| p∈_D_^k(ij))
  * It contains all the simple SPs p(ij) such that all their intermediate vertices are `xl <= k`.
* D(ij) = {p=<x0, ..., xq> | p is a simple path between x0=i and xq=j}, with d(ij) = δ(i,j)

We want to demonstrate how to go from D^k-1 to D^k:

1) D^k(ij) = {p∈_D_(ij) | x(l)<= k, ∀l=1, ..., q-1}, with d^k(ij) = min(w(p)| p∈_D_^k(ij)) *by definition*
2) **D^k(ij) = {Ď^k(ij) U  D^k-1(ij)}** is a set, and it can be split into two partitions:
   * Ď^k(ij), the set of paths p(i,j) **including** a particular node **k**
   * D^k-1(ij), the set of paths p(i,j)  **not including k**, only the previous ones
3) **d^k(ij) = min(w(p), p∈_D_^k(ij))**, for _D k-limited property_
   * d^k(ij) = min{ (min(w(p)),p∈Ď^k(ij)), (min(w(p)) p∈D^k-1(ij))}, trivially
4) Since Ď^k(ij) is the set of SIMPLE SP p(ij) not including k, _by decomposition of distances_:
   * **min{w(p)),p∈Ď^k(ij)} = min{d^k-1(ik) + d^k-1(kj)**}
   * It is equal to the sum of two SIMPLE SP p(ik) + p(kj) **at time k-1, when xl<=k-1** and k is not included.
5) **d^k(ij) = min{d^k-1(ik)+ d^k-1(kj), d^k-1(ij)}**, which is equal to:
   * w(i,j), if k = 0;
   * min{d^k-1(ik)+ d^k-1(kj), d^k-1(ij)}, if k>=1;

## Algorithm

```python
FLOYD_WARSHALL(W)
    n = count(W.rows);
    D^0 = W;
    for(k=1 to n): #Computes the sequence of D^k
        let D^k = (d^k(ij)) be a new nxn matrix
        for(i=1 to n):
            for(j=1 to n):
                d^k(ij) = min{d^k-1(ik)+ d^k-1(kj), d^k-1(ij)};
    return D^n;
```

**Final Time Complexity**: T(n) = Θ(n**3)

### Complexity Demonstration

1) First operations are constant: O(1)
2) 3 nested for: T(n) = Θ(n**3)
   1) min() can be found in constant time: O(1)

#### Spatial Complexity

From a spatial point of view, the algorithm generates n matrices of size n^2.
So in total, S(n) = Θ(n^3).

Is it necessary to keep track of all of them? We do not need them, at k-th step we just need
the previous one, maybe we just need two. However, we can do even more!
We can use just one matrix and overwrite its content of without conflicts/dirty-write.

#### Property 1

**If there are no negative cycles (as for hypothesis), the main diagonal is always filled with zeros**

For k=1 to n, d^k(ii) = 0:

* d^k(ii) = 0
* d^k(ii) = d^k(ii) = min{d^k-1(ik)+ d^k-1(ki), d^k-1(ii)}
* d^k(ii) = d^k(ii) = min{d^k-1(ik)+ d^k-1(ki), 0}, by hypothesis
  * d^k-1(ik)+ d^k-1(ki) means there is a cycle that goes from i to k and back to i.
  * A cycle, since there are no negative cycles, must be >= 0.
  * In this case, the minimum we can find is 0!

#### Property 2

**During the transition from D^k-1 to D^k, the row k and column k do not change**.
The elements of the column **k-1** and row **k-1** we have considered, at a time **k-1**,
do not change at a time k!

* Ex: D^0 -> D^1, column 0 and row 0, do not change when we are in D^1!

For i,j,k∈V

* d^k(ik) = d^k-1(ik)
* d^k(kj) = d^k-1(kj)

Why is this true? (We'll show only one but it works for both)

* d^k(ik) = d^k-1(ik) **?**
  * d^k(ik) = min{d^k-1(ik), d^k-1(ik) + d^k-1(kk)}
  * d^k(ik) = min{d^k-1(ik), d^k-1(ik) + 0}, by property 1
  * d^k(ik) = min{d^k-1(ik), d^k-1(ik)}
  * d^k(ik) = d^k-1(ik)
  
To determine the value of d^k(ij), at time k-1, we look for the **minimum** between

1. d^k-1(ik)+ d^k-1(kj) the sum of the elements **kj+ik** at time k-1 of the matrix D^k-1 and,
2. d^k-1(ij), the element in **ij** at time k-1 of the matrix D^k-1

### Property 3

If we need to compute a result, and we find +inf() on the column or row we are considering,
we can copy that particular row or column. The minimum between +inf() and a small number, is always that number!

* Look out for negative cycles!

![min fw](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/minfw.png?raw=TRUE)

Thanks to the property 2, we can reformulate the algorithm now:

```python
FLOYD_WARSHALL(W)
    n = rows[W]; # count of rows
    D^0 = W;
    for(k=1 to n): #Computes the sequence of D^k
        for(i=1 to n):
            for(j=1 to n):
                d^k(ij) = min{d^(k-1)(ik)+ d^(k-1)(kj), d^(k-1)(ij)};
    return D;
```

#### Example

![exfw](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/exfw.png?raw=TRUE)

It is better using FW than Dijkstra!
