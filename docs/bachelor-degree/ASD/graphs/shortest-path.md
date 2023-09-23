# Shortest Path

Edge weights can represent metrics other than distances, such as time, cost,
penalties, loss, or any other quantity that accumulates linearly along a path and
that we would want to minimize.

* We do not exclude negative real-valued weights, and some algorithms only work with positive numbers.

In a shortest-paths problem, we are given a **weighted, directed** graph G=(V,E, w) where
w is a weight function `w:E -> R` mapping edges to real-valued weights.

* The weight of a path p, w(p) = `sum(w(v(i-1), v(i)), i = 1 to k)`

It is a problem that mainly concerns directed graphs. However, it can be easily applied to
undirected graphs by converting their edges into couples of edges pointing in opposite directions.

The **shortest-path weight** δ(u,v) from u to v is defined as:

* min(w(p)) with p∈**C**(u,v), if **there is a path** from u to v
  * C(u,v)={p|p is a path from u and v}
* +inf(), otherwise
  * C(u,v)={∅}

## Types of Shortest Path problems

| source\destination     | single-destination                  | multiple-destination          |
|------------------------|-------------------------------------|-------------------------------|
| single-source: Input   | G=(V,E, w), with u∈V, v∈V           | G=(V,E, w), with s∈V as source|
| single-source: Output  | δ(u,v)                              | δ(s,u), ∀u∈V                  |
| multiple-source: Input | G=(V,E, w), with d∈V as destination | G=(V,E, w)                    |
| multiple-source: Output | δ(u,d), ∀u∈V                        | δ(u,v), ∀u,v∈V                |

We will only cover the cases with:

* single-source, multiple-destination
* multiple-source, multiple-destination

#### Intro to Polynomial Reduction

Polynomial-time reduction is a method for solving one problem using another.
One shows that if a hypothetical subroutine solving the second problem exists,
then the first problem can be solved by transforming or reducing it to inputs
for the second problem and calling the subroutine one or more times.

If both the time required to transform the first problem to the second,
and the number of times the subroutine is called is polynomial,
then the first problem is polynomial-time reducible to the second.

So if we take understand how to solve the single-source, multiple-destination shortest path problem
we can solve the multiple-source, single-destination.

* However, we will not face the single-source, single-destination shortest path problem since
it has the same complexity as the single-source, multiple-destination one.

#### Techniques

1. Greedy: Single-Source, Multiple-Destination
   1. Dijkstra
2. Dynamic Programming: Multiple-Source, Multiple-Destination
   1. Floyd-Warshall

## Negative Weights Problems

Some instances of the single-source shortest-paths problem may include edges
whose weights are negative.

* If the graph G=(V,E) contains no negative weight cycles reachable from the source s,
then for all v∈V, the shortest-path δ(s,v) well-defined, even if it has a negative value.
* If the graph contains a negative-weight cycle reachable from s, however, shortest-path weights
are **not well-defined**.

No path from s to a vertex on the cycle can be a shortest path: we can always find a path with lower weight by following the proposed
“shortest” path and then traversing the negative-weight cycle.

If there is a negative weight cycle on some path from s to v, we define **δ(s,v)=-inf()**;

![ex neg weight](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/exnegw.jpg?raw=TRUE)

#### No-path property

The absence of a path from s to v, then we always have δ(s,v)=+inf()

### Property of existence of a simple shortest-path

Let G be a directed graph G=(V,E, w), with `w:E-->R`, and let's take two vertices u,v in V so that v is reachable from u.
If we exclude the possibility of negative-weight cycles, we can state that out of all the possible SP connecting them,
**there must exist one shortest-path that is simple**.

* We suppose a shortest-path `pc` includes one cycle, then δ(u,v) = w(pc) trivially.
  * Their weight would be equal to all the other SPs in the set, by _shortest-path definition_.
  * The cycle `w(c)=0`, else it would increase of the total weight of the path, because by _assumption_ the cycles are all positive.
  * If we remove the cycle, we obtain a simple SP p, which cannot be lighter than pc, by _shortest-path definition_.
  * Then, `δ(u,v) = w(pc) = w(p)`

### Cardinality of the set of simple SPs

Let G be a directed graph G=(V,E, w), with `w:E-->R`, and let's take two vertices u,v in V so that v is reachable from u.
The set of simple SPs is finite.

* Since we do not consider any kind of cycle when using simple paths, surely no cycles such as `w(c)=0` can exist (which
could make the set infinite).

#### Algorithms

1. Dijkstra
   1. Single-Source
   2. Is correct but **does not work when negative weights** are presents
2. Bellman-Ford
   1. Single-Source
   2. Is correct, works with negative weights but is **not reliable if there are negative cycles**
3. Floyd-Warshall
   1. Multiple-Source, Multiple-Destination
   2. Is correct, works with negative weights but is **not reliable if there are negative cycles**

But what are we looking for, when choosing our algorithms?

1. They must return the **distance** δ(u,v)
2. They must return the **exact shortest path** corresponding to the distance

So we need to find two main types of data structures.

## Data Structures

### Single-source, Multiple-destination

* Estimate of shortest-path, _d[u]_ ∀u∈V
  * A field for every vertex, which is initially +inf() (unless the source vertex, which is 0)
  * At the end of the algorithm, we hope to have **d[u] = δ(u,v)**
* Predecessor (pointer), _π[u]_ ∀u∈V

We often wish to compute not only shortest-path weights, but the vertices on shortest paths as well.

#### Predecessors Subgraph

It is a graph that can be constructed by only looking at π[u]

G(π)=(V(π),E(π))

* V(π) = {u∈V | π[u]!= NULL} ∪ {s}
  * All the vertices with a predecessor
* E(π) = {(π[u], u)∈E | u∈V(π)-{s}}
  * Source vertex has no predecessor

Example:

![ex pred graph](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/expredgraph.png?raw=TRUE)

We can easily see that by looking at the predecessors, we can build a graph.

* V(predec.) is a subset of V, E(predec.) is a subset of E
* Also, the path highlighted is a shortest-path connecting s to c

We shall prove that the π values produced by the algorithms in this chapter have
the property that <mark>at termination G(π) is a “shortest-paths tree"</mark>

### Shortest-Path Tree

Informally, a rooted tree containing a shortest path from the source s to every vertex
that is reachable from s. A shortest-paths tree is like the breadth-first tree, but it contains shortest paths
from the source defined in terms of edge weights instead of numbers of edges.

A shortest-paths tree **rooted at s** is a **directed** subgraph G'=(V', E'), where:

* V'= {u∈V | δ(u,v) < +inf()}
  * V' is the set of vertices reachable from s in G
* G' forms a rooted tree with root s
* ∀u∈V', the unique simple path from s to u in G' is a shortest path from s to u in G.

Example:

![ex spt](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/exspt.png?raw=TRUE)

Shortest paths are not necessarily unique, and neither are shortest-paths tree.
