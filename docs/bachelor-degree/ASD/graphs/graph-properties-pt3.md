# Graph Properties and Definitions pt3

Here we regroup some definitions which are fundamental to get started on graph theory.

## Graph Isomorphism

Let's consider two graphs $G_{1}=(V_{1},E_{1})$ and $G_{2}=(V_{2},E_{2})$

An isomorphism is a relation $\phi : V_{1} \rightarrow V_{2}$ between the vertices of
the first graph and those of the second one

1. It must be **bijective**
2. $\forall u,v ∈ V_{1}| (u,v) \in E_{1} \Leftrightarrow (\phi (u), \phi (v)) \in E_{2}$
   1. The mapping preserves the adjacency between vertices of the same graph
   2. if $u_{1},v_{1}$ are connected through an edge, then $u_{2},v_{2}$ must be too

We say that " $G_{1}$ and $G_{2}$ are isomorphic", or $G_{1}  \simeq G_{2}$, if there is an isomorphism between $G_{1}$ and $G_{2}$.

Here's an example:

![ex isomorphism](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/exisom.png?raw=TRUE)

So now, let's consider these two graphs: can we find an isomorphism?

```python
G1              |   G2
    (1)         |       (a)-(b)-(c)
  /     \       |
(3)     (2)     |

#This is an isomorphism G1 ≃ G2!
# ϕ(1) = a
# ϕ(2) = b
# ϕ(3) = c
```

Mind that there is **more than one isomorphism**

* To this day, it is an NP-complete problem to verify if two graphs are
isomorphic. Nobody has found a solution in polynomial time.

### Necessary but not sufficient conditions

From another point of view, it is relatively easy to find out whether two graphs
$G_{1}, G_{2}$ are not isomorphic. Here are some properties that stand true but are not sufficient:

1. $|V1| = |V2|, |E1| = |E2|$ are necessary (but not sufficient) conditions
2. $\phi (u \in V) \in V_{2} \rightarrow deg(u \in V) = deg(\phi (u \in V))$
   1. The **isomorphism maps vertices with the same degree**
3. **Degree Sequence**: given $G=(V,E)$ is a sorted vector of length $n=|V|$, which means vertices are sorted
   based on their degrees.
   1. Two graphs are isomorphic if they have the same degree sequences, $deg-seq(G_{1})=deg-seq(G_{2})$ is a necessary (but not sufficient) condition
4. $CC(G_{1}) = CC(G_{2})$
   1. Same number of connected components
5. $\omega (G_{1}) = \omega (G_{2})$
   1. Clique number are the same

There are many properties we could list but nothing helped to solve the problem.

## Cut

A cut is a pair $(S, V \setminus S)$, $S \subseteq V$ dividing a graph in two partitions of vertices.

* Given a graph, we can always partition it into two subsets of vertices
* Given a cut, we can point out the edges crossing it.

![cut](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/cut.png?raw=TRUE)

### Cut respects A

Let:

* $G$ be a graph $G(V,E)$
* $A \subseteq E$ subset of edges.
* $(S, V \setminus S)$ be a cut (which partitions into two subsets the vertices of the graph $G$ )

The cut $(S, V \setminus S)$ is said to respect A, **if no edges of A cross the cut**.

### Light edge

Light edge is defined with respect to a particular cut.

Light edge $(u,v) \in E$, is an edge such that:

* $(u \in S \wedge v \in {V \setminus S}) \vee (u \in {V \setminus S} \wedge v \in S)$
  * The vertices $u,v$ are not in the same subset
* $w(u,v) \leq w(x,y)$
  * The edge has the minimum weight out of all the edges crossing the cut

### Safe Edge

Let

* $A \subseteq E$ be a subset of edges, contained in some MST for $G(V,E)$.
* $(u,v) \notin A$ be an edge
  * $(u,v) \in E$.

The edge $(u,v)$ is a safe edge for $A$ if $A \cup {(u,v)}$ is contained in some MST too.
