# Acyclic Connected Graphs - Trees

## Free Tree

A free tree is an undirected, connected and acyclic graph $G=(V,E)$

* They are not the same as rooted trees, the hierarchical data structure we are used to.
* In fact, they **have no root nor hierarchy**.

If $G$ is a tree -> $|E| = |V|-1$

* Any edge we remove or add, will contradict the definition of tree
* They are fragile structures

### Theorem: property of free trees

Let $G$ be an undirected graph $G=(V,E)$, the following statements are ALL equivalent
between them:

1. $G$ is a free tree
2. Any pair of vertices $(u,v) \in V$ are connected by a unique path
3. $G$ is connected but if any edge is removed, it becomes disconnected
4. $G$ is connected and $|E|=|V|-1$
5. $G$ is acyclic and $|E|=|V|-1$ imply that $G$ is a free tree
6. $G$ is acyclic but if any edge is added, it becomes cyclic

## Rooted Tree

A rooted tree is a pair $(G=(V,E), r)$ where:

* $G$ is a free tree
* $r \in V$ is a vertex of the tree, called "root"

## Forest

A forest is an acyclic graph. A forest is a graph composed of $\geq 1$ of C.C.s, and each C.C. is a tree.
