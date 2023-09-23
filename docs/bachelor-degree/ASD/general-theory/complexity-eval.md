# Complexity Evaluation

Let's see how to evaluate the time complexity of an algorithm give its computations.

$$T(n)$$

Remember that we could have multiple classes of complexity, so in the end the **worst one** is the dominating one and we should remember that the complexity function behaves like the dominant term.

### Amortized analysis

It is a method of analyzing the costs associated with a data structure that averages the worst operations out over time.

Often, a data structure has one particularly costly operation, but it doesn't get performed very often. That data structure shouldn't be labeled a costly structure just because that one operation, that is seldom performed, is costly.

So, amortized analysis is used to average out the costly operations in the worst case. The worst-case scenario for a data structure is the absolute worst ordering of operations from a cost perspective. Once that ordering is found, then the operations can be averaged.

There are three main types of amortized analysis: aggregate analysis, the accounting method, and the potential method.

Example: Vector - n insertions into a vector using

...To complete

Credits:

* [Amortized Analysis. Brilliant.org](https://brilliant.org/wiki/amortized-analysis/) Retrieved 19:24, February 24, 2022
* [Un’introduzione informale agli algoritmiAlgoritmi e Strutture Dati](https://documen.site/download/algoritmi-e-strutture-dati-e_pdf), by Camil Demetrescu, Irene Finocchi, Giuseppe F. Italiano

## Blocks

Sequence of multiple blocks: we analyze their complexities and then we sum them all.

```cpp
{
    block_1{
        // O(f(n))
    };
    ...
    block_n{
        // O(z(n))
    };
}
```

$$T(n) = \mathcal{O}(f(n) + ... + z(n))$$

## Branches

Evaluating branches

```cpp
{   
    // O(f(n))
    if( cond ){
        // O(g(n))
    }else{
        // O(h(n))
    }
}
```

$$T(n) = \operatorname{Max}(if, else) + \mathcal{O}(f(n))$$

With

* $\operatorname{Max}\{ if, else \}$ as the branch which takes the largest time complexity
* $f(n)$, the time needed to evaluate the condition

## Iterations

For iterations you need to focus on some aspects

* Is the cycle going to be executed exactly $n$ times? There can be times where the cycle can face a continuous reduction in terms of number of exectutions (i.e $n/2$ at each occurrence).
* Is there a function inside that changes the iteration term?

### For Cycle

A for cycle executed exactly $k$ times

```cpp
{
    //for i=1 to k
    for(int i = 1; i < k; i++){
        //O(f(n))
    }
}
```

$$T(n) = \mathcal{O}(k \cdot f(n))$$

### Nested For Cycle

A for cycle executed exactly $k \cdot m$ times

```cpp
{
    //for i=1 to k
    for(int i = 1; i < k; i++){
        //for j=1 to m
        for(int j = 1; j< m; j++){
            // O(f(n))
        }
    }
}
```

$$T(n) = \mathcal{O}(k \cdot m \cdot f(n))$$

If we had multiple nested for cycles we would need to compute:

$$T(n) = \mathcal{O}((\prod_{i=1}^{m}k_{i}) \cdot f(n))$$

Where $m$ is the count of cycles and $k$ is the largest value representing the stop condition

### Nested For Cycle - with Dependence

The complexity here is dictated by `i` and it can vary multiple times: it might be either smaller or larger than $m \cdot k$. The inequality is more probable than the equality, but we have no clue a-priori.

```cpp
{
    //for i=1 to k
    for(int i = 1; i < k; i++){
        //for i=1 to m(i)
        for(int j = 1; j< m(i); j++){
            // O(f(n))
        }
    }
}
```

$$T(n) =  (\sum_{i=1}^{k}m(i)) \cdot f(n) $$

### While

```cpp
{
    // O(f(n))
    while(cond){
        // O(g(n))
    }
}
```

$$T(n) =  \mathcal{O}(N(n) \cdot [f(n) + g(n)]) $$

with $N(n)$ as the maximum times the cycle is executed.
