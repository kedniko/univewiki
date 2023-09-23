# How to visit a tree?

Visits allow us to access the information contained in the trees we are using.

::todo
ciao
::
> We assume the trees we are visiting are binary trees, but they can be generalized for any data structure.

| Visit      | Order                         |
|------------|-------------------------------|
| Pre-Order  | Root > L-Child > R-Child      |
| Symmetric  | L-Child > Root > R-Child      |
| Post-Order | L-Child > R-Child > Root      |
| BFS        | At each level, go from L to R |

## Generic Visit

This general type of visit helps understand how we can obtain different types of visits, by changing of data structure.

1. $S = \lbrace root \rbrace$
   1. Inserts the root inside a set $S$
2. While $S \neq \emptyset$ do:
   1. $S = S \setminus u$
      1. Extract a node $u$ from S
   2. Visit the node $u$
   3. $S = S \cup \text{children}(u)$
      1. Add the children of $u$ to $S$

```python
generic_visit(Node r)
    S = {r} # Inserts the root inside a set S
    while (S != EMPTY_SET):
        # Extract a node u from S
        # Visit the node u
        S = set_union(S, children(u));
```

### Theorem

The algorithm `generic_visit` applied to the root of a tree $T$ with $n$ nodes, takes

$$T(n) = \mathcal{O}(n) \wedge S(n) = \mathcal{O}(n)$$

#### Demonstration

Hypothesis: $T(insert) = T(delete) = \mathcal{O}(1)$

Demonstration:

1. A node will be inserted and extracted once from $S$.
   1. By construction of the tree, we cannot go back to a parent node, starting from its children and iterating backwards.
2. The maximum possible count of iterations are limited by the count of nodes, which is the upperbound.
3. This means that the count of nodes represents an upperbound for the total space needed too.

## Depth First Search - Pre Order

$$\text{ Root } \Longrightarrow \text{ Left Child } \Longrightarrow \text{ Right Child }$$

What happens here is that we start from the root and keep going deeper on the **left child side** until we manage to
explore the whole left subtree. Then, we pass to the right subtree.

## Iterative Version - Using a Stack

1. Create an empty stack S
2. Push a node in the stack
3. While the stack is not empty
   1. Pop the first node *u* from the stack
   2. Check if u is empty
   3. Push first right child
   4. Push left child (as last, so we can go in depth)

```python
DFS_visit_iter(Node r)
    Stack s = create_stack();
    push(s,r);
    while(not stack_empty(s)):
        Node u = pop(s);
        if(u!= NULL):
            # Visit u
            push(s, u.right);
            push(s, u.left);
```

**Final Time Complexity**: T(n) = <mark>O(n)</mark>

* Push, Pop can be implemented in costant time

## Recursive Version

1. Start from the root node
2. If tree is not empty
   1. Visit the root
   2. Visit the left-child
   3. Visit the right-child

```python
DFS_visit_rec(Node r)
    if(r != NULL): # If not empty
        #Visit r
        DFS_visit_rec(r.left);
        DFS_visit_rec(r.right);
```

### Theorem

If $r$ is the root of a subtree with $n$ nodes, the recursive call to `DFS_visit_rec(r)` takes $\Theta(n)$

$$T(n) = \Theta(n)$$

#### Demonstration

Let $T(n)$ be the execution time needed by the procedure when it is called for a root of subtree with $n$ nodes. Since, `DFS_visit_rec`
visits all the $n$ nodes of the subtree $T(n) = \Omega(n)$.

We can rewrite the formula with the occurrences as

