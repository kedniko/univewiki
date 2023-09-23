# Shortest Path Properties

## Sub-paths property

<mark>Sub-paths of shortest-paths, are also shortest-paths</mark>

Example: Let's imagine a shortest-path between u, v. If we take
two more vertices x,y which are in between them and are included in the
path, the path going from x to y is also a shortest-path between them.

![ex subp](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/exsubp.png?raw=TRUE)

#### Demonstration

Let

* u,v∈V be two vertices
* p = <x0, x1, ..., xq> is a **shortest-path**
  * x0 = u, xq = v with (x(i-1), xi)∈E ∀i = 1...q

Let's take two vertices x(i), x(j) with `0<=i<=j<=q`

![ex subpdem](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/Resources/exsubpdem.png?raw=TRUE)

We suppose, by absurd, that the path between x(i) and x(j) is not a shortest-path

* So there exist another path which total weight is lower.
* This means that between u and v there is also a shorter path, strictly
smaller than the original shortest-path
* There can be many shortest-path with the same weight

## Decomposition of distance δ

Let's take s∈V and v∈V, and suppose that p is a **shortest-path** p(s,v).

* u∈V is the second-last vertex in the path p(s,v).
  * In a way that there is a direct edge between **(u,v)** and (u,v)∈p(s,v)

Then the distance `δ(s,v) =  δ(s,u) + w(u,v)`

#### Demonstration

Let's call

* p = δ(s,v)
* p' = δ(s,u)

As we know from the **Sub-paths property**, the sub-path p' is a shortest-path

