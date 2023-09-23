# Bellman-Ford

The Bellman-Ford algorithm solves the single-source shortest-paths problem on a weighted,
directed graph G=(V,E) in the general case in which edge weights may be negative.
The algorithm **returns a boolean value** indicating whether there is a negative-weight
cycle that is reachable from the source.

* If there is such a cycle, the algorithm indicates that no solution exists.
* If there is no such cycle, the algorithm produces the shortest paths and their weights.

It **works with negative-weight cycles, but it is not reliable**. If there is a negative cycle, `d=-inf()` but if we think of
adding a constant to avoid negative cycles (ex: -8 is the most negative weight, I can add 8 to all edges), we will obtain
dirty-values.

## Data Structures

No relevant data structure to analyze, we can use either arrays or queues.
This choice would not impact the outcome of the complexity.

## Algorithm

It is composed of two parts:

1) The first part is the main algorithm
   1) It performs n-1 brute force iterations, where it executes RELAX() on all edges of the graph. Basically,
   it consists of <mark>n-1 relaxations on all edges.</mark>
      1) Dijkstra only iterates through all edges once (m iterations).
2) The second part aims at locating the existence of negative cycles

```python
BELLMAN_FORD(Graph G, Weight w, Vertex s)
    INIT_SS(G, s)
    for(i=1 to |G.V|-1):
        for((u,v) in G.E):
            RELAX(u,v, w(u,v));
    for((u,v) in G.E):
        if(d[v]>d[u]+w(u,v)):
            return (False, d, Gπ);
    return (True, d, Gπ); #No negative cycles
```

**Final Time Complexity**: T(n) = <mark>**Θ(nm)**</mark> = Θ(n + (n-1)m + m)

### 1 - Complexity Demonstration

1) INIT_SS(): T(n) = Θ(n)
2) First Part: T(n) = O(n-1 * m)
   1) For: T(n) = O(n-1)
      1) For each: T(n) = O(m)
         1) RELAX(): T(n) = O(1)
3) Second Part: T(n) = O(m)
   1) For each: T(n) = O(m)
      1) Check: T(n) = O(1)

#### BF vs Dijkstra

![bfdj comp](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/bfdjcomp.png?raw=TRUE)

BF is more efficient when it comes to using data structures (maintaining a PQ is more expensive).
Even though Dijkstra is a better fit almost always, we have can use BF more generally.

### 2 - Correctness Demonstration: BF's correctness theorem

Let's execute B.F. on a graph G=(V, E, `w:E->R`) with s∈V as source vertex.

1) If **G excludes negative cycles reachable from s**, at the end of the algorithm the following statements stay true:
   1) d[u] = δ(s,u) ∀u∈V
   2) Gπ is a shortest-path tree
   3) The algorithm returns `True`
2) Else, the algorithm returns `False`

The demonstration is divided into two parts. We distinguish the cases where:

1) The graph excludes negative cycles
2) The graph includes negative cycles

### Part 1: Negative-Weight Cycles Excluded

Case 1: If we take a generic vertex u∈V, we have three cases

1) `δ(s,u)=+inf()`, by _no path property_
   1) u cannot be reached by s.
2) `δ(s,u)` is a real number, so there must be **at least one shortest-path p** that is also **simple**,
   1) In the SP set we can always find a path that is simple, which has max **n-1 edges**!
3) ~~δ(s,u)=-inf()~~., by _assumption_

Case 2: Gπ is a shortest-path tree

* This is trivially true by a simple application of the _convergence property_
* The n-1 edges of the shortest path p`<x0 = s` -> `x1` -> `x2` -> ... -> `xq = u>` go through BF as it follows:
  * d[s] = 0 = δ(s,s), by _INIT_SS()_
  * RELAX(s, x1, w(s,x1)), since we are on a SP, d[x1] = δ(s,x1) [convergence]
  * RELAX(s, x2, w(s,x2)), d[x2] = δ(s,x2) [convergence]
  * Repeat until it reaches the last vertex. When it comes to q, we only need n-1 iterations
  because we are on SP. **RELAX(s, u, w(s,u)) -> d[u]=δ(s,u)**

Case 3: The algorithm returns `True` when there are no negative cycles. It means, that if `d[v] <= d[u]+w(u,v)` for all edges (u,v) in E,
the algorithm returns True _by construction of BF_

1) `δ(s,v) <= δ(s,u)+w(u,v)`, by _triangular property_
2) `d[v] = δ(s,v)` for each v in V, _by construction of BF_
3) `d[v]<= d[u]+w(u,v)`, Trivially

### Part 2: Negative-Weight Cycles Included

If in G there are negative cycles reachable from s, at the end of the algorithm the following
statement stays true: The algorithm returns `False`.

**Ad absurdum**, we suppose there exists a negative-weighted cycle reachable from s, and that at the end of the algorithm the following
statement stays true: The algorithm returns `True`.

1) Returning TRUE means that when `d[v] <= d[u]+w(u,v)`, for all edges _by hypothesis_
2) Let's call `c = <x0, x1, ..., xq>, with x0 = xq` the negative cycle reachable from s.
   1) This means **sum(w(xi-1, xi), i=1 to q) < 0** so `w(c)<0`
3) If the point 1 stands true for all edges, we can say that for all i=1 to q, `d[xi]<=d[xi-1]+w(xi-1, xi)`
   1) By summing everything we would obtain: `sum(d[xi], i=1 to q) <= sum(d[xi-1], i=1 to q) + sum(w(xi-1, xi), i=1 to q)`
   2) However, we find out that `sum(d[xi], i=1 to q) = sum(d[xi-1], i=1 to q)` since,
      1) ~~d[x1]+d[x2]+d[x3]+ ... +d[xq-1]+~~ d[xq] <= d[x0] ~~+d[x1]+d[x2]+d[x3]+ ... + d[xq-1]~~
         1) By taking out the common members we have, d[xq] <= d[x0]
      2) We know **xq=x0** since this is a cycle!
4) What is left from 3.1  is  **sum(w(xi-1, xi), i=1 to q)>= 0** so `w(c)>=0` , which is absurd!
   1) ~~d[xq]~~ <= ~~d[x0]+~~ sum(w(xi-1, xi), i=1 to q)

### Example

### CPU Improvement

## Conclusions

Best to be used when there are no negative cycles, but can be used with negative weights!