$$
T(n) = \left\{\begin{matrix}
c & n=0 \\
T(k)+T(n-k-1)+d & n>0 \\
\end{matrix}\right.
$$

Where

* $T(k)$ is the time to cover the left subtree's nodes
* $T(n-k-1)$ is the time to cover the right subtree' s nodes
  * $-k-1$ to exclude the root and the left subtree

Since we do not have a clue whether the tree is balanced or not, we cannot use the master theorem to get the total
time complexity. Knowing that the tree is balanced means that $T(k) = T(n-k-1)$, which would change the formula in $2T(n-k-1)+d$ or $2T(k)+d$

We use the **substitution method**:

1. Hypothesis: The time is a generic linear combination $T(n) = an+b$
2. Proceed by induction to find $a$ and $b$
   1. Base Case: $T(n=0) = (a \cdot 0 )+ b = b \rightarrow b = c$ by definition of $T(n=0) = c$
   2. Inductive Hypothesis: We assume that $m < n$ so we can rewrite $T(m) = am+b$
   3. Inductive Step: Demonstrate it for $n$

$$T(n) = T(k)+T(n-k-1)+d$$

Since $k < n$ and $n-k-1 < n$

$$T(n) = ak+b + a(n-k-1)+b+d = ak+b+an-ak-a+b+d$$

$$T(n) = an + 2b - a+d$$

Now, we want to demonstrate that $an + 2b - a+d = an+b$, namely that it is linear.

$$an + 2b - a+d =an+b \stackrel{\text{true if}}\Longrightarrow a=b+d=c+d, \text{ since } b=c$$

**Final Time Complexity**: $T(n) = an+b = (c+d)n+c = \Theta(n)$

### Example: implementation C++

```cpp
class Node {
public:
    int val;
    vector<Node*> children;
    
    Node() {}
    
    Node(int _val) {
        val = _val;
    }
    
    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};

class Solution {
    void preorderUtil(Node* root, vector<int> & v) {
        if (!root) return;
        
        v.push_back(root->val);
        
        for (int i = 0; i< root->children.size(); i++) {
            preorderUtil(root->children[i], v);
        }
    }
    
public:
    vector<int> preorder(Node* root) {
        vector <int> v;
        preorderUtil(root, v);
        return v;
    }
};
```

## Symmetric Visit - In Order

$$\text{ Left Child } \Longrightarrow \text{ Root } \Longrightarrow \text{ Right Child }$$

Now things change, here we find the first recursive call on the left child. Subsequently,
we visit the root node, and then we have the recursive call on the right child.

We use a <mark>Stack</mark>

### Example: implementation c++

```cpp
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector <int> result;
        inorderTraversal_ric (root, result);
        return result;
    }
    
    void inorderTraversal_ric(TreeNode* root, vector<int> & v) {
        if(root == NULL){
            return;
        }else{
            inorderTraversal_ric(root->left, v);
            v.push_back(root->val);
            inorderTraversal_ric(root->right, v);
        }
    }
};
```

## Visit - Post-Order

$$\text{ Left Child } \Longrightarrow \text{ Right Child } \Longrightarrow \text{ Root }$$

Firstly we have the first two recursive calls, respectively, on the left child and the
right child. Finally, we visit the root.

### Example: implementation c++

```cpp
class Node {
public:
    int val;
    vector<Node*> children;
    
    Node() {}
    
    Node(int _val) {
        val = _val;
    }
    
    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};

class Solution {
public:
    vector<int> postorder(Node* root) {
        vector <int> v;
        preorderUtil(root, v);
        return v;
    }

    void preorderUtil(Node* root, vector<int> & v) {
        if (!root) return;
        
        for (int i = 0; i< root->children.size(); i++) {
            preorderUtil(root->children[i], v);
        }
        v.push_back(root->val);
    }
};
```

## Bread First Search (BFS)

The name comes from the fact that our tree will be "cut like a loaf of bread".

$$\text{ Leftmost Node at level i } \Longrightarrow \text{ Rightmost Node at level i }, \text{ } \forall i=0, \ldots, h$$

We use a Queue as auxiliary data structure since it follows a `First In First Out` principle. This means
that the first node inserted into the data structure, is the same whose children are taken to begin with.

* We need to read for left to right (FIFO)

BFS

1. Create a Queue
2. Visit Root
3. Enqueue Left Child;
4. Enqueue Right Child;
5. Visit on Dequeue;
6. Back to 2. with the next element of the queue which is popped out and deleted

```python
BFS_visit(Node r){
    Queue c = create_queue();
    enqueue(c,r);
    while(not queue_empty(c))
        Node u = dequeue(c);
        if(u != NULL)
            # Visit node u
            enqueue(c, u.left); # Which is the first processed
            enqueue(c, u.right);
```

**Final Time Complexity**: $T(n) = \Theta(n)$

* n being the count of the nodes
* `enqueue`, `dequeue` can be implemented in constant times

### Example: implementation c++
