# Adversarial Search

## Minimax Algortihm

## α-β Pruning

The problem with minimax algorithm search is that the number of
game states it has to examine is exponential in the number of
moves:
α-β proposes to compute the correct minimax algorithm decision
without looking at every node in the game tree.

```python
class AlphaBeta:
  def __init__(self) :
    # set initial alpha = - Infinity and
    beta = Infinity
    self.alpha = -Infinity
    self.beta = Infinity

def alpha_beta ( state ) :
  value , action = max_value ( state , AlphaBeta () )
  return action
```

```python
def max_value ( state , alpha_beta ) :
  if terminal ( state ) :
    return utility ( state ) , None
  value = - Infinity
  action = None
  for a , s in successors ( state ) :
    v , a2 = min_value (s , alpha_beta )
    if v > value :
      value = v
      action = a
    if value >= alpha_beta.beta :
      return value , action
    alpha_beta.alpha =max ( AlphaBeta.alpha , value )
  return value , action
```

```python
def min_value ( state , alpha_beta ) :
  if terminal ( state ) :
    return utility ( state ) , None
  value = Infinity
  action = None
  for a , s in successors ( state ) :
    v , a2 = max_value (s , alpha_beta )
    if v < value :
      value = v
      action = a
    if value <= alpha_beta.alpha :
      return value , action
    alpha_beta.beta = min( AlphaBeta.beta , value )
  return value , action
```

## Expect-Minimax Algorithm

Expect-Minimax gives perfect play for non-deterministic games.
Like Minimax, except add chance nodes:

- For max node return highest expect_minimax of successors
- For min node return lowest expect_minimax of successors
- For chance node return average of expect_minimax of successors
