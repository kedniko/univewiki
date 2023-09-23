::: tip TODO
This is not compiling
:::

```md
# Graph Properties and Definitions pt1

Here we regroup some definitions which are fundamental to get started on graph theory.


## Let's consider Edges

### Dense/Tight Graph - $|E| \approx |V|^{2} \approx n^{2}$

Simply put, a **dense/tight** graph are those for which $|E|$ is close to $|V|^2$.

### Sparse Graph - $|E| \approx |V| \approx n$

Simply put, a **sparse** graph are those for which $|E|$ is much less
than $|V|^{2}$ (usually close to $|V|$).


## Subgraph

A subgraph $G'$ is a pair composed of a **subset of vertices** and a **subset of edges**

A subgraph $G' = (V', E')$ is a subgraph of $G = (V,E)$ if:

* $V' \subseteq V$
* $E' \subseteq E \cap V' \times V'$
  * **Not all edges**, some of the ones which connect the chosen vertices.
  * Not all vertices must be connected between them.

![subgraph](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/subgraph.png?raw=TRUE)

## Induced Subgraph

$G \[ V' \]$ or $G' = (V', E')$ is an induced subgraph if (given a graph $G = (V,E)$ ):

* $V' \subseteq V$
* $E' = E \cap V' \times V'$
  * **All the edges** from the subset must connect all the vertices in $V'$


## Path

Let:

* $G = (V,E)$ be graph
* $u,v \in V$ be two vertices in V

A <mark>path $p$ is a sequence of vertices $p = < x_{0}, x_{1}, \ldots, x_{q} >$ </mark> where

1. $x_{0} = u$
2. $x_{q} = v$
3. $(x_{i-1}, x_{i}) \in E, \forall i = 1, \ldots, q$.
   1. There must be an edge connecting the pairs vertices, in the given order of the path.

Here we find an example:

![ex path](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/expath.png?raw=TRUE)

### Sub-Path

Given a path $p = < x_{0}, x_{1}, \ldots, x_{k} >$ a sub-path of p,

* $p' = < x_{i+1}, x_{i+2}, \ldots , x_{j} >$ where $0 \leq i \leq j \leq k$

### Intermediate Vertices

An intermediate vertex of a simple path $p=<v_{i}, v_{2}, \ldots , v_{i} >$ is any vertex of p other than $v_{1}$ or $v_{i}$,
that is, any vertex in the set $\{ v_{2}, v_{3}, \ldots , v_{i-1} \}$

Ex: A path $p = 1 \rightarrow 2 \rightarrow 4 \rightarrow 7 \rightarrow 9$, is a path $p \in D(1,9)$.

* $2 \rightarrow 4 \rightarrow 7$ is the subgraph containing the intermediate vertices

### Simple Path

A simple path is a path in a graph which **does not have repeating vertices**.

* p has max **n-1** edges</mark>

### Non-Simple Path

A simple path is a path in a graph which **has repeating vertices**.

* This means that given two vertices we can find multiple ways to go from the first to another.

### Cycle

A non-simple path $p = < x_{0}, x_{1}, \ldots, x_{q} >$ , where $x_{0} = x_{q}$

* A non-simple path, where the first vertex and the last vertex of the sequence are the same vertex.
* In an undirected-graph, there must be at least 3 vertices.

### Unique Path

A unique path is path in which **there is only one way to get to a vertex from another**.

### Reachability

Reachability refers to the ability **to get from one vertex to another within a graph**.

* We say v is reachable from u, if there exists a path from u to v.


## Connectivity

When we talk about connectivity and graphs we use the topological point of view.

### Connected Graph

A graph $G=(V,E)$ is said to be connected i.f.f. there exists at least one path from $u$ to $v$, for every $u,v \in E$.

* In order to do this we need at least a certain number of edges for every graph.

Let G be an undirected graph $G=(V,E)$, if $G$ is also connected then:

* $G \text{ is connected } \rightarrow |E| \geq |V|-1$ it is a necessary (but not sufficient) condition.
* The opposite is not necessarily true

![examplenotconnected](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/examplenotconnected.png?raw=TRUE)

#### Demonstration by Induction

Steps:

* Base Case:
  * if $n=1 \Rightarrow m=0 \Rightarrow m \geq n-1$
  * if $n=2 \Rightarrow m=1 \Rightarrow m \geq n-1$
* Inductive Hypothesis: this is true for $n \geq 3$
  * The property stands true for all the graphs with at most $n$ vertices
* Inductive Step: demonstration for $n+1$
  * $G=(V,E)$ is an undirected graph with $|V| = n+1$
  * By removing some $z \in V$ from $G$ we obtain $G'$ with $n$ vertices
  * Which means this graph is an induced subgraph $V' = V \setminus \lbrace z \rbrace \wedge G' = G[V']$
  * If we remove $z$ the $G'$ is an empty graph and disconnected.

To be finished

Let G be an undirected graph $G=(V,E)$

* if $deg(u \in V) \geq \frac{n-1}{2} \text{ , } \forall u \in V \rightarrow G \text{ is connected }$

### Disconnected Graph

A graph that is not connected is said to be disconnected.

![ex disc path](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/exdiscpath.png?raw=TRUE)

### Connected Components - CC

A C.C. is a subset of vertices $V' \subseteq V$, for which some properties stand true:

1. $G \[ V' \]$, the induced subgraph, is connected.
   1. If we take one component, the subgraph induced by the component is **connected**
2. V' is **not strictly contained** in a connected subset of V.
   1. Each component is **maximal**, is not contained in any larger subgraph, that also is connected.

Observations:

* The C.C. of a graph, are partitions of V.
* Every graph has at least
  * 1 C.C. if connected
  * 2 C.C. if disconnected

### Complementary Graph

The complement or inverse of a graph G is a graph H on the same vertices such that two distinct vertices of H are adjacent
if and only if they are not adjacent in G. That is, to generate the complement of a graph, one fills in all the missing
edges required to form a complete graph, and removes all the edges that were previously there.


## Density

For a graph $G = (V,E)$ with $n = |V|, m = |E|$, the **density** is a real number $\delta (G) \in \[ 0,1 \]$ given by the function

$$\delta (G) = \frac{|E|}{max(E)}$$

With $max(E)$ as the maximum number of edges possibly existing for that particular graph.

There are two main cases to distinguish in order to find max(E):

1. G is an **undirected graph**
   1. $\delta (G) = \frac{m}{binom(n,2)} = \frac{2m}{n(n-1)}$
2. G is a **directed graph**
   1. $\delta (G) = \frac{m}{n^{2}}$

### Empty Graph - $\delta (G) = 0$

An empty graph is a graph $G=(V,E)$, where $E = \emptyset$

* There can be vertices but **no edges**
* The density is 0

### Complete Graph - $\delta (G) = 1$

A complete graph is a graph $G=(V,E)$, where $E = V \times V$

* $E$ contains **all the possible edges** between the vertices in $V$.
  * $|E| = binom(n,2) = \frac{n(n-1)}{2}$
* It is trivially a connected graph. Although the opposite is not true.
* The density is $1$

Notation: a complete graph on **n vertices** is <mark>K(n)</mark>


## Clique

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

### Bipartite Graph

A graph $G=(V,E)$ is bipartite if

* $V = \{ V_{left} \cup V_{right} | V_{left} \cap V_{right} = \emptyset \}$
  * Dividing V in two subsets $V_{left}$ and $V_{right}$, which have no common vertex.
* $G\[ V_{left} \] = \emptyset, G\[ V_{right} \] = \emptyset$ are empty
  * The only edges present leave one vertex of a subset, and enters another vertex of the opposite vertex.
  * No edges between vertices of the same subset.


## Cyclicality

Cyclicality refers to the presence of a cycle in a graph.

### Cyclic Graph

A cyclic graph is a graph containing at least one graph cycle.
In other words, some number of vertices connected in a closed chain.

* The cycle graph with n vertices is called $C_{n}$.
* The number of vertices in $C_{n}$ equals the number of edges
* Every vertex has degree 2
  * That is, every vertex has exactly two edges incident with it.

When it comes to directed graphs, there must be at least three vertices.

### Acyclic Graph / Forest

A graph that is not cyclic is said to be acyclic.

Let G be an undirected graph $G=(V,E)$, if G is also acyclic then:

* $G \text{ is acyclic } \rightarrow |E| \leq |V|-1$, too many edges cannot be placed without creating cycles
* The opposite is not necessarily true

### Unicyclic Graph

A cyclic graph possessing exactly one (undirected, simple) cycle is called a unicyclic graph.

```