Then: δ(s,v) = w(p) = w(p')+ w((u,v)) = δ(s,u) + w((u,v))

* p(s,u) is a shortest-path between s and u.
* w(p') is the distance δ(s,u)

## Triangle Inequality (Lemma 24.10 )

For any edge (u,v)∈E in a graph, we have `δ(s,v)<= δ(s,u)+w(u,v)`

* If (u,v) is an edge in a S.P. from s to v, then `δ(s,v) = δ(s,u)+w(u,v)`

#### Demonstration

* Case 1: A path (s,u) does NOT exist, **δ(s,u) = +inf()**
  1. Only because (s,u) does not exist, this does not imply that (s,v) should not exist
  2. δ(s,v) <= +inf()
  3. δ(s,v) <= δ(s,u) + w(u,v)
* Case 2: A path (s,u) exists, but along the way there is a negative cycle, **δ(s,u) = -inf()**
  1. δ(s,u) = -inf(), so δ(s,v) = -inf() too, since there is a negative cycle on the way.
  2. δ(s,v) = -inf()
  3. δ(s,v) = δ(s,u) + w(u,v)
* Case 3: A **shortest-path (s,u) exists**, δ(s,u) is a real number.
  1. δ(s,u)∈*R* is a shortest-path, so δ(s,u)<= length of any path (s,u)
     1. However, only because (s,u) is a shortest-path, this does not imply (s,v) is too
  2. δ(s,v) <= w(p) + w(u,v)
  3. δ(s,v) <=  δ(s,u) + w(u,v)

## Introduction of Data Structure use

Dijkstra and Bellman-Ford algorithms use the fields d[u], π[u] ∀u∈V for two procedures.

1. Initialization for all vertices
2. Update: Relax procedure.
   1. Relax, it slowly decreases the value of the field d, until it reaches a limit (the distance)

## Init Single Source (INIT_SS)

Initialization at the beginning:

* π[u] = NULL
* d[u] = +inf()
  * d[source] = 0;

```python
INIT_SS(Graph G, Node s)
    for(u in V[G]):
        d[u] = +inf();
        π[u] = NULL;
    d[s] = 0;
```

## Relax (RELAX)

It is an operation on the edges: ∀(u,v)∈E. If an edge does not exist, I cannot call the
procedure on that edge.

* If the estimate on the vertex v **is worse** than the estimate of vertex u and the **direct**
edge's weight together, we update the .
  * Remember the estimates are the weight of the path from the source vertex to that particular vertex.
* Then, we can improve this estimate and update the fields to find a better path.

```python
RELAX(Vertex u, Vertex v, Weight w(u,v))
    if(d[v] > d[u]+w(u,v)): # Worse Estimate Case
        d[v] = d[u] + w(u,v);
        π[v] = u;
```

### Properties of Relax

After RELAX(u,v, w(u,v)), we always find **d[v]<=d[u]+w(u,v)**

* If we enter the *then branch*, obviously d[v]=d[u]+w(u,v)
* Else, obviously d[v]<=d[u]+w(u,v)

### Property of inferior limit/ Upper-bound property (Lemma 24.11)

If we initialize the structures with a INIT_SS operation, for any RELAX sequence,

1. we have **δ(s,u)<= d[u], ∀u∈V**
   1. The *real* distance between s and u is always inferior or equal to the estimate d[u]
   2. So the real distance represents an inferior limit for d[u].
2. Moreover, if after a **RELAX δ(s,u) = d[u], no other RELAX can change that value**.

#### Demonstration of Upper-bound property (Lemma 24.11)

1. This property is always true after INIT_SS()
   1. Case: `u!=s`, d[u] = +inf() and δ(s,u)<= d[u]
   2. Case: `u==s`, d[s] = 0
      1. If the source node is to be found in a negative cycle, δ(s,s) = -inf() <= 0
      2. If the source node is not to be found in a negative cycle, δ(s,s) = 0 = d[s]
      3. δ(s,u)<= d[u]
2. Let's imagine, this property is violated by some RELAX(), ∃v∈V such that after a RELAX d[v]<δ(s,v).
Moreover, let's add the fact that this is the **first time** the property is violated by a RELAX() (the RELAX before did not violate it).
We know that RELAX() either does nothing or updates **only the destination vertex's fields**.
   After that RELAX() we have:
      1. d[u]+w(u,v) = d[v]
      2. d[u]+w(u,v) < δ(s,v), by hypothesis
      3. d[u]+w(u,v) <= δ(s,u) + w(u,v), for the triangular inequality
      4. d[u] < δ(s,u), which is absurd.
         1. The RELAX() did not update d[u], only d[v]!
         2. This must have been true before the RELAX(), not possible by point 1 of the demonstration.
3. If after a RELAX δ(s,u) = d[u], no other RELAX can change that value.
   1. It surely cannot lower the value of d[u] because it has reached the inferior limit and by the [subpath property](https://github.com/PayThePizzo/DataStrutucures-Algorithms/blob/main/8%20-%20Graphs/7.1%20-%20SP%20PROPERTIES.md#sub-paths-property) there is no shorter path.
   2. It cannot raise its value either because RELAX() can only lower it, by construction.

### No-Path Property (Corollary 24.12)

If ∄ a path between s and u, which we know equals to stating δ(s,u) = +inf(), then
after the INIT_SS we have d[u] = δ(s,u) = +inf()

#### Demonstration of No-Path Property (Corollary 24.12)

As the property is immediately true after INIT_SS(), we cannot change that particular value
after that, so it will stay true.

### Convergence Property (Lemma 24.14)

* If **s↝u→v** is a shortest path in G for some u v∈V
* If d[u] = δ(s,u), reached the inferior limit

At any time prior to relaxing edge (u,v), d[v] = δ(s,v) at all times afterward.

#### Demonstration of Convergence Property (Lemma 24.14)

After the first RELAX(u, v, w(u,v)) we have d[v] = δ(s,v)

* δ(s,v) <= d[v], true by the Inferior-Limit property
* δ(s,v) <= d[u]+w(u,v), true by construction of RELAX() and triangular property
* δ(s,v) = δ(s,u) + w(u,v), true by and subgraph property
  * So d[u] = δ(s,u), true by hypothesis

### Predecessor-Subgraph Property (Lemma 24.17)

If we have that, at the end of an algorithm using the RELAX all the estimates d are correct,
**d[u] = δ(s,u) ∀u∈V**, the predecessor subgraph **Gπ is a shortest-paths tree rooted at s**.
