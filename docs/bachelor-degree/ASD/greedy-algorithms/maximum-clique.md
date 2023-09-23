# Max Clique Problem

It is an untreatable problem for undirected, non-weighted graphs G=(V,E).

## Quick Recap

### Induced Subgraph

$G [V']$ or $G' = (V', E')$ is an induced subgraph if (given a graph $G = (V,E)$ ):

* $V' \subseteq V$
* $E' = E \cap V' \times V'$
  * **All the edges** from the subset must connect all the vertices in $V'$
  
### Complete Graph - $\delta (G) = 1$

A complete graph is a graph $G=(V,E)$, where $E = V \times V$

* $E$ contains **all the possible edges** between the vertices in $V$.
  * $|E| = binom(n,2) = \frac{n(n-1)}{2}$
* It is trivially a connected graph. Although the opposite is not true.
* The density is $1$

Notation: a complete graph on $n$ vertices is $K(n)$

### Connected Graph

A graph $G=(V,E)$ is said to be connected i.f.f. there exists at least one path from $u$ to $v$, for every $u,v$ in $E$.

* In order to do this we need at least a certain number of edges for every graph.

Let G be an undirected graph $G=(V,E)$, if $G$ is also connected then:

* $G \text{ is connected } \rightarrow |E| \geq |V|-1$ it is a necessary (but not sufficient) condition.
* The opposite is not necessarily true

Let G be an undirected graph $G=(V,E)$

* if $deg(u \in V) \geq \frac{n-1}{2} \rightarrow G \text{ is connected }$

### Clique

Let $G$ be a **undirected** graph such that, $G=(V,E)$.

A **clique** is a subset $\mathcal{C} \subseteq V$ of vertices, each set of which are connected by an edge in $E$.

$$\mathcal{C} = \{ \mathcal{C} \subseteq V | \forall u,v \in \mathcal{C} \rightarrow \exists (u,v) \in E \}$$

* Any vertex inside the clique is connected with all the vertices inside the clique.
* If $\mathcal{C}$ is a clique, the induced subgraph $G[ \mathcal{C} ]$ is complete (the subgraph $G$ restricted by $\mathcal{C}$ is complete).

> In other words, a clique is a complete subgraph of $G$, $G \[ C \]$.

**Maximal Clique**: a clique $\mathcal{C} \subseteq V$ which is not contained inside a larger clique.

* $\nexists \mathcal{D} | \mathcal{C} \subseteq D$

**Maximum Clique**: a clique $\mathcal{C} \subseteq V$ with the maximum cardinality.

* If $| \mathcal{C} |$, is the **largest out of all possible cliques cardinalities**.
* a Maximum Clique is also Maximal, the opposite is not always true.

**Clique Number** $\omega (G)$: the cardinality of its maximum clique
