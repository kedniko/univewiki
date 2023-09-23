# Dijkstra

Dijkstra’s greedy algorithm solves the single-source shortest-paths problem on a weighted,
directed graph G=(V,E) for the case in which all edge weights are non-negative

* We assume that w(u,v)>=0 ∀(u,v)∈E

## Data Structures

We find here a Priority Queue **Q** of **vertices** which have **not been selected yet**
and have the key field **d**, the smaller, the more promising they are.

Dijkstra’s algorithm also maintains a set S of vertices whose final shortest-path
weights from the source s have already been determined.

## Algorithm

1. Initialization
2. The algorithm repeatedly selects the vertex u∈{V\S}S with the minimum shortest-path estimate (d)
3. Adds u to S
4. Relaxes all edges leaving u
5. Stops when Q is empty
6. Returns
   1. d, the vector containing the estimations
   2. Gπ, predecessor subgraph

```python
Dijkstra(Graph G, Weight w, Vertex s)
    INIT_SS(G, s)
    Q = G.V
    S = ∅
    while(Q != ∅):
        u = EXTRACT_MIN(Q); 
        S = S ∪ {u};
        for(v in Adj[u]): #Relax every leaving vertex.
            RELAX(u, v, w(u,v));
    return (d, Gπ);
```

**Final Time Complexity**: T(n) = <mark>**O(m * log(n))**</mark>

* Always ends because the while cycle extracts every time a vertex and
the for cycle is always ending.
* When a graph is dense `m-->n^2`, while when it is sparse `m-->n`

| Graph\Q | Binary Heap  | Array  |
| ------- | ------------ | ------ |
| Dense   | O(n^2*log(n) | O(n^2) |
| Sparse  | O(n*log(n))  | O(n^2) |

### 1 - Complexity Demonstration

#### A) Q is an Array - Best for dense graph

**Final Time Complexity**: T(n) = O(n**2) = O(n) + O(n**2) + O(m)

* n < n**2
* m <= n**2

1. Initialization: Θ(n)
   1. INIT_SS(): Θ(n)
2. While block: O(n^2)
   1. WHILE * EXTRACT_MIN(): Θ(n)
      1. Unordered array, so the worst is to look through n elements.
   2. FOR *RELAX(): O(m* 1) = sum(out-deg(u), u in V) * T(1)
      1. Executes RELAX a number of times equal to the out-degree of the vertex

#### B) Q is a binary heap - Best for sparse graph

**Final Time Complexity**: T(n) = O(m *log(n)) = O(n) + O(n* log(n)) + O(m * log(m))

* If the graph is connected, m*log(n)

```
1. Initialization: Θ(n)
2. While block: O(m * log(n))
   1. WHILE EXTRACT_MIN(): Θ(n* log(n))
   2. FOR RELAX(): O(m* log(n)) = sum(out-deg(u), u in V) * T(RELAX())
```

![compl dj](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/compldj.png?raw=TRUE)


### 2 - Correctness Demonstration: Theorem of Dijkstra

Let G=(V,E, w) be a directed graph, with w a real-value function `w:E-->R>=0`, and s∈V is the source vertex.

* <mark>w(u,v)>=0</mark> ∀(u,v)∈E, all the edges weights are positive.

When Dijkstra's algorithm stops we have:

1. ∀u∈G : d[u] = δ(s,u)
   1. Necessarily, the distances will be equal to the estimates
2. Gπ, the predecessor subgraph, is a shortest-path tree (by Lemma 24.17)

What we are saying is during the extraction of the vertex u from Q (u∈V), the property
d[u]=δ(s,u) stands true. How do we know this stands true until the algorithm stops?

We know that if the property stands true during extraction, since d[u] reached
the inferior limit, it will not be changed afterwards.

**Ad absurdum**, let's say we have a vertex **∃u∈V such that upon extraction `d[u]!=δ(s,u)`**.
Furthermore, u is the **first vertex** where this happens.

Let's make some observations:

1) **u!=s**, after INIT_SS():
   1) `s` is the first vertex added to S, so S!=Ø before u is added to S
   2) And if `u==s` then,`d[s]!= δ(s,s), d[s]!= 0` at that time, not possible by construction of INIT_SS.
      1) It is not always true, if s is to be found on a negative cycle, d[s]=0 and δ(s,s)=-inf()
      2) But by hypothesis, all weights are positive
2) **There must exist at least one shortest-path p form s to u**, `δ(s,u) < +inf()`
   1) Otherwise, d[u] = δ(s,u) = +inf() by no-path property, but the *assumption* `d[u] != δ(s,u)` violates it, since
   d[u] will not change value from the initialization.
3) **p must include an edge (x,y) that crosses the cut (S, Q) such that x∈S, y∈Q** (otherwise there is no path).
   1) **δ(s,u) = δ(s,x) + w(x,y) + δ(y,u)**, *by decomposition of distances*
   2) **d[x]=δ(s,x)**, *by assumption*
      1) x∈S, while u∈Q. It is still not the case for estimates to differ from the real distances.
   3) **d[y]=δ(s,y)**, by the *convergence property*
      1) By extracting x, there has been a RELAX on (x,y) which updates d[y] to be exactly equal to the real distance
   4) **d[u]<=d[y]**, by *construction of Dijkstra* and *by assumption*
      1) In the case we extract u from Q before y.
   5) **δ(s,u)>=δ(s,y)**, by *hypothesis of positive weights*.
      1) y appears before u on a shortest-path from s to u
      2) In case of negative weights, in the path from s to u we could reach a weight inferior to the path from s to u.
   6) **d[u]>=δ(s,u)**, by *inferior limit*

Let's consider all the pieces of the puzzle now:

1) δ(s,u)<=d[u], By 3.6
2) δ(s,u)<=d[u]<=d[y], By 3.4
3) δ(s,u)<=d[u]<=δ(s,y), By 3.3
4) δ(s,u)<=d[u]<=δ(s,y)<=δ(s,u), By 3.5

Trivially, **d[u]=δ(s,u)**, which contradicts the absurd

![dj corr](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/djcorr.png?raw=TRUE)


#### Example

![ex dj](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/exdj.png?raw=TRUE)


#### CPU Improvement

Exercises:

1. What would happen if the algorithm extracts n-1 vertices?
2. We execute the RELAX() even on edges that lead to vertices we have already extracted.
   What if did not consider those edges?
3. We are given a directed graph G=(V,E) on which each edge (u,v) has an
   associated value r(u,v) which is a real number in the range 0<=r(u,v)<=1 that
   represents the reliability of a communication channel from vertex u to vertex.
   We interpret r(u,v) as the probability that the channel from u to  will not fail,
   and we assume that these probabilities are independent. Give an efficient algorithm
   to find the most reliable path between two given vertices. (Solution Lesson 04/12/2022)

#### Problems

What to do if G has negative weights? There is nothing that ensures the algorithm is going
to work properly 100% of the time

## Conclusions

Best to be used when there are no negative weights nor negative cycles
