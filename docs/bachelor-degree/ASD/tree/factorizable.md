# Problem with trees

This is a general recursive approach to resolve problems on binary trees
by using a predefined type of algorithm

## Factorizable

It is based on Divide et Impera.

::: code-group

```cpp [c++]
factorizable(Node u)
    if (u == NULL): //Test if tree is empty
        // Direct Solution
    // DIVIDE ET IMPERA
    else:
        left_res = factorizable(u->left);
        right_res = factorizable(u->right);
        //evaluate some more more conditions
        
        // COMBINE
        return recombine(left_res, right_res);
```

```python [Python]
factorizable(Node u)
    if (u == NULL): #Test if tree is empty
        # Direct Solution
    # DIVIDE ET IMPERA
    else:
        left_res = factorizable(u.left);
        right_res = factorizable(u.right);
        #evaluate some more more conditions
        
        # COMBINE
        return recombine(left_res, right_res);
```

```php [PHP]
function factorizable(Node $u){
    if ($u == NULL){ #Test if tree is empty
        // Direct Solution
    } # DIVIDE ET IMPERA
    else{
        $left_res = factorizable($u->left);
        $right_res = factorizable($u->right);
        //evaluate some more more conditions
        
        // COMBINE
        return recombine($left_res, $right_res);
    }
}
```

:::

### Complexity demonstration

Since the algorithm covers all the nodes, we have

$$T(n) = \Omega(n)$$

We can then rewrite the recursive complexity formula as

$$
T(n)= \left\{\begin{matrix}
c & n=0 \\
T(k)+T(n-k-1)+d & n>0 \\
\end{matrix}\right.
$$

Where

* $T(k)$ is the time to cover the left subtree's nodes
* $T(n-k-1)$ is the time to cover the right subtree' s nodes
  * $-k-1$ to exclude the root and the left subtree

Since we do not have a clue whether the tree is balanced or not, we cannot use the master theorem to get the total
time complexity.

* Knowing that the tree is balanced means that $T(k) = T(n-k-1)$, which would change the formula in $2T(n-k-1)+d$ or $2T(k)+d$

We use the **substitution method**:

1. Hypothesis: The time is a generic linear combination $T(n) = an+b$
2. Proceed by induction to find $a$ and $b$
   1. Base Case: $T(0) = (a \cdot 0 )+ b = b \rightarrow b = c$ by definition of $T(n=0) = c$
   2. Inductive Hypothesis: We assume that $m < n$ so we can rewrite $T(m) = am+b$
   3. Inductive Step: Demonstrate it for $n$

$$T(n) = T(k)+T(n-k-1)+d$$

Since $k < n$ and $n-k-1 < n$

$$T(n) = ak+b + a(n-k-1)+b+d$$

$$T(n) = ak+b+an-ak-a+b+d$$

$$T(n) = an + 2b - a+d$$

Now, we want to demonstrate that $T(n) = an + 2b - a+d = an+b$, namely that it is linear.

$$an + 2b - a+d =an+b \stackrel{\text{true if}}\Longrightarrow a=b+d=c+d, \text{ since } b=c$$

**Final Time Complexity**: $T(n) = an+b = (c+d)n+c = \Theta(n)$

* Every node is iterated through then we have $T(n) = \Omega(n)$
* If base case and recombine have $T(n) = \mathcal{O}(1)$
