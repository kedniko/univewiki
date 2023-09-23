# Complexity Notation

The notations we use to describe the asymptotic running time of an algorithm are defined in terms of functions
whose domains are the set of natural number $\mathbb{N}$, which means we are only analyzing cases where the input size $n \geq 1$
as we are dealing with space and time. Furthermore, since we deal with asymptotic notation we need to discard the constants.

## $\mathcal{O}(n)$ - Upper limit

Let $f(n) \geq 0, g(n) \geq 0$ be two functions

> If there exists a constant $c > 0$, such that for n sufficiently large, $f(n) \leq cg(n)$

$$\mathcal{O}(g(n)) = \{ f(n)|\exists c > 0, \exists n_{o} \in \mathcal{N} \ni' \forall n \geq n_{o} : f(n) \leq cg(n) \}$$

Basically we are saying that the function $f(n)$ can be even greater than $g(n)$, but only before reaching the point $n_{o}$.
After that, the function $f(n) \leq cg(n)$.

## $\Omega(n)$ - Lower limit

Let $f(n) \geq 0, g(n) \geq 0$ be two functions

$$\mathcal{O}(g(n)) =  \{ f(n)|\exists c > 0, \exists n_{o} \in \mathcal{N} \ni' \forall n \geq n_{o} : f(n) \geq cg(n) \}$$

## $\Theta(n)$

Let $f(n) \geq 0, g(n) \geq 0$ be two functions

$$\mathcal{O}(g(n)) = \{ f(n)|\exists c_{1} > 0, c_{2} > 0, \exists n_{o} \in \mathcal{N} \ni' \forall n \geq n_{o} : c_{1}g(n) \geq f(n) \geq c_{2}g(n) \}$$

$$f(n) = \Theta(g(n)) \leftrightarrow f(n) = \mathcal{O}(g(n)) \wedge \Omega(g(n))$$

## $o(n)$

$$o(g(n)) = \{ f(n)|\forall c > 0, \exists n_{o} \in \mathcal{N} \ni' \forall n \geq n_{o} : f(n) < cg(n) \}$$

## $\omega(n)$

$$\omega (g(n)) = \{ f(n)|\forall c > 0, \exists n_{o} \in \mathcal{N} \ni' \forall n \geq n_{o} : f(n) > cg(n)  \}$$

## Hierarchy of notations

* $o(g(n)) \subseteq \mathcal{O}(g(n))$
* $o(g(n)) \cap \Omega (g(n)) = \emptyset$
* $\omega (g(n)) \subseteq \Omega (g(n))$
* $\omega (g(n)) \cap \mathcal{O}(g(n)) = \emptyset$

## Using summations and limits to define asymptotic complexity

### Bounding converging summations

### Bounding diverging summations

### Comparing limits

### Finding the dominant complexity
