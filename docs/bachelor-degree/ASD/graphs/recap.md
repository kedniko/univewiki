# MST and SP Algorithms Recap

This recap is made for studying purposes, it is only useful if used as revising material for an exam.

| **Algorithm**    | **Correctness Demonstration**                                                                                               | **Complexity**        | **Implementation**                     |
|------------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------------|----------------------------------------|
| _Kruskal_        | FT of MST & Corollary 23.2   Kruskal manages the cut through extraction process and extracts only light edges for that cut. | O(m*log(m))           | Disjoint Forest                        |
| _Prim_           | FT of MST & Corollary 23.2  At each iteration, the selection of a safe edge always results in a  MST                        | O(m*log(n))           | PQ(Binary Heap)                        |
| _Dijkstra_       | Theorem of Dijkstra                                                                                                         | O(n^2), O(m * log(n)) | Array (Dense), PQ Binary Heap (Sparse) |
| _Bellman-Ford_   | BF's Correctness Theorem (Part 1 and 2)                                                                                     | Θ(nm)                 | Array or PQ                            |
| _Floyd-Warshall_ | FW's Correctness Theorem                                                                                                    | Θ(n^3)                | Matrix-like structure                  |

## Kruskal - Greedy

```python
MST_KRUSKAL(Graph G, Function w)
    A = ∅
    for (Vertex v in G.V):
        MAKE_SET(v);    #initialize the sets
    sort(G.E)       #sorts smallest to largest
    for (Edge (u,v) in G.E):   #in order
        if(FIND_SET(u) != FIND_SET(v)): #if it does not create a cycle
            UNION(u,v);
            A = A U {(u,v)};
    return A;
```

### Goal

Find an MST of a graph G

### Restrictions

* G(V,E,w) must be connected, undirected and an edge-weighted graph, with a real value function w

### Data Structures

* **MAINTAINS**: Disjoint Set ADT `A`
* **INPUT**: A Graph `G`, a Weight Function `w`.
* **RETURNS**: A, set containing the edges.

### Correctness Demonstration

* Part 1: Consequence of [F.T. of MST](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/8%20-%20Graphs/6.1%20-%20MST.md#fundamental-theorem-of-mst)
* Part 2: Consequence of [Corollary 23.2](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/8%20-%20Graphs/6.3%20-%20KRUSKAL.md#2---correctness-demonstration) for Kruskal.

### Complexity

T(n) = <mark>**O(m * log(m))**</mark>

1. First cycle = Θ(n)
2. Sorting = O(m*log(m))
3. Second cycle and operations = O(m * log(m))

## Prim - Greedy

```python
MST_PRIM(Graph G, Function w, Vertex r)
    Q = G.V
    for(Vertex u in G.V):                  #initialization
        key[u] = inf();
        π[u] = NIL;
    key[r] = 0;
    while (Q != ∅):                 #extraction
        u = EXTRACT_MIN(Q)         
        for (Vertex v in ADJ[u]):     #update data structures
            if (Vertex v in Q and w(u,v)<key[v]):
                π[v] = u
                key[v] = w(u,v)
    return A = {(u, π[u])| u in V\{r}} #return
```

### Goal

Find an MST of a graph G

### Restrictions

* G(V,E,w) must be connected, undirected and an edge-weighted graph, with a real value function w

### Data Structures

* **MAINTAINS**: Structure of _predecessors pointing to their fathers_. Here we use a min-priority queue `Q` on `key[v]` (binary heap);
  * `key[v]`, min. weight out of all the edges **crossing the cut** and that are incident to that particular vertex v.
  * `π[v]`, "predecessor" is the vertex on the other side of the cut for the edge (u,v) with w(u,v) = key(v).
* Root vertex `r`;
* **INPUT**:
  * A Graph `G`, a Weight Function `w`, Root Node `r`
* **RETURNS**:
  * A tree candidate `A = {(u, π[u]) in E | u in V-{r}-Q}`, where the edges are saved implicitly

### Correctness Demonstration

* Part 1: Consequence of [F.T. of MST](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/8%20-%20Graphs/6.1%20-%20MST.md#fundamental-theorem-of-mst)
* Part 2: Consequence of [Corollary 23.2](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/8%20-%20Graphs/6.4%20-%20PRIM.md#2---correctness-demonstration) for Prim.

### Complexity

T(n) = <mark>**O(m * log(n))**</mark>

1. Initialization: T(n) = Θ(n)
2. Extraction: T(n) = O(m*log(n)) = O(n) + O(n* log(n)) + (m * log(n))
   1. While: T(n) = O(n)
   2. Extract_min(): O(log(n))
   3. For: T(n) = Θ(m) = Θ(2m) = sum(deg(u(i)), i= 1 to n)
      1. Not constant, in function adj[u]
      2. m >= n-1, since the graph is connected
   4. key[v] = w(u,v): T(n) = O(log(n))
      1. Re-balancing of the queue because we are updating its content
3. Return: constant

## Dijkstra - Greedy

```python
Dijkstra(Graph G, Weight w, Vertex s)
    INIT_SS(G, s)
    Q = G.V
    S = ∅
    while(Q != ∅):
        u = EXTRACT_MIN(Q); 
        S = S ∪ {u};
        for(Vertex v in ADJ[u]): #Relax every leaving vertex.
            RELAX(u, v, w(u,v));
    return (d, Gπ);
```

### Goal

Find single-source shortest-paths

### Restrictions

* G(V,E,w) is a directed and edge-weighted graph, with a real value function w
* We assume that w(u,v)>=0 ∀(u,v)∈E, all **edge weights are non-negative**

### Data Structures

* **MANTAINS** A min-priority queue `Q` on `d[u]` of vertices which have not been selected yet (binary heap or array).
  * `d[u]`, the estimate for the SP from s to u, with u in G.V
    * Optimally it should be `d[u]=δ(s,u)`, the real distance.
  * `π[u]`, "predecessor" of u in the SP.
  * A set of vertices `S` whose final shortest-path weights from the source s have already been determined.
* **INPUT**:
  * A Graph `G`, a Weight Function `w`, source node `s`
* **RETURNS**:
  * d[u], the vector containing the estimations (d[u]=δ(s,u) ∀u∈V)
  * Gπ, predecessor subgraph (an SP tree)

### Correctness Demonstration

* [Theorem of Dijkstra](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/8%20-%20Graphs/7.2%20-%20DIJKSTRA.md#2---correctness-demonstration-theorem-of-dijkstra)

### Complexity

1. Array, T(n) = <mark>**O(n^2)**</mark>
   1. Initialization: Θ(n)
      1. INIT_SS(): Θ(n)
   2. While block: O(n^2)
      1. WHILE * EXTRACT_MIN(): Θ(n)
         1. Unordered array, so the worst is to look through n elements.
      2. FOR _RELAX(): O(m_ 1) = sum(out-deg(u), u in V) * T(1)
         1. Executes RELAX a number of times equal to the out-degree of the vertex
2. Binary Heap, T(n) = <mark>**O(m * log(n))**</mark>
   1. Initialization: Θ(n)
   2. While block: O(m * log(n))
      1. WHILE _EXTRACT_MIN(): Θ(n_ log(n))
      2. FOR _RELAX(): O(m_ log(n)) = sum(out-deg(u), u in V) * T(RELAX())

## BF - Brute Force

```python
BELLMAN_FORD(Graph G, Weight w, Vertex s)
    INIT_SS(G, s)
    for(i=1 to |G.V|-1):
        for(Edge (u,v) in G.E):
            RELAX(u,v, w(u,v));
    for(Edge (u,v) in G.E):
        if(d[v]>d[u]+w(u,v)):
            return (False, d, Gπ);
    return (True, d, Gπ); #No negative cycles
```

### Goal

Find single-source shortest-paths

### Restrictions

* G(V,E,w) is a directed and edge-weighted graph, with a real value function w.
* Edge weights may be negative, but **not reliable if there are negative cycles**

### Data Structure

* The choice does not impact the complexity. We use the same as Dijkstra.
* **RETURNS**:
  * TRUE if there are **no negative-weight cycles**.
  * d[u], the vector containing the estimations (d[u]=δ(s,u) ∀u∈V)
  * Gπ, predecessor subgraph (an SP tree)

### Correctness Demonstration

* [Theorem of BF](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/8%20-%20Graphs/7.3%20-%20BELLMAN-FORD.md#2---correctness-demonstration-bfs-correctness-theorem)

### Complexity

T(n) = <mark>**O(n*m)**</mark>

* Sparse: O(n^2)
* Dense : O(n^3)

1) INIT_SS(): T(n) = Θ(n)
2) First Part: T(n) = O(n-1 * m)
    1) For: T(n) = O(n-1)
        1) For each: T(n) = O(m)
            1) RELAX(): T(n) = O(1)
3) Second Part: T(n) = O(m)
    1) For each: T(n) = O(m)
        1) Check: T(n) = O(1)

