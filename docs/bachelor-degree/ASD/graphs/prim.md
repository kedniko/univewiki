# Prim

Prim is greedy algorithm

#### Forest vs Rooted Tree - First difference

In Kruskal's algorithm, the beginning it may look like the growing data structure,
looks like a forest and eventually becomes a tree.

Here, instead, we **start from a tree with a single
vertex**, the root of the final tree. Consequently, we start adding edges to the tree.

* The invariant is, at every moment the structure is **always a tree**.
* The resulting tree has a particular vertex, the root. So it is a **rooted tree**.
  * This is why we have a vertex in input.
  * Changing the vertex, changes the ST that we can find.

#### Data Structures - Second difference

While in Kruskal we find a structure A that looks like a set, containing the edges of our MST, in Prim there is no explicit
structure since we consider a **structure of predecessors** pointing to their fathers. However, we chose to use
the implementation through a priority queue.

### Prim's Data Structure Implementation

Prim manages:

1. A structure V\Q, which is where we find the vertices that are already extracted.
2. A **priority queue** Q⊆V[G] on key[u], which is where we find the vertices that have not been extracted. This can be implemented through a binary heap.
   1. Contains the **vertices to select/extract**. While Kruskal extracts edges.
3. It implicitly saves the light edges in A = {(u, π[u]) in E | u in V-{r}-Q}, which is a candidate for a Tree.

In Q, ∀u∈V[G], Prim keeps a field up to date at every iteration for each vertex:

* key[u], for a vertex it represents the minimum weight out of all the edges **crossing
the cut** and that are incident to that particular vertex.
  * Numeric field used in the P.Q.
  * If the vertex u has no edge that crosses the cut, key[u]=inf()
* π[u], "predecessor" is the vertex on the other side of the cut, the tree on the other side, connected to the light edge
  * Pointer Q -> V\Q
  * If key[u] = inf(), π[u] = NULL

## The algorithm - A's POV

* The tree starts from an arbitrary root vertex r and grows until the tree spans all the vertices in V.
* Each step adds to the tree A, a light edge that connects A to an isolated vertex—one on which no edge
of A is incident.
* By Corollary 23.2, this rule adds only edges that are safe for A; therefore, when the algorithm
terminates, the edges in A form a minimum spanning tree. A = {(u, π[u]) in E | u in V\{r}}

### Detailed Description

We can consider the cut made by the extraction process like this:

![exsetprim](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/exsetprim.png?raw=TRUE)

The vertex corresponding to the light edge, if not already extracted, gets extracted.

At first, we initialize Q, the PQ, with all the vertices from V. We ensure that all the vertices u are initialized like so:
key[u] = inf(), π[u] = NULL. Only the root node is initialized with key[r]=0, so it is the first to be extracted.
Now we can start performing the cut (Q, V\Q), until Q is empty.

* We look for every vertex adjacent to u (the vertex we just selected with the extract_min(Q))
  * Extracts min element from the priority queue
  * Keeps the binary heap balanced (tree-like structure)
    * Since the root is the min element, we remove the root and re-update the tree to keep it balanced and efficient
* Update the vertices adjacent to the selected.
* We return A, an MST.

```python
MST_PRIM(Graph G, Function w, Vertex r)
    Q = G.V
    for(u in G.V):                  #initialization
        key[u] = inf();
        π[u] = NIL;
    key[r] = 0;
    while (Q != ∅):                 
        u = extract_min(Q)         #extraction  
        for (v in u.adj):           #update data structures
            if (v in Q and w(u,v)<key[v]):
                π[v] = u
                key[v] = w(u,v)
    return A = {(u, π[u])| u in V\{r}} #return
```

**Final Time Complexity**: T(n) = <mark>**O(m * log(n))**</mark>

* |V| = n
* |E| = m >= n-1, since the graph is connected

### 1 - Complexity Demonstration

1. Initialization: T(n) = **Θ(n)**
   1. For, n times
   2. is constant
2. Extraction: T(n) = O(m* log(n)) =**O(n) + O(n * log(n)) + (m * log(n))**
   1. While: T(n) = O(n)
   2. Extract_min(): T(n)= O(log(n))
   3. For: T(n) = Θ(m) = Θ(2m)
      1. deg(u1)+deg(u2)+...+ deg(un) = sum(deg(u(i)), i= 1 to n) = 2m
      2. However, this cycle is not constant. It is in function of adj[u] and we cannot have a fixed number.
   4. key[v] = w(u,v): T(n) = O(log(n))
      1. Since we are working on the key field, which is part of the priority queue and we must
      operate to keep it balanced too.
3. Return: is constant

### 2 - Correctness Demonstration

It is trivially true by the fundamental theorem of MST, because Prim's algorithm is a direct
consequence of the [MST Theorem](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/8%20-%20Graphs/6.1%20-%20MST.md#fundamental-theorem-of-mst). So if your professor asks you to demonstrate the correctness
of Kruskal, just demonstrate the correctness of this theorem and how Prim behaves exactly the same as the Corollary 23.2.

Thanks to Corollary 23.2:

1. A = {(u, π[u]) | u in V\{r}\Q}⊆E, initially empty, is contained in some MST, _trivially_.
2. All the edges in A are **safe and light edges** connecting a CC to another CC of G(A):
   1. **EXTRACT_MIN(Q)** is based on key[u] and **extracts** the vertex **u with the minimum-weight-edge in Q**.
   2. Therefore, **there exists a light-edge (u,v) u∈Q, v∈Q\V** that is safe and does not create cycles.
   3. By **v∈ADJ[u]**, the edge considered must connect a CC to some CC in G(A).
3. By the end of the algorithm G(A) is kept a forest and A = {(u, π[u]) | u in V\{r}} is an MST
   1. No cycles are ever created
   2. key[v], π[v] are updated only when w(u,v)<key[v], making sure the CCs stay connected between them.

Example:

![ex prim](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/exprim.png?raw=TRUE)

### How to simulate the algorithm

To represent formally the iterations of the algorithm we should use a table such as:

* As many rows as the iterations
* As many columns as the main data structures (the ones that vary)
  * i.e. Q={r, a, b, c, d, e} and the set V\Q={} at the beginning

| #step | V\Q | a.key | a.pi | b.key | b.pi | c.key | c.pi | d.key | d.pi | r.key | r.pi |
|-------|-----|-------|------|-------|------|-------|------|-------|------|-------|------|
| 1     | {}  |       |      |       |      |       |      |       |      |       |      |
|       |     |       |      |       |      |       |      |       |      |       |      |
|       |     |       |      |       |      |       |      |       |      |       |      |
|       |     |       |      |       |      |       |      |       |      |       |      |
