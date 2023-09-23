# Minimum Spanning Trees

## Spanning Trees

We can apply this concept to undirected, connected graphs $G=(V,E)$.

A spanning tree, given an undirected connected graph $G=(V,E)$, is a **tree** $T=(V,E')$ where

* $E' \subseteq E$ such that, all vertices are reached by the edges in $E'$.
  * $|E'| = |V|-1$
* $T$ is a tree

![ex st](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/exst.png?raw=TRUE)

## MST

Let $G$ be an undirected, connected, weighted graph $G=(V,E, w)$, where $w:E \rightarrow \mathbb{R}$ is a weight function

A tree $T \subseteq E$, is a MST, if

* $T$ is a Spanning Tree
* The weight of the tree $W(T) = \sum_{(u,v) \in T} w(u,v)$ is the smallest out of all
the spanning trees.

![ex mst](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/exmst.png?raw=TRUE)

In fact, the minimality factor implies the fact we are working with weighted graphs.

If a graph is connected i.f.f. there exists at least one MST for that graph.

## Algorithm for MST: crucial fact of MST (CF of MST)

Our focus will be primarily on the MST search.
Two very famous algorithms for this are **Kruskal** and **Prim**.

But what do all algorithms of MST search have in common?
If we execute a cut on a graph, and we take a light edge crossing the cut,
**there exists a MST containing that light edge**.

> CRUCIAL GENERAL FACT: We can also say that for any cut performed on a graph $G$,
> there must be at least one edge (crossing that cut), which belongs to an MST of $G$.

### Sew and Cut technique

This technique is at the base of the MST problem.

1. We decide to **SEW** (add) an edge $(u,v)$ to a tree $T$,
which causes it to become cyclic (it is no longer a tree nor a candidate MST).
2. To restore the tree properties we decide to **CUT** (remove)
an edge which is in the same cycle but is heavier $w(u,v) \leq w(x,y)$.
3. We keep repeating this until we obtain one MST of $G$.

Let's consider a $T$, a generic MST of $G$, and suppose there is an edge $(u,v)$ in
the cut such that

* if $(u,v) \in T$, we proved there exist an edge belonging to an MST.
* if $(u,v) \notin T$, we can say for the CF of MST, there exist at least one more edge $(x,y)$ crossing the cut,
because either of one them must belong to $T$.
  * We suppose $(u,v)$ is a light edge, then we know $w(u,v) \leq w(x,y)$.
    * So $T \cup \lbrace (x,y) \rbrace$ is not going to be a good candidate for an MST.
  * However, by **SEWING** $T' = T \cup \lbrace (u,v) \rbrace$ we obtain a **cyclic graph**
    * Which are not in the right conditions for an MST.
  * Since $(u,v)$ is a light edge, we can **CUT** $(x,y)$ and restore the properties.
    * In fact, $T'' = T' \setminus (x,y)$ is an ST again and a candidate for MST.
  
## Generic MST

Let's start with an incremental general algorithm thought to find MSTs for a graph.

| Operation      | **Input**                                         | **Cons**  |
|--------------- |-------------------------------------------------- |---------- |
| _Generic MST_  | A Graph $G$, a vector containing the weights $w$  | An MST    |

Steps:

1. Construct a set A that will contain the edges of the MST
2. While |A| < |V| − 1
3. Find a safe edge for A(u,v)
4. Add it to A
6. Return A

```python
Generic_MST(G, w)
    A[] = ⊘; #Empty Set
    while (|A| < |V| − 1):
        #find a safe edge for A (𝑢, 𝑣) ∈ 𝐸
        𝐴 ← 𝐴 ∪ {(𝑢, 𝑣)}
    return A;
```

Since the third step is not clear, we cannot really implement it. Mind that,
this is only an example and the algorithms we are going to see are mere variations.

## Fundamental Theorem of MST

To introduce this theorem we must mind the [following definitions](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/8%20-%20Graphs/1.2%20-%20GRAPH%20PROPERTIES%20pt3.md#cut) :

1. Cut (S, V\S) S⊆V
2. Light Edge
3. Safe Edge

Let G=(V,E, w) an undirected, connected, edge-weighted graph, if:

1. **A⊆E** (can be empty), that is included in some MST for G.
2. **(S, {V\S})** be any cut of G that **respects A**
   1. No edge of A crosses (S, {V\S})
3. **(u,v)∈E** be a light edge crossing the cut (S, {V\S})

Then, **edge (u,v) is safe for A**

* **A' = A∪{(u,v)}** is included in some MST T

This helps find a starting point to finish the incremental algorithm we have previously
tried to implement!

1. We can start from an empty set A', by definition it is subset of any set. This includes, all MST of G.
2. We cut the graph, following the theorem's constraints
3. We add the light edge to A', we have perfectly enlarged A'.
4. Since A' = A∪{(u,v)} is included in some MST, we repeat step 2-3 until we have (n-1) edges.
   1. A' is a subset of some MST, and would be itself an MST.

### Demonstration

Let T∈E be a MST including A. We have two cases

1. if `(u,v)∈T`, We stop here, since we found a tree where A ∪ {(u,v)} ⊆ T is an MST.
2. if `(u,v)∉T`, We proceed like in the _Sew&Cut_ technique
   2. We sew: `T ∪ {(u,v)}`
      1. The result is a cyclic graph, and there is at least another edge (x,y) crossing the cut (for CF of MST).
      3. We cut: `T' = T ∪{(u,v)}\{(x,y)}`, which is an MST
      1. T' is an ST, for sure. We can prove it is also an MST, `W(T') = W(T)`
         1. `W(T)<=W(T')`, because T is an MST, _by hypothesis_
         2. `W(T')<=W(T)`, because `W(T')=W(T)+W((u,v))-W(x,y)` and `W((u,v))-W(x,y)<=0`
            1. W((u,v))<=W(x,y) since (u,v) is a light edge, _true by point 3 of FT of MST_
      4. We need to find whether A∪{(u,v)} ⊆ T', with T' being an MST
      1. (u,v)⊆ T', _is true by construction_
      2. **A⊆ T'**, is true
         1. If (x,y)⊆A then we cannot prove our point, because `A ∪{(x,y)}` is not contained in some MST
         2. But, we know **the cut respects A**, _by hypothesis_.
            1. So surely (x,y) crosses the cut and (x,y)∉A.

#### Observation 1

w(u,v) = w(x,y), they have the same weight!

* Since T was an MST, but also T' is an MST.

This means there these edges are both light edges, with the same weight, and both cross the cut.

* If we have a graph, with different weights for each edge, and we execute a cut the **light edge is obviously
unique**.
* Trivially, when we "Sew" we have at least two light edges. But here there is only one!

#### Observation 2

Given a cut (S, {V\S}), with S⊆V.

* **If the light edge** (u,v) crossing the cut, **is unique** then, **all MST include (u,v)**
  * If there was an MST not including (u,v), we could add it
  * This creates a cycle, where there is at least one edge (x,y) which crosses the cut which
  we would remove.
  * w((x,y)) > w((u,v))
  * The resulting ST would have weight smaller than the starting MST. Absurd.
  
### Corollary 23.2[CLRS]

Let G=(V,E, w) be a connected, undirected graph with a real-valued weight function w defined on E.

* Let A⊆E, be included in some minimum spanning tree for G
* Let C=(V(C), E(C)) be a connected component (tree) in the forest G(A) = (V,A)
* If (u,v) is a light edge connecting C to some other component in G(A)

Then (u,v) is safe for A

![ex cor 23](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/excor23.png?raw=TRUE)

#### Demonstration

Exercises

#### Ex1: Corollary 23.2 exercise

A ⊆ some MST. A is a forest (acyclic graph made up of many CC) or just a tree.

#### Ex2

By taking a minimum edge, surely there is a MST that contains it. Demonstrate this!