## FW - Dynamic Programming

```python
FLOYD_WARSHALL(W)
    n = rows[W]; # count of rows
    D^0 = W;
    for(k=1 to n): #Computes the sequence of D^k
        let D^k = (d^k(ij)) be a new nxn matrix
        for(i=1 to n):
            for(j=1 to n):
                d^k(ij) = min{d^(k-1)(ik)+ d^(k-1)(kj), d^(k-1)(ij)};
    return D^n;
```

### Goal

Finds Multiple-Source, Multiple-Destination shortest-paths.

It Finds all the distances for all pairs, also called all-pairs shortest-path

### Restrictions

* G(V,E,w) is a directed, edge-weighted graph, with distinctly-numbered-edges and a real value function w.
* Edge weights may be negative, this version can be modified to accept negative-weight cycles.

### Data Structures

**INPUT**: The matrix representing the graph, <mark>**W, with w(ij) ∈ R(nxn)**</mark> such that:

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

### Correctness Demonstration

* [Theorem of FW](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/8%20-%20Graphs/8.0%20%20-%20FLOYD-WARSHALL.md#correctness-demonstration)

### Time Complexity

**Final Time Complexity**: T(n) = <mark>**O(n^3)**</mark>

1) First operations are constant: O(1)
2) 3 nested for: T(n) = Θ(n**3)
    1) min() can be found in constant time: O(1)

#### Spatial Complexity

From a spatial point of view, the algorithm generates n matrices of size n^2. So in total, S(n) = Θ(n^3).

We do not need them, at k-th step we just need
the previous one! The algorithm changes as it follows:

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

### Properties and Cheat-codes for execution

* If there are no negative cycles (as for hypothesis), the main diagonal is always filled with zeros
* During the transition from D^k-1 to D^k, the row k and column k do not change**.
The elements of the column**k-1**and row**k-1**we have considered, at a time**k-1**,
  do not change at a time k!
* If we need to compute a result, and we find +inf() on the column or row we are considering,
  we can copy that particular row or column. The minimum between +inf() and a small number, is always that number!
