::: tip TODO
This is not compiling
:::

```md
# Graph Properties and Definitions pt2

Here we regroup some definitions which are fundamental to get started on graph theory.

## Let's consider Vertices

### Neighborhood

We can also consider it as the count of direct neighbors of the vertex u,
as the count of vertex that can be directly reached with one edge from u. Formally, given $u \in V$

$$\mathcal{N}(u)= \{ v \in V | (u,v) \in E \}$$

### Degree of vertex - Undirected graphs

Given an **undirected graph** $G=(V,E)$, if we consider one of its vertices $u \in V$,
the number of edges incident to u is the degree of that vertex.

* $deg(u) = | \mathcal{N}(u) |$, with $deg(u) \in \[ 0,n-1 \]$
  * If the vertex has a degree of 0, then it is an isolated vertex.
  * If the vertex has a degree of 1, then it is a terminal vertex
  * Since there are no self-loops the maximum $deg(u)$ is $n-1$.

![undirdeg](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/undirdeg.png?raw=TRUE)

For undirected graphs: $0 \leq deg(u) \leq n-1$

#### Theorem

It is not possible to construct an undirected graph where all the vertices' degrees are
distinct

Proof:

* $\exists G=(V,E)$ where all the $deg(u)$ are distinct, $\forall i,j = 1,\ldots, n : i \neq j \rightarrow deg(i) \neq deg(j)$
* There must exist two vertices $u,v$
  * $\exists u \in V \ni ' deg(u) = 0$
  * $\exists u \in V \ni ' deg(v) = n-1$
* This is absurd!

### Out-Degree/In-Degree of vertex - Directed graphs

Given a directed graph $G=(V,E)$, the degree of a vertex u **depends on the entering/leaving edges** related to u.

* $deg_{out}$ Out-Degree of a Vertex, is the count of edges leaving that vertex.
* $deg_{in}$ In-Degree of a Vertex, is the count of edges entering that vertex.

We can derive that:

$$\sum_{u \in V}deg_{in}(u) = \sum_{u \in V}deg_{out}(u) = m = |E|$$

### Degree Sequence

Given a weighted graph $G=(V,E)$, a degree sequence $deg-seq$ is a non-decreasing sorted sequence of the vertices
in $V$, where the sorting criteria is their degree.

## Handshake Lemma

Let G be an undirected graph $G=(V,E)$, with $n=|V|$ and $m=|E|$

$$\sum_{u \in V}deg(u) = 2m$$

We always obtain an **even** number for a sum of every degree. Also, it is two times the number of edges

$$|E| = m = \frac{1}{2} \cdot \sum_{u \in V}deg(u)$$

### Demonstration

Take any undirected graph $G=(V,E)$ with $n=|V|$ and $m =|E|$

We know graphs can always be represented by an [Adjacency Matrix](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Theory/8%20-%20Graphs/3%20-%20ADJACENCY%20MATRIX.md)

Let's say for $G$, $V= \{ 1,2,\ldots , n \}$: to **calculate degree of one vertex** $i$, namely $deg(i)$, we just need to sum the i-th row's elements (which are either $1$ or $0$).

$$deg(i) = \sum_{j=1}^{n}a_{i,j} = \sum_{i=1}^{n}a_{j,i}$$

Summing all the different degrees of the nodes is equal to summing all the elements of the adjacency matrix. By defition, the edges are a binary relation between only two vertices, let's say $u,v$. Thus, when summing the degrees of all vertices, we are going to count the same edge twice. In fact, in $deg(u), deg(v)$ we are going to consider the edges $(u,v)$ and $(v,u)$ as two different edges.

$$\sum_{i=1}^{n}deg(i) = \sum_{i=1}^{n}(\sum_{j=1}^{n}a_{i,j}) = \sum_{i=1}^{n} \sum_{j=1}^{n}a_{i,j} = 2m$$

Here are some trivial consequences of this Lemma:

### Property 1

In an undirected graph G, the **count of vertices of odd degree is always even**.

Demonstration: given an undirected graph $G=(V,E)$, V can be divided in P,D such that $V = P \cup D$ and

* $P = \{u \in V | deg(u) \text{ is even or } 2k = deg(u) \}$
* $D = \{u \in V | deg(u) \text{ is odd or } 2k+1 = deg(u) \}$

![dem prop 1](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/demprop1.png?raw=TRUE)

Then

$$|D| = 2m - 2 \sum_{u \in P} h(u) - 2 \sum_{u \in D} h(u)) = 2 (m - \sum_{u \in P} h(u) - \sum_{u \in D} h(u))$$

If we consider $k = (m - \sum_{u \in P} h(u) - \sum_{u \in D} h(u))$

$$|D| = 2k \Longrightarrow |D| \text{ is an integer and is even, by definition of even number }$$

### Property 2: K-Regular Graph

Let G be an undirected graph $G=(V,E)$ and integer $k \geq 0, k \in \mathbb{N}$, we say that $G$ is <mark>*k-regular*
if  all vertices have the same degree k

$$G \text{ is k-regular } = \{ \forall u \in V | deg(u) = k \}$$

Here are some examples:

* 2-regular graphs (square graphs) have $deg(u)=2$
  * $2m = \sum_{u \in V}deg(u) = 2n$
  * **m = n!** in a 2-regular graph
* 3-regular graphs (cubical graphs) have deg(u)=3
  * $2m = \sum_{u \in V}deg(u) = 3n$
  * $2m = 3n = 2n + n$
  * $n = 2(m-n)$, so **n is even in a 3-regular graph**
* 4-regular graphs have $deg(u)=4$
  * $2m = \sum_{u \in V}deg(u) = 4n$
  * $m = 2n$, **m is even and it is always 2n in 4-regular graph**

### Property 3

Let $G$ be an undirected graph $G=(V,E)$ without isolated vertices $V = \{u \in V | \forall u \in V, deg(u) \neq 0 \}$.

* We suppose $|E| = |V|-1 \rightarrow m=n-1$
* Let $V_{1} = \{ u \in V| deg(u)=1 \}$ is the subset of $V$ where all the vertices have degree equal to 1. It is called the set of terminal subset
  * A vertex $u$ such that $deg(u)=1$, is a terminal vertex

We can demonstrate that there exist at least two terminal, namely $|V_{1}|\geq 2$

By Handshake lemma:

$$m = n -1 \rightarrow 2n-2 = 2m = \sum_{u \in V}deg(u)$$

By commutativity:

$$\sum_{u \in V}deg(u) = \sum_{u \in V_{1}}deg(u) + \sum_{u \in V \setminus V_{1}}deg(u) = |V_{1}| + \sum_{u \in V \setminus V_{1}}deg(u)$$

Where

* $\sum_{u \in V_{1}}deg(u) = |V_{1}|$
* $deg(u) \geq 2$ for $u \in V \setminus V_{1}$
  
Since the vertices in the set $V \setminus V_{1}$ have at least degree >= 2, the summation is greater or equal than a summation where we assume all the nodes have $deg(i)=2$, which is $\sum_{u \in V \setminus V_{1}}2 = 2|V \setminus V_{1}|$

$$|V_{1}| + \sum_{u \in V \setminus V_{1}}deg(u) \geq |V_{1}| + 2|V \setminus V_{1}|$$

Considering the left side we find:

* $|V_{1}| + \sum_{u \in V \setminus V_{1}}deg(u) = 2n-2$

Considering the right side and that $|V|=n$, we obtain :

* $|V_{1}| + 2|V \setminus V_{1}| = |V_{1}| + 2|V| - 2|V_{1}| = 2|V| - |V_{1}| = 2n - |V_{1}|$

We can rewrite it as

$$2n - 2 \geq 2n - |V_{1}| \rightarrow -2 \geq -|V_{1} \rightarrow |V_{1}| \geq 2$$

```