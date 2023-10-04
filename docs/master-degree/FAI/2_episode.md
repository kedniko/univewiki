# Blind Search

### Graph-based search

The search can be:

- Uninformed (or blind): I know nothing more than the
neighbors of the current state (states reachable through a
single action)
- Informed (or heuristic): I have a means to assess progress
toward the goal

Objects:

- states
- actions
- goals

<UwImage src="img/image.png"/>

:::tip
I can ignore backtracking actions
:::

There are multiple ways to solve a problem using graphs. They are all valid.

## Types of search

### Breadth-First Search

Search is performed by extracting from the front and inserting on the back of the list (FIFO). Queue.
The algorithm proceed level by level, hence it is

- ✅ Complete
- ✅ Optimal (will find the solution at smallest depth)
<UwImage src="img/image-1.png"/>

Temporal Complexity:
Simplifying hypotheses:

- The search tree has constant branching factor b
- The first goal is at depth d

<UwImage src="img/image-2.png"/>

:::tip
Observation: the number of nodes at level $d$ is $b^d$
:::

### Depth-First Search

Search is performed by extracting from the front and inserting on the front of the list (LIFO). Stack.

- ❌ Not Complete: If the tree has infinite depth, the algorithm might get stuck
- ❌ Not Optimal: If the problem has more than one solution the algorithm is not guaranteed to find the one at minimum
depth

### Iterative Deepening

:::tip
Iterative Deepening has the same complecity of BFS but it is more efficient in terms of memory.
In complexity terms what counts is the last iteration (because it is the most expensive).
:::

Advantages over BFS: we don't need to store the whole tree in **memory**, we can just store the current level (**without increasing temporal complexity!**).

### Uniform Cost Search

::: details How can it be used?

Uniform Cost Search (UCS) is useful in various real-world scenarios where you need to find the shortest path between two points in a network or graph with varying costs. Here are some practical applications of UCS:

1. **Navigation Systems:** UCS can help GPS and navigation systems find the shortest route between two locations, taking into account factors like distance, traffic congestion, and tolls. It can provide users with optimal driving, walking, or public transportation directions.

2. **Network Routing:** UCS is used in computer networking to find the shortest path for data packets to travel between devices in a network. It considers factors such as latency, bandwidth, and reliability when determining the best path for data transmission.

3. **Robotics and Autonomous Vehicles:** In robotics and self-driving cars, UCS can be employed to plan the most efficient path for a robot or vehicle to reach a destination while avoiding obstacles and minimizing energy consumption.

4. **Resource Allocation:** UCS can assist in optimizing resource allocation in various domains. For example, in supply chain management, it can find the most cost-effective route for transporting goods between warehouses.

5. **Game Development:** In video games, UCS can be used to create intelligent agents that navigate game environments, avoiding obstacles and making decisions based on the cost of various actions.

6. **Natural Language Processing:** UCS can be applied to machine translation and language processing tasks, helping algorithms find the most likely translation or interpretation of a sentence based on a cost or probability model.

7. **AI Planning:** In AI planning problems, UCS can be used to find the optimal sequence of actions to achieve a goal while considering the costs or resource constraints associated with each action.

8. **Emergency Response:** UCS can be utilized in emergency management systems to find the quickest route for first responders to reach the scene of an emergency, taking into account traffic conditions and other factors.

In essence, UCS is a versatile algorithm that can be applied to a wide range of problems that involve finding the most cost-efficient or shortest path between two points in a complex network or graph. Its ability to consider varying costs makes it a valuable tool in optimization and decision-making contexts.

:::